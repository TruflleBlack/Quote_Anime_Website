import './excerpt-item.js';

class ExcerptList extends HTMLElement{
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set excerpts(excerpts) {
        this._excerpts = excerpts;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = '';

        this._excerpts.forEach(excerpt => {
            const excerptItemElement = document.createElement('excerpt-item');
            excerptItemElement.excerpt = excerpt;
            this.shadowDOM.appendChild(excerptItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
          <style>
            .placeholder {
              font-weight: lighter;
              color: rgba(0,0,0,0.5);
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          </style>
        `;
    
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('excerpt-list', ExcerptList);