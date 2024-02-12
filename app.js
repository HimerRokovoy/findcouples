
const backOfCard = 'https://cardsdealer.ru/image/catalog/products/BICYCLE/KARTA-DUBLIKAT-BICYCLE-STANDARD-RED-poshtuchno.jpg'
const images = [`https://images.unsplash.com/photo-1696894132788-d0b1af4c95a7?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374`,
    `https://images.unsplash.com/photo-1693460880598-c31648568a59?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1371`,
    `https://images.unsplash.com/photo-1696610358567-0a75265c73b4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374`,
    `https://images.unsplash.com/photo-1696836486210-0c56a6d60243?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1465`,
    `https://plus.unsplash.com/premium_photo-1685077721477-a4bc728512ef?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1372`,
    `https://images.unsplash.com/photo-1695796187783-23b6a38ba1aa?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1372`,
    `https://images.unsplash.com/photo-1695289212271-99a48b7e0e14?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1351`,
    `https://images.unsplash.com/photo-1696230390138-75932d745228?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470`,
    `https://images.unsplash.com/photo-1696760185060-c61d4304fb81?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374`,
    `https://images.unsplash.com/photo-1695462615087-e7f5a7a09fc7?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470`,
    `https://images.unsplash.com/photo-1696934688443-7cd806cf8937?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1696199386921-0f8f7b03973d?auto=format&fit=crop&q=80&w=1338&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://plus.unsplash.com/premium_photo-1693587057722-32757b88db66?auto=format&fit=crop&q=80&w=1364&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1694793435731-bce6e06c2cd1?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    `https://images.unsplash.com/photo-1684287038326-3700007a3072?auto=format&fit=crop&q=80&w=1376&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`];

const btnGroup = document.querySelector('#btn__group')
const screens = document.querySelectorAll('.screen')
const field = document.querySelector('#field')

let numCards = 0;
let imgIndex = 0;
let firstOpendCard = null;
let secondOpendCard = null;
let numOpend = 0;
let clickable = true;
function createCard() {
    
    let cardtmp = document.createElement('div')
    cardtmp.classList.add('card')

    let cardinner = document.createElement('div')
    cardinner.classList.add('card__inner')

    let cardback = document.createElement('div')
    cardback.classList.add('back')
    

    const background = images[imgIndex]
    cardback.style.backgroundImage = `url(${background})`

    let cardfront = document.createElement('div')
    cardfront.classList.add('front')

    cardinner.append(cardfront, cardback)
    cardtmp.append(cardinner)
    cardtmp.setAttribute('background', background)
    // cardtmp.addEventListener('click', () => {
     
    //     if(!firstOpendCard){
    //         cardinner.classList.toggle('is__flipped');
    //         firstOpendCard = cardtmp;
    //     }
    //     else{
    //         if(cardback.style.backgroundImage === firstOpendCard.firstChild.lastChild.style.backgroundImage){
    //             cardtmp.style.display = 'none'
    //             firstOpendCard.style.display = 'none'
    //             firstOpendCard = null;
    //         }
    //         else{
    //             cardinner.classList.toggle('is__flipped');
    //             firstOpendCard.firstChild.classList.toggle('is_flipped')
    //             firstOpendCard = null;
    //         }
    //     }
        
    // })
    
    return cardtmp
}

function fillField() {

    let numPairs = Math.floor(numCards / 2)

    for (let i = 0; i < numPairs; i++) {

        const card = createCard();
        const paire = createCard();
        imgIndex++;
        if (numCards === 10) {
            card.style.width = '18vw'
            card.style.height = '45vh'
            paire.style.width = '18vw'
            paire.style.height = '45vh'
        }
        else {
            card.style.width = '9vw'
            card.style.height = '24vh'
            paire.style.width = '9vw'
            paire.style.height = '24vh'
        }

        card.style.order = Math.floor(Math.random()*1000);
        paire.style.order = Math.floor(Math.random()*1000);
        field.append(card, paire);

    }
    
}

field.addEventListener('click', event => {
    if(!clickable){return}
    if(event.target.classList.contains('front')){
        if(!firstOpendCard){
            firstOpendCard = event.target.parentNode;
            firstOpendCard.classList.toggle('is__flipped')
        }
        else{
            clickable = false;
            secondOpendCard = event.target.parentNode;
            secondOpendCard.classList.toggle('is__flipped')
            setTimeout('judge(firstOpendCard,secondOpendCard)', 500)

        }
    }
    
})

btnGroup.addEventListener('click', event => {
    if (event.target.classList.contains('btn')) {
        numCards = parseInt(event.target.getAttribute('data-num'));
        fillField()
        screens[0].classList.add('up')
        startGame();
    }
})

function startGame() {




}


// function createCard(){
//     const card = document.createElement('div')
//     card.classList.add('card')
//     card.innerHTML = `<div class="card__inner ">
//         <div class="front">?</div>
//         <div class="back"></div>
//     </div>`
//     card.addEventListener('click', ()=>{
//         card.firstChild.classList.toggle('is__flipped')
//     });
//     return card;
// }

function flippBackAll(){
    field.childNodes.forEach(item =>{
        
        item.firstChild.classList.remove('is__flipped')
    })
}

function judge(first,second){
    console.log(firstOpendCard.lastChild)
    if(firstOpendCard.lastChild.style.backgroundImage === secondOpendCard.lastChild.style.backgroundImage){
        firstOpendCard.classList.add('guessed')
        secondOpendCard.classList.add('guessed')
        numOpend +=2;
    }
    else{
        firstOpendCard.classList.toggle('is__flipped')
        secondOpendCard.classList.toggle('is__flipped')
    }
    if(numCards === numOpend){
        flippBackAll()
    }
    secondOpendCard = null;
    firstOpendCard = null;
    clickable = true
}
