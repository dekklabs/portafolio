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

    modalBodyFunc({ name, tech, description, image, github, date, url }) {
        this.modalBody.innerHTML = `
        <div class="row">
            <div class="col-lg-12 mb-2">
                <h2 class="f--poppins fw--600 text-white text-center">Name: ${name}</h2>
            </div>
            <div class="col-lg-6">
                <div class="text-center">
                    <img src="${image}" alt="${name}" >
                </div>
            </div>
            <div class="col-lg-6">
                <div class="bloq">
                    <h3 class="f--poppins fw--600 text-white">Info Project:</h3>
                    <p  class="f--poppins fw--400 text-white">Description: ${description}</p>
                    <hr>
                    <h3 class="f--poppins fw--600 text-white mb-4">Project Details:<h3>
                    <div class="d-flex align-items-center">
                        <h4 class="f--poppins fw--600 text-white mr-2">Technology: </h4>
                        <p  class="f--poppins fw--400 text-white tech">${tech}</p>
                    </div>
                    <hr>
                    <div class="d-flex align-items-center">
                        <h4 class="f--poppins fw--600 text-white mr-2">Repositorio: </h4>
                        <a class="f--poppins fw--400 text-white" href="${github !== "sin repositorio" ? github : "#"}" target="_blank" rel="noopener noreferrer">${github}</a>
                    </div>
                    <hr>
                    <div class="d-flex align-items-center">
                        <h4 class="f--poppins fw--600 text-white mr-2">Date: </h4>
                        <p  class="f--poppins fw--400 text-white tech">${date}</p>
                    </div>
                    <hr>
                    <div class="d-flex align-items-center">
                        <h4 class="f--poppins fw--600 text-white mr-2">URL: </h4>
                        <a class="f--poppins fw--400 text-white" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}