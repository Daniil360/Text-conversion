function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = "ru-RU";
    message.text = text;
    window.speechSynthesis.speak(message);
}





function myFunc(theObject) {
    theObject.make = "Toyota";
}

const mycar = { make: "Honda", model: "Accord", year: 1998 };
let x, y;

x = mycar.make; 

myFunc(mycar);
y = mycar.make