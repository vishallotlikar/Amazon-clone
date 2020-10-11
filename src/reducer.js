export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {
    console.log('action', action)
    console.log('state', state)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding items to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            // Logic for removing items from basket
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in the basket`)
            }

            return {
                ...state,
                basket: newBasket
            };
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        default:
            return state;
    }
};

// selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

export default reducer;