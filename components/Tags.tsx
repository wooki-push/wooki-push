import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ITagsList } from "../types";

const TagContainer = styled.ul`
  display: block;
  margin-bottom: 20px;
`;
enum ColorList {
  purple = "#6410ED",
  red = "#F53920",
  green = "#26BE7E",
  gray = "#aaa",
}
interface IColorPicker {
  color: string;
}
const ColorPicker = (color: string | undefined) => {
  switch (color) {
    case "red":
      return ColorList.red;
    case "purple":
      return ColorList.purple;
    case "green":
      return ColorList.green;
    default:
      return ColorList.gray;
  }
};

const Tag = styled.li`
  display: inline-block;
  color: #fff;
  padding: 3px 5px;
  background: ${(props) =>
    props.color === "" ? ColorList.gray : ColorPicker(props.color)};
  border-radius: 3px;
  margin-right: 4px;
  font-weight: 700;
  font-size: 10px;
  transition: 0.5s all;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const Tags: FunctionComponent<ITagsList> = ({ tags }) => {
  return (
    <TagContainer>
      {tags.map((tag, key) => (
        <Tag key={key} color={tag.color}>
          {tag.name}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
