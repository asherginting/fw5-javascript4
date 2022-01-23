const divideAndSort = (num) => {

    let text = num.toString().split('0')
    text = text.map(e => {
  
      let text = e.split('')
      text = text.sort()
      text = text.join('')
  
      return text
    })
  
    text = parseInt( text.join('') )
  
    return text;
  }
  
  console.log(divideAndSort(5956560159466056))