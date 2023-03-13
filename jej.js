const modal = document.querySelectorAll('.modal')
const opener = document.querySelectorAll('.open-modal')
const cancel = document.querySelectorAll('.modal__cancel')
const confirmer = document.querySelectorAll('.modal__confirm')
const content = document.querySelectorAll('.modal__content')
let activeModal = null

function openModal(id) {
    const l = document.querySelector(id)
    if (l == null) {
        throw new Error('Błędne ID')
    }
    activeModal = id
    l.style.removeProperty('display')
    setTimeout(() => {l.classList.add('active')}, 1)
}

function hideModal(id) {
    const l = document.querySelector(id)
    if (l == null) {
        throw new Error('Błędne ID')
    }
    activeModal = null
    l.classList.remove('active')
    setTimeout(() => {l.style.display = 'none'}, 200)
}

for (const element of opener) {
    element.addEventListener('click', (event) => {
        openModal(event.target.getAttribute('data-modal'))
    })
}

for (const element of cancel) {
    element.addEventListener('click', (event) => {
        hideModal(event.target.getAttribute('data-modal'))
    })
}

for (const element of confirmer) {
    element.addEventListener('click', () => {
        console.log('Potwierdzono')
    })    
}

for (const element of modal) {
    element.addEventListener('click', (event) => {
        hideModal('#' + event.target.getAttribute('id'))
    })
}

for (const element of content) {
    element.addEventListener('click', (event) => {
        event.stopPropagation()
    })
}

document.addEventListener('keydown', (event) => {
    if (activeModal != null && event.key == 'Escape') {
        hideModal(activeModal)
    }
})