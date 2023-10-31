  // Function to receive messages from Flutter
  function receiveMessageFromFlutter(message) {

    document.getElementById('messageFromFlutter').innerText = message?.name;
  }

  // Function to send a message to Flutter
  function sendMessageToFlutter() {
    var message1 ={data: "Hello from the web!",id:'adsadss'};
    var message2 ="Test";
    var jsonString = JSON.stringify(message1);

    messageHandler.postMessage(jsonString);
    messageHandler.postMessage(message2);
  }