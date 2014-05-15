/**
 * Typically constructed by dividing 20 points
 * between stats
 */
var Gladiator = function(name, str, agi, stm) {
  this.name = name;

  this.str = str;
  this.agi = agi;
  this.stm = stm;

  this.hp = 50 + (stm * 3);

  this.weapon = null;
  this.armor = null;
};

Gladiator.prototype = {
  equipWeapon: function(weapon) {
    if (weapon instanceof Weapon) {
      this.weapon = weapon;
    }
  },
  equipArmor: function(armor) {
    if (armor instanceof Armor) {
      this.armor = armor;
    }
  },
  attack: function(enemy) {
    //base damage
    var baseDamage = this.str * 1.15,
        modifier = (Math.random() / 4) + 1;
    var weaponDamage = 0;
    if (this.weapon) {
      weaponDamage = this.weapon.damage;
    }
    var totalDamage = (baseDamage * modifier) + weaponDamage;

    //opponent defense
    var armor = 0;
    if (enemy.armor) {
      armor = enemy.armor.defense;
    }
    var armorMod = armor / 100;

    totalDamage = Math.round(totalDamage - (totalDamage * armorMod));

    console.log("After armor mod", totalDamage);

    //hit roll
    var hitRoll = Math.ceil(Math.random() * 100);

    //dodge check
    var chance = Math.ceil(Math.random() * enemy.agi) * 5;
    if (hitRoll <= chance) {
      return {dmg: 0, was_dodged: true, was_crit: false, fatal_blow: false};
    }

    //critical hit
    var critChance = Math.ceil(Math.random() * this.agi) * 3,
        isCrit = hitRoll <= critChance;
    if(isCrit) {
      totalDamage = totalDamage * 2;
    }

    console.log("After crit", totalDamage);

    enemy.hp -= totalDamage;

    console.log("Enemy hp is ", enemy.hp);
    
    return {
      dmg: totalDamage, 
      was_dodged: false, 
      was_crit: isCrit, 
      fatal_blow: enemy.isDead()
    };
  },
  isDead: function() {
    return this.hp <= 0;
  }
};

window.Gladiator = Gladiator;
