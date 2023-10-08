function Counter()
{
    let count = 0;
    this.increment = function() {
        count++;
    };
    this.decrement = function() {
        count--;
    };
    this.getCount = function() {
        return count;
    };
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());