let inp = document.querySelector("input");
let btn = document.querySelector("#Add-btn");
let output = document.querySelector("ul");

btn.addEventListener("click", function(){
    let ele = document.createElement("li");
    let ele2 = document.createElement("button");
    ele2.innerText = "Remove";
    ele2.classList.add("li-btn");
    ele.innerText = input.value;
    output.appendChild(ele);
    ele.appendChild(ele2);
    inp.value = "";
});

output.addEventListener("click", function(event){
    if(event.target.nodeName =="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();

    }

});
// let deleteBtn = document.querySelectorAll(".li-btn");
// for(delBtn of deleteBtn){
// delBtn.addEventListener("click", function(){
//     let par = delBtn.parentElement;
//     par.remove();
// });
// }