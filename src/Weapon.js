var Weapon = function(name, damage) {
  Equipment.call(this, name);
  this.damage = damage;
};

Weapon.prototype = Object.create(Equipment.prototype);
Weapon.prototype.constructor = Weapon;

window.Weapon = Weapon;
