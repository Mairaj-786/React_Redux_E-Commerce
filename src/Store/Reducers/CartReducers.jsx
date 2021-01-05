
const initState = {
    products: [],
    totlaPrice: 0,
    totalQuintites: 0
}
const CartReducer = (state = initState, action) => {
    let findpro;
    let index;
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
        case 'INC':
            findpro = state.products.find(product => product.id === action.payload)
            index = state.products.find(product => product.od === action.payload)
            findpro.Quintity += 1;
            state.products[index] = findpro;
            return {
                ...state,
                totlaPrice: state.totlaPrice + findpro.DiscountPrice, totalQuintites: state.totalQuintites + 1
            }
        case 'DEC':
            findpro = state.products.find(product => product.id === action.payload)
            index = state.products.find(product => product.id === action.payload)
            if (findpro.Quintity > 1) {
                findpro.Quintity -= 1;
                state.products[index] = findpro;
                return {
                    ...state,
                    totlaPrice: state.totlaPrice - findpro.DiscountPrice, totalQuintites: state.totalQuintites - 1
                }

            } else {
                return state;
            }
        default:
            return state;
    }
}

export default CartReducer;