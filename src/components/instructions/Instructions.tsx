import React from "react";
import { CentredP, Modal, P } from "../styled";

type InstructionsProps = {
  closed: boolean;
  closeModal: () => void;
};

const Instructions: React.FC<InstructionsProps> = ({ closed, closeModal }) => {
  return (
    <Modal closed={closed} onClick={closeModal}>
      <CentredP color="#000" fontSize="1">
        INSTRUCTIONS
      </CentredP>
      <br />
      <P>
        This game is in development. At this time, exactly two players are
        required on the same server to play Salaryman Shodown.
      </P>
      <P>How to play:</P>
      <P>
        0. Anything under 履歴書 can be ignored. This is for future
        implementation.
        <br />
        1. Your salaryman has 6 attributes: conformity, loyalty, karaoke skill,
        mucus production, senority, sobriety. All attributes start with a base
        of 5. You have 10 additional points to distribute across these
        attributes.
        <br />
        2. Distribute your points and click [submit] After both players have
        clicked [submit], the game begins.
        <br />
        3. Click [START] to initiate a round. The game will randomly select an
        attribute to compare between both players. The player with the higher
        value for that attribute wins the round. If there is a draw, players are
        notified but are not told which attribute was compared.
        <br />
        4. The round loser will lose one CP but will have the option of
        re-distrubuting a single attribute point.
        <br />
        5. The game continues until one player reaches 0 CP. The other player
        wins.
      </P>
      <CentredP color="000">Click anywhere to begin</CentredP>
    </Modal>
  );
};

export default Instructions;
