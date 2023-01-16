class ExcerptItem extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set excerpt(excerpt) {
        this._excerpt = excerpt;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;   
            }
            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 20px;
                overflow: hidden;
                background-color: #6867AC;
            }
            .excerpt-info {
                padding: 24px;
                color: #FFBCD1;
            }
            .excerpt-info > h2 {
                font-weight: lighter;
            }
            .excerpt-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
        </style>
        <div class="excerpt-info">
            <h2>${this._excerpt.anime}</h2>
            <p>${this._excerpt.english}</p>
            <p>${this._excerpt.indo}</p>
            <blockquote>
            <footer>- <cite>${this._excerpt.character}</cite></footer>
            </blockquote> 
        </div>
        `;
    }
}

customElements.define('excerpt-item', ExcerptItem);