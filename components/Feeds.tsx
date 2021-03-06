import styled from "styled-components";
import { IFeed, ITag } from "../types";
import Tags from "./Tags";
import Profile from "./Profile";
import FeedContent from "./FeedContent";
import { FunctionComponent } from "react";
const FeedsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  background: #e5e5e5;
  box-sizing: border-box;
  margin:0 auto;
`;

const FeedContainer = styled.li`
  flex: 1;
  margin-bottom: 10px;
  background: #fff;
  padding: 30px;
`;

const TradeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
const TradeButton = styled.button<{ tradeType: "buy" | "sell" }>`
  border: 0;
  width: 100%;
  background: ${(props) => (props.tradeType === "buy" ? "#111" : "#777")};
  box-sizing: border-box;
  padding: 10px 0;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all 1s;
  cursor: pointer;
  :hover {
    background: #777;
  }
`;

const feedsData: IFeed[] = [
  {
    xid: 1,
    name: "상상인 김장렬",
    dueDate: "D-14",
    profileImage: "profile_1.svg",
    thumbnail: "graph_1.png",
    stockName: "카카오",
    title: "카카오의 반란 언제까지 이어지나",
    contents:
      "130년전 전통의고품격 기계식 시계 브랜드 잉거솔이 에리스골드의 한국 공식수입유통사 워닝월렛을 통해 한국 시장에 상륙했다. 워닝워닝1892년 뉴욕...",
    tags: [
      { name: "애널리스트", color: "purple" },
      { name: "투자고수" },
      { name: "100억 자본가" },
      { name: "10억 자본가" },
    ],
  },
  {
    xid: 2,
    name: "머니S최지웅",
    dueDate: "유효기간 없음",
    profileImage: "profile_2.png",
    thumbnail: "",
    stockName: "카카오",
    title: "카카오 주식 '명품'일까 '거품'일까",
    contents:
      "130년전 전통의고품격 기계식 시계 브랜드 잉거솔이 에리스골드의 한국 공식수입유통사 워닝월렛을 통해 한국 시장에 상륙했다. 워닝워닝1892년 뉴욕...",
    tags: [
      { name: "애널리스트", color: "red" },
      { name: "투자고수" },
      { name: "50억 자본가" },
    ],
  },
  {
    xid: 3,
    name: "김현정",
    dueDate: "D-50",
    profileImage: "profile_3.svg",
    thumbnail: "graph_2.png",
    stockName: "카카오",
    title: "카카오 노조, 창사 후 첫 파업 예고",
    contents:
      "130년전 전통의고품격 기계식 시계 브랜드 잉거솔이 에리스골드의 한국 공식수입유통사 워닝월렛을 통해 한국 시장에 상륙했다. 워닝워닝1892년 뉴욕...",
    tags: [
      { name: "방송인", color: "green" },
      { name: "방송인" },
      { name: "투자고수" },
    ],
  },
];

interface IModalOpen {
  modalOpen(s: boolean): void;
}
const Feeds: FunctionComponent<IModalOpen> = ({ modalOpen }) => {
  const listItems = feedsData.map((feed, key) => (
    <FeedContainer key={key}>
      <Profile
        profileImage={feed.profileImage}
        name={feed.name}
        dueDate={feed.dueDate}
      />
      <Tags tags={feed.tags} />
      <FeedContent
        stockName={feed.stockName}
        title={feed.title}
        contents={feed.contents}
        thumbnail={feed.thumbnail}
      />
      <TradeContainer>
        {/* <TradeButton tradeType="sell" onClick={() => alert("미구현")}>
          판매하기
        </TradeButton> */}
        <TradeButton tradeType="buy" onClick={() => modalOpen(true)}>
          구매하기
        </TradeButton>
      </TradeContainer>
    </FeedContainer>
  ));

  return <FeedsContainer>{listItems}</FeedsContainer>;
};

export default Feeds;
