let userName = '';

// Predefined responses for various topics
const responses = {
    "what is ai": "AI, or Artificial Intelligence, is the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.",
    "how do ai images work": "AI-generated images use neural networks like GANs (Generative Adversarial Networks) or diffusion models to learn patterns from data and create images based on that training.",
    "what is machine learning": "Machine Learning is a subset of AI where machines are trained on data to make decisions without being explicitly programmed.",
    "what is deep learning": "Deep Learning is a branch of machine learning that uses neural networks with many layers to process data in complex ways, allowing machines to perform more abstract tasks.",
    "what are gans": "GANs, or Generative Adversarial Networks, consist of two networks: a generator and a discriminator. The generator creates images, while the discriminator tries to distinguish between real and fake images."
};

const fallbackResponses = [
    "I'm sorry, I didn't understand that. Try asking about AI or machine learning!",
    "Hmm, I don't have that information. You can ask me about neural networks, GANs, or transformers.",
    "I'm still learning! Can you ask something related to AI, like deep learning or NLP?"
];

// Initialize the chat
function startChat() {
    userName = prompt("Hi! What's your name?");
    if (userName) {
        addMessage(`Hello, ${userName}! I'm your AI assistant. Click a question below to ask me anything about AI!`, 'bot');
    } else {
        addMessage("Hello! I'm your AI assistant. Click a question below to ask me anything about AI!", 'bot');
    }
}

// Add a message to the chatbox
function addMessage(content, sender) {
    const message = document.createElement('div');
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    message.classList.add('message', sender);
    message.setAttribute('data-time', currentTime);
    message.innerText = content;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Find the closest response for predefined questions
function findResponse(question) {
    const botResponse = responses[question] || fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    return botResponse;
}

// Open the chat
const chatContainer = document.getElementById('chat-container');
const chatIcon = document.getElementById('chat-icon');
const closeButton = document.getElementById('close-btn');

chatIcon.addEventListener('click', () => {
    chatContainer.style.display = 'flex'; // Show chat container
    startChat(); // Start chat
});

closeButton.addEventListener('click', () => {
    chatContainer.style.display = 'none'; // Hide chat container
});

// Suggested questions click handler
const suggestedQuestions = document.querySelectorAll('.suggested-questions li');
suggestedQuestions.forEach(question => {
    question.addEventListener('click', (e) => {
        const questionText = e.target.getAttribute('data-question');
        const response = findResponse(questionText);
        addMessage(response, 'bot');
        addMessage(`You asked: ${e.target.innerText}`, 'user');
    });
});
