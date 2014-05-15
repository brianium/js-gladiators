//Setup Graham
var graham = new Gladiator("Doctor Dre", 8, 6, 6),
    grahamsWeapon = new Weapon("Swamp Net", 7),
    grahamsArmor = new Armor("Rings Of Saturn", 3);
graham.equipWeapon(grahamsWeapon);
graham.equipArmor(grahamsArmor);

//Setup Mike
var mike = new Gladiator("Targus", 4, 8, 8),
    mikesWeapon = new Weapon("Death Render", 2),
    mikesArmor = new Armor("Skull Clamp", 8);
mike.equipWeapon(mikesWeapon);
mike.equipArmor(mikesArmor);

//Setup Brett
var brett = new Gladiator("Inquisitor", 6, 8, 6),
    brettsWeapon = new Weapon("Bastard Sword", 7),
    brettsArmor = new Armor("Scythe", 3);
brett.equipWeapon(brettsWeapon);
brett.equipArmor(brettsArmor);

//Setup Brian
var brian = new Gladiator("Fortran", 1, 19, 0),
    briansWeapon = new Weapon("COBOL", 10),
    briansArmor = new Armor("Thin Cloak", 0);
brian.equipWeapon(briansWeapon);
brian.equipArmor(briansArmor);

//Setup Jonathan
var jonathan = new Gladiator("Francois Holland", 18, 1, 1),
    jonathansWeapon = new Weapon("Scooter of Shame", 1),
    jonathansArmor = new Armor("Dignity", 1);
jonathan.equipWeapon(jonathansWeapon);
jonathan.equipArmor(jonathansArmor);

//Start Game
var game = new Game(graham, jonathan);
game.run();
