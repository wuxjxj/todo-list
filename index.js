
const newList=document.querySelector("#list");
const newAddBtn=document.querySelector("#addBtn");
const newTodoInputBox=document.getElementById('inputBox');

newAddBtn.addEventListener("click", ()=> { 
   const newTodo=document.createElement("li");
   const newCheckBox=document.createElement("input");
   newCheckBox.setAttribute("type","checkbox");
   const newLabel=document.createElement("label");
   newLabel.appendChild(newCheckBox);
   newLabel.innerHTML+=newTodoInputBox.value;
   
   

  
  

  //  const newTitle=document.createElement("span");
  //  newTitle.innerText=newTodoInputBox.value;
   
   const deleteBtn=document.createElement("button");
   deleteBtn.innerText="delete";

  //  newTodo.appendChild(newTitle);
   
   const todoLi=document.querySelectorAll('li');
   
  for(let i=0; i<todoLi.length;i++){
    const left = newTodoInputBox.value+"delete";
    const right = todoLi[i].innerText;
    const isSame = left === right;
    console.log(left, right, isSame)
    if(isSame) {alert("Duplicate!");}
    
  
  }
  newTodo.appendChild(newLabel)
   newTodo.appendChild(deleteBtn);
   newList.appendChild(newTodo);
   
  newTodoInputBox.value="";
  });
 


  // const listChildren=document.querySelector("#list");
  // console.log(listChildren.children);

  // const completeBtns = document.querySelectorAll('#list li button');

  // for(var i = 0; i < completeBtns.length; i += 2){
  //   (function(cacheI){
  //     completeBtns[i].addEventListener('click',() => {
  //       console.log(cacheI);
  //     })
  //   })(i)
  // }

  // closure

  // newList.addEventListener('click', (evt) => {
  //   if(evt.target.innerText === 'complete'){
  //     const element = evt.target.parentNode.children[0];
  //     element.classList.toggle("complete");
  //   }
  // });

  newList.addEventListener("click",(evt)=>{
    if(evt.target.innerText==="delete"){
      const element2=evt.target.parentNode;
      element2.parentNode.removeChild(element2);
    }
  })