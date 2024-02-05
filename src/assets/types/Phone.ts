export type Phone = {
    id: number,
    name: string,
    description: string;
    price: number,
    provider: {
      id: number,
      name: string
    },
    image: string,
}

export type PhoneDTO = {
    id: number,
    name: string,
    description: string;
    price: number,
    provider: {
      id: number,
      name: string
    },
    image: string,
    cant: number
}
