let btn=document.querySelectorAll('button')
let inputEl=document.querySelector('input')
for(let button of btn){ //button pe iterator kiya hai
    button.addEventListener("click",function(e){ //har button pe event use hoga
   let text=e.target.innerText; //then jab me click krunga on button ussi event ko target krunga by e.target than uski inner text ko text me store kra dunga 
  if(text==='AC'){ 
    inputEl.value="";  // when i click on ac the value of input  field will be empty
  }
  else if(text==='='){
try{ 
    inputEl.value = eval(inputEl.value);  //it perform the operations  which are written in input field and display the result in the same field
}
catch(err){ 
    inputEl.value = "invalid" //error throw  hoga jo bhi invalid operation hoga
}
  }
  else{
    inputEl.value+=text; //then input ke value me text daal  dega 
  }
   

    })
}
