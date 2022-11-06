import React, { useState } from "react";
import styled from "styled-components";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

function Accordion({ title, children, isBold }) {
  const [exported, setExported] = useState(false);
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
      {exported && <AccordionContemWrap>{children}</AccordionContemWrap>}
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
  user-select: none;
  padding-top: 5px;
  padding-left: 15px;
`;