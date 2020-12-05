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
export const removeProduct = "REMOVEPRODUCT"


const urls = [
    "http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/api/",
    "http://production.eba-2veq4gdy.us-west-2.elasticbeanstalk.com/django_api/",
    "https://yurgqjbmwb.execute-api.us-east-2.amazonaws.com/dev/api/"
]

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
    return async (dispatch) => {
        dispatch(fetchSearchRequestAction())
        var array = []
        for (var url of urls) {
            url = url.concat("search?q=", `${query}`)
            let response = await Axios.get(url).catch(err => { })
            if (response)
                array = [...array, response.data]
        }
        if (array.length) {
            dispatch(fetchSearchSuccessAction(array))
        } else {
            dispatch(fetchSearchFailureAction("No product found with that word"))
        }
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

export const fetchItemAction = (id, seller) => {
    return async (dispatch) => {
        dispatch(fetchItemRequestAction())
        var url
        switch (seller) {
            case "BlackStore":
                url = urls[0]
                break
            case "django_api":
                url = urls[1]
                break
            case "zoco de oro":
                url = urls[2]
                break
            default:
                url = ""
                break
        }
        url = url.concat("item/", `${id}`)
        let response = await Axios.get(url)
            .catch(error => {
                dispatch(fetchItemFailureAction("Product not found"))
            })
        if (response)
            dispatch(fetchItemSuccessAction(response.data))
    }
}
