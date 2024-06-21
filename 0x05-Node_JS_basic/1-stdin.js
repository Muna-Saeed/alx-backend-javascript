// 1-stdin.js

console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const name = process.stdin.read();
    if (name !== null) {
        process.stdout.write(`Your name is: ${name.trim()}\n`);
        process.stdin.end();
    }
});

process.stdin.on('end', () => {
    console.log('This important software is now closing');
});
