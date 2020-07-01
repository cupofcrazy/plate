// GSAP Module required for animations
// Run "npm install gsap"
import gsap, { Expo } from 'gsap'


export default class InView {
    constructor(elements) {
        this.entries = []
        elements.forEach(el => this.entries.push({ el }))
    }
    fadeIn(el) {
        gsap.from(el, 1, {
            autoAlpha: 0,
            scale: 0.75,
            ease: Expo.easeOut
        })
    }
    slideUp(el) {
        gsap.from(el, 1, {
            y: 200,
            autoAlpha: 0,
            ease: Expo.easeOut
        })
    }
    slideLeft(el) {
        gsap.from(el, 1, {
            x: -200,
            autoAlpha: 0,
            ease: Expo.easeOut
        })
    }
    slideRight(el) {
        gsap.from(el, 1, {
            x: 200,
            autoAlpha: 0,
            ease: Expo.easeOut
        })
    }
    slideDown(el) {
        gsap.from(el, 1, {
            y: -200,
            autoAlpha: 0,
            ease: Expo.easeOut
        })
    }
    init() {
        this.onScroll()
        window.addEventListener('scroll', e => this.onScroll())
    }
    cancel() {
        console.log('scroll cancel')
        window.removeEventListener('scroll', e => this.onScroll())
    }
    onScroll() {
        this.entries.forEach(entry => {
            const { el } = entry
            const bounding = el.getBoundingClientRect()
            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth + (bounding.width / 2) || document.documentElement.clientWidth + (bounding.width / 2)) &&
                bounding.bottom <= (window.innerHeight + (bounding.height / 2) || document.documentElement.clientHeight + (bounding.height / 2)) && !el.classList.contains('in-view')
            )
            {
                // Conditional
                el.classList.add('in-view')

                
                
                switch (el.getAttribute('data-animate')) {
                    case 'fadeIn':
                        this.fadeIn(el);
                        break;
                    case 'slideUp':
                        this.slideUp(el);
                        break;
                    case 'slideLeft':
                        this.slideLeft(el);
                        break;
                    case 'slideRight':
                        this.slideRight(el);
                        break;
                    case 'slideDown':
                        this.slideDown(el);
                        break;
                    default:
                        this.fadeIn(el)
                        break;
                }
                
            }
        })
        
    }

}