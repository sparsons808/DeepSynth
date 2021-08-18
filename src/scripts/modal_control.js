class Modal {
    constructor () {

        this.modalOpenClose();
    }

    modalOpenClose () {
        const info = document.querySelector('.modal-button');
        const container = document.querySelector('.modal-container');

        info.addEventListener('click', (event) => {
            container.classList.add('live');
        });

        const close = document.querySelector('.close')

        close.addEventListener('click', (event) => {
            container.classList.remove('live');
        });
    };
}

export default Modal;