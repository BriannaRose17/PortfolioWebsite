// --- 1. The Main Logic (Your Function) ---
function queryAI() {
    const promptInput = document.getElementById('aiPrompt');
    const btn = document.getElementById('askBtn');

    
    if (!promptInput || !promptInput.value.trim()) {
        return;
    }

    
    addMessageToChat(promptInput.value, 'user');

    
    const responses = [
        "The stars say: Absolutely! ✨",
        "My internal sensors say: Not likely. 🤖",
        "Ask me again after I've had some digital coffee. ☕",
        "That's a fascinating thought! 🧠",
        "Error 404: Answer not found in this dimension. 🌌"
    ];

    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    
    setTimeout(() => {
        addMessageToChat(randomResponse, 'ai');
    }, 500);

    
    promptInput.value = "";
}

// --- 2. The Display Function ---
function addMessageToChat(message, sender) {
    const chatWindow = document.getElementById('chatWindow');
    
    const messageElement = document.createElement('div');
    
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;

    chatWindow.appendChild(messageElement);

    
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// --- 3. Event Listeners (Making the button work) ---


document.getElementById('askBtn').addEventListener('click', queryAI);


document.getElementById('aiPrompt').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        queryAI();
    }
});
















