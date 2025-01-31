import apiUrl from '../apiConfig'
import axios from 'axios'

//READ => INDEX
export const getAllCarts = () => {
    return axios({
        url: `${apiUrl}/carts`,
        method: 'GET'
    })
}

// READ => SHOW
export const getOneCart = () => {
    return axios(`${apiUrl}/carts`)
}

// CREATE
export const createCart = (user, newCart) => {

    return axios({
        url: apiUrl + '/carts',
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: { cart: newCart }
    })
}

// UPDATE
export const updateCart = (user, updatedCart) => {

    console.log('this is updatedCart', updatedCart)

    return axios({
        url: `${apiUrl}/carts/${updatedCart._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: { cart: updatedCart }
    })
}

// DELETE
export const removeCart = (user, cartId) => {
    return axios({
        url: `${apiUrl}/carts/${cartId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}

// Add to cart
export const addToCart = (user, addedItem) => {

    return axios({
        url: `${apiUrl}/carts/add/`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: { product: addedItem }
    })
}