import axios from "axios"

export const ApiProductList = async() => {
    const response = await fetch("https://dummyjson.com/products?limit=5&skip=3")
    const data = await response.json()
    return data.products
  }

export const ApiProduct = async() => {
    const response = await fetch("https://dummyjson.com/products?limit=5&skip=6")
    const data = await response.json()
    return data.products
  }