var messages = document.getElementById("messages");

var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

textbox.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        button.click();
    }
});

function BtnClick(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value="";
}