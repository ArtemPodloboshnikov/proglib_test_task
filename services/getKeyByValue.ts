function getKeyByValue<T> (obj: {[key: string]: T}, value: T): string
{
    
    return Object.keys(obj).filter(function(key) {return String(obj[key]) === String(value)})[0];
}

export {getKeyByValue};