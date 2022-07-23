'use strict'

const nav = document.querySelector('.nav')
const title = document.querySelector('.container-title')


const onIntersection = (changes) => {
    console.log(changes);
    changes.forEach(change => {
        if (change.isIntersecting) {
            title.classList.remove('fixed')
        } else {
            title.classList.add('fixed')
        }
    })
}

const observer = new IntersectionObserver(onIntersection, {
    threshold: 0
})

observer.observe(nav)