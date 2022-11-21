let div=document.createElement("div");
div.setAttribute("id","division");
let input=document.createElement("input");
input.setAttribute("type","text")
input.setAttribute("id","in");
let but=document.createElement("button");
but.setAttribute("type","button");
but.innerText="search";
div.append(input);
div.append(but);
document.body.append(div);

async function coviData(){
     
    let covidDetails=await
}