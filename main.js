// this will be nicer once I figure out how to prompt the user for input
const userName = "Bond"

// totally assuming they can edit this .js file to ask their question here
const userQuestion = "Are dogs great?"

// random numbers are great, let's generate 8 of them
const randomNumber = Math.floor(Math.random() * 8)

let magicEightBall = ""

userName ? console.log(`Hello ${userName}!`) : console.log("Hello, stranger.");
userName ? console.log(`${userName} asks: ${userQuestion}`) : console.log(`A presence inquires...${userQuestion}`);


// I have a feeling there's a more elegant way to do this once I figure out how arrays work, but until then...
if (randomNumber === 0) {
    magicEightBall = 'It is certain'
} else if (randomNumber === 1) {
    magicEightBall = 'It is decidedly so'
} else if (randomNumber === 2) {
    magicEightBall ='Reply hazy try again'
} else if (randomNumber === 3) {
    magicEightBall = 'Cannot predict now'
} else if (randomNumber === 4) {
    magicEightBall = 'Do not count on it'
}else if (randomNumber === 5) {
    magicEightBall = 'My sources say no'
} else if (randomNumber === 6) {
    magicEightBall ='Outlook not so good'
}else {
    magicEightBall = 'Signs point to yes'
}

// Let's see it all come together
userName ? console.log(`The Magic Eight Ball replies: ${magicEightBall}, ${userName}.`) : console.log(`The Magic Eight Ball replies: ${magicEightBall}.`);
