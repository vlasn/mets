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

export const uuid = () => {
    let i, random;
    let uuid = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }

        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }

    return uuid;
}

export const session = () => ({headers: {"x-auth-token": localStorage.getItem("session")}})

export const stripFalsyProperties = obj =>
    Object.keys(obj)
        .filter(key => !!obj[key])
        .reduce((acc, val) => ({...acc, [val]: obj[val]}), {})