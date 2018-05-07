
function getRandomNumber(){
  return Math.floor(Math.random()*(50-10)+10);
}
function* myGenerator () {
    //console.log(getRandomNumber());
    yield getRandomNumber();
    yield getRandomNumber();
    yield getRandomNumber();
    yield getRandomNumber();
    yield getRandomNumber();
    yield getRandomNumber();
    yield getRandomNumber();
    yield getRandomNumber();
    yield getRandomNumber();
    yield getRandomNumber();    

}
  
let getMyGenerator = myGenerator();

for(let i=0; i<=12; i++){
  let one = getMyGenerator.next();
    if(one.done === true)
    break;
    let ul = document.getElementById("result");
    let li = document.createElement('li');
    li.innerHTML=one.value;
    ul.appendChild(li);
}

