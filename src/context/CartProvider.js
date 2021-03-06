import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import CartContext from "./CartContext"
import {
    getCart,
    addToCart,
    removeFromCart,
    updateLineItem,
} from "../utils/shopify"

const CartProvider = ({children}) => {
    const [cart, setCart] = useState({lineItems: []})

    useEffect(() => {
        initializeCart()
    }, [])

    const initializeCart = async() => {
        const cart = await getCart()
        setCart(cart)
        return
    }

    const add = async(variant, attributes = {}) => {
        const cart = await addToCart(variant, attributes)
        setCart(cart)
        return
    }

    const remove = async lineItem => {
        const cart = await removeFromCart(lineItem)
        setCart(cart)
        return
    }

    const update = async lineItem => {
        const cart = await updateLineItem(lineItem)
        setCart(cart)
        return
    }

    const context = {
        cart,
        add,
        remove,
        update,
    }

    return (
        <CartContext.Provider value={context}>{children}</CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node,
}

export default CartProvider
