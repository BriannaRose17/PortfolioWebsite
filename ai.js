// 1. Using a faster, more reliable model for free accounts
const API_KEY = "hf_placeholder"; 
const MODEL_URL = "https://api-inference.huggingface.co";

async function queryAI() {
    const promptInput = document.getElementById('aiPrompt');
    const responseArea = document.getElementById('aiResponseArea');
    const btn = document.getElementById('askBtn');

    if (!promptInput.value) return;

    btn.innerText = "Thinking... 🧠";
    btn.disabled = true;

    // We'll try up to 3 times in case the model is "warming up"
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
        try {
            const response = await fetch(MODEL_URL, {
                headers: { 
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json" 
                },
                method: "POST",
                body: JSON.stringify({ 
                    // T5 expects a prefix like "summarize: " for better results
                    inputs: "summarize: " + promptInput.value,
                    options: { wait_for_model: true } 
                }),
            });

            const result = await response.json();

            // If the model is still loading, it returns a 503 or a specific message
            if (response.status === 503 || result.error?.includes("loading")) {
                attempts++;
                btn.innerText = `Waking up brain... (${attempts}/${maxAttempts})`;
                await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds before retry
                continue;
            }

            // Display the answer (T5 returns an array with 'summary_text')
            const aiText = result[0]?.summary_text || "I'm awake, but I didn't understand that. Try again!";
            addMessageToChat(aiText);
            break; // Success! Exit the loop

               } catch (error) {
            console.error("DEBUG:", error);
            // This alert will tell us the EXACT error (401, 404, or 503)
            alert("The AI said: " + error.message);
            attempts++;
        }

    }

    btn.innerText = "Consult Brain ✨";
    btn.disabled = false;
    promptInput.value = "";
}

function addMessageToChat(text) {
    const responseArea = document.getElementById('aiResponseArea');
    const aiMessage = document.createElement('div');
    aiMessage.className = 'bot-msg';
    aiMessage.innerText = text;
    responseArea.appendChild(aiMessage);
    responseArea.scrollTop = responseArea.scrollHeight;
}


