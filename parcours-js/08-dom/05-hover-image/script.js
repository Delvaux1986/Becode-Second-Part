// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    let old_img =  document.getElementsByTagName("img")[0];
    let new_Img = document.createElement('img');
    new_Img.src = "../../_shared/img/kiss-wink-heart.svg";
    old_img.src = "../../_shared/img/kiss.svg";

    old_img.addEventListener("mouseenter", ()=>{
        
        old_img.parentNode.replaceChild(new_Img, old_img);
   })
   new_Img.addEventListener("mouseout",()=>{
        
        new_Img.parentNode.replaceChild(old_img,new_Img);
   })
})();
