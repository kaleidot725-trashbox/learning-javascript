function getGreeting() {
    return "Hello world!";
}

const arr = [1, 2, 3];
arr[1] = getGreeting;

const message = arr[1]();
console.log(message);