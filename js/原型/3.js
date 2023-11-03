Car.prototype={
    name: 'BMW',
    lang: 4900,
    height: 1400
}

function Car(owner,color){
    this.owner = owner
    this.color = color
}

var car = new Car('浪哥','red')
var car2 = new Car('但总','black')

// Car.prototype.name='红旗'
// delete car.prototype.name

console.log(car.name);
console.log(car2.name);