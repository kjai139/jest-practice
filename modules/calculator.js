class Calculator {
    constructor(){
        
    }
    add = (num1, num2) => {
        if (typeof(num1) == 'number' && typeof(num2) == 'number') {
            return num1 + num2
        }
        throw Error('Invalid input')
    }
    sub = (num1, num2) => {
        if (typeof(num1) == 'number' && typeof(num2) == 'number'){
            return num1 - num2
        }
        throw Error('Invalid input')
    }
    multi = (num1, num2) => {
        if (typeof(num1) == 'number' && typeof(num2) == 'number'){
            return num1 * num2
        }
        throw Error('Invalid input')
    }
    div = (num1, num2) => {
        if (typeof(num1) == 'number' && typeof(num2) == 'number'){
            return num1 / num2
        }
        throw Error('Invalid input')
    }
}

let calculator = new Calculator



export { calculator }