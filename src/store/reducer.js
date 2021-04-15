import * as actionTypes from './actions';

const initialState = {
    flavors: {
        chocolate: 0,
        strawberry: 0,
        vanilla: 0
    },
    price: 0
};

const FLAVOR_PRICES = {
    chocolate: 1.5,
    strawberry: 2,
    vanilla:1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FLAVOR:
            return {
                ...state, 
                flavors: {
                    ...state.flavors, 
                    [action.flavorName]: state.flavors[action.flavorName] + 1
                },
                price: state.price + FLAVOR_PRICES[action.flavorName]
            };
        case actionTypes.REMOVE_FLAVOR:
                return {
                    ...state, 
                    flavors: {
                        ...state.flavors, 
                        [action.flavorName]: state.flavors[action.flavorName] - 1
                    },
                    price: state.price - FLAVOR_PRICES[action.flavorName]
                };
        default:
            return state;
    }
};

export default reducer;

