

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    let indianVoices = voices.filter(voice => 
        voice.lang.startsWith('hi') ||  // Hindi
        voice.lang.startsWith('ta') ||  // Tamil
        voice.lang.startsWith('te') ||  // Telugu
        voice.lang.startsWith('kn') ||  // Kannada
        voice.lang.startsWith('bn')     // Bengali
    );

        speech.voice = indianVoices[0];
     
    indianVoices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});


document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});