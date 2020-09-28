export class Header {
    constructor() {
        this.bars = document.getElementById("bars")

        this.openAndClose()
        this.closeMenuItem()
    }
    openAndClose() {
        if( this.bars ) {
            this.bars.addEventListener("click", () => {
                const navbar = document.querySelector(".navbar")
                navbar.classList.toggle("active")
            })
        }
    }
    closeMenuItem() {
        const navbar = document.querySelectorAll(".navbar .lista li")
        for( let i =0; i < navbar.length; i++ ) {
            let item = navbar[i]
            item.addEventListener("click", () => {
                this.bars.click()
            })
        }
    }
}