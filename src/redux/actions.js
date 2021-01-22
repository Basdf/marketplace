import { searchItems, itemDetail } from './service/apis'
import { useDispatch } from 'react-redux';
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

const dispatch = useDispatch();


const urls = [
    "http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/api/",
    "http://production.eba-2veq4gdy.us-west-2.elasticbeanstalk.com/django_api/",
    "https://yurgqjbmwb.execute-api.us-east-2.amazonaws.com/dev/api/"
]

const buyProductAction = (product) => {
    return {
        type: buyProduct,
        payload: product
    }
}
const addProductAction = (product) => {
    return {
        type: addProduct,
        payload: product
    }
}
const removeProductAction = (product) => {
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
const fetchSearchAction = (query) => {
    return async (dispatch) => {
        dispatch(fetchSearchRequestAction())
        let response = await searchItems(query).catch(() => { })
        if (response.length) {
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

const fetchItemAction = (id, seller) => {
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

//export actions

export const actionSearch = (query) => {
    dispatch(fetchSearchAction(query))
}
export const actionItem = (id, seller) => {
    dispatch(fetchItemAction(id, seller))
}
export const actionAddProduct = (product) => {
    dispatch(addProductAction(product))
}
export const actionBuyProduct = (product) => {
    dispatch(buyProductAction(product))
}
export const actionRemoveProduct = (product) => {
    dispatch(removeProductAction(product))
}

