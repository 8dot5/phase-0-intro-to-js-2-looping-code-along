// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];
const surprise = "surprise";

function writeCards(names, surprise) {
    let messageArray = [];

    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`;

        messageArray.push(message);
    }

    return messageArray;
}

function countDown(count) {
    while (count >= 0) {
        console.log(count--);
    }
}

countDown(10);





