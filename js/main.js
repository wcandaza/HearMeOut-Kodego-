//=================================chat===========================================//

let chatContainerUser = document.querySelector("#chatContainerUser");
let inputChatUser = document.querySelector("#inputChatUser");

//local storage key increment
let key = localStorage.getItem("incrementing key");

//render chat message on landing
let x = localStorage.key("incrementing key")
// loadchatMessages();

function sendMessageFunctionUser() {
    //change key for local storage and store the chat key 
    let add1ToKey = key++;
    localStorage.setItem("incrementing key", add1ToKey);
    let newKey = "chatInputUser" + add1ToKey;
    //store to local storage
    localStorage.setItem(newKey, inputChatUser.value);   
    loadchatMessages();
}

function loadchatMessages() {
    //load chat user's chat message in chat box
    let chatDivUser = document.createElement("div");
    let chatPUser = document.createElement("p");
    chatContainerUser.appendChild(chatDivUser);
    chatDivUser.appendChild(chatPUser);
    //add attribute to user's chat input
    chatDivUser.classList = "userChatDiv";
    //display message on chat box
    let x = "chatInputUser" + parseFloat(key);
    let y = parseFloat(x);
    console.log("this is the key " + x)
    let getChatLocalStorage = localStorage.getItem(x);
    let displayUserChat = "User: " + getChatLocalStorage;
    chatPUser.textContent = displayUserChat;
    console.log("this is the value pair " + getChatLocalStorage)
    
}
//=========================end of chat=================================//
//========================time capsule=================================//
function cTimeCapsule() {
    let x = document.querySelector("#time-capsule-container");
    x.style.display = "block";
    let y = document.querySelector("#time-capsule-container-create");
    y.style.display = "none";

}
const timeCapsuleStoreBtn = document.querySelector("#timeCapsuleStoreBtn");
timeCapsuleStoreBtn.addEventListener("click", storeFunction);
function storeFunction() {
    const enteredDate = document.querySelector("#date").value;
    date1 = new Date(enteredDate)
    date2 = new Date()
    result = Math.abs(date1-date2)
    console.log(date1)
    console.log(date2)
    console.log(result)


}