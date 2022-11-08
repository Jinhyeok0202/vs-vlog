import React, { useState } from "react";
import styled from "styled-components";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

function Accordion({ title, children, isBold, initialExpanded }) {
  const [exported, setExported] = useState(initialExpanded || false);
  return (
    <>
      <AccordionWrap
        onClick={() => {
          setExported(!exported);
        }}
      >
        {exported ? <VscChevronDown /> : <VscChevronRight />}
        <span> {isBold ? <strong> {title}</strong> : title}</span>
      </AccordionWrap>
      {
        <AccordionContemWrap exported={exported}>
          {children}
        </AccordionContemWrap>
      }
    </>
  );
}

export default Accordion;

const AccordionWrap = styled.div`
  display: flex;
  align-items: center;
  color: white;

  font-size: 0.8rem;
  padding: 5px 0;
  cursor: pointer;

  > span {
    padding-left: 5px;
    user-select: none;
  }
`;

const AccordionContemWrap = styled.div`
  max-height: ${({ exported }) => (exported ? "500px" : "0")};
  overflow: hidden;
  transition: ${({ exported }) =>
    exported ? "max-height: 0.25s ease-in;" : "max-height: 0.1s ease-out;"};

  user-select: none;
  padding-top: 5px;
  margin-left: 15px;
`;
