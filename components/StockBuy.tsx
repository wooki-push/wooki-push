import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import { TradeButton as TB, TradeContainer as TC } from "./TradeButton";
import { IModal } from "../types";

const TradeContainer = styled(TC)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
`;
const TradeButton = styled(TB)`
  width: 100%;
  border-radius: 0;
`;
const StockContainer = styled.div`
  padding: 5px;
`;
const StockHeader = styled.div`
  position: relative;
  margin-top: 32px;
  padding: 8px 0;
  display: flex;
  flex-direction: row;
`;
const StockInformation = styled.figure`
  display: flex;
  flex: 1;
  align-items:center;
  img {
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-right: 5px;
  }
  figcaption {
    font-size: 13px;
    line-height: 18px;
    color: #999;
    font-weight: bold;
    display: inline-block;
  }
`;
const ExitButton = styled.button`
  border: 0;
  width: 32px;
  height: 32px;
  background: url('/button/close.png') no-repeat 0px;
  /* background-size: 32px 32px; */
`;
const StockTitle = styled.dt`
  span {
    display: block;
  }
  padding: 20px 0;
`;
const StockName = styled.span`
  margin: 5px 0;
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  color: #999;
`;
const StockPrice = styled.span`
  color: #111;
  font-size: 25px;
  line-height: 32px;
  font-weight: 800;
  :after {
    content: "원";
    font-weight: bold;
  }
`;
const StockRate = styled.span`
  font-size: 13px;
  line-height: 18px;
  color: #ff3535;
  font-weight: bold;
`;
const MarketPrice = styled.span`
  color: #fff;
  background: #111;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  padding: 9px;
  border-radius: 100px;
  display: inline-block;
  margin: 8px 0;
`;
const StockInput = styled.input`
  position: relative;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 21px 0;
  text-align: center;
  display: block;
  width: 100%;
  border: 2px solid #f6f6f6;
  font-size: 13px;
  line-height: 18px;
  /* :after {
    content: "주";
    width: 10px;
    height: 10px;
    background: red;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    font-size: 19px;
  } */
`;
const TotalTradeContainer = styled.dl`
  position: absolute;
  width: 100%;
  bottom: 44px;
  left: 0;
  display: flex;
  flex-direction: row;
  padding: 8.5px 15px;
  box-sizing: border-box;
  border-top: 1px solid #f6f6f6;
  dt {
    flex: 1;
    font-weight: 400;
    font-size: 15px;
    color: #999;
  }
  dd {
    flex: 2;
    display: flex;
    flex-direction: column;
    span {
      flex: 1;
      text-align: right;
    }
  }
`;
const TotalPriceText = styled.span`
  font-size: 17px;
  line-height: 22px;
  color: #333;
  font-weight: bold;
`;

const TotalPossiblePriceText = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #26be7e;
  padding-top: 5px;
`;

const StockBuy: FunctionComponent<IModal> = ({ isOpen, modalOpen }) => {
  const [stock, setStock] = useState<number>(1);

  const Buy = () => {
    alert("구매가 완료되었습니다.");
    modalOpen(false);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(parseFloat(e.target.value));
  };

  return (
    <StockContainer>
      <StockHeader>
        <StockInformation>
          <img src="/kakao.svg" alt="주식 썸네일" />
          <figcaption>323410</figcaption>
        </StockInformation>
        <ExitButton onClick={() => modalOpen(false)}></ExitButton>
      </StockHeader>
      <dl>
        <StockTitle>
          <StockName>카카오</StockName>
          <StockPrice>146,500</StockPrice>
          <StockRate>+50원 (0.15%)</StockRate>
        </StockTitle>
        <dd>
          <MarketPrice>시장가</MarketPrice>
          <div>
            <StockInput type="number" value={stock} onChange={onChange} />
          </div>
          <TotalTradeContainer>
            <dt>총 구매금액</dt>
            <dd>
              <TotalPriceText>146,500원</TotalPriceText>
              <TotalPossiblePriceText>
                투자가능금액<b>21,000,991원</b>
              </TotalPossiblePriceText>
            </dd>
          </TotalTradeContainer>
        </dd>
      </dl>
      <TradeContainer>
        <TradeButton tradeType="buy" onClick={Buy}>
          구매하기
        </TradeButton>
      </TradeContainer>
    </StockContainer>
  );
};

export default StockBuy;
