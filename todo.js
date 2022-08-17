
// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }
// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
// }, false);
// function add(){
  
  let content=document.getElementById("display");
  let input=document.getElementById("input");
    var li=document.createElement('li');
    li.classList.add("list")
    li.innerText=input.value;
    content.appendChild(li);
    input.value=" ";
    li.addEventListener('dblclick',function(){ 
      li.style.textDecoration="line-through"
    })
    

 



 
