let button = document.getElementById('myButton');
// button.addEventListener('click', (event) => console.log(event));

// Observable created with `fromEvent`
// Observable created to simulate `fromEvent`

let observer = { // our own observer object
    next: function(value) {
        console.log(value);
    },
    error: function(error) {
        console.log(error);
    },
    complete: function() {
        console.log('completed.');
    }
};

Rx.Observable.create(subscriber => {
    button.onclick = function(event) {
        subscriber.next(event);
    }
})
    .throttleTime(2000) // 2 seconds delay here
    .map(event => event.screenX)
    //.filter(v => true)
    .subscribe(observer);

