export class Home {
    constructor() {
        /*this.modal      = document.getElementById("modalProject");
        this.modalBody  = document.querySelectorAll(".modal-body")*/

        this.scrollMovement();
        this.activeNav();

        /*this.modalMyWork();
        this.closeModal()*/
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

/*
    modalMyWork() {
        const __self = this;

        const box = document.querySelectorAll(".box")
        
        for( let i = 0; i < box.length; i++ ) {
            let res = box[i]
            res.addEventListener('click', () => {
                this.modal.classList.add("show")
                this.modal.classList.add("activemodal")
                __self.openModalBody(res)
            })
        }
    }

    openModalBody(res) {
        let __self = this
        if( res ) {
            let id = res.getAttribute("class").split(" ")[2]
            
            let resData = __self.getProject(id)
            __self.modalBodyFunc(resData)
        }
    }
    
    getProject(id) {
        let resData = data.find( data => data.id === id )
        return resData
    }

    closeModal() {
        const close = document.querySelector(".close")
        if( close ) {
            close.addEventListener("click", () => {
                this.modal.classList.remove("show")
                this.modal.classList.remove("activemodal")
            })
        }
    }

    modalBodyFunc({ name, tech }) {
        console.log(name)
        this.modalBody.innerHTML = `
            <h3>${name}</h3>
        `
    }
*/
}