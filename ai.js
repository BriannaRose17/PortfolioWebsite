function queryAI() {
    const promptInput = document.getElementById('aiPrompt');
    const responseArea = document.getElementById('aiResponseArea');

    // 1. Safety Check: If the box is empty, don't do anything
    if (!promptInput || !promptInput.value.trim()) {
        return;
    }

    // 2. Display the USER'S message
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg'; 
    userMsg.innerText = promptInput.value;
    responseArea.appendChild(userMsg);

    // 3. The "Brain" Responses
    const responses = [
        "The stars say: Absolutely! ✨",
        "My internal sensors say: Not likely. 🤖",
        "Ask me again after I've had some digital coffee. ☕",
        "That's a fascinating thought! 🧠",
        "Error 404: Answer not found in this dimension. 🌌"
    ];

    // 4. Pick a random answer
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    // 5. Show the AI answer in the chat after a slight delay
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'bot-msg'; 
        botMsg.innerText = randomResponse;
        responseArea.appendChild(botMsg);
        
        responseArea.scrollTop = responseArea.scrollHeight;
    }, 400);

    // 6. Clear the input
    promptInput.value = "";
}


















