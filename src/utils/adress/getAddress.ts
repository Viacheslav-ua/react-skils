

export const getAddress = (address: string) => {
  const splittedAddress = address.split(', ');
  return {
    city: splittedAddress[0],
    street: splittedAddress[1],
    homeNumber: splittedAddress[2],
    flatNumber: splittedAddress[3],
  }
}