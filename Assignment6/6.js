
function forexRate(curGiven,curExp,price){
  axios.get(`https://api.fixer.io/latest?base=${curGiven}`).
  then((res)=>{
    let priceDiff = res.data.rates[curExp];
    document.getElementById('result').innerHTML = priceDiff*price;
  }).
  catch((res)=>{console.log(res);})

}
forexRate('EUR','INR',2);