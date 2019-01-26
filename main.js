let button = document.getElementById('myButton');
// button.addEventListener('click', (event) => console.log(event));

// Observable created with `fromEvent`
/*
=============================
onClick Observale with `fromEvent` - EXAMPLE 1
=============================

Rx.Observable.fromEvent(button,'click')
.map(event => event.screenX)
.subscribe(
    v => { console.log(v) },
    e => { console.log(e) },
    () => { console.log('complete') }
); 

*/

/*  
=============================
onClick Observale for button - simulate `fromEvent` - EXAMPLE 1
=============================

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

*/

/*
=============================
    Subject
=============================
*/

let subject = new Rx.Subject();

subject
    .map((event) => event.event) // we can also use map() and etc ... with SUBJECT
    .subscribe((event) => console.log('subsciber 1 ' + event));


subject.subscribe((event) => console.log('subscribe 2 ' + event));


// Both subscirbers are receiving the data
subject.next({ event: 'test_event'});

let observable = Rx.Observable.create(subscriber => {
    subscriber.next(Math.random());
});

observable.subscribe(subject);