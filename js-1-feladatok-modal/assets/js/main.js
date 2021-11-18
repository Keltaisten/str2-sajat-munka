let modalContainer = document.querySelector('.modal__container');

const modal = document.querySelector('.modal');

const button = document.querySelector('.button');

button.addEventListener('click', () => {
    modalContainer.classList.remove('hidden');
    modal.focus();
})

function close(){
    setTimeout(() =>{
        modalContainer.classList.add('hidden');
    }, 700)
}

document.querySelector('.x__button').addEventListener('click', function(){
    close();
})

document.querySelector('.okay__button').addEventListener('click', function() {
    close();
})

document.querySelector('.cancel__button').addEventListener('click', function() {
    close();
})

window.addEventListener('click', function(event) {
    if (event.target == modalContainer) {
        close();
    }
})
