//our gladiators
var ryan = new Gladiator("Ryan the Ravenous", 10, 5, 0, 5, 0);
var brian = new Gladiator("Brian the Nimble", 2, 17, 0, 1, 0);

//equip some weapons and armor
ryan.equipWeapon(new Weapon('Doomhammer', 5));
ryan.equipArmor(new Armor('Shield of Shielding', 5));

brian.equipWeapon(new Weapon('Supah Shiv', 7));
brian.equipArmor(new Armor('Bum Clothes', 3));

var game = {

    run: function(player1, player2) {
        while (!player1.isDead() && !player2.isDead()) {

            var player1Hit = player1.attack(player2);
            if (!player1Hit.was_dodged) {
                alert(player1.name + " hit " + player2.name + " for " + player1Hit.dmg + " and " + player2.name + " is now at " + player2.hp);
                if (player2.isDead()) {
                    alert(player2.name + " is vanquished!!");
                    break;
                }
            } else {
                alert(player2.name + " Dodged");
            }

            var player2Hit = player2.attack(player1);
            if (!player2Hit.was_dodged) {
                alert(player2.name + " hit " + player1.name + " for " + player2Hit.dmg + " and " + player1.name + " is now at " + player1.hp);
                if (player1.isDead()) {
                    alert(player1.name + " is vanquished!!");
                    break;
                }
            } else {
                alert(player1.name + " Dodged");
            }

        }
    }
}

game.run(ryan, brian);
