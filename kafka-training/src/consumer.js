const kafka = require('node-rdkafka');

const consumer = new kafka.KafkaConsumer({
    'group.id': '1', //consumer group id
    'metadata.broker.list': 'localhost:29092', //kafka broker address
    'auto.offset.reset' : 'earliest' //start from beginning of topic
});

consumer.connect();

async function getReady(){
    consumer.on('ready', () => {
        console.log('consumer is ready');
        consumer.subscribe(['string-messages']);
    });
} 

getReady();

consumer.on('data', (msg) => {
    console.log("Received message: " + msg.value.toString());
});

consumer.on('event.error', (err) => {
    console.log(err);
});