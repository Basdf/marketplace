// Reducer

import {
    fetchSearchFailure,
    fetchSearchRequest,
    fetchSearchSuccess,
    addProduct,
    removeProduct,
    buyProduct,
    fetchItemSuccess,
    fetchItemRequest,
    fetchItemFailure
} from "./actions";
import { initialItemState, initialSearchState, initialCarState } from "./store";

export const searchReducer = (state = initialSearchState, action) => {
    switch (action.type) {
        case fetchSearchRequest:
            return {
                ...state,
                loading: true
            }
        case fetchSearchSuccess:
            return {
                loading: false,
                search: action.payload,
                error: ''
            }
        case fetchSearchFailure:
            return {
                loading: false,
                search: '',
                error: action.payload
            }
        default: return state;
    }
}
export const itemReducer = (state = initialItemState, action) => {
    switch (action.type) {
        case fetchItemRequest:
            return {
                ...state,
                loading: true
            }
        case fetchItemSuccess:
            return {
                loading: false,
                item: action.payload,
                error: ''
            }
        case fetchItemFailure:
            return {
                loading: false,
                item: '',
                error: action.payload
            }
        default: return state;
    }
}
export const carReducer = (state = initialCarState, action) => {
    switch (action.type) {
        case buyProduct:
            return {
                ...state,
                buy: action.payload
            }
        case addProduct:
            return {
                car: [...state.car, action.payload],
            }
        case removeProduct:
            return {
                car: state.car.filter(function (element) {
                    return element !== action.payload
                }),
            }
        default: return state;
    }
}