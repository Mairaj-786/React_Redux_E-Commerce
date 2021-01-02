const initState = {
    products: [],
    totlaPrice: 0,
    totalQuintites: 0
}

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, Quintity } = action.payload;

            const check = state.products.find(product => product.id === action.payload.product.id)
            if (check) {
                return state;
            } else {
                const Tprice = state.totlaPrice + product.DiscountPrice * Quintity;
                const Tquientites = state.totalQuintites + Quintity
                product.Quintity = Quintity

                return {
                    ...state, products: [...state.products, product], totalPrice: Tprice,
                    totalQuintites: Tquientites
                }
            }
        default:
            return state;
    }
}

export default CartReducer;