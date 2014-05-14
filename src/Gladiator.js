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
    //base damage
    var baseDamage = this.str * 1.3,
        modifier = (Math.random() / 3) + 1,
        weaponDamage = this.weapon && this.weapon.damage || 0,
        totalDamage = (baseDamage * modifier) + weaponDamage;

    //opponent defense
    var armor = gladiator.armor && gladiator.armor.defense || 0,
        armorMod = armor / 100;

    totalDamage = Math.round(totalDamage - (totalDamage * armorMod));

    //dodge check
    var chance = Math.ceil(Math.random() * gladiator.agi) * 3,
        hit = Math.ceil(Math.random() * 100),
        isDodged = hit <= chance;

    if (isDodged) {
      return 0;
    }

    gladiator.hp -= totalDamage;

    return totalDamage;
  },
  isDead: function() {
    return this.hp <= 0;
  }
};

window.Gladiator = Gladiator;
