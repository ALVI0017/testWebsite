  // Flutter
  // Function to receive messages 
  function receiveMessageFromFlutter(message) {
    document.getElementById('messageFromFlutter').innerText = message?.name;
  }
  // Function to send a message
  function sendMessageToFlutter() {
    var message ={data: "Hello from the web!",id:'1'};
    var jsonString = JSON.stringify(message);
    messageHandler.postMessage(jsonString);
  }

  // Kotlin
  // Function to receive messages  
  function receiveMessageFromKotlin(message) {
    const obj = JSON.parse(message);
    document.getElementById('messageFromKotlin').innerText = obj?.name;
  }
  // Function to send a message  
  function sendDataToAndoridKotlinApp() {
    var message ={data: "Hello from the web!",id:'1'};
    Android.showToast(message?.data);
  }

  // Maui
  // Function to receive messages  
  function receiveMessageFromMAUI(message) {
    const obj = JSON.parse(message);
    document.getElementById('messageFromMaui').innerText = obj?.name;
  }
  // Function to send a message  
  function sendMessageToMaui() {
    var message ={data: "Hello from the web!",id:'1'};
    return message.data;
  }
  
  // iOS
  // Function to receive messages  
  function receiveMessageFromiOS(message) {
    const obj = JSON.parse(message);
    document.getElementById('messageFromiOS').innerText = obj?.name;
  }
  // Function to send a message  
  function sendMessageToiOS() {
    var message ={data: "Hello from the web!",id:'1'};
  
    window.webkit.messageHandler.jsMessageHandler.postMessage(message.data);
  }