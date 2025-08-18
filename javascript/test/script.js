// callback



function showInfo(name, price,callback){
  const result = `name:${name} - price:${price}`;
  callback(result);
}

showInfo("apple", 25,(res)=>{
  console.log(res);
});
