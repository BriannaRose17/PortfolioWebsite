function queryAI() {
    console.log("Brain consulting started..."); 
    
    const promptInput = document.getElementById('aiPrompt');
    const responseArea = document.getElementById('aiResponseArea');

    if (!promptInput || !promptInput.value.trim()) return;

 
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg'; 
    userMsg.innerText = promptInput.value;
    responseArea.appendChild(userMsg);


    const responses = [
        "The stars say: Absolutely! ✨",
        "My internal sensors say: Not likely. 🤖",
        "Ask me again after I've had some digital coffee. ☕",
        "That's a fascinating thought! 🧠",
        "Error 404: Answer not found. 🌌"
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'bot-msg'; 
        botMsg.innerText = randomResponse;
        responseArea.appendChild(botMsg);
        
        
        responseArea.scrollTop = responseArea.scrollHeight;
    }, 400);

    promptInput.value = "";
}


document.getElementById('aiPrompt').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        queryAI();
    }
});



















