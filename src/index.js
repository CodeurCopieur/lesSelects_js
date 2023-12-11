const tabPrices = [
  {
    price1: "3,00",
    price2: "5,76",
    price3: "7,20",
  },
  {
    price1: "3,00",
    price2: "6,32",
    price3: "7,90",
  },
  {
    price1: "13,00",
    price2: "14,90",
    price3: "14,90",
  },
];

/**
 *
 *
 * @class controlSelect
 */
class controlSelect {
  
  /**
 * @type {Object<HTMLSelectElement>}
 */
  #items
  /**
 * @type {Array<HTMLElement>}
 */
  #lesOptions

  /**
   * 
   * @param {Array<HTMLSelectElement>} lesSelects 
   */
  constructor(lesSelects) {
    this.#items = lesSelects
  }

  selectChange() {
    this.#items.forEach( (item, i) => {

      item.addEventListener('change', (e)=> this.#initPrice(item))
      
      /**
       * @type {Array<HTMLElement>}
       */
      this.#lesOptions = Array.from(item.querySelectorAll('option'))

      this.#initAttribut(this.#lesOptions)
      
    })

    /** @type {object} selectOption */
    var selectOption = localStorage.getItem('selectOption', selectOption)

    if (selectOption) {
      this.#ifselectOption(selectOption)
    } else {
      this.#ifselectOption(undefined)
    }

    
  }
  /**
   * 
   * @param {Array<HTMLOptionElement>} lesElts 
   */
  #initAttribut(lesElts) {

    if (lesElts) {
      lesElts.forEach(function( elt, i) {
        if (i === 0) {
          elt.dataset.price = tabPrices[i]["price1"]
        } else if(i === 1) {
          elt.dataset.price = tabPrices[i]["price2"]
        } else {
          elt.dataset.price = tabPrices[i]["price3"]
        }
      })
    }
  }
  /**
   * 
   * @param {HTMLELEMENT} item 
   */
  #initPrice(item) {
     /**
    * @type {string} selectValue
    */
    var selectValue = item.options[item.selectedIndex].value
    /**
     * @type {HTMLELEMENT} target
     */
    var target = item

    localStorage.setItem('selectOption', selectValue)

    if (selectValue === 'option1') {
      this.#updateTarifs([tabPrices[0]["price1"], tabPrices[1]["price1"], tabPrices[2]["price1"]], '18-24') 
    } else if(selectValue === 'option2') {
      this.#updateTarifs([tabPrices[0]["price2"], tabPrices[1]["price2"], tabPrices[2]["price2"]], '25-29') 
    } else {
      this.#updateTarifs([tabPrices[0]["price3"], tabPrices[1]["price3"], tabPrices[2]["price3"]], '30-99') 
    }


    var others = this.#items.filter( item => {
      return item !== target
    })

    for (const key in others) {
        others[key].value = target.value
    }

  }

  #updateTarifs(tabTarifs, text) {

    for (let index = 0; index < this.#items.length; index++) {

      /** @type {HTMLELEMENT} element */
      const element = this.#items[index];

      var eltPrice = element.parentElement.nextElementSibling;
      var price = eltPrice.firstElementChild;
      var link = eltPrice.nextElementSibling;

      link.textContent = `productId=10${index+1}&ageId=${text}`
      price.textContent = tabTarifs[index] + ' €'
    }
    
  }

  #ifselectOption(value) {


    for (const key in this.#items) {
      if (value) {
        this.#items[key].value = value

        if (value === 'option1') {
          this.#updateTarifs([tabPrices[0]["price1"], tabPrices[1]["price1"], tabPrices[2]["price1"]], '18-24') 
        } else if(value === 'option2') {
          this.#updateTarifs([tabPrices[0]["price2"], tabPrices[1]["price2"], tabPrices[2]["price2"]], '25-29') 
        }else {
          this.#updateTarifs([tabPrices[0]["price3"], tabPrices[1]["price3"], tabPrices[2]["price3"]], '30-99')
        }
      } else {
        this.#items[key].value = 'option1'
        this.#updateTarifs([tabPrices[0]["price1"], tabPrices[1]["price1"], tabPrices[2]["price1"]], '18-24') 
      }
    }
  }
}

addEventListener('load', function () {
  /** @type {Array<HTMLSelectElement>} items */
  const items = Array.from(document.querySelectorAll('select[data-select]'))
  
    new controlSelect(items)
      .selectChange()
})