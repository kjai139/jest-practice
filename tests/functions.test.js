import { capitalizeStr } from "../modules/capitalize"
import { reverseString } from "../modules/reverseString"
import { calculator } from "../modules/calculator"
import { caesarCipher } from "../modules/caesar-cipher"


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