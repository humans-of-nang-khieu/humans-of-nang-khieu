"use strict";

// const subTitles = document.getElementsByClassName('subTitle');
// const container = document.getElementsByClassName('container');

// for(let i=0; i < subTitles.length; i++) {
//     subTitles[i].addEventListener("click", function(){
//         if(subTitles[i].className === "subTitle") {
//             for(let j=0; j<subTitles.length; j++){
//                 if(i != j){
//                     subTitles[j].className = "subTitle";
//                 }
//             }
//             subTitles[i].className = "subTitle active";
//         } else if(subTitles[i].className === "subTitle active") {
//             subTitles[i].className = "subTitle";
//         }
//     })
// }
$(document).ready(function () {
  $(".subTitle").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      // Close other accordions in the same sibling group
      $(this).parent().siblings().children(".subTitle").removeClass("active");
    }
  });
});
