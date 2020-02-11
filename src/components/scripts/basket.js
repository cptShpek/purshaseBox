window.purshaseBox = {}

window.priceBox = {
    Toast: 2,
    Baguette: 1,
    Rye: 3,
    Almond: 7,
    Cashew: 5,
    Hazelnut: 9,
    White: 5,
    Milk: 3,
    Dark: 4,
};


sum = function () {
                
    for ( let item in window.purshaseBox ) {
    
        for ( let price in window.priceBox ) {
        
            if( price == item ) {
            
                this.sum += window.purshaseBox[item] * window.priceBox[price]
            
            }
        
        }
    
    }

}