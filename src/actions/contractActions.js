import axios from "axios"

export function updateContractRow (contractId, key, value, remove=false) {
    return axios.put('/api/contract/update/'+contractId, {
        key: key,
        value: value,
    })
}