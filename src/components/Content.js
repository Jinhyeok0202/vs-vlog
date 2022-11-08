import { useContext } from "react";
import Accordion from "./Accordion";
import AppContext from "../context/AppContext";
import styled from "styled-components";

function Content({ type, title, children, path }) {
  const { selectedPost, setSelectedPost, setOpenPost, openPost } =
    useContext(AppContext);

  function slectedFunction() {
    setSelectedPost(path);

    if (!openPost.includes(path)) {
      setOpenPost([...openPost, path]);
    }
  }

  return type === "directory" ? (
    <Accordion title={`📂${title}`}>
      {children?.map((one) => (
        <Content {...one} />
      ))}
    </Accordion>
  ) : (
    <PostWrap
      onClick={slectedFunction}
      className={selectedPost === path ? "selected" : ""}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;📝{title}
    </PostWrap>
  );
}

export default Content;

const PostWrap = styled.div`
  margin: 5px 0;
  cursor: pointer;

  &:not(.selected):hover {
    background-color: ${({ theme }) => theme.color.hover};
  }

  &.selected {
    background-color: ${({ theme }) => theme.color.selected};
  }
`;
