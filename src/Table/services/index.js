const product = []
const startId = 0
var createData = function(quantity){
    for(let i =0;i<quantity;i++){
        const tempId = startId+i
        product.push({
            id: tempId,
            name: 'Item name '+tempId,
            price: 2100 + i
        })
    }
    return product
}

module.exports = createData