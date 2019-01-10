function LetterChanges(str) {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let newString = ''

    for (let i = 0; i < str.length; i++) {

        if (numbers.indexOf(str[i]) == -1 && alphabet.indexOf(str[i]) != -1) {
            let newIndex = alphabet.indexOf(str[i]) + 1

            if (vowel.indexOf(alphabet[newIndex]) != -1) {
                newString += alphabet[newIndex].toUpperCase()
            } else {
                newString += alphabet[newIndex]
            }

        } else {
            newString += str[i]
        }

    }

    return newString;
}