function getRandomResponse() {
    const responses = [
        { text: "Lasse Lund Larsen Siger Ja!", image: "thumbs-up.png" },
        { text: "Lasse Lund Larsen Siger Nej...", image: "thumbs-down.png" }
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    const thumbs = document.getElementById('thumbs');
    const text = document.getElementById('text');

    const response = getRandomResponse();
    thumbs.src = response.image; // Ensure you have these images in your project
    text.textContent = response.text;
});