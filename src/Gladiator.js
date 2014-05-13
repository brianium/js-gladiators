var Gladiator = function(name, str, agi, mnd, hp, mp) {
  this.name = name;
  this.str = str;
  this.agi = agi;
  this.mnd = mnd;
  this.hp = hp;
  this.mp = mp;
  this.weapon = null;
  this.armor = null;
};

Gladiator.prototype = {
  equipWeapon: function(weapon) {
    this.weapon = weapon;
  },
  equipArmor: function(armor) {
    this.armor = armor;
  },
  attack: function(gladiator) {
    var power = this.str + this.weapon.damage;
    var defense = gladiator.str + gladiator.armor.defense;

    if (this.can_dodge(gladiator)) {
      return false;
    }

    var damage = power - defense;
    
    if (damage <= 0) {
      return false;
    }

    gladiator.hp -= damage;

    return true;
  },
  can_dodge: function(gladiator) {
    var chanceToHit = 50 - gladiator.agi,
        dodgeValue = Math.ceil(Math.random() * chanceToHit),
        dodgeRange = [3, 5, 9, 12, 15, 19];

        return dodgeRange.some(function(d) {
          return d === dodgeValue;
        });
  },
  is_dead: function {
    return gladiator.hp <= 0;
  }
};

window.Gladiator = Gladiator;
