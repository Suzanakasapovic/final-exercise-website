const plus = document.querySelector(".plus"),
 minus = document.querySelector(".minus"),
 num = document.querySelector(".num");

 let a = 1;

 plus.addEventListener("click", ()=>{
    a++;
    num.innerText = a;
    a = (a )
    console.log(a);
 });

 minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
        num.innerText = a;
    }
 });

 //document.querySelectorAll(".carousel").forEach(carousel => {
 //  const items = carousel.querySelectorAll(".carousel__item");
   //const buttonsHtml = Array.from(items, () => {
     // return '<span class="carousel__button"></span>';
   //})

   //carousel.insertAdjacentHTML("beforeend", '
     //<div class="carousel__nav">
     //${ buttonsHtml.join("")}
     //</div>
   //');

   //const buttons = carousel.querySelectorAll(".carousel__button");

   //buttons.forEach((button, i) => {
     // button.addEventListener("click", () => {
       //  items.forEach(item => item.classList.remove(".carousel__item--selected"));
         //buttons.forEach(button => button.classList.remove(".carousel__button--selected"));

         //items[i].classList.add("carousel__item--selected");
         //button.classList.add("carousel__button--selected");

      //});
   //});


 })