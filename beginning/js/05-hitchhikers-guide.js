let name = prompt(`Greetings, what is your name?`)
let play = prompt(`"Space is big. You just won't believe how vastly,
hugely, mind-bogglingly big it is.\n
${name}! Would you like to play the "Hitchhiker's Guide to the Galaxy" Game? (yes/no)`)
if (play != "yes") {
    document.write(`Thank you ${name}.
    If you ever want to find out the meaning of "Life, the universe, and everything...please do not hesitate to play again sometime.`)
} else {
    alert(`You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.`)
let direction = prompt(`In which direction do you choose to start your adventure?\n(Please enter forward, left, or right).`)
    switch (direction) {
        case "forward":
            alert(`You walk 100 yards and safely make your way out of the cave.`)
            break;
        case "left":
            alert(`Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!`)
            break;
        case "right":
            alert(`You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.`)
            break;
        default:
            alert(`You are frozen with indecision. The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.`)
    }
    alert(`${name} you have reached the end of your journey.\n THE END`)
    let rate = prompt(`Would you be willing to rate the game? (yes/no)`)
        if (rate != "yes") {
            alert(`Thank you for playing, please adventure with us again sometime.`)
        } else {
            let rating = parseInt(prompt(`Please provide a numerical rating between 1 and 10`))
                if (rating >= 6) {
                    alert(`Thank you for providing feedback, feel free to play again anytime.`)
                } if (rating < 6) {
                    alert(`Thank you for providing feedback, team Palmer is working hard to improve the game. Please come back later to experience the updates.`)
                } else {
                    alert(`Thank you for playing, please adventure with us again sometime.`)
                }

        }
    }