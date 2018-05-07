
class TableGenerator{
  constructor(data,title){
    this.data = data;
    this.title = title;
  }
  render(){
    let appendRow =  `<table><tr><th colspan=3>${this.title}</th></tr>`;
    for(data of this.data){
      appendRow += `<tr><td>${data.title}</td><td>${data.price}</td><td>${data.qty}</td></tr>`;
    }
    return appendRow += '</table>';
  }

}
let data = [
  {title: 'apple', price: 2, qty: 30},
  {title: 'banana', price: 1, qty: 30},
  {title: 'chikoo', price: 1, qty: 30}
];
let title = 'Fruits';
let appendDatas =  new TableGenerator(data,title);
document.getElementById("result").innerHTML = appendDatas.render();

