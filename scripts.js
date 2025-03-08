document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    
    // Toggle menu visibility
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close the menu if a link is clicked (optional feature)
    navLinks.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");

    function appendMessage(sender, message) {
        const messageElement = document.createElement("p");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        appendMessage("You", userMessage);
        userInput.value = "";

        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            appendMessage("Martoo AI", botResponse);
        }, 1000);
    }

    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
            return "Hello! How can I assist you today?";
        }
        if (lowerInput.includes("plagiarism")) {
            return "I can help check plagiarism by comparing with reliable sources!";
        }
        if (lowerInput.includes("typing")) {
            return "Martoo AI can assist with typing assignments and formatting.";
        }
        if (lowerInput.includes("vpn")) {
            return "We provide VPN configurations for Vmess, Trojan, and UDP.";
        }
        return "I'm not sure about that. Please ask something else.";
    }

    document.querySelector("button").addEventListener("click", sendMessage);
});

function uploadFile() {
    const fileInput = document.getElementById("fileUpload");
    if (fileInput.files.length > 0) {
        alert("File uploaded successfully! Processing...");
    } else {
        alert("Please select a file to upload.");
    }
}
