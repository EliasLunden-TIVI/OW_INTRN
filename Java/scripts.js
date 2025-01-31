document.getElementById("startgame").addEventListener("click", function() {
    document.getElementById("Main").style.display = "none"; // Hides title screen
    document.getElementById("Visual").classList.remove("hidden"); // Shows Visual content
    document.getElementById("Choices").classList.remove("hidden"); // Shows Choices content
    loadDoaöpgie(0); //Starting line
});

//Dialogue://

const dialogueData = [
    {
        background: "Test.webp",
        character: "Tracer",
        text: "Cheers love, the cavalry's here!",
        choices: null // Press continue to continue
    },
    {
        background: "Test.webp",
        character: "Tracer",
        text: "Hiya! Whatcha looking at?",
        choices: [
            { text: "Oh hi Tracer!", nextIndex: 2 }, // Positive
            { text: "Wha- uhh personal stuff.", nextIndex: 3 }, // Neutral
            { text: "Dead-panned silence.", nextIndex: 4 } // Negative
        ]
    },
    {
        background: "Test.webp",
        character: "Tracer",
        text: "Aww, thank you! *Tracer goes in for a hug*",
        choices: null // Press continue to continue
    },
    {
        background: "Test.webp",
        character: "Tracer",
        text: "Oh, sorry for intruding! I’ll leave you to it.",
        choices: null // Press continue to continue
    },
    {
        background: "Test.webp",
        character: "Tracer",
        text: "*Tracer narrows her eyes and walks away.*",
        choices: null // Press continue to continue
    }
];

let currentDialogueIndex = 0;

// DOM elements
const visualContent = document.getElementById("Visual");
const choicesContainer = document.getElementById("Choices");
const dialogueText = document.getElementById("DialogueText");
const continueButton = document.getElementById("continueButton");

// Load a dialogue entry
function loadDialogue(index) {
    const entry = dialogueData[index];
    if (!entry) return; // Stop if no dialogue exists

    // Update background and text
    visualContent.style.backgroundImage = `url(${entry.background})`;
    dialogueText.innerText = entry.text;

    // Update choices
    choicesContainer.innerHTML = ""; // Clear previous choices
    if (entry.choices) {
        choicesContainer.style.display = "flex";
        entry.choices.forEach((choice) => {
            const choiceButton = document.createElement("button");
            choiceButton.innerText = choice.text;
            choiceButton.onclick = () => {
                loadDialogue(choice.nextIndex);
            };
            choicesContainer.appendChild(choiceButton);
        });
        continueButton.style.display = "none"; // Hide continue button when choices are present
    } else {
        choicesContainer.style.display = "none"; // Hide choices if not applicable
        continueButton.style.display = "block"; // Show continue button for normal flow
    }

    currentDialogueIndex = index;
}

// Continue dialogue
continueButton.addEventListener("click", () => {
    loadDialogue(currentDialogueIndex + 1);
});
>>>>>>>>> Temporary merge branch 2
