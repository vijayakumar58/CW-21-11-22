let div=document.createElement("div");
div.setAttribute("id","division");
let input=document.createElement("input");
input.setAttribute("type","text")
input.setAttribute("id","in");
let button=document.createElement("button");
button.innerHTML="search";
input.append(button);
div.append(input);
document.body.append(div);