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
  #items
  #lesOptions

  constructor(lesSelects) {
    this.#items = lesSelects
  }

  selectChange() {
    this.#items.forEach( (item, i) => {

      if (i === 0) {
        item.dataset.offres = "cb-visa-evolution";
      } else if(i === 1) {
        item.dataset.offres = "cb-visa-classic";
      } else {
        item.dataset.offres = "cb-visa-premier";
      }
      
      item.addEventListener('change', (e)=> this.#initPrice(item))
      
      
      this.#lesOptions = Array.from(item.querySelectorAll('option'))
      console.log(this.#lesOptions);

      this.#initAttribut(this.#lesOptions)
      
    })

    var selectOption = localStorage.getItem('selectOption', selectOption)

    if (selectOption) {
      this.#ifselectOption(selectOption)
    } else {
      this.#ifselectOption(undefined)
    }

    
  }

  #initAttribut(lesElts) {

    if (lesElts) {
      lesElts.forEach(function( elt, i) {
        if (i === 0) {
          elt.dataset.price = tabPrices[i]["price1"]
          elt.dataset.age = "18-24";
        } else if(i === 1) {
          elt.dataset.price = tabPrices[i]["price2"]
          elt.dataset.age = "25-29";
        } else {
          elt.dataset.price = tabPrices[i]["price3"]
          elt.dataset.age = "30-et-plus";
        }
      })
    }
  }

  #initPrice(item) {
     /**
    * @type {string}
    */
    var selectValue = item.options[item.selectedIndex].value
    /**
     * @type {object}
     */
    var target = item

    localStorage.setItem('selectOption', selectValue)

    if (selectValue === 'option1') {
      this.#updateTarifs(['3,00', '3,00', '13,00']) 
    } else if(selectValue === 'option2') {
      this.#updateTarifs(['5,76', '6,32', '14,90']) 
    } else {
      this.#updateTarifs(['7,20', '7,90', '14,90']) 
    }


    var others = this.#items.filter( item => {
      return item !== target
    })

    for (const key in others) {
        others[key].value = target.value
    }

  }

  #updateTarifs(tabTarifs) {

    for (let index = 0; index < this.#items.length; index++) {
      const element = this.#items[index];

      var eltPrice = element.parentElement.nextElementSibling;
      var price = eltPrice.firstElementChild;
  
      price.textContent = tabTarifs[index] + ' €'
    }
    
  }

  #ifselectOption(value) {


    for (const key in this.#items) {
      if (value) {
        this.#items[key].value = value

        if (value === 'option1') {
          this.#updateTarifs(['3,00', '3,00', '13,00']) 
        } else if(value === 'option2') {
          this.#updateTarifs(['5,76', '6,32', '14,90']) 
        }else {
          this.#updateTarifs(['7,20', '7,90', '14,90'])
        }
      } else {
        this.#items[key].value = 'option1'
        this.#updateTarifs(['3,00', '3,00', '13,00']) 
      }
    }
  }

  // #foundEltPrice(elt) {
  //   var priceSelectDefault = elt.options[elt.selectedIndex].dataset.price;
  //   var eltPrice = elt.parentElement.nextElementSibling;
  //   var price = eltPrice.firstElementChild;

  //   price.innerHTML = priceSelectDefault
  // }
}


addEventListener('load', function () {
  /** @type {*} */
  const items = Array.from(document.querySelectorAll('select[data-select]'))
  
  // items.forEach( item => {
    new controlSelect(items)
      .selectChange()
  // })
})