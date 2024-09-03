import {Product} from "./interfaces";

export const products: Product[] = [
    {
        name: 'Golden Retriever',
        image: 'data:image/jpeg;base64,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',
        price: 1600,
        quantity: 0
    },
    {
        name: 'Berger australien',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkma-8XBc0UJTxQx71rBr96gihuMdWf8TvGA&s',
        price: 1300,
        quantity: 0
    },
    {
        name: 'Berger Allemand',
        image: 'data:image/jpeg;base64,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',
        price: 2000,
        quantity: 0
    }
];
