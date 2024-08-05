var input_text=document.getElementById("in")
var output=document.getElementById("add")
function Add()
{
    console.log(event)
    var text_added=input_text.value
    input_text.value=""
    var list=document.createElement("div")
    list.innerHTML=`<div class="container">
    <input type="checkbox" id="checkbox">
    <div id="list">
         <p class="todolistcontent">${text_added}</p>
    </div>
    <i class="fa fa-edit" onclick="edit(event)" style="position: relative; color: brown; font-size: 0.7cm;" ></i>
    <i class="fa fa-trash" onclick="del(event)" style="position: relative; color: brown; font-size: 0.7cm;"></i>
    </div> `
    output.append(list)
    document.querySelector(".popup_background").style.display="none"
    document.querySelector(".popup").style.display="none"

}
function cancel()
{
    document.querySelector(".popup_background").style.display="none"
    document.querySelector(".popup").style.display="none"
    document.getElementById("in").value=""
}

function create()
{
    document.querySelector(".popup_background").style.display="block"
    document.querySelector(".popup").style.display="block"
}
function del(event)
{
    console.log(event.srcElement.class)
    
    event.target.parentElement.remove()
}
function edit(event)
{
    input_text.value=event.target.parentElement.textContent
    del(event);
    document.querySelector(".popup_background").style.display="block"
    document.querySelector(".popup").style.display="block"
}
 
function strike(event)
{
    var a=event.target.parentElement.textContent
    event.target.parentElement.innerHTML=`
    <input type="checkbox" id="checkbox">
    <div id="list">
         <p class="todolistcontent"><strike> ${a}</p>
    </div>
    <i class="fa fa-edit" onclick="edit(event)" style="position: relative; color: brown; font-size: 0.7cm;" ></i>
    <i class="fa fa-trash" onclick="del(event)" style="position: relative; color: brown; font-size: 0.7cm;"></i></strike>`
    // event.target.parentElement.style.text-decoration = "line-through";
}
 