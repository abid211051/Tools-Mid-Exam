// function changecolor(){
//     document.querySelector("div").style.backgroundColor = blue;
// }

function calculate(v, v1, v2){
    let res;
    if(v =="triangle"){
        res = 0.5 * v1.value * v2.value;
    }
    else if(v== "rectangle" || v == "Parallelogram"){
        res = v1.value * v2.value;
    }
    document.getElementById('demo').innerHTML += `${v} ${res}cm <br>`;
}
  
function colorchange(val){
    let x = document.getElementById(val);
    x.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})` ;
}