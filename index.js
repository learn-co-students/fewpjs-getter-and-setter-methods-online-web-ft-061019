class Circle {
   constructor(radius) {
      this.radius = radius
   }
 
   get diameter() {
      this._diameter = this.radius * 2
      return this._diameter
   }

   set diameter(d) {
      this._diameter = d 
      // should put a guard in here against values less than 0
      this.radius = this._diameter / 2
      return this._diameter
   }

   get circumference() {
      this._circumference = Math.PI * this.diameter
      return this._circumference
   }

   set circumference(c) {
      this._circumference = c
      this.diameter = c / Math.PI
      return this._circumference
   }

   get area() {
      this._area = Math.PI * (this.radius ** 2)
      return this._area
   }

   set area(a) {
      this._area = a 
      this.radius = Math.sqrt((a / Math.PI))
      return this._area
   }





}