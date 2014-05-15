var Weapon = function(name, damage) {
  //call the parent constructor
  Equipment.call(this, name);
  this.damage = damage;
};

//Weapon extends Equipment
Weapon.prototype = Object.create(Equipment.prototype);
Weapon.prototype.constructor = Weapon;

//make the Weapon class available everywhere
window.Weapon = Weapon;
