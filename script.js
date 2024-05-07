let leftbox = document.querySelector("main .leftbox")
let rightbox = document.querySelector("main .rightbox")
let small = document.querySelectorAll("main .small")
console.log(small)
for(let val of small){
    val.addEventListener("dragstart",function(e){
        let s = e.target
        rightbox.addEventListener("dragover",function(e){
            e.preventDefault()
        })
        rightbox.addEventListener("drop",function(){
            rightbox.appendChild(s)
            s = null
        })
    })
}
