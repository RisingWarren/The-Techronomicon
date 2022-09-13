const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

//Add event listener that serves as an example of a functional button (needs two arguments, look up lesson)

const btn = document.createElement("button")

btn.innerHTML = "Try me!"

document.body.appendChild(btn)

btn.onclick = function (){
    alert("I work!");
}




