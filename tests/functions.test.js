import { capitalizeStr } from "../modules/capitalize"


it('capitalize first char', () => {
    expect(capitalizeStr('hey there')).toMatch('Hey there')
})


