import { clericEquipment } from "../equipmentKits";

export const cleric = {
  name: "Cleric",
  requirements: "None",
  primeRequisite: "WIS",
  hitDice: "1d6",
  maximumLevel: "14",
  allowedArmor: "Any, including shields",
  allowedWeapons: "Any blunt weapons",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 11,
    wands: 12,
    stone: 14,
    breath: 16,
    magic: 15
  },
  equipment: clericEquipment,
  abilities: [
    "<strong>Using Magic Items:</strong> As spell casters, clerics can use magic scrolls of spells on their spell list. There are also items (e.g. some staves) that may only be used by divine spell casters (including clerics).",
    "<strong>Turning the Undead:</strong> Clerics can invoke the power of their deity to repel undead monsters encountered. To turn the undead, the player rolls 2d6. The referee then consults the table opposite, comparing the roll against the Hit Dice of the undead monsters targeted.\n\n<strong>Successful Turning</strong>\n  If the turning attempt succeeds, the player must roll 2d6 to determine the number of HD of undead monsters affected.\n\n  <div style='padding: 0 1.5rem'>• <strong>Minimum effect:</strong> At least one undead creature will always be turned or destroyed on a successful turning.\n\n• <strong>Turned undead:</strong> Will leave the area, if possible, and will not harm or make contact with the cleric.\n\n• <strong>Destroyed undead (result of D):</strong> Are instantly and permanently annihilated.\n\n• <strong>Mixed groups:</strong> If turn undead is used against a mixed group of undead monsters of different types, those with the lowest HD are affected first.</div>  "
  ],
  turn:
    "* 2 HD monsters with a special ability (i.e. with an asterisk next to their HD rating, in the monster description)."
};
