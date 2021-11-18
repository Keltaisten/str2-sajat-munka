const playArea = document.querySelector(`.playArea`);
let firstPlayer = 1;

const generateArea = () => {                                    /* pálya generálás */
    for(let i = 0; i< 9;i++){
        let newCell = document.createElement(`div`);            /* divek létrehozása */
        // newCell.addEventListener('click',markSomething);
        playArea.appendChild(newCell);                          /* hozzáadás playarea-hoz */
        newCell.classList.add(`cells`);                         /* cell osztályhoz adás */
        // newCell.textContent = "SZ";
    }
};

generateArea();                                                 /* meghívása a function-nek */

const gridNodelist = document.querySelectorAll(`.cells`);       /* nodelist létrehozása */
const gridArray = Array.from(gridNodelist);                     /* abból egy lista amin lehet dolgozni */

const markSomething = (item) => item.target.textContent = "X";  //kell a target is! !!!

const markSome = (item) => {
    if(firstPlayer === 1){
        item.target.textContent = "X";
        checkOfTheWinner();
        firstPlayer = 0;
    }else{
        item.target.textContent = "O";
        checkOfTheWinner();
        firstPlayer = 1;
    }
}

gridArray.forEach(item => {                                     //simán a tömbön foreach-el végigmenni const
    item.addEventListener(`click`, markSome, {once: true});              //nélkül
});

const arrayOfArray = [
    gridArray.slice(0,3),
    gridArray.slice(3,6),
    gridArray.slice(6,9),
    gridArray.filter((_, index) => index%3 === 0),          //miért kell az alulvonás? !!!
    gridArray.filter((_, index) => index%3 === 1),
    gridArray.filter((_, index) => index%3 === 2),
    gridArray.filter((_, index) => index%4 === 0),
    gridArray.filter((_, index) => index%2 === 0 && index > 0 && index < 8),
];

// const checkOfTheWinner = () => {
//     if(
//     arrayOfArray.some(
//         (index) => 
//             index.every((item) => item.textContent === "X") ||       //textcontent kell!!!
//             index.every((item) => item.textContent === "O")
//     )
//     ){
//         won();
//     }
// }

function checkOfTheWinner () {
    if(
    arrayOfArray.some(                                              //miért some miért nem foreach? !!!
        (index) => 
            index.every((item) => item.textContent === "X") ||       //textcontent kell !!!
            index.every((item) => item.textContent === "O")
    )
    ){
        won(0);
    } else if(gridArray.every((item) => item.textContent === "X" ||item.textContent === "O")){
        won(1);
    }
}

const won = (index) => {
    const winner = document.querySelector(`.winner`);
    winner.style.display = `flex`;
    const backgr = document.querySelector('body');
    backgr.style.backgroundColor = `rgb(180,180,180)`;
    const h2Value = document.querySelector(`.h2`);
    const winnerXorO = document.querySelector(`#whichWin`);
    if(index === 0){
        firstPlayer === 1 ? winnerXorO.textContent = ` X ` : winnerXorO.textContent = ` O `;
        firstPlayer === 0 ? winnerXorO.textContent = ` O ` : winnerXorO.textContent = ` X `;
    }else{
        h2Value.textContent = "It's a draw!";
    }
}