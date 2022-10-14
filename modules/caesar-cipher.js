const caesarCipher = (str, shift=1) => {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']

    let result =[]

    for (let x = 0; str.length > x; x ++) {
        // console.log(arr.indexOf(str[x]))
      

        if (arr.indexOf(str[x]) == -1) {
            result.push(' ')
        }else {
            let index = arr.indexOf(str[x]) + shift
            console.log(index)

            if (index > 25) {
                index -= 26
            }
            let letter = arr[index]
            result.push(letter)
        }
    }

    return result.join('')

}

export {caesarCipher}