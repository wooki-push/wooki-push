import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";

interface IFeedContent {
  stockName: string;
  title: string;
  contents: string;
  thumbnail: string|undefined;
}

const StockName = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: #aaa;
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
`;
const FeedContentContainer = styled.dl`
  dt {
    color: #333;
    font-weight: 700;
    line-height: 26px;
    color: #333;
    margin: 5px 0;
  }
  dd {
    font-size: 15px;
    line-height: 24px;
    color: #777;
    img {
      display:block;
      margin-top:20px;
    }
  }
`;

const FeedContent: FunctionComponent<IFeedContent> = ({
  stockName,
  title,
  contents,
  thumbnail,
}) => {
  return (
    <FeedContentContainer>
      <dt>
        <StockName>{stockName}</StockName>
        {title}
      </dt>
      <dd>
        {contents}
        {thumbnail ? (
          <img src={`/contents/${thumbnail}`} alt="썸네일"/>
        ) : (
          ""
        )}
      </dd>
    </FeedContentContainer>
  );
};

export default FeedContent;
