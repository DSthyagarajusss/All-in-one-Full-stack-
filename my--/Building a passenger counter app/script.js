// document.getElementById("count").innerText=0
let count_of=document.getElementById('count')
let save_el=document.getElementById('save-el')
let count =0
let incr=()=>{
    count +=1
    count_of.textContent=count
    console.log(count)
}
let decr=()=>{
    count-=1
    count_of.textContent=count
    console.log(count)
    
}

let save=()=>{
    let countStr=count+' - '
    save_el.textContent +=countStr
    count.textContent  =0   
    count=0
}