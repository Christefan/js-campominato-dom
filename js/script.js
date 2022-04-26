/* 
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

document.getElementById("play").addEventListener("click", startGame);



function startGame() {
    // 1. 
    const gridSize= difficultchoice(document.getElementById('difficulty').value);
    const dimension = dimensionsHeW(gridSize); 
    const gridRdmRed = gridRdm(16,gridSize);

    // 2. Per ogni numero creo

    const gridContainer = document.querySelector(".container");
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
    
        // rdmNumber = researchRdmRed(gridRdmRed[i],gridSize);
        const domElement = generateBox(i+1,dimension,gridRdmRed)



        // appendo questo elemnto al contenitore
        gridContainer.append(domElement);
    }
}

// scegliamo il range della difficolta inserita
function difficultchoice(size){
    if(size === 'facile'){
    
        return 100;
    }else if(size === 'medio'){
  
        return 81;
    }else{
      
        return 49;
    }
}
// definisco la dimensione del box in base al range (selezionato tramite la difficolta del gioco)
function dimensionsHeW(size){
    if(size === 100){
    
        return 10;
    }else if(size === 81){
  
        return 9;
    }else{
      
        return 7;
    }
}


function gridRdm(gridRDMSize,grideNumberSize){
    let i=1;  
    const arrRED =[];
    while(arrRED.length<gridRDMSize){
       
        const rndNumber = getRndInteger(1, grideNumberSize);
        
        // 2. se il numero non è all'interno dell'array, allora lo pusho
        if ( !arrRED.includes(rndNumber) ) {
            arrRED.push(rndNumber);
            // console.log(i++,rndNumber)
        }
    }
    return arrRED;
}


function getRndInteger(min,max){
    return Math.floor(Math.random() * max) + min;
}


/**
 * @param {any} number -> il numero che dobbiamo inserire all'interno dell'elemnto html
 * @returns {any} -> l'elemento html (il mio div)
 */
function generateBox(number,sizeD,grideNumber) {
    // creo un elemnto html
    const newElement = document.createElement("div");
    let i=1 ;
    let k=1;
    newElement.setAttribute("class", "box");
    newElement.style.width = `calc(100% / ${sizeD})`;
    newElement.style.height = `calc(100% / ${sizeD})`;
    // agiungo il span con il numero
    newElement.innerHTML = `<span>${number}</span>`

    // assegno la classe box
    newElement.classList.add("box");
    // cambio colore quando clicco la box 
    newElement.addEventListener("click", function(){
        const prova = parseInt(this.innerText);
        if (grideNumber.includes(prova) === false) {
            this.style.backgroundColor = "blue";
        } else {
            this.style.backgroundColor = "red";
            alert ("Hai perso");  
            endLooser();
        }
    });
    function endLooser(){
        
        const boxes = document.querySelectorAll('.box')
        
        for(let i = 0; i < boxes.length; i++){
          // E dopo aver perso far spuntare tutte le altre bombe
            
          if(grideNumber.includes(i)){
            newElement.style.backgroundColor = "red";
        
            console.log('prova',grideNumber,i)
                 
          }
    }
     }
    // ritorno elemnto
    return newElement;
}

