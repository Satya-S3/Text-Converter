let speech =new SpeechSynthesisUtterance();

let voices=[];
let voiceSelect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
      voices=window.speechSynthesis.getVoices();
      speech.voice=voices[0];

      voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
};

voiceSelect.addEventListener("change",()=>{
      speech.voice=voices[voiceSelect.value];
})
document.querySelector("#listen").addEventListener("click",()=>{
      speech.text=document.querySelector("textarea").value;
      window.speechSynthesis.speak(speech);
})

////Speak
document.querySelector("#speak").addEventListener('click',function(){
      let speech=true;
      window.SpeechRecognition=window.webkitSpeechRecognition;
      const recognition=new SpeechRecognition;
      recognition.interimResults=true;

      recognition.addEventListener('result',e=>{
            const transcript=Array.from(e.results)
            .map(result=>result[0])
            .map(result=>result.transcript)

            document.querySelector('textarea').value = transcript;
      })

      if(speech==true){
            recognition.start();
      }
})

