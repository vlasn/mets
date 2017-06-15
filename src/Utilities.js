export const prettyPrint = (input) => {
    //string
    if (Object.prototype.toString.call(input) === '[object Array]' ) {
        if(typeof(input[0]) !== 'object') {
            return input.join(', ')
        } else {
            return input.map(n=>n.tunnus).join(', ')
        }
    } else {
        return input
    }
}