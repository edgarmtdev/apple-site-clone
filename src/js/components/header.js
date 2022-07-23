'use strict'

const header = document.querySelector('.head-card')
const dataCard = document.querySelector('.data-card')
const gallery = document.querySelector('.gallery')

const onIntersection = (changes) => {
    changes.forEach(change => {
        if (change.isIntersecting) {
            dataCard.classList.add('fixed-card')
        } else {
            dataCard.classList.remove('fixed-card')
        }
    })
}

const observer = new IntersectionObserver(onIntersection, {
    threshold: 0
})

observer.observe(header)