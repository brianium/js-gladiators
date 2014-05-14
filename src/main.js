//our gladiators
var ryan = new Gladiator("Ryan the Ravenous", 10, 5, 0, 50, 0);
var brian = new Gladiator("Brian the Nimble", 2, 13, 0, 50, 0);

//equip some weapons and armor
ryan.equipWeapon(new Weapon('Doomhammer', 5));
ryan.equipArmor(new Armor('Shield of Shielding', 5));

brian.equipWeapon(new Weapon('Supah Shiv', 8));
brian.equipArmor(new Armor('Bum Clothes', 2));

var game = {

    run: function(player1, player2) {
        while (!player1.isDead() && !player2.isDead()) {

            var player1Hit = player1.attack(player2);
            if (player1Hit) {
                alert(player1.name + " hit " + player2.name + " for " + player1Hit + " and " + player2.name + " is now at " + player2.hp);
                if (player2.isDead()) {
                    alert(player2.name + " is vanquished!!");
                    break;
                }
            } else {
                alert(player2.name + " Dodged");
            }

            var player2Hit = player2.attack(player1);
            if (player2Hit) {
                alert(player2.name + " hit " + player1.name + " for " + player2Hit + " and " + player1.name + " is now at " + player1.hp);
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