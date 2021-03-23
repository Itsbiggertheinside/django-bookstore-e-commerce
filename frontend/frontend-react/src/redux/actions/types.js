export const BASE_URL = 'http://127.0.0.1:8000'

export const AUTH_HEADERS = {
    'Authorization': `Token ${sessionStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain',
    'Content-Type': 'application/json'
}

export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'

export const GET_BOOK_DETAIL = 'GET_BOOK_DETAIL'

export const CREATE_ORDER_ITEM = 'CREATE_ORDER_ITEM'

export const GET_ORDER = 'GET_ORDER'