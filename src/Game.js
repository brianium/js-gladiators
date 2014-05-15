var Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype = {
  fatefulWinds: function(attacker, defender) {
    var hit = attacker.attack(defender);
    console.log(hit);
    if (!hit.was_dodged) {
      var msg = hit.was_crit ? 'CRITICAL HIT!!!! ' : '';
      msg += attacker.name + " hit " + defender.name + " with ";
      msg += attacker.weapon.name + " for " + hit.dmg;
      msg += " and " + defender.name + " is now at " + defender.hp + " hp";
      alert(msg);
      if (defender.isDead()) {
        alert(defender.name + " is vanquished!");
        return true;
      }
    } else {
      alert(defender.name + " dodged while wearing " + defender.armor.name);
    }
    return false;
  },
  run: function() {
    while (! this.player1.isDead() && ! this.player2.isDead()) {
      //determine who goes first
      var firstStrike = Math.ceil(Math.random() * 2),
          strikerOne = null,
          strikerTwo = null;
      if(firstStrike === 1) { 
        strikerOne = this.player1;
        strikerTwo = this.player2;
      } else {
        strikerOne = this.player2;
        strikerTwo = this.player1;
      }

      if (this.fatefulWinds(strikerOne, strikerTwo)) {
        break;
      }
     
      if (this.fatefulWinds(strikerTwo, strikerOne)) {
        break;
      }
    }
  }
};

window.Game = Game;
