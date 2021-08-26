import styled from "styled-components";

export const TradeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TradeButton = styled.button<{ tradeType: "buy" | "sell" }>`
  border: 0;
  width: 48%;
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

