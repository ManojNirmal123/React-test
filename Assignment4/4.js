
function promiseBased (result) {
    return new Promise(
    function (resolve, reject) {
    if(resolve){
    setTimeout(()=>resolve(result),2000)
    }
    else
    reject(error);
    });
    }
    promiseBased('1')
    .then(result => {
      for(let i=0; i<5; i++){
    console.log(result) 
    document.getElementById("dispResult"+i).innerHTML=result;
      }
      
      })
    .catch(error => { });
