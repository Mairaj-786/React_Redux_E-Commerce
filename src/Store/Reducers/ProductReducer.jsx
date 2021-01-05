const initState = {
    products: [
        {
            id: 1, name: 'Denim Jacket', image: '5.jpg', price: 99, discount: 3,
            DiscountPrice: 99 - 3 / 100 * 20, quintity: 1
        },
        {
            id: 2, name: 'Denim Jacket', image: '6.jpg', price: 90, discount: 2,
            DiscountPrice: 90 - 5 / 100 * 20, quintity: 1
        },
        {
            id: 3, name: 'Denim Jacket', image: '7.jpg', price: 69, discount: 2,
            DiscountPrice: 69 - 2 / 100 * 20, quintity: 1
        },
        {
            id: 4, name: 'Denim Jacket', image: '8.jpg', price: 50, discount: 2,
            DiscountPrice: 50 - 4 / 100 * 20, quintity: 1
        },
        {
            id: 5, name: 'Denim Jacket', image: '9.jpg', price: 20, discount: 2,
            DiscountPrice: 20 - 2 / 100 * 20, quintity: 1
        },
        {
            id: 6, name: 'Denim Jacket', image: '10.jpg', price: 100, discount: 2,
            DiscountPrice: 100 - 10 / 100 * 20, quintity: 1
        },
        {
            id: 7, name: 'Denim Jacket', image: '11.jpg', price: 100, discount: 2,
            DiscountPrice: 100 - 20 / 100 * 20, quintity: 1
        },
        {
            id: 8, name: 'Denim Jacket', image: '12.jpg', price: 100, discount: 2,
            DiscountPrice: 100 - 12 / 100 * 20, quintity: 1
        }
    ],
    kids: [
        {
            id: 1, name: 'Denim Jacket', image: '1.jpg', price: 20, discount: 2,
            DiscountPrice: 20 - 2 / 100 * 20, quintity: 1
        },
        {
            id: 2, name: 'Denim Jacket', image: '2.jpg', price: 100, discount: 2,
            DiscountPrice: 100 - 10 / 100 * 20, quintity: 1
        },
        {
            id: 3, name: 'Denim Jacket', image: '3.jpg', price: 100, discount: 2,
            DiscountPrice: 100 - 20 / 100 * 20, quintity: 1
        },
        {
            id: 4, name: 'Denim Jacket', image: '4.jpg', price: 100, discount: 2,
            DiscountPrice: 100 - 12 / 100 * 20, quintity: 1
        },
        {
            id: 5, name: 'Denim Jacket', image: '5.jpg', price: 100, discount: 2,
            DiscountPrice: 100 - 12 / 100 * 20, quintity: 1
        },
        {
            id: 6, name: 'Denim Jacket', image: '6.jpg', price: 100, discount: 2,
            DiscountPrice: 100 - 12 / 100 * 20, quintity: 1
        },
        {
            id: 7, name: 'Denim Jacket', image: '7.jpg', price: 100, discount: 2,
            DiscountPrice: 100 - 12 / 100 * 20, quintity: 1
        },
        {
            id: 8, name: 'Denim Jacket', image: '8.jpg', price: 100, discount: 2,
            DiscountPrice: 100 - 12 / 100 * 20, quintity: 1
        }

    ],
    product: {},
    kid: {}
}


const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: state.products.find(product => product.id === parseInt(action.id)) }
        default:
            return state;

        case "KIDS":
            return { ...state, kid: state.kids.find(kid => kid.id === parseInt(action.id)) }
    }
}

export default ProductReducer;