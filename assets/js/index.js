"use strict";


const imagesDB = [
   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/20190502_Newhaven_to_Dieppe_Ferry_3.jpg/1200px-20190502_Newhaven_to_Dieppe_Ferry_3.jpg",
   "https://mistomariupol.com.ua/wp-content/uploads/2021/03/116694354_3356755151013496_448956843075871795_o.jpg",
   "https://rk.karelia.ru/wp-content/uploads/2016/05/More.jpg",
];

const slider = new Slider(imagesDB);

const img = document.querySelector(".slide>img");
const [prevBtn, nextBtn] = document.querySelectorAll(".switch>button");

// function setTitle() {
//    if (slider.currentIndex === 0) {
//       const counterSlide = slider.currentIndex + 1;
//       return "Вы навели на картинку " + counterSlide;
//    }
//    if (slider.currentIndex === 1) {
//       const counterSlide = slider.currentIndex + 1;
//       return "Вы навели на картинку " + counterSlide;
//    }
//    if (slider.currentIndex === 2) {
//       const counterSlide = slider.currentIndex + 1;
//       return "Вы навели на картинку " + counterSlide;
//    }
// }

// function setTitle() {
//    if (slider.currentIndex || slider.currentIndex === 0) {
//       const counterSlide = slider.currentIndex + 1;
//       return "Вы навели на картинку " + counterSlide;
//    }
// }


function updateViewSlider() {
   img.setAttribute("src", slider.currentSlide);
   // img.src = slider.currenrSlide;
   img.setAttribute("alt", "Photo" + slider.currentIndex);

   // img.setAttribute(
   //    "title",
   //    slider.currentIndex === 1 ? "Вы навели на картинку, поздравляю" : "привет"
   // );

   // img.setAttribute(
   //    "title",
   //    if (slider.currentIndex === 1) {
   //      return 'Вы навели на картинку ' + slider.currentIndex;
   // }; )

//    img.setAttribute(
//       "title",
//       slider.currentIndex || slider.currentIndex === 0
//          ? "Вы навели на картинку " + (slider.currentIndex + 1)
//          : true
//    );
   
   img.setAttribute(
      "title",
       "Вы навели на картинку " + (slider.currentIndex + 1))
         
 }

updateViewSlider();

// function createSlideBtnHandler(direction = "next") {
//    slider.currentIndex = slider[direction === "next" ? "nextIndex" : "prevIndex"];
//    updateViewSlider();
// }

// function createSlideBtnHandler(direction = "next") {
// return () => {
//    slider.currentIndex = slider[direction === "next" ? "nextIndex" : "prevIndex"];
//    updateViewSlider();
// }
// }

const createSlideBtnHandler =
   (direction = "next") =>
   () => {
      slider.currentIndex = slider[direction === "next" ? "nextIndex" : "prevIndex"];
      updateViewSlider();
   };

prevBtn.addEventListener("click", createSlideBtnHandler("prev"));

nextBtn.addEventListener("click", createSlideBtnHandler("next"));
