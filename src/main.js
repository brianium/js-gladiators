//our gladiators
var ryan = new Gladiator("Ryan the Ravenous", 10, 5, 0, 50, 0); 
var brian = new Gladiator("Brian the Nimble", 2, 13, 0, 50, 0);

//equip some weapons and armor
ryan.equipWeapon(new Weapon('Doomhammer', 5));
ryan.equipArmor(new Armor('Shield of Shielding', 5));

brian.equipWeapon(new Weapon('Supah Shiv', 8));
brian.equipArmor(new Armor('Bum Clothes', 2));

//game loop
while(!ryan.isDead() && !brian.isDead()) {

  var ryanHit = ryan.attack(brian);
  if(ryanHit) {
    alert(ryan.name + " hit " + brian.name + " for " + ryanHit + " and " + brian.name + " is now at " + brian.hp);
    if (brian.isDead()) {
      alert(brian.name + " is vanquished!!");
      break;
    }
  } else {
    alert(brian.name + " Dodged");
  }

  var brianHit = brian.attack(ryan);
  if(brianHit) {
    alert(brian.name + " hit " + ryan.name + " for " + brianHit + " and " + ryan.name + " is now at " + ryan.hp);
    if (ryan.isDead()) {
      alert(ryan.name + " is vanquished!!");
      break;
    }
  } else {
    alert(ryan.name + " Dodged");
  }

}
