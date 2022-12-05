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
const cancelBtn = document.querySelector("#cancel")
cancelBtn.addEventListener('click', cancelFunction)
//create elements
let createTCStoredDiv = document.createElement('Div')
let createOpenButtn = document.createElement('button');
createOpenButtn.classList = "open-capsule"
let createdTCStoredPara = document.createElement('p')
//added element's class
createTCStoredDiv.classList = "timeCapsuleStoredDiv";
createdTCStoredPara.classList = "timeCapsuleStoredDate";

//function for storing to time capsule
function storeFunction() {
    //store to local
    localStorage.setItem("selectedDate", JSON.stringify(enteredDate.value))
    //subtracting current date from the selected date
    date1 = new Date(JSON.parse(localStorage.getItem('selectedDate')))
    date2 = new Date()
    result = date1-date2
    console.log(result)
    //store time capsule message to local storage
    let createdMessageCapsule = document.querySelector("#createdMessageCapsule")
    localStorage.setItem("timeCapsuleMessage", JSON.stringify(createdMessageCapsule.value))
    
    
    
    
    
    if (result >= 86400000){
        while (existineCapsuteContainer.hasChildNodes()) {                  
            existineCapsuteContainer.removeChild(existineCapsuteContainer.firstChild)
        }
        //append elements
        existineCapsuteContainer.appendChild(createTCStoredDiv) 
        createTCStoredDiv.appendChild(createdTCStoredPara)
        createdTCStoredPara.textContent = JSON.parse(localStorage.getItem("selectedDate"));
        //open button
        setTimeout(openBtn,result); 
        
        
    } else {
        while (existineCapsuteContainer.hasChildNodes()) {                  
            existineCapsuteContainer.removeChild(existineCapsuteContainer.firstChild)
        }
        //append elements
        existineCapsuteContainer.appendChild(createTCStoredDiv) 
        createTCStoredDiv.appendChild(createdTCStoredPara)
        createTCStoredDiv.appendChild(createOpenButtn)
        createdTCStoredPara.textContent = JSON.parse(localStorage.getItem('selectedDate'));
        //open button
        openBtn()
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

//cancel button for creating time capsule
function cancelFunction() {
    TCcontainer.style.display = "none";
    TCcontainerCreate.style.display = "block";
}