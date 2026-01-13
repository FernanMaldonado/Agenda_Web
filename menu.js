
let menu = function () {
    let div = document.createElement("div")
    div.className = "div-padre";

    let div1 = document.createElement("div")
    div1.className = "div-hijo-uno";
    div.appendChild(div1);

    let div2 = document.createElement("div")
    div2.className = "div-hijo-dos";
    div.appendChild(div2);

    return div;
}

export {menu};