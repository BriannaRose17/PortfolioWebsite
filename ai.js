function queryAI() {
    console.log("Button clicked! Starting queryAI function..."); // Log for testing

    const promptInput = document.getElementById('aiPrompt');
    const btn = document.getElementById('askBtn');

    // 1. Safety Check: If the box is empty, don't do anything
    if (!promptInput || !promptInput.value.trim()) {
        console.log("Input is empty. Doing nothing.");
        return;
    }

    // 2. The "Brain" Responses (No internet/API needed!)
    const responses = [
        "The stars say: Absolutely! ✨",
        "My internal sensors say: Not likely. 🤖",
        "Ask me again after I've had some digital coffee. ☕",
        "That's a fascinating thought! 🧠",
        "Error 404: Answer not found in this dimension. 🌌"
    ];

    // 3. Pick a random answer
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    console.log("Brain picked: " + randomResponse);

    // 4. Show the answer in the chat
    addMessageToChat(randomResponse);

    // 5. Clear the input so you can type again
    promptInput.value = "";
    btn.innerText = "Consult Brain ✨";
}
function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    const userText = input.value;

    if (userText.trim() === "") return;

    // Create user message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userText;

    chat.appendChild(userMessage);

    // Mock AI response
    const aiMessage = document.createElement("div");
    aiMessage.className = "ai-message";

    const responses = [
        "Interesting question.",
        "Tell me more.",
        "I understand.",
        "That makes sense.",
        "Can you clarify?"
    ];

    const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

    aiMessage.textContent = randomResponse;

    chat.appendChild(aiMessage);

    // Clear input
    input.value = "";

    // Auto scroll to bottom
    chat.scrollTop = chat.scrollHeight;
}

function addMessageToChat(text) {
    const responseArea = document.getElementById('aiResponseArea');
    if (!responseArea) {
        console.error("Could not find aiResponseArea!");
        return;
    }

    const aiMessage = document.createElement('div');
    aiMessage.className = 'bot-msg';
    aiMessage.innerText = text;
    responseArea.appendChild(aiMessage);
    
    // Auto-scroll to the bottom
    responseArea.scrollTop = responseArea.scrollHeight;
}







