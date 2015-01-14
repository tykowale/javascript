var Bike = function () {};

Bike.prototype.pedal = function () {
  console.log('You are now moving')
};

var newBike = new Bike;
newBike.pedal();