function queryAI() {
    const promptInput = document.getElementById('aiPrompt');
    const responseArea = document.getElementById('aiResponseArea');

    if (!promptInput || !promptInput.value.trim()) return;

    // 1. Show User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg'; 
    userMsg.innerText = promptInput.value;
    responseArea.appendChild(userMsg);

    // 2. Add "Thinking..." Bubble
    const thinkingMsg = document.createElement('div');
    thinkingMsg.className = 'bot-msg thinking'; 
    thinkingMsg.innerText = "Second Brain is thinking...";
    responseArea.appendChild(thinkingMsg);
    
    
    responseArea.scrollTop = responseArea.scrollHeight;

    // 3. Brain Responses
    const responses = [
        "The stars say: Absolutely! ✨",
        "My internal sensors say: Not likely. 🤖",
        "Ask me again after I've had some digital coffee. ☕",
        "That's a fascinating thought! 🧠",
        "Error 404: Answer not found. 🌌",
        "My logic circuits are buzzing with a 'Yes'! ✅",
        "The data is pointing toward a bright 'Maybe'. 💡",
        "Processing... stay hydrated and ask again. 💧"
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  
    setTimeout(() => {
        thinkingMsg.innerText = randomResponse;
        thinkingMsg.classList.remove('thinking'); 
        
        responseArea.scrollTop = responseArea.scrollHeight;
    }, 1500);

    promptInput.value = "";
}





















