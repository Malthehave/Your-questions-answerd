// window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;


// function recordStart() {
//     let finalTranscript = '';
//     let recognition = new window.SpeechRecognition();
//     recognition.interimResults = true;
//     recognition.maxAlternatives = 10;
//     recognition.continuous = true;
//     recognition.onresult = (event) => {
//       let interimTranscript = '';
//       for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
//         let transcript = event.results[i][0].transcript;
//         if (event.results[i].isFinal) {
//           finalTranscript += transcript;
//         } else {
//           interimTranscript += transcript;
//         }
//       }
//       function myFunction() {
//         var node = document.createElement("LI");
//         var textnode = document.createTextNode("Water");
//         node.appendChild(textnode);
//         document.getElementById("myList").appendChild(node);
//       }
//       document.querySelector('body').innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
//     }
//     recognition.start();
// }

var recognition = new webkitSpeechRecognition();

// Are we processing a short phrase or performing continuous dictation?
recognition.continuous = true; 

// Do we require interim results in addition to the final results?
recognition.interimResults = true;

// We speak The Queens English here, my good man
recognition.lang = 'en-US' 
function recordStart() {
    // Kick off the Speech to Text recognition process
    recognition.start();
}


// Set up 
recognition.onstart = function(event){
 console.log("onstart", event);
} 

// Process parsed result
recognition.onresult = function(event){
 console.log("onresult", event);
}

// Handle error
recognition.onerror = function(event){
 console.log("onerror", event);
}

// Housekeeping after success or failed parsing
recognition.onend = function(){
 console.log("onend");
}