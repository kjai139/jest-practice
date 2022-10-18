import { capitalizeStr } from "../modules/capitalize"
import { reverseString } from "../modules/reverseString"
import { calculator } from "../modules/calculator"
import { caesarCipher } from "../modules/caesar-cipher"
import { analyzeArray } from "../modules/analyzeArray"


it('capitalize first char', () => {
    expect(capitalizeStr('hey there')).toMatch('Hey there')
})


it('reverse string', () => {
    expect(reverseString('reverse this string')).toMatch('gnirts siht esrever')
})

it('add number with calculator', () => {
    expect(calculator.add(12, 13)).toEqual(25)
})

it('subtract with calculator', () => {
    expect(calculator.sub(24, 12)).toEqual(12)
})

it('multiply with calculator', () => {
    expect(calculator.multi(2, 6)).toEqual(12)
})

it('divide with calculator', () => {
    expect(calculator.div(24, 12)).toEqual(2)
})

it('calculator invalid input', () => {
    expect(() => 
        calculator.add('num', 12)).toThrow(Error('Invalid input'))
})

it('caesar cipher', () => {
    expect(caesarCipher('defend the east wall of the castlez')).toMatch('efgfoe uif fbtu xbmm pg uif dbtumfa')
})

it('caesar cipher 2 /w uppercase', () => {
    expect(caesarCipher('helloz MAN!')).toMatch('ifmmpa NBO!')
})

it('caesar cipher 3 /w 2 shifts', () => {
    expect(caesarCipher('helloz MAN!', 2)).toMatch('jgnnqb OCP!')
})

let array1 = analyzeArray([1, 8, 3, 4, 2, 6])
it('analyze array 1', () => {
    expect(array1.average).toEqual(4)
    expect(array1.min).toEqual(1)
    expect(array1.max).toEqual(8)
    expect(array1.length).toEqual(6)
})

let array2 = analyzeArray([2, 5, 11, 0, 23, 21])
it('analyze array 2', () => {
    expect(array2.average).toBeCloseTo(10.33)
    expect(array2.min).toEqual(0)
    expect(array2.max).toEqual(23)
    expect(array2.length).toEqual(6)
})