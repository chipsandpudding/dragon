var wrap = document.body.querySelector(".wrap");

var dDamage = 0;


document.body.querySelector(".buttonF").addEventListener("click",function(){dragon(3,1)})
document.body.querySelector(".buttonI").addEventListener("click",function(){dragon(1,2)})
document.body.querySelector(".buttonP").addEventListener("click",function(){dragon(4,0)})



function dragon(damage,type){
damage = Number(damage);
  var box1 = document.createElement("div");


  if(type === 1){
    damage = damage - 1;
  }else if(type === 2){
    damage = damage + 1;
  }else{}
  
  dDamage += damage;
  
    box1.innerHTML= "Dragon Damage: " + dDamage;
    wrap.appendChild(box1);

   if(dDamage >= 10){
  var ele = document.createElement("div");
  ele.innerHTML = ("You have Murdered an innocent dragon, its children will starve.");
  wrap.appendChild(ele);
}else{}

}