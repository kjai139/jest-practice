const reverseString = (str) => {
    let result = []
    for (let x = 0; str.length > x; x++){
        result.unshift(str[x])
    }
    return result.join('')
}



export {reverseString}