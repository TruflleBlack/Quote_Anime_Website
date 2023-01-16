class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML =`
        <style>
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Kanit', sans-serif;
            }
            :host {
                display: block;
                width: 100%;
                background-color: #6867AC;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                color: #FFBCD1;
              }
            h2 {
                padding: 20px;
            }
        </style>

        <h2>"Quote" Anime</h2>
        `;
    }
}

customElements.define('app-bar', AppBar);