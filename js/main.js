//=================================chat===========================================//
///////enabled chat window
function enableChatWindow() {
    let volunteerContainer = document.querySelector("#volunteer-container");
    volunteerContainer.style.display= "none";
    let chatWindow = document.querySelector("#chat-window");
    chatWindow.style.display= "block"
}
///////end of enabled chat window
    let inputChatUser = document.querySelector("#inputChatUser");
    let chat = []
    function sendMessageFunctionUser() {
        chat.push({
            name: "user",
            content: inputChatUser.value,
            Date: new Date()
        })
        localStorage.setItem('messages', JSON.stringify(chat))
        displayMessages()
    }
    function displayMessages() {
        while (chatContainerUser.firstChild){
            chatContainerUser.removeChild(chatContainerUser.firstChild);
        }
        for (let i = 0; i < chat.length; i++) {
        let parsedChat = JSON.parse(localStorage.getItem('messages')) 
        let chatContainerUser = document.querySelector("#chatContainerUser")
        let createDiv = document.createElement('Div')
        let createA = document.createElement('Div')
        let createSpan = document.createElement('span')
        let createPDate = document.createElement('p')
        chatContainerUser.appendChild(createDiv)
        createDiv.appendChild(createA)
        createDiv.appendChild(createSpan)
        createDiv.appendChild(createPDate)
        createDiv.classList = "perChatContainer"
        createA.classList = "perChatUser"
        createSpan.classList = "perChatContent"
        createPDate.classList = "perChatDate"
        createA.textContent = parsedChat[i].name
        createSpan.textContent = parsedChat[i].content
        createPDate.textContent = parsedChat[i].Date
          }
        
    }
//=========================end of chat=================================//




//========================time capsule=================================//
//declare elements from index
const TCcontainer = document.querySelector("#time-capsule-container");
const TCcontainerCreate = document.querySelector("#time-capsule-container-create");
const existineCapsuteContainer = document.querySelector("#existineCapsuteContainer");
const enteredDate = document.querySelector("#date");
const timeCapsuleStoreBtn = document.querySelector("#timeCapsuleStoreBtn");
timeCapsuleStoreBtn.addEventListener("click", storeFunction);
//create elements
let createTCStoredDiv = document.createElement('Div')
let createOpenButtn = document.createElement('button');
let createTCStoredSpan = document.createElement('span')
//added element's class
createTCStoredDiv.classList = "timeCapsuleStoredDiv";
createTCStoredSpan.classList = "timeCapsuleStoredDate";
//get stored data from local
let parsedDate1 = JSON.parse(localStorage.getItem("date1"))
let parsedDate2 = JSON.parse(localStorage.getItem("date2"))
//function for storing to time capsule
function storeFunction() {
    date1 = new Date(enteredDate.value)
    date2 = new Date()
    result = date1-date2
    
    //store to local
    localStorage.setItem("date1", JSON.stringify(date1))
    localStorage.setItem("date2", JSON.stringify(date2))
    //store time capsule message to local storage
    let createdMessageCapsule = document.querySelector("#createdMessageCapsule")
    localStorage.setItem("timeCapsuleMessage", JSON.stringify(createdMessageCapsule.value))
    
    if (result >= 86400000){
        //append elements
        existineCapsuteContainer.appendChild(createTCStoredDiv) 
        createTCStoredDiv.appendChild(createTCStoredSpan)
        createTCStoredSpan.textContent = parsedDate1;
        //open button
        setTimeout(openBtn,result); 
        
        
    } else {
        existineCapsuteContainer.appendChild(createTCStoredDiv) 
        createTCStoredDiv.appendChild(createTCStoredSpan)
        createTCStoredDiv.appendChild(createOpenButtn)
        createTCStoredSpan.textContent = parsedDate1;
        //open button
        createOpenButtn.innerHTML = "Open";
        createOpenButtn.addEventListener("click", openCapsuleMessage)
    }
    function openBtn() {
        createTCStoredDiv.appendChild(createOpenButtn)
        createOpenButtn.innerHTML = "Open"
        createOpenButtn.addEventListener("click", openCapsuleMessage)
    }

    function openCapsuleMessage() {
        createOpenButtn.style.display = "none";
        let createCapsuleMessageDiv = document.createElement('div');
        createCapsuleMessageDiv.classList = "displayCapsuleMessage";
        createTCStoredDiv.appendChild(createCapsuleMessageDiv)
        let parsedTimeCapsuleMessage = localStorage.getItem("timeCapsuleMessage")
        createCapsuleMessageDiv.textContent = parsedTimeCapsuleMessage;
        console.log(parsedTimeCapsuleMessage);
    }
    //disabling store window and enabling create and existing window
    TCcontainer.style.display = "none";
    TCcontainerCreate.style.display = "block";
    
}
//function for enabling the create time capsule window
function createTCfunction() {
    TCcontainer.style.display = "block";
    TCcontainerCreate.style.display = "none";
}