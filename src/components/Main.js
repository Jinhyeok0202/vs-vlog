import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineDocument } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Accordion from "./Accordion";

// https://kscode.vercel.app

const listArr = [
  {
    icon: <HiOutlineDocument size={24} />,
    path: "EXPLOER",
    content: (
      <>
        <Accordion title="OPEN POSTS" isBold={true}>
          내요요요옹
        </Accordion>
        <Accordion title="VSCODE" isBold={true}>
          <Accordion title="📂VSCODE">
            &nbsp;&nbsp;&nbsp;&nbsp;📝asdadsads
          </Accordion>
          <Accordion title="📂VSCODE">
            &nbsp;&nbsp;&nbsp;&nbsp;📝asdasd
          </Accordion>
        </Accordion>
      </>
    ),
  },
  {
    icon: <AiOutlineSearch size={24} />,
    path: "search",
  },
];

function Main() {
  const [selected, setSelected] = useState(0);

  return (
    <Wrap>
      <LeftBar>
        {listArr.map((one, index) => (
          <IconWrap
            selected={selected === index}
            onClick={() => {
              setSelected(selected === index ? null : index);
            }}
          >
            {one.icon}
          </IconWrap>
        ))}
      </LeftBar>
      {selected !== null && listArr[selected] && (
        <LefContent>
          <p>{listArr[selected]?.path}</p>
          {listArr[selected]?.content}
        </LefContent>
      )}
    </Wrap>
  );
}

export default Main;

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1fb1b1;
`;
const LeftBar = styled.div`
  width: 50px;
  height: 100%;
  background-color: #333333;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;

  border-left: ${({ selected }) => (selected ? 2 : 0)}px solid white;
  > svg {
    color: ${({ selected }) => (selected ? "white" : "#7a7a7a")};
  }
`;

const LefContent = styled.div`
  width: 320px;
  height: 100%;
  background-color: #252526;
  > p {
    padding-bottom: 10px;
    color: #7a7a7a;
  }
`;
