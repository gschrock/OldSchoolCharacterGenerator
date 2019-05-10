import { sampleSize } from "lodash";
import Roll from "roll";
import { characterClasses } from "../characterData/classes";
import { gear } from "../characterData/gear";
import { getEquipmentSlots } from "./getEquipmentSlots";
import { getRandomInstrument } from "./getRandomInstrument";

/**
 * Utility function to determine equipment and starting gold for a character.
 * Takes a parameter that specifies class.
 * Returns an array of strings -- the names of equipment/items.
 * @param classOptionKey
 * @param conScore
 */
export const getEquipment: (classOptionKey: string, conScore: number) => any = (
  classOptionKey: string,
  conScore: number
) => {
  const roller = new Roll();
  let characterEquipment = [];
  let characterEquipmentString = "";

  /**
   * If CON score > 10 set available equipment slots to CON score,
   * otherwise, set available slots 10.
   */
  const slots = conScore > 10 ? conScore : 10;

  // Get starting equipment kit based on class.
  const characterEquipmentKit = sampleSize(
    characterClasses[classOptionKey].equipment,
    1
  )[0];

  // Starting wealth is 3d6x2 gp
  const characterStartingWealthString = `• <strong>${roller
    .roll("3d6*2")
    .result.toString()} gp in Coin Purse</strong> †`;

  // Include starting wealth and kit
  characterEquipment.push(characterStartingWealthString, characterEquipmentKit);

  /**
   * If class is a bard, make sure they have a random
   * instrument.
   */
  if (classOptionKey === "bard") {
    characterEquipment.push(getRandomInstrument());
  }

  // Determine how many equipment slots are currently occupied
  const equipmentCountBeforeRandomItems = getEquipmentSlots(
    characterEquipment.flat()
  );

  /**
   * Determine random items for available slots.
   *
   * **House rule!**
   * Just like Knave, but since a character can have
   * less than 10 CON, we set each character at a base
   * of 10 slots, and any CON over 10 gets the differnce
   * as random equipment occupied slots.
   *
   * This means every character can carry at least 10
   * slots worth of items.
   */
  let characterRandomItems = sampleSize(
    gear,
    slots - equipmentCountBeforeRandomItems
  );

  characterEquipment.push(characterRandomItems);

  /**
   * Check if random items contains an instrument,
   * if it does we replace it with a random instrument
   * from the instrument list.
   */
  const indexOfItemToReplace = characterRandomItems.findIndex(
    item => item === "<strong>Instrument</strong>"
  );
  if (indexOfItemToReplace !== -1) {
    characterRandomItems[indexOfItemToReplace] = getRandomInstrument();
  }

  characterEquipmentString = characterEquipment.flat().join("\n\n• ");
  /**
   * If class is a dwarf or halfling, and equipment
   * contains a two-handed sword or long bow, we have
   * to re-determine equipment. Dwarves and halflings
   * cannot use these weapons due to their size.
   */
  console.log(characterEquipmentString);
  if (
    (classOptionKey === "halfling" || classOptionKey === "dwarf") &&
    (characterEquipmentString.includes("Two-Handed Sword") ||
      characterEquipmentString.includes("Long Bow"))
  ) {
    // characterEquipmentString = "";
    return getEquipment(classOptionKey, conScore);
  }

  return characterEquipmentString;
};
