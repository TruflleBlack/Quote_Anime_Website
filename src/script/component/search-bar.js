class SearchBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
  
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          .search-container {
            min-width: 400px;
            box-shadow: 0 0px 2px 0 rgba(0, 0, 0, 0.2);
            padding: 10px;
            border-radius: 0;
            display: flex;
            position: sticky;
            top: 2px;
            background-color: #FFBCD1;
          }
         
          .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid #FFBCD1;
            font-weight: bold;
            background-color: #6867AC;
          }
         
          .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #FFBCD1;
          }
         
          .search-container > input:focus::placeholder {
            font-weight: bold;
          }
          
          .search-container >  input::placeholder {
            color: #FFBCD1;
            font-weight: normal;
          }
         
          .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #6867AC;
            color: #FFBCD1;
            border: 0;
            text-transform: uppercase;
          }
         
          @media screen and (max-width: 550px){
            .search-container {
              flex-direction: column;
              position: static;
            }
       
            .search-container > input {
              width: 100%;
              margin-bottom: 12px;
            }
       
            .search-container > button {
              width: 100%;
            }
          }
        </style>
        
        <div id="search-container" class="search-container">
          <input placeholder="Cari Kata" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;
  
      this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
  }
  
  customElements.define('search-bar', SearchBar);