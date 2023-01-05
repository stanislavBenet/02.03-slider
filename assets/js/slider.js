class Slider {
   constructor(arraySlides = [], currentIndex = 0) {
      this._arraySlides = arraySlides;
      this.currentIndex = currentIndex;
   }

   get arraySlides() {
      return this._arraySlides;
   }

   set currentIndex(value) {
      if (typeof value !== "number") {
         throw new TypeError("number must be namber");
      }
      if (value < 0 || Number.isInteger(value) === false) {
         throw new RangeError("Value must be more than 0 and integer");
      }
      this._currentIndex = value;
   }

   get currentIndex() {
      return this._currentIndex;
   }

   get currentSlide() {
      return this._arraySlides[this._currentIndex];
   }

   get nextIndex() {
      return [this.currentIndex + 1] % this.arraySlides.length;
   }
   get prevIndex() {
      return (this.currentIndex - 1 + this.arraySlides.length) % this.arraySlides.length;
   }
}
