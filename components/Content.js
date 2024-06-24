class Content extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            
            <a href="http://www.linkedin.com/in/lucassacheto"  target="_blank">LinkedIn</a>
            <a href="http://www.github.com/lucassacheto" target="_blank">GitHub</a>
            <a href="https://dev.to/lucassacheto" target="_blank">Dev.to</a>
            <a href="http://www.x.com/eusouoluks" target="_blank">X</a>
            <a href="http://www.instagram.com/eusouoluks" target="_blank">Instagram</a>
            <p>@2024</p> 
        `;
    }
}

customElements.define('my-content', Content)