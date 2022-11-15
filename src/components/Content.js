import Accordion from "./Accordion";
import PostWrap from "./PostWrap";

function Content({ type, title, children, path }) {
  return type === "directory" ? (
    <Accordion title={`📂${title}`}>
      {children?.map((one) => (
        <Content {...one} />
      ))}
    </Accordion>
  ) : (
    <PostWrap title={title} path={path} />
  );
}

export default Content;

// const PostWrap = styled.div`
//   margin: 5px 0;
//   cursor: pointer;

//   &:not(.selected):hover {
//     background-color: ${({ theme }) => theme.color.hover};
//   }

//   &.selected {
//     background-color: ${({ theme }) => theme.color.selected};
//   }
// `;
