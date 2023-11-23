class Menu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            
            <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">works</a></li>
                <li><a href="#">extra</a></li>
                <li><a href="#">contact</a></li>
            </ul>
            
        `;
    }
}

customElements.define('my-menu', Menu)