export class Home {
    constructor() {
        this.scrollMovement();
        this.activeNav()
    }
    scrollMovement() {
        this.moveScroll("down", "aboutme")

        this.moveScroll("btnaboutmeportada", "aboutme")

        this.moveScroll("homebtn", "portada")
        this.moveScroll("aboutbtn", "aboutme")
        this.moveScroll("resumenbtn", "resume")
        this.moveScroll("myworkbtn", "mywork")
    }

    moveScroll(scroll, section) {
        let btn = document.getElementById(`${scroll}`)
        let sizeSection = document.getElementById(`${section}`).offsetTop
        if( btn ) {
            btn.addEventListener("click", () => {
                window.scrollTo({
                    top: sizeSection,
                    behavior: 'smooth'
                })
            })
        }
    }

    activeNav() {
        const portada   = document.getElementById("portada").offsetTop
        const aboutme   = document.getElementById("aboutme").offsetTop
        const resume    = document.getElementById("resume").offsetTop
        const mywork    = document.getElementById("mywork").offsetTop

        const homebtn = document.getElementById("homebtn")
        const aboutbtn = document.getElementById("aboutbtn")
        const resumenbtn = document.getElementById("resumenbtn")
        const myworkbtn = document.getElementById("myworkbtn")

        window.addEventListener("scroll", () => {
            let scroll = window.scrollY
            if( scroll ==  portada ) {
                homebtn.classList.add("active")
                aboutbtn.classList.remove("active")
                resumenbtn.classList.remove("active")
                myworkbtn.classList.remove("active")
            } else if( scroll == aboutme ) {
                aboutbtn.classList.add("active")
                homebtn.classList.remove("active")
                resumenbtn.classList.remove("active")
                myworkbtn.classList.remove("active")

            } else if ( scroll == resume ) {
                homebtn.classList.remove("active")
                aboutbtn.classList.remove("active")
                resumenbtn.classList.add("active")
                myworkbtn.classList.remove("active")

            } else if( scroll == mywork ) {
                homebtn.classList.remove("active")
                aboutbtn.classList.remove("active")
                resumenbtn.classList.remove("active")
                myworkbtn.classList.add("active")
            }
        })
    }
}