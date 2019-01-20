let button = document.getElementById('myButton');
// button.addEventListener('click', (event) => console.log(event));

Rx.Observable.fromEvent(button,'click')
    .throttleTime(2000) // 2 seconds delay here
    .map((event) => event.screenX) // map only the value we want
    .subscribe(
        theValueWeWant => { console.log(theValueWeWant) },
        error => { console.log(error) }, 
        () => { console.log('complete') }
    );