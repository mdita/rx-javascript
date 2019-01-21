let button = document.getElementById('myButton');
// button.addEventListener('click', (event) => console.log(event));

// Observable created with `fromEvent`

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

Rx.Observable.fromEvent(button,'click')
    .throttleTime(2000) // 2 seconds delay here
    .map((event) => event.screenX) // map only the value we want
    .subscribe(observer);

