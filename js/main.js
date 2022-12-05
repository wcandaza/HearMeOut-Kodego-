//=================================chat===========================================//
///////enabled chat window
function enableChatWindow() {
    let volunteerContainer = document.querySelector("#volunteer-container");
    volunteerContainer.style.display = "none";
    let chatWindow = document.querySelector("#chat-window");
    chatWindow.style.display = "block"
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
    while (chatContainerUser.firstChild) {
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
    result = date1 - date2

    //store to local
    localStorage.setItem("date1", JSON.stringify(date1))
    localStorage.setItem("date2", JSON.stringify(date2))
    //store time capsule message to local storage
    let createdMessageCapsule = document.querySelector("#createdMessageCapsule")
    localStorage.setItem("timeCapsuleMessage", JSON.stringify(createdMessageCapsule.value))

    if (result >= 86400000) {
        //append elements
        existineCapsuteContainer.appendChild(createTCStoredDiv)
        createTCStoredDiv.appendChild(createTCStoredSpan)
        createTCStoredSpan.textContent = parsedDate1;
        //open button
        setTimeout(openBtn, result);


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

//------------------------------Quotes of the Day-------------------------//
let quote = [
    "The bad news is time flies. The good news is you're the pilot. -Michael Altshuler",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
    "You define your own life. Don't let other people write your script. -Oprah Winfrey",
    "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it. -Dr. Phil",
    "For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end. -Michelle Obama",
    "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on. -Lady Gaga",
    "If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is. -Gabrielle Bernstein",
    "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens. -Mandy Hale",
    "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you. -Ralph Waldo Emerson",
    "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that. -Ava DuVernay",
    "It is during our darkest moments that we must focus to see the light. -Aristotle",
    "Not having the best situation, but seeing the best in your situation is the key to happiness. -Marie Forleo",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Weaknesses are just strengths in the wrong environment. -Marianne Cantwell",
    "Everyone has inside of him a piece of good news. The good news is that you don't know how great you can be! How much you can love! What you can accomplish! And what your potential is! -Anne Frank",
    "All you need is the plan, the road map, and the courage to press on to your destination. -Earl Nightingale",
    "We must let go of the life we have planned, so as to accept the one that is waiting for us. -Joseph Campbell",
    "Find out who you are and be that person. That's what your soul was put on this earth to be. Find that truth, live that truth, and everything else will come. -Ellen DeGeneres",
    "Real change, enduring change, happens one step at a time. -Ruth Bader Ginsburg",
    "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do. -Eleanor Roosevelt",
    "I tell myself, 'You've been through so much, you've endured so much, time will allow me to heal, and soon this will be just another memory that made me the strong woman, athlete, and mother I am today. -Serena Williams",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. -Albert Einstein",
    "Don't try to lessen yourself for the world; let the world catch up to you. -Beyoncé",
    "If you don't like the road you're walking, start paving another one! -Dolly Parton",
    "We generate fears while we sit. We overcome them by action. -Dr. Henry Link",
    "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
    "You do not find the happy life. You make it. -Camilla Eyring Kimball",
    "Being vulnerable is a strength, not a weakness. -Selena Gomez",
    "You can, you should, and if you’re brave enough to start, you will. -Stephen King",
    "Happiness is not by chance, but by choice. -Jim Rohn",
    "Every saint has a past, and every sinner has a future. -Oscar Wilde",
    "Just one small positive thought in the morning can change your whole day. -Dalai Lama",
    "Don’t wait for your feelings to change to take the action. Take the action and your feelings will change. -Barbara Baron",
    "The best way to predict the future is to create it. -Abraham Lincoln",
    "If you are not willing to risk the usual you will have to settle for the ordinary. -Jim Rohn"
];

let quotesDisplay = document.querySelector("#quotesDisplay");

setInterval(quotesList, 5000);
display()
function quotesList() {
    const randomQuotes = Math.floor(Math.random() * quote.length);
    localStorage.setItem("quotes", JSON.stringify(randomQuotes));
    display()
}
function display() {
    quotesDisplay.innerHTML = quote[JSON.parse(localStorage.getItem("quotes"))];
}