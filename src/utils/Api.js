import axios from "axios"
import { session } from "./Utilities"
import nprogress from 'nprogress'

nprogress.configure({
  speed: 100,
  trickleSpeed: 100
})

let timeout = null
let isStarted = false

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: session() || ""
})

const allowedMethods = ["GET","POST","PUT","DELETE"]

export default (method, url, data = {}) => {

  if (allowedMethods.indexOf(method.toUpperCase()) > -1) {
    if (!isStarted) nprogressHandler.start()

    return instance({ method, url, data })
      .then(response => {
        nprogressHandler.delay()
        return response.data.data
      })

      .catch(error => {
        console.error(error) // and further error logging - db?
        nprogressHandler.delay()
        return Promise.reject(error)
      })

  } else {
    throw new TypeError("Invalid method!")
  }
}

const nprogressHandler = {
  start: () => {
    isStarted = true
    nprogress.start()
  },
  end: () => {
    isStarted = false
    timeout = null
    nprogress.done()
  },
  delay: () => {
    if (timeout && isStarted) {
      nprogress.inc()
      clearTimeout(timeout)
    }

    timeout = nprogressHandler.timer()
  },
  timer: () => setTimeout(nprogressHandler.end, 500)
}
