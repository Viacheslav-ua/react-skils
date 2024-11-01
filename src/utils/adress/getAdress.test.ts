import { describe, expect, it } from "vitest";
import { getAddress } from "./getAddress";


describe.concurrent('basic test', () => {
  it('creating address', () => {
    const strAddress = 'Kyiv, Kreschatyk str., 2, 22'
    const expectedAddress = {
      city: 'Kyiv',
      street: 'Kreschatyk str.',
      homeNumber: '2',
      flatNumber: '22',
    }

    expect(getAddress(strAddress)).toEqual(expectedAddress)
  })

  it('part address', () => {
    const strAddress = 'Kyiv, Kreschatyk str., 2, 22'
    const expectedAdress = {
      city: 'Kyiv',
      street: 'Kreschatyk str.',
      homeNumber: '2',
      flatNumber: '22',
    }

    expect(getAddress(strAddress)).toMatchObject(expectedAdress)
  })
 
  
})