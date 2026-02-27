// 1. Using a faster, more reliable model for free accounts
// No API Key needed - completely safe for GitHub!

function queryAI() {
    const promptInput = document.getElementById('aiPrompt');
    const btn = document.getElementById('askBtn');

    // If the user typed nothing, do nothing
    if (promptInput.value.trim() === "") return;

    // 1. Create a list of fun "Brain" responses
    const responses = [
        "The stars say: Absolutely! ✨",
        "My internal sensors say: Not likely. 🤖",
        "Ask me again after I've had some digital coffee. ☕",
        "That's a fascinating thought! 🧠",
        "Error 404: Answer not found in this dimension. 🌌"
    ];

    // 2. Pick one at random
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    // 3. Send it to the chat
    addMessageToChat(randomResponse);

    // 4. Reset the UI
    promptInput.value = ""; 
    btn.innerText = "Consult Brain ✨";
}

function addMessageToChat(text) {
    const responseArea = document.getElementById('aiResponseArea');
    const aiMessage = document.createElement('div');
    aiMessage.className = 'bot-msg';
    aiMessage.innerText = text;
    responseArea.appendChild(aiMessage);
    
    // Auto-scroll to the bottom of the chat
    responseArea.scrollTop = responseArea.scrollHeight;
}



