// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
       return this.radius+this.radius
    }

    get circumference(){
       return 2*Math.PI*this.radius
    }

    get area(){
        return Math.PI*(this.radius**2)
    }

    set diameter(diameter){
        this.radius = diameter/2
        return this.radius
    }

    set circumference(circumference){
        this.radius = circumference/(2*Math.PI)
        return this.radius
    }
}