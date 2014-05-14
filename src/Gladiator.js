var Gladiator = function(name, str, agi, stm, mnd) {
  this.name = name;

  this.str = str;
  this.agi = agi;
  this.stm = stm;
  this.mnd = mnd;

  this.hp = 50 + (stm * 3);

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

    //hit roll
    var hit = Math.ceil(Math.random() * 100);

    //dodge check
    var chance = Math.ceil(Math.random() * gladiator.agi) * 5,
        isDodged = hit <= chance;

    //critical hit
    var critChance = Math.ceil(Math.random() * this.agi) * 3,
        isCrit = hit <= critChance;

    if (isDodged) {
      return {dmg:0, was_dodged: true, was_crit: false};
    }

    if (isCrit) {
      totalDamage = totalDamage * 2;
    }

    gladiator.hp -= totalDamage;

    return {dmg:totalDamage, was_dodged: false, was_crit: isCrit};
  },
  isDead: function() {
    return this.hp <= 0;
  }
};

window.Gladiator = Gladiator;
