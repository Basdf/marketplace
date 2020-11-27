import Axios from "axios"

// Type Async Action
export const fetchSearchRequest = "FETCHSEARCHREQUEST"
export const fetchSearchSuccess = "FETCHSEARCHSUCCESS"
export const fetchSearchFailure = "FETCHSEARCHFAILURE"

export const fetchItemRequest = "FETCHDETAILSEARCHREQUEST"
export const fetchItemSuccess = "FETCHDETAILSEARCHSUCCESS"
export const fetchItemFailure = "FETCHDETAILSEARCHFAILURE"

export const buyProduct = "BUYPRODUCT"
export const addProduct = "ADDPRODUCT"

export const buyProductAction = (product) => {
    return {
        type: buyProduct,
        payload: product
    }
}
export const addProductAction = (product) => {
    return {
        type: addProduct,
        payload: product
    }
}

// Async Actions
export const fetchSearchRequestAction = () => {
    return {
        type: fetchSearchRequest,

    }
}
export const fetchSearchSuccessAction = (search) => {
    return {
        type: fetchSearchSuccess,
        payload: search

    }
}
export const fetchSearchFailureAction = (error) => {
    return {
        type: fetchSearchFailure,
        payload: error

    }
}
export const fetchSearchAction = (query) => {
    return (dispatch) => {
        dispatch(fetchSearchRequestAction());
        Axios.get(`https://urlaqui/api/search?q=${query}`)
            .then(response => {
                dispatch(fetchSearchSuccessAction(response))
            })
            .catch(error => {
                dispatch(fetchSearchFailureAction("No product found with that word"))
            })
    }
}

export const fetchItemRequestAction = () => {
    return {
        type: fetchItemRequest,

    }
}
export const fetchItemSuccessAction = (item) => {
    return {
        type: fetchItemSuccess,
        payload: item

    }
}
export const fetchItemFailureAction = (error) => {
    return {
        type: fetchItemFailure,
        payload: error

    }
}

export const fetchItemAction = (id) => {
    return (dispatch) => {
        dispatch(fetchItemRequestAction());
        dispatch(fetchItemFailureAction("Product not found"));
        Axios.get(`https://urlaqui/api/item/${id}`)
            .then(response => {
                dispatch(fetchItemSuccessAction(response))
            })
            .catch(error => {
                dispatch(fetchItemFailureAction("Product not found"))
            })
    }
}
