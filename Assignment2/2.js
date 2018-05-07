({price,tax, ...rest} = {price:10,tax:2,qty:2,weight:20});
function  calculetePrice(price,tax,discount	=10){
    let taxablePrice = price - (price * (discount / 100));
    let priceWithTax =  (taxablePrice)=>{
        return taxablePrice + (taxablePrice * (tax / 100));
    
    }
    return priceWithTax(taxablePrice);

}
document.getElementById("dispResult").innerHTML=calculetePrice(price,tax);