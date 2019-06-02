import { sampleSize } from "lodash";
import { crabManTraits, traits } from "../characterData/traits";

/**
 * Utility function that produces a string describing a generated character's traits.
 * Takes two parameters, the intelligence ability score and the string of langauges
 * the character knows.
 * Returns a string.
 * @param  {number} intScore
 * @param  {string} languages
 */
export const getTraits = (
  intScore: number,
  languages: string,
  classOptionKey: string
) => {
  /**
   * Crab-Men Traits are different from other classes since they are
   * so radically different from other classes in appearance and social
   * status.
   */
  if (classOptionKey === "crabMan") {
    let crabManTraitsString = `A ${sampleSize(
      crabManTraits.background,
      1
    )}. Wears ${sampleSize(crabManTraits.rags, 1)} rags.\n Has a ${sampleSize(
      crabManTraits.physique,
      1
    )} physique, a ${sampleSize(
      crabManTraits.face,
      1
    )} face, and a ${sampleSize(
      crabManTraits.shell,
      1
    )} shell.\n Is ${sampleSize(crabManTraits.virtues, 1)}, but ${sampleSize(
      crabManTraits.vices,
      1
    )}. Has been ${sampleSize(
      crabManTraits.misfortunes,
      1
    )} in the past.\n Favors ${sampleSize(crabManTraits.alignment, 1)}.`;

    return crabManTraitsString;
  }

  let languageDescriptor = "";
  let languageCount = languages.split(",").length;

  /**
   *
   ** INT modifier - language ability - (bonus languages)
   * 3     unable to read or write, broken speech (0)
   * 4-5   unable to read or write                (0)
   * 6-8   can write simple words                 (0)
   * 9-12  can read and write native languages    (0)
   * 13-15 can read and write native languages    (1)
   * 16-17 can read and write native languages    (2)
   * 18    can read and write native languages    (3)
   *
   * The following checks the intScore, then references the table above
   * to determine level of compotency/fluency.
   */

  if (intScore <= 3) {
    languageDescriptor = "unable to read or write, and has broken, ";
  }
  if (intScore > 3 && intScore <= 5) {
    languageDescriptor = "unable to read or write, and has ";
  }
  if (intScore > 5 && intScore <= 8) {
    languageDescriptor = "only able to write simple words, and has ";
  }
  if (intScore > 8 && intScore <= 12) {
    languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
  }
  if (intScore > 12 && intScore <= 15) {
    languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
  }
  if (intScore > 15 && intScore <= 17) {
    languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
  }
  if (intScore === 18) {
    languageDescriptor = `able to read and write in ${languageCount} different languages, and has `;
  }

  let traitsString = `A ${sampleSize(traits.background, 1)}. Wears ${sampleSize(
    traits.clothing,
    1
  )} clothes, ${languageDescriptor} ${sampleSize(
    traits.speech,
    1
  )} speech.\n Has a ${sampleSize(traits.physique, 1)} physique, a ${sampleSize(
    traits.face,
    1
  )} face, ${sampleSize(traits.skin, 1)} skin, and ${sampleSize(
    traits.hair,
    1
  )} hair.\n Is ${sampleSize(traits.virtues, 1)}, but ${sampleSize(
    traits.vices,
    1
  )}. Has been ${sampleSize(
    traits.misfortunes,
    1
  )} in the past.\n Favors ${sampleSize(traits.alignment, 1)}.`;

  return traitsString;
};
