import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, SEARCH_PRODUCT } from "./action";
// reducer.js
const initialState = {
    products: [],
    categories: [],
    loading: false,
    error: false,
    filteredProducts: [], 
    searchProduct: ''
  };
  
  const settings = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_FAILURE:
            return {
                error: true
            };
        case FETCH_PRODUCTS_REQUEST:
            return {
                loading: true
            };
        case FETCH_PRODUCTS_SUCCESS:      
            const categories = [...new Set(action.payload.products.map((product) => product.category))];
            return {
                loading: false,
                error: false,
                categories: categories,
                products: action.payload.products
            }
        case SEARCH_PRODUCT:         
            return {
                ...state, 
                searchProduct: action.payload
            }
      default:
        return state;
    }
  };
  
  export default settings;
  