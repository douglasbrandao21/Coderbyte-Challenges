function firstReverse(str) {

    let aux = ''

    for(let i=0; i<str.length; i++) {
        aux += str[str.length-(i+1)]
    }

    return aux
}

console.log(firstReverse('Douglas Brandão dos Santos'))