import React from "react";
import { GiOrcHead } from "react-icons/gi";
import { halfOrcEquipment } from "../equipmentKits";

export const halfOrc = {
  name: "Half-Orc",
  icon: React.createElement(GiOrcHead, {}),
  requirements: "None",
  primeRequisite: "DEX and STR",
  hitDice: "1d6",
  xpToSecondLevel: "1,800 XP",
  maximumLevel: "8",
  allowedArmor: "Leather and chainmail armor, shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common", "Orcish"],
  saves: {
    poison: 13,
    wands: 14,
    stone: 13,
    breath: 16,
    magic: 15
  },
  equipment: halfOrcEquipment,
  abilities: [
    "<strong>Back-stab:</strong> When attacking an unaware opponent from behind, a half-orc receives a +4 bonus to hit and doubles any damage dealt.",
    "<strong>Combat:</strong> Half-orcs can use all types of weapons and can use leather armor, chainmail, and shields.",
    "<strong>Infravision:</strong> Half-orcs have infravision to 60’ (see <i><strong>Hazards and Challenges</strong> in Core Rules</i>).",
    "<strong>Retainers:</strong> Half-orcs are reviled by most other races, including both of their parent races. Any retainers in a half-orc’s employ have their loyalty score reduced by one. (This does not apply to retainers who are also half-orcs.)",
    "<strong>Thief Skills:</strong> Half-orcs have the following skills, which improve as the character gains levels. Note that dice rolls for these abilities are usually made by the referee, because a half-orc is not always aware that he or she has failed!\n\n<div style='padding: 0 1.5rem'><strong>Hide in Shadows:</strong> Requires the half-orc to be motionless—attacking or moving while hiding is not possible.\n\n<strong>Move Silently:</strong> A half-orc may attempt to sneak past enemies unnoticed.\n\n<strong>Pick Pockets:</strong> If the victim is above 5th level, the half-orc’s roll is penalized by 5% for every level above 5th. There is always at least a 1% chance of failure. A roll of more than twice the percentage required for success means that the attempted theft is noticed. The referee should determine the reaction of the victim (possibly using the reaction table under <i>Encounters, Core Rules</i>).</div>"
  ],
  abilitiesSummary:
    "Back-stab, Infravision, Reviled (reduced loyalty for non-half-orc retainers), Thief Skills (hide in shadows, move silently, open locks, pick pockets)",
  /**
   * @see for "Using a Thief Skill" homebrew rule
   * http://doomslakers.blogspot.com/2019/01/once-again-with-thieves.html
   */
  halfOrcThiefSkills: [
    "<strong>Hide in Shadows (HS), Move Silently (MS), Pick Pockets (PP)</strong>\n",
    "<strong>Using a Thief Skill:</strong> The DM will roll skill dice and the thief player will roll an ability check (d20 + DEX modifier) simultaneously. If the skill roll is successful, the half-orc has perfectly executed their subtle craft and cannot fail. Otherwise the ability check result is used to determine success or failure. <i>Half-orcs are exceptional at these skills. Other classes may attempt these skills with only an ability check and usually disadvantage (DM discretion).</i>"
  ]
};