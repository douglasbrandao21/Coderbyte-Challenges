function FirstFactorial(num) {

    let result = num;

    if(num == 0 || num == 1){
        return 1
    }
    else {
        for(let i=num-1; i>0; i--) {
            result *= i;
        }
    }
    return result;

}