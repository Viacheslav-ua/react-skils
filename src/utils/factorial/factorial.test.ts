import { describe, expect, it } from 'vitest'
import { factorial } from './factorial'

type Test = {
  input: number
  output: number
}

describe.each([
  {
    input: 0,
    output: 1,
  },
  {
    input: 1,
    output: 1,
  },
  {
    input: 5,
    output: 120,
  }
])('positive test', ({ input, output }: Test) => {
  it(`test ${input}! equals ${output}`, () => {
    expect(factorial(input)).toEqual(output)
   })
})

describe('negative test', () => {
  it('test negative number input', () => {
    expect(() => factorial(-1)).toThrowError('Negative number input')
  })
})