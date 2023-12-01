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

      this.#initAttribut(this.#lesOptions)
    })
  }

  #initAttribut(lesElts) {
    // console.log(lesElts);

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

  #initPrice(elt) {
    console.log(elt);
  }
}


addEventListener('load', function () {
  const items = Array.from(document.querySelectorAll('select[data-select]'))
  
  // items.forEach( item => {
    new controlSelect(items)
      .selectChange()
  // })
})