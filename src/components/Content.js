import { useContext } from "react";
import Accordion from "./Accordion";
import AppContext from "../context/AppContext";

function Content({ type, title, children, path }) {
  const { setSelectedPost, setOpenPost, openPost } = useContext(AppContext);

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
    <div onClick={slectedFunction}>&nbsp;&nbsp;&nbsp;&nbsp;📝{title}</div>
  );
}

export default Content;
