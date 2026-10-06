// Sandboxels Mod: Tennis
// Save this file as tennis.js


// 1. Define the Tennis Racket element
elements.tennis = {
    color: "#b07d4e",
    behavior: behaviors.POWDER,
    category: "weapons",
    desc: "Gives humans a tennis racket to hit tennis balls!",
    state: "solid"
};


// 2. Define the Tennis Ball element
elements.tennis_ball = {
    color: "#ccff00",
    behavior: [
        "XX|M1|XX",
        "M2|EX:2>tennis_ball|M2",
        "XX|M1|XX"
    ],
    category: "objects",
    desc: "A bouncy tennis ball that reacts to rackets.",
    state: "solid",
    density: 120,
    bounce: 0.8
};


// 3. Define the Human Playing Tennis state
elements.human_tennis = {
    color: "#f5cfa6",
    behavior: [
        "XX|XX|XX",
        "M2|CH:tennis_ball%10|M2",
        "M1|M1|M1"
    ],
    category: "vitals",
    hidden: true,
    state: "solid",
    density: 1000
};


// 4. Set up reactions and interactions
function modInit() {
    // When a human touches a tennis racket, they become a tennis-playing human
    elements.human.reactions = elements.human.reactions || {};
    elements.human.reactions.tennis = { "elem1": "human_tennis", "elem2": null };


    // When a tennis ball hits a human holding a racket, it gets hit away (bounces violently)
    elements.tennis_ball.reactions = elements.tennis_ball.reactions || {};
    elements.tennis_ball.reactions.human_tennis = { 
        "elem1": "tennis_ball", 
        "force": 4,
        "chance": 100 
    };
}


// Run the initialization
modInit();