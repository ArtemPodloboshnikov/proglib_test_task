const getFullDate = (date: Date) =>{

    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

export {getFullDate};