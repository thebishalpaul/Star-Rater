var getBtn1=document.querySelector(".button1");
var getBtn2=document.querySelector(".button2");
// getBtn.onclick=function changeImg() {  
//     document.getElementById("images").src = "";
//     document.getElementById("images").src = "https://picsum.photos/400/300.jpg";
//     console.log("hey");
// }
var getImg=document.querySelector("#images");

getBtn1.addEventListener('click', changeImg);
function changeImg() {
//   getImg.classList.add("hide");
  window.location.reload();
}
    
window.onload = () => {
      document.querySelector(".preloader").remove(".preloader");
      getImg.classList.remove("hide");
  };
getBtn2.addEventListener('click',resetStars);



var getStars=document.querySelectorAll(".star");
// console.log(getStars[i]);

function resetStars() {
  for(i=0; i<getStars.length; i++){
        getStars[i].classList.remove("orange");
 }
}

for(i=0 ;i<getStars.length;i++){
 getStars[i].value=(i+1);   
 ["click","mouseover","mouseout"].forEach(function(e){
     getStars[i].addEventListener(e,changeColor);
 })
//  getStars[i].addEventListener('click', changeColor);
}
function changeColor(e) {
    let type=e.type;  //click,mouseover,mouseout
    // console.log("hey "+type);
    let starNo=this.value;
    // console.log(starNo);

        getStars.forEach(function(ele,index) {
            if(type==='click'){
                // console.log(index,starNo);
                if(index<starNo)
                  ele.classList.add("orange");
                else
                  ele.classList.remove("orange");  
            }  

            if(type==='mouseover'){
                if(index<starNo)
                  ele.classList.add("yellow");
                else
                  ele.classList.remove("yellow");  
            }

            if(type==='mouseout'){
                  ele.classList.remove("yellow");  
            }

        })
    }

    //remove loader when page is loaded

// getBtn.addEventListener('click', changeImg);
// function changeImg() {
//     document.getElementById("images").src = "https://picsum.photos/400/300.jpg";
// }
