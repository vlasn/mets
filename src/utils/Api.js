import axios from "axios"
import { session } from "./Utilities"

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: session() || ""
})

const allowedMethods = ["GET","POST","PUT","DELETE"]

export default (method, url, data = {}) => {

  if (allowedMethods.indexOf(method.toUpperCase()) > -1) {

    return instance({ method, url, data })
      .then(response => response.data.data)
      .catch(error => {
        console.error(error) // and further error logging - db?
        return Promise.reject(error)
      })

  } else {
    throw new TypeError("Invalid method!")
  }
}