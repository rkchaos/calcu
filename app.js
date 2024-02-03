let btn=document.querySelectorAll('button')
let inputEl=document.querySelector('input')
for(let button of btn){
    button.addEventListener("click",function(e){
   let text=e.target.innerText;
  if(text==='AC'){
    inputEl.value="";
  }
  else if(text==='='){
try{ 
    inputEl.value = eval(inputEl.value);
}
catch(err){ 
    inputEl.value = "invalid"
}
  }
  else{
    inputEl.value=inputEl.value+text;
  }
   

    })
}