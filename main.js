  // Function to receive messages from Flutter
  function receiveMessageFromFlutter(message) {

    document.getElementById('messageFromFlutter').innerText = message?.name;
  }

  // Function to send a message to Flutter
  function sendMessageToFlutter() {
    var message ={data: "Hello from the web!",id:'adsadss'};
    var jsonString = JSON.stringify(message);
    messageHandler.postMessage(jsonString);
  }