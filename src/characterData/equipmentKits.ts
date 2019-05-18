import {
  getDivineScrollSpell,
  getMagicUserScrollSpell
} from "../utils/getRandomSpellScroll";

/**
 * Cleric equipment kits cannot be higher than 9 slots.
 * 9 + starting gold = 10
 */
export const clericEquipment = [
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDivineScrollSpell()}`
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>Shield</strong>",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDivineScrollSpell()}`
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Quarter-Staff</strong> (Damage: 1d4, Qualities: Blunt, Melee, Slow, Two-handed)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>War Hammer</strong> (Damage: 1d6, Qualities: Blunt, Melee, 3 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Shield</strong>",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Shield</strong>",
    "<strong>War Hammer</strong> (Damage: 1d6, Qualities: Blunt, Melee, 3 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>War Hammer</strong> (Damage: 1d6, Qualities: Blunt, Melee, 3 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Silver Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Quarter-Staff</strong> (Damage: 1d4, Qualities: Blunt, Melee, Slow, Two-handed)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDivineScrollSpell()}`
  ],
  [
    "<strong>Silver Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDivineScrollSpell()}`
  ],
  [
    "<strong>Silver Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>War Hammer</strong> (Damage: 1d6, Qualities: Blunt, Melee, 3 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>War Hammer</strong> (Damage: 1d6, Qualities: Blunt, Melee, 3 slots)",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDivineScrollSpell()}`
  ],
  [
    "<strong>Silver Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Vial Holy Water</strong> (Damage: 1d8, Qualities: Missile (5’-10’ / 11’-30’ / 31’-50’), Splash weapon)"
  ]
];

/**
 * Fighter equipment kits cannot be higher than 9 slots.
 * 9 + starting gold = 10
 */
export const fighterEquipment = [
  [
    "<strong>Spear</strong> (Damage: 1d6, Qualities: Brace, Melee, Missile (5’-20’ / 21’-40’ / 41’-60’), 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Morning Star</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Battle Axe</strong> (Damage: 1d8, Qualities: Melee, Slow, Two-handed, 3 slots)",
    "<strong>Hand Axe</strong> (Damage: 1d6, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’), 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Spear</strong> (Damage: 1d6, Qualities: Brace, Melee, Missile (5’-20’ / 21’-40’ / 41’-60’), 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Sling</strong> (Damage: 1d4, Qualities: Blunt, Missile (5’-40’ / 41’-80’ / 81’-160’))",
    "<strong>Pouch With Sling Bullets</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Shield</strong>",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Spear</strong> (Damage: 1d6, Qualities: Brace, Melee, Missile (5’-20’ / 21’-40’ / 41’-60’), 2 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case With Bolts</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Two-Handed Sword</strong> (Damage: 1d8, Qualities: Melee, 3 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Flail</strong> (Damage: 1d6, Qualities: Blunt, Melee)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case With Bolts</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Battle Axe</strong> (Damage: 1d8, Qualities: Melee, Slow, Two-handed, 3 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Two-Handed Sword</strong> (Damage: 1d8, Qualities: Melee, 3 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Halberd</strong> (Damage: 1d10, Qualities: Brace, Melee, Slow, Two-handed, 3 slots)",
    "<strong>Silver Tipped Arrows</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ]
];

/**
 * Magic-User equipment kits cannot be higher than 9 slots.
 * 9 + starting gold = 10
 */
export const magicUserEquipment = [
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getMagicUserScrollSpell()}`,
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getMagicUserScrollSpell()}`,
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Vial of Holy Water</strong> (Damage: 1d8, Qualities: Missile (5’-10’ / 11’-30’ / 31’-50’), Splash weapon)",
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    `${getMagicUserScrollSpell()}`,
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Silver Mirror</strong>",
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>2 Vials Holy Water</strong> (Damage: 1d8, Qualities: Missile (5’-10’ / 11’-30’ / 31’-50’), Splash weapon)",
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Vial of Holy Water</strong> (Damage: 1d8, Qualities: Missile (5’-10’ / 11’-30’ / 31’-50’), Splash weapon)",
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>2 Vials Holy Water</strong> (Damage: 1d8, Qualities: Missile (5’-10’ / 11’-30’ / 31’-50’), Splash weapon)",
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getMagicUserScrollSpell()}`,
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getMagicUserScrollSpell()}`,
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getMagicUserScrollSpell()}`,
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    `${getMagicUserScrollSpell()}`,
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getMagicUserScrollSpell()}`,
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    `${getMagicUserScrollSpell()}`,
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    `${getMagicUserScrollSpell()}`,
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Spellbook</strong>"
  ],
  [
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    `${getMagicUserScrollSpell()}`,
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Spellbook</strong>"
  ]
];

/**
 * Thief equipment kits cannot be higher than 9 slots.
 * 9 + starting gold = 10
 */
export const thiefEquipment = [
  [
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>Sling</strong> (Damage: 1d4, Qualities: Blunt, Missile (5’-40’ / 41’-80’ / 81’-160’))",
    "<strong>Pouch With Sling Bullets</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Thieves' Tools</strong>"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Thieves' Tools</strong>"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Sling</strong> (Damage: 1d4, Qualities: Blunt, Missile (5’-40’ / 41’-80’ / 81’-160’))",
    "<strong>Pouch With Sling Bullets</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Thieves' Tools</strong>"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case With Bolts</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Thieves' Tools</strong>"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of 30 Bolts</strong>",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Thieves' Tools</strong>"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Thieves' Tools</strong>"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Silver Tipped Bolts</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)",
    "<strong>Thieves' Tools</strong>"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of 30 Bolts</strong>",
    "<strong>Silver Tipped Bolts</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>Silver Tipped Arrows</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of 30 Bolts</strong>",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>Silver Tipped Arrows</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ]
];

/**
 * Drow equipment kits cannot be higher than 9 slots.
 * 9 + starting gold = 10
 */
export const drowEquipment = [
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Short Sword</strong> (Damage: 1d6, Qualities: Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDivineScrollSpell()}`
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Short Sword</strong> (Damage: 1d6, Qualities: Melee, 2 slots)",
    "<strong>Short Sword</strong> (Damage: 1d6, Qualities: Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDivineScrollSpell()}`
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Two-Handed Sword</strong> (Damage: 1d8, Qualities: Melee, 3 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Two-Handed Sword</strong> (Damage: 1d8, Qualities: Melee, 3 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Shield</strong>",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Silver Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of 30 Bolts</strong>",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDivineScrollSpell()}`
  ],
  [
    "<strong>Silver Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of 30 Bolts</strong>",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDivineScrollSpell()}`
  ],
  [
    "<strong>Silver Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Wooden Holy Symbol</strong>",
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)",
    `${getDivineScrollSpell()}`
  ],
  [
    "<strong>Silver Holy Symbol</strong>",
    "<strong>Plate Armor</strong> (3 slots)",
    "<strong>Shield</strong>",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ]
];

/**
 * Bards equipment kits cannot be higher than 8 slots.
 * 8 + starting gold + instrument = 10
 */
export const bardEquipment = [
  [
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>Sling</strong> (Damage: 1d4, Qualities: Blunt, Missile (5’-40’ / 41’-80’ / 81’-160’))",
    "<strong>Pouch With Sling Bullets</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Cudgel</strong> (Damage: 1d4, Qualities: Blunt, Melee)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Sling</strong> (Damage: 1d4, Qualities: Blunt, Missile (5’-40’ / 41’-80’ / 81’-160’))",
    "<strong>Pouch With Sling Bullets</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of 30 Bolts</strong>",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of 30 Bolts</strong>",
    "<strong>Silver Tipped Bolts</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Chainmail</strong> (2 slots)",
    "<strong>Sword</strong> (Damage: 1d8, Qualities: Melee, 2 slots)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of 30 Bolts</strong>",
    "<strong>Silver Tipped Bolts</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Short Sword</strong> (Damage: 1d6, Qualities: Melee, 2 slots)",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Quiver of Arrows</strong> (d20 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Short Sword</strong> (Damage: 1d6, Qualities: Melee, 2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Dagger</strong> (Damage: 1d4, Qualities: Melee, Missile (5’-10’ / 11’-20’ / 21’-30’))",
    "<strong>Crossbow</strong> (Damage: 1d6, Qualities: Missile (5’-80’ / 81’-160’ / 161’-240’), Slow, Two-handed, 3 slots)",
    "<strong>Case of 30 Bolts</strong>",
    "<strong>2 Travel rations</strong> (1/day)"
  ],
  [
    "<strong>Leather Armor</strong> (2 slots)",
    "<strong>Mace</strong> (Damage: 1d6, Qualities: Blunt, Melee, 2 slots)",
    "<strong>Short Bow</strong> (Damage: 1d6, Qualities: Missile (5’-50’ / 51’-100’ / 101’-150’), Two-handed, 2 slots)",
    "<strong>Silver Tipped Arrows</strong> (d4 usage die)",
    "<strong>2 Travel rations</strong> (1/day)"
  ]
];
