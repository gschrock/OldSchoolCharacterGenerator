import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Character from "./components/character";
import { checkContainsDemihumans } from "./utils/checkContainsDemihumans";
import { getAbilityScores } from "./utils/getAbilityScores";
import { getClassOptionsToDisplay } from "./utils/getClassOptionsToDisplay";
import { getClassPrimeRequisites } from "./utils/getClassPrimeRequisites";
import { getExperienceAdjustment } from "./utils/getExperienceAdjustment";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

/**
 * @todo
 * include "knave spell checkbox input",
 * use a "useState" hook for tracking this
 *
 * @todo
 * prettify display of prime req and exp
 * adjustment bonus in this component
 */

const AppImpl: React.SFC<ImplProps> = ({ className }) => {
  const [abilityScores, setAbilityScores] = useState(getAbilityScores);
  const [isClassSelected, setIsClassSelected] = useState(false);
  const [classSelection, setClassSelection] = useState("");
  const [includeKnaveSpells, setIncludeKnaveSpells] = useState(false);
  useEffect(() => {
    setAbilityScores(abilityScores);
  }, [abilityScores]);

  const classOptions = getClassOptionsToDisplay(abilityScores);
  return (
    <div className={className}>
      {!isClassSelected && (
        <React.Fragment>
          <AbilityScoresContainer>
            <AbilityScore>STR</AbilityScore>
            <AbilityScore>DEX</AbilityScore>
            <AbilityScore>CON</AbilityScore>
            <AbilityScore>INT</AbilityScore>
            <AbilityScore>WIS</AbilityScore>
            <AbilityScore>CHA</AbilityScore>
          </AbilityScoresContainer>
          <AbilityScoresContainer>
            {abilityScores.map((abilityScore, index) => (
              <AbilityScore key={index}>{abilityScore}</AbilityScore>
            ))}
          </AbilityScoresContainer>
        </React.Fragment>
      )}
      <div>
        <input 
          type="checkbox"
          onChange={() => {setIncludeKnaveSpells(!includeKnaveSpells)}}
        ></input>
        <label>Include Knave Spells</label>
      </div>
      {!isClassSelected && (
        <ClassButtonsContainer>
          {checkContainsDemihumans(classOptions) && "b/x you silly"}
          {Object.keys(classOptions).map(classOptionKey => (
            <ClassOptionContainer key={classOptionKey}>
              <ButtonContainer>
                <ClassButton
                  variant="outline-secondary"
                  onClick={() => {
                    setIsClassSelected(true);
                    setClassSelection(classOptionKey);
                  }}
                >
                  {classOptions[classOptionKey]}
                </ClassButton>
              </ButtonContainer>
              <ClassPrimeRequisites>
                {getClassPrimeRequisites(classOptionKey)}
                {getExperienceAdjustment(
                  abilityScores,
                  getClassPrimeRequisites(classOptionKey)
                )}
              </ClassPrimeRequisites>
            </ClassOptionContainer>
          ))}
        </ClassButtonsContainer>
      )}
      {isClassSelected && classSelection && (
        <Character
          classSelection={classSelection}
          abilityScores={abilityScores}
          includeKnaveSpells={includeKnaveSpells}
        />
      )}
    </div>
  );
};

const AbilityScore = styled.div`
  color: white;
  font-size: 1rem;
  background-color: black;
  border-right: 1px solid white;
  border-left: 1px solid white;
  padding: 0.5rem;
  width: 3rem;
  text-align: center;
`;

const AbilityScoresContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ClassButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const ButtonContainer = styled.div`
  padding: 0.75rem;
`;

const ClassOptionContainer = styled.div``;

const ClassButton = styled(Button)``;

const ClassPrimeRequisites = styled.div``;

const StyledApp = styled(AppImpl)`
  font-family: "Roboto Mono", monospace;
  .btn {
    width: 100%;
  }
  /* display: flex;
  justify-content: center; */
`;

export default StyledApp;
