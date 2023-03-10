const modal = document.querySelector('#modal1')
const opener = document.querySelector('.open')
const cancel = document.querySelector('.modal__cancel')
const confirmer = document.querySelector('.modal__confirm')

console.log(modal)
console.log(opener)
console.log(cancel)
console.log(confirmer)

opener.addEventListener('click', () => {
    modal.style.display = 'block'
})

cancel.addEventListener('click', () => {
    modal.style.display = 'none'
})

confirmer.addEventListener('click', () => {
    console.log('Potwierdzono')
})

document.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key = 'Esc') {
        modal.style.display = 'none'
    }
})