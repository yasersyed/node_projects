const myURL = new URL({toString: () => 'http://localhost#bar'});
console.log(myURL);
console.log(myURL.hash);
console.log(myURL.href);