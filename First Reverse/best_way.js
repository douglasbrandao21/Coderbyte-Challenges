function FirstReverse(str) {

    //split the string into a array
    let aux = str.split('')
    
    //Reverse the elements of a array
    aux.reverse()
    //Join the elements of a array into a String
    return aux.join('')
}

console.log(FirstReverse('Douglas'))