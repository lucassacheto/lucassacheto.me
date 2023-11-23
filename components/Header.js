class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            
            <div class="title">Lucas Sacheto</div>
            <p>Front End Developer</p>
        `;
    }
}

customElements.define('my-header', Header)