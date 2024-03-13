import api from '../utils/api'


export const getItems = () => async dispatch => {
    try {
        const res = await api.get('/item')
        dispatch({
            type: 'GET_ITEMS',
            payload: res.data
        })
    } catch (err) {
        console.log(err.message)
        dispatch({
            type: 'STORAGE_ERROR'
        })

    }
}

export const addItem = (data) => async dispatch => {
    try {
        const res = await api.post('/item', data)
        dispatch({
            type: 'GET_ITEM',
            payload: res.data
        })
    } catch (err) {
        console.log(err.message)
        dispatch({
            type: 'STORAGE_ERROR'
        })

    }
}

export const editItem = (data, id) => async dispatch => {
    try {
        const res = await api.post(`/item/edit/${id}`, data)
        dispatch({
            type: 'EDIT_ITEM',
            payload: { item: res.data, item_id: id }
        })
    } catch (err) {
        console.log(err.message)
        dispatch({
            type: 'STORAGE_ERROR'
        })

    }
}


export const removeItem = (id) => async dispatch => {
    try {
        const res = await api.delete(`/item` + `/${id}`)
        dispatch({
            type: 'REMOVE_ITEM',
            payload: { item_id: id }
        })
    } catch (err) {
        console.log(err.message)
        dispatch({
            type: 'STORAGE_ERROR'
        })

    }
}