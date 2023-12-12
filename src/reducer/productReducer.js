const ProductReducer = (state, action) => {

    switch (action.type) {

        case "LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "API_DATA":
            const even = action.payload[0].filter((data) => {
                return data.id % 2 === 0;
            });
            const odd = action.payload[0].filter((data) => {
                return data.id % 2 != 0;
            });
            const all_even = action.payload[1].filter((data) => {
                return data.id % 2 === 0;
            });
            const all_odd = action.payload[1].filter((data) => {
                return data.id % 2 != 0;
            });


            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload[0],
                even: even,
                odd: odd,
                all_products: action.payload[1],
                all_even: all_even,
                all_odd: all_odd,
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }

}

export default ProductReducer;