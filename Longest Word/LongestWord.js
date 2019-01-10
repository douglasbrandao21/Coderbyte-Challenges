function LongestWord(str) {

    let aux = ''
    let strArray = new Array()

    for (let i = 0; i < str.length; i++) {
        if (i == str.length - 1) {
            aux += str[i]
            strArray.push(aux)
            aux = ''
        }
        else if (str[i] == ' ') {
            strArray.push(aux)
            aux = ''
        }
        else {
            aux += str[i]
        }
    }

    let bigger = strArray[0].length
    let posBigger = 0

    for (let i = 0; i < strArray.length; i++) {
        if (bigger < strArray[i].length) {
            bigger = strArray[i].length
            posBigger = i
        }
    }
    return strArray[posBigger]
}
// keep this function call here 
LongestWord(readline());