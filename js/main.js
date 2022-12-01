//=================================chat===========================================//
///////enabled chat window
function enableChatWindow() {
    let volunteerContainer = document.querySelector("#volunteer-container");
    volunteerContainer.style.display= "none";
    let chatWindow = document.querySelector("#chat-window");
    chatWindow.style.display= "block"
}

///////end of enabled chat window

let chatContainerUser = document.querySelector("#chatContainerUser");
let inputChatUser = document.querySelector("#inputChatUser");

//local storage key increment
let key = localStorage.getItem("incrementing key");

//get key from local storage
let newKey = "";

//render chat message on landing
// let x = localStorage.key("incrementing key")
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
    let x = "chatInputUser" + key;
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
    // store to local
    localStorage.setItem("inputDate", enteredDate)
    let currentdate = new Date();
    localStorage.setItem("currentDate", currentdate)
    // get stored data
    let getDate = localStorage.getItem("inputDate")
    let getCurrentDate = localStorage.getItem("currentDate")
    date1 = new Date(enteredDate)
    date2 = new Date()
    result = date1-date2
    if (result >= 86400000){
        console.log("cannot open the capsule")
    } else {
        console.log("you can open the capsule")
    }
    console.log(date1)
    console.log(date2)
    console.log(result)
    console.log(getDate)
    console.log(getCurrentDate)
    console.log(getDate - getCurrentDate)
    
}