import React from "react";
import { GiRadialBalance } from "react-icons/gi";
import { magicUserEquipment } from "../equipmentKits";

export const wildMagicUser = {
  name: "Wild Magic-User",
  icon: React.createElement(GiRadialBalance, {}),
  requirements: "Minimum INT 9",
  primeRequisite: "INT",
  hitDice: "1d4",
  xpToSecondLevel: "2,500 XP",
  maximumLevel: "14",
  allowedArmor: "None",
  allowedWeapons: "Daggers and staves only",
  languages: ["Alignment", "Common"],
  saves: {
    poison: 13,
    wands: 14,
    stone: 13,
    breath: 16,
    magic: 15
  },
  equipment: magicUserEquipment,
  abilities: [
    "<strong>Combat:</strong> Wild magic-users may only use daggers and are unable to use shields or wear any kind of armor. This makes them very vulnerable in combat.",
    "<strong>Arcane Magic:</strong> See <i>Magic in Core Rules, p42</i> for full details on arcane magic.\n\n<div style='padding: 0 1.5rem'><strong>Magical Research:</strong> A wild magic-user of any level may spend time and money to research new spells to add to his or her spell book. When a wild magic-user reaches 9th level, he or she is also able to create magic items and research other magical effects.\n\n<strong>Spell Casting:</strong> Wild magic-users carry spell books containing the formulae for arcane spells. A 1st level wild magic-user has one spell in his or her spell book. The list of spells available to wild magic-users is found on <i>p45</i>.\n\n<strong>Using Magic Items:</strong> As spell casters, wild magic-users are able to use magic scrolls of spells on their spell list. There are also items (e.g. magic wands) that may only be used by arcane spell casters (including wild magic-users).</div>",
    "<strong>Spell Level Variability:</strong> The wild magic-user's work with the principles of uncertainty affects all spells that have a level variable for range, duration, area of effect, or damage. Each time a wild magic-user casts or activates a spell with a level variable, they randomly determine the resulting casting level of the spell. The spell may function at lesser, equal, or greater effect than normal. To determine the level at which the spell is cast, the player must roll 1d20 at the moment the spell is cast (re-rolling results greater than 14). The resulting roll is the wild magic-user's level for the spell.",
    "<strong>Wild Surges:</strong> Wild magic-user spells sometimes unfold in spectacular wild surges that could prove catastrophic to the wild magic-user and their companions. Each time a wild magic-user casts or activates a spell, roll 1d6 to see if a random magical effect is unleashed. If a wild surge is unleashed, the referee determines the result from an exhaustive table of possible side-effects. At 5th level, a wild magic-user gains the ability to roll twice for every wild surge and choose the result."
  ],
  abilitiesSummary: "Arcane Magic, Spell Level Variability, Wild Surges",
  spells: "see MagicUser spells",
  wildMagicUserMagicSurges: [
    "<strong>Handling Wild Surges:</strong> Wild surge occurrence is determined by rolling 1d6 on the Wild Magic-User Chance of Wild Surge table. The DM will roll to determine the result of a wild surge. It is possible to not know the immediate consequences of a wild surge."
  ]
};