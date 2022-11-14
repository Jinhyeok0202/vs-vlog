import React, { useEffect, useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import AppContext from "../context/AppContext";

function Search() {
  const { postData, setSelectedTag } = useContext(AppContext);

  const [tagData, setTagData] = useState([
    {
      tagTitle: "Tach",
      count: 3,
      postArr: [],
    },
    {
      tagTitle: "일상",
      count: 3,
      postArr: [],
    },
  ]);

  useEffect(() => {
    const tempArr = [];

    searchTahFnc(postData);

    function searchTahFnc(nowPostDataArr) {
      nowPostDataArr.forEach((nowPostData) => {
        if (nowPostData.type === "post") {
          nowPostData.data.tag?.forEach((tag) => {
            const tempTarget = tempArr.find((temp) => tag === temp.tagTitle);

            if (tempTarget) {
              tempTarget.count += 1;
              tempTarget.postArr.push(nowPostData.path);
              tempTarget.postArr = [...new Set(tempTarget.postArr)];
            } else {
              tempArr.push({
                tagTitle: tag,
                count: 1,
                postArr: [nowPostData.path],
              });
            }
          });
        } else {
          // 디렉토리일 경우 처리
          nowPostData.children && searchTahFnc(nowPostData.children);
        }
      });
    }
    console.log(tempArr);
    setTagData(tempArr);
  }, [postData]);

  return (
    <Accordion title="Tags" initialExpanded isBold>
      <TagWrap>
        {tagData.map((one, index) => (
          <Tag
            key={index}
            onClick={() => {
              setSelectedTag({
                tagTitle: one.tagTitle,
                path: one.postArr,
              });
            }}
          >
            {one.tagTitle} <span>{one.count}</span>
          </Tag>
        ))}
      </TagWrap>
    </Accordion>
  );
}

export default Search;

const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.third};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }

  > span {
    color: red;
  }
`;
