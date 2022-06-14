const probandoDOM= function()
{
    const html = document.children[0]
    const body = html.children[2]
    const p=body.children[0]

    const div=document.createElement("div")

    // op1
    /*const texto=document.createTextNode("Este es un div")
    div.appendChild(texto)
    p.appendChild(div)*/

    // op2
    div.innerText ="Este es un div"
    p.appendChild(div)

    const modificar=document.getElementById("ulima_link")
    modificar.setAttribute("href","https://ulima.edu.pe")
    //const a = p.children[0]

    //console.log(a.nextElementSibling)
}

const f=function()
{
    const a = document.getElementById("ulima_link")
    a.parentElement.removeChild(a)
}

const main=function()
{
    const but= document.getElementById("but")
    but.addEventListener("click", f)
}

window.addEventListener("load", main)