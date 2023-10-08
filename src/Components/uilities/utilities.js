const getStoredData = () => {
    const getData = localStorage.getItem('cart-id')
    if (getData) {
        return JSON.parse(getData)
    }
    return [];
}

const saveItems = (id) => {
    const storedData = getStoredData();
    const isExist = storedData.find(datum => datum === id);
    if (!isExist) {
        storedData.push(id);
        localStorage.setItem('cart-id', JSON.stringify(storedData))
    }
}

export { getStoredData, saveItems }