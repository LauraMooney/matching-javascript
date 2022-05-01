const section = document.querySelector("section");
let playerLivesCount = document.querySelector("span");
let playerLives = 8

//link text
playerLivesCount.textContent = playerLives;

//generate data
const getData = () => [
    { imgSrc: "./images/1.png", name: "JS"},
    { imgSrc: "./images/2.png", name: "CSS"},
    { imgSrc: "./images/3.png", name: "PHP"},
    { imgSrc: "./images/4.png", name: "React"},
    { imgSrc: "./images/5.png", name: "Redux"},
    { imgSrc: "./images/6.png", name: "SQL"},
    { imgSrc: "./images/7.png", name: "JSX"},
    { imgSrc: "./images/8.png", name: "NPM"},
    { imgSrc: "./images/1.png", name: "JS"},
    { imgSrc: "./images/2.png", name: "CSS"},
    { imgSrc: "./images/3.png", name: "PHP"},
    { imgSrc: "./images/4.png", name: "React"},
    { imgSrc: "./images/5.png", name: "Redux"},
    { imgSrc: "./images/6.png", name: "SQL"},
    { imgSrc: "./images/7.png", name: "JSX"},
    { imgSrc: "./images/8.png", name: "NPM"},
];

//randomiser function
const randomise = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData
}

//card generator function
const cardGenerator = () => {
    const cardData = randomise();
    //generates HTML
    const cards = document.querySelectorAll(".card")
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //attach the info to cards
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        //attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e)
        })
    }); 
};

//check cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);
    //logic
    if (flippedCards.length ===2) {
        if (flippedCards[0].getAttribute("name") === 
        flippedCards[1].getAttribute("name")
        ) {
            console.log('match');
            flippedCards.forEach((card) => {
                card.classListList.remove('flipped');
                card.getElementsByClassName.pointerEvents = "none";
            });
        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart("Try Again");
            }
        }
}
if (toggleCard.length === 16) {
    restart("You Won!")
}
};
const restart = (text) => {
    let cardData = randomise();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        //randomise
        setTimeout(() => {
        cards[index].style.pointerEvents = 'all';
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
    }, 1000);
    });
    playerLives = 8;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
 }; 

cardGenerator();