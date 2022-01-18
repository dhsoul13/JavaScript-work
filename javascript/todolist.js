let body = document.body;
let divCreate = document.createElement("div");
let formCreate = document.createElement("form");
body.prepend(divCreate);

divCreate.classList.add("body__header-listTodo");
divCreate.innerHTML = "<h1 class=body__header> Мой список дел </h1>";
document.querySelector(".body__header-listTodo").append(formCreate);

let input = document.createElement("input");
let button = document.createElement("button");
input.type = "text";
button.textContent = "Нажать";
button.type = "submit";
formCreate.prepend(input,button);

let ul = document.createElement("ul");
body.append(ul);

divCreate.addEventListener("click", (event)=>{


    if(event.target.closest("button")){
        event.preventDefault();
        let li = document.createElement("li");
        li.classList.add("ul__item");
        if (input.value){
        li.innerHTML = `<span>${input.value}</span> <button>X</button>`;
        ul.append(li);
        input.value = "";
        };
    }
    
})

ul.addEventListener("click", (event)=>{
    if(event.target.closest("span")){
        event.target.classList.toggle("delete")
    };
    if(event.target.closest("button")){
        ul.removeChild(event.target.parentElement);
    };
})
