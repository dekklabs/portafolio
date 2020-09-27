import data from './data'

export class Modal {
    constructor(){
        this.modal      = document.getElementById("modalProject");
        this.modalBody  = document.getElementById("modalBody")

        this.modalMyWork();
        this.closeModal();
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

    modalBodyFunc({ name, tech, description, image, width }) {
        console.log(width)
        this.modalBody.innerHTML = `
        <div class="row">
            <div class="col-lg-6">
                <div class="text-center">
                    <img class="" width=${width} src="${image}" alt="${name}" >
                </div>
            </div>
            <div class="col-lg-6">
                <h2 class="f--poppins fw--600 text-white">Name: ${name}</h2>
                <p  class="f--poppins fw--400 text-white">Description: ${description}</p>
                <p  class="f--poppins fw--400 text-white">Tecnology: ${tech}</p>
            </div>
        </div>
        `
    }
}