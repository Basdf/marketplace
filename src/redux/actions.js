import { searchItems, itemDetail } from '../service/apis'
// Type Async Action
export const fetchSearchRequest = "FETCHSEARCHREQUEST"
export const fetchSearchSuccess = "FETCHSEARCHSUCCESS"
export const fetchSearchFailure = "FETCHSEARCHFAILURE"

export const fetchItemRequest = "FETCHDETAILSEARCHREQUEST"
export const fetchItemSuccess = "FETCHDETAILSEARCHSUCCESS"
export const fetchItemFailure = "FETCHDETAILSEARCHFAILURE"

export const buyProduct = "BUYPRODUCT"
export const addProduct = "ADDPRODUCT"
export const removeProduct = "REMOVEPRODUCT"


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
export const removeProductAction = (product) => {
    return {
        type: removeProduct,
        payload: product
    }
}

// Async Actions
const fetchSearchRequestAction = () => {
    return {
        type: fetchSearchRequest,

    }
}
const fetchSearchSuccessAction = (search) => {
    return {
        type: fetchSearchSuccess,
        payload: search

    }
}
const fetchSearchFailureAction = (error) => {
    return {
        type: fetchSearchFailure,
        payload: error

    }
}
export const fetchSearchAction = (query) => {
    return async (dispatch) => {

        dispatch(fetchSearchRequestAction())
        let response = await searchItems(query).catch(() => { })
        if (response[0].items.length) {
            dispatch(fetchSearchSuccessAction(response))
        } else {
            dispatch(fetchSearchFailureAction("No product found with that word"))
        }
    }
}

const fetchItemRequestAction = () => {
    return {
        type: fetchItemRequest,

    }
}
const fetchItemSuccessAction = (item) => {
    return {
        type: fetchItemSuccess,
        payload: item

    }
}
const fetchItemFailureAction = (error) => {
    return {
        type: fetchItemFailure,
        payload: error

    }
}

export const fetchItemAction = (id, seller) => {
    return async (dispatch) => {

        dispatch(fetchItemRequestAction())
        let response = await itemDetail(id, seller).catch(() => { })
        if (response) {
            dispatch(fetchItemSuccessAction(response.data))
        }
        else {
            dispatch(fetchItemFailureAction("Product not found"))
        }

    }
}


