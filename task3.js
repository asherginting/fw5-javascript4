function divideAndSort(number) {
  return + number
      .toString()
      .split('0')
      .map(s => Array.from(s).sort().join(''))
      .join('');
}

console.log(divideAndSort(5956560159466056));