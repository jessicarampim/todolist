
var buttonSend = document.querySelector("#buttonSend");
    buttonSend.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var newToDo = document.querySelector("#newToDo");
    var newValue = form.newToDo.value;
    var ul = document.querySelector("#ul-adicionar")
    var newItem = doLi(newValue);

    doLi(newValue);
    ul.appendChild(newItem);              

    form.reset();
})

function doLi(newValue){
    var liToDo = document.createElement("li");
        liToDo.classList.add("checkboxLi");

    var liCheck = document.createElement("input");
        liCheck.type = "checkbox";
        liCheck.id = "checkbox";
        liCheck.addEventListener("change", function(event){
            if (liCheck.checked == true){ 
                liToDo.classList.add("checkedlist");   
            } else {
                liToDo.classList.remove("checkedlist");
            }
        });

    var liSpan = document.createElement("span");
        liSpan.textContent = newValue;

    var liButton = document.createElement("button");
        liButton.id = "buttonClear";
        liButton.textContent = "x";
        liButton.addEventListener("click", function(event){
            liToDo.remove();
        });

    
    liToDo.appendChild(liCheck);
    liToDo.appendChild(liSpan);
    liToDo.appendChild(liButton);

    return liToDo;
}

