
let ul =document.querySelector(".lists ul");




function add(ev){
    if(ev.key==='Enter'){
        if(inp.value.trim()!=""){
            appendli()
        }else{
            // empty()
            eror()
        }
    }
}

function appendli(){
    let val= inp.value
    let li=document.createElement("li");
    li.innerHTML=`
    <p>${val}</p>
    <div>
    <button class="btn btn-success delete"> Delete </button>
    <input type="checkbox" class="check">
    </div>
    `
    ul.appendChild(li)
    del()
    inp.value=''
}



let inp=document.querySelector("input");
inp.addEventListener("keyup",add)
document.querySelector("button").addEventListener("click",()=>{
    if(inp.value.trim()==""){
        eror()
    }else{
        appendli()
    }
})



// Deleting the Tasks on button Click
function del(){
    let delets=document.querySelectorAll(".delete")
    let arr= Array.from(delets)
    arr.forEach((val)=>{
        val.addEventListener("click",function(){
            let li=val.parentElement.parentElement
            li.remove()
        })
    })
}




// Filtering The Data

function displayall(){
    
    document.querySelectorAll("li").forEach((val)=>{
        val.style.display=""
    })
    
}

let object={
    all : "an",
    completed : false,
    pending : true,
}

function hi(fitlervalue){
    let list= Array.from(document.querySelectorAll(".check" ))
    
    let cond=object[fitlervalue]
    displayall()
    list.forEach((val)=>{
        if(val.checked==cond){
            val.parentElement.parentElement.style.display="none"
        }

    })
}

// Taking Value from Select
let filter= document.querySelector("select")
// document.querySelector(".apply").addEventListener("click",()=>{
//     console.log("hi")
//     hi(filter.value)
// })

// console.log(filter)

filter.addEventListener("change",(some)=>{
    hi(filter.value)
})



function progresdecrease(val){
    
    let x=0;
     let id= setInterval(() => {
         val.style.width = `${x}%`
         if(x>100){
             clearInterval(id)
             val.style.width = `${0}%`
             erorhide(val.parentElement.parentElement)
         }
        x+=20;
    }, 300);
    
    
}   

function erorhide(val){
        val.style.display="none"
    }



function eror(){
    let some= document.querySelector(".eror")
   some.style.display="block";
//    console.log(some)
   let progres=document.querySelector(".progress-bar")
    progresdecrease(progres)
   //  erorhide(progres.parentElement.parentElement)
}






// function printtask(){
//     window.open()

// }


function givecontent(){
    let paragraphs=""
     document.querySelectorAll("ul li p").forEach((val)=>{
        paragraphs += `${val.innerHTML} <br>`
     })
    return paragraphs
}   

function printDiv() {
    // Select the content of the specified element
    // var content = document.getElementById(divId).innerHTML;
    // let content= ul;
    // Open a new print window
    var printWindow = window.open('', '_blank', 'width=600,height=400');
    
    // Write the content into the print window
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Preview</title>
        </head>
        <body onload="window.print();window.close();">
          ${givecontent()}
        </body>
      </html>
    `);
    printWindow.document.close();
  }
