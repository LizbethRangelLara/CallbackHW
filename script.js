function Name(name, myFunction) {
    console.log('Hi ' + name + '!');
    myFunction(name);
}

function Welcome(name) {
    console.log('Welcome to the Disney website!');
}

setTimeout(Name, 3000, 'Bob', Welcome);