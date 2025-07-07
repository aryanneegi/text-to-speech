document.getElementById('start-button').addEventListener('click', function () {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        alert("Speech Recognition is not supported in your browser. Please use Google Chrome.");
        return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    const language = document.getElementById('language-selector').value;
    recognition.lang = language;
    recognition.interimResults = true;
    recognition.continuous = false;
    const convert_text = document.getElementById('convert_text');
    convert_text.textContent = "Listening...";
    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
        convert_text.textContent = transcript;
    });
    recognition.addEventListener('end', () => {
        convert_text.textContent += " (Stopped listening)";
    });

    
    recognition.start();
});