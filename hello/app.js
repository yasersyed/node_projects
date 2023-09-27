var msg = 'Hello World';
console.log(msg);

// var timeoutCb = setTimeout(() => {
//     console.log("Hello There");
// }, 5000);

const axios = require('axios');

axios
.get('http://127.0.0.1:3000/todos')
.then(res => {
    console.log( `status: ${res.status}` );
    console.log(res.data);
})
.catch(error => {
    console.error(error);
});

let id = 1;
let name = 'yaser';
axios.post('http://127.0.0.1:3000/postTodos', {
    id: id,
    name: name
 }, {
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
    }
 })
 .then(res => {
     console.log(res);
 })
 .catch(error => {
     //console.error(error);
 });

// const https = require('http');
// const options = {
//     hostName: 'localhost',
//     port: 3000,
//     path: '/todos',
//     method: 'GET',
// };

// const req = https.request(options, res => {
//     console.log(`status: ${res.statusCode}`);
//     res.on('data', d => {
//         process.stdout.write(d);
//         console.log(d);
//     });
// });

// req.on('error', error => {
//     console.error(error);
// });