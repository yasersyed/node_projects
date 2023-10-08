const kafka = require('node-rdkafka');

const producer = new kafka.Producer({
    'metadata.broker.list': 'localhost:29092', // Kafka broker(s) address
    'dr_cb': true // Enable delivery reports
})

producer.connect();

producer.on('ready', () => {
    console.log('Producer is ready');
    
    // Produce a message to a Kafka topic
    producer.produce(
      'string-messages', // Kafka topic
      null, // Partition (null for auto-partitioning)
      Buffer.from('Hello, Kafka!'), // Message data
      null, // Key
      Date.now() // Timestamp
    );
  });

producer.on('delivery-report', (err, report) => {
    if (err) {
        console.error('Message delivery failed:', err);
    } else {
        console.log('Message delivered to partition', report.partition);
    }
});

producer.on('event.error', (err) => {
    console.error('Producer error:', err);
  });