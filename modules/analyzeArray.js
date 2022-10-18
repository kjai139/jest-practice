const analyzeArray = (array) => {

    const total = array.reduce((prev, cur) => 
        prev + cur, 0
    )
    const length = array.length
    const avg = total / length
    const min = array.reduce((prev, cur) => {
        let min = prev
        
        if (cur < prev){
            min = cur
            
        }
        return min
    })

    const max = array.reduce((prev, cur) => {
        let max = prev
        if (cur > prev) {
            max = cur
        }
        return max
    })
        
    
   return { average: avg, min: min, max: max, length: length }
    

    
}



export { analyzeArray }