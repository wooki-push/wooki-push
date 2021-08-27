import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import { TradeButton as TB, TradeContainer as TC } from "./TradeButton";
import { IModal, IMyStock, IUser } from "../types";

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
  padding: 20px 0;
`;
const StockContainer = styled.div`
  padding: 5px;
`;
const StockHeader = styled.div`
  position: relative;
  padding: 8px 0;
  display: flex;
  flex-direction: row;
`;
const StockInformation = styled.figure`
  display: flex;
  flex: 1;
  align-items: center;
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
  background: url("/button/close.png") no-repeat 0px;
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
  font-size: 18px;
  line-height: 18px;
  -webkit-appearance: none;
`;
const TotalTradeContainer = styled.dl`
  position: absolute;
  width: 100%;
  bottom: 64px;
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
const MaxStock = styled.span`
  color: #26be7e;
  background: rgba(38, 190, 126, 0.1);
  font-size: 12px;
  line-height: 16px;
  border-radius: 3px;
  padding: 4px 5px;
  display: inline-block;
  margin: 10px 10px 0 0;
  border: 0;
`;
const MyHolding = styled(MaxStock)`
  color: #ff3535;
  background: rgba(255, 53, 53, 0.05);
`;
const defaultPrice = 149500;
const defaultTotalPrice = 21000991;

const StockBuy: FunctionComponent<IModal> = ({ isOpen, modalOpen }) => {
  const [stock, setStock] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(defaultPrice);
  const [user, setUser] = useState<IUser>({
    xid: 1,
    name: "Pushnews",
    stockHolding: [],
    totalPrice: defaultTotalPrice,
  });
  const maxStock = Math.floor(user.totalPrice / defaultPrice);
  const Buy = () => {
    if (user.totalPrice - price < 0 || stock === 0) {
      return alert("구매가 불가합니다");
    }
    let calcStock = 0;
    if (user.stockHolding.length > 0) {
      calcStock = stock + user.stockHolding[0].holding;
    } else {
      calcStock = stock;
    }
    const myStock: IMyStock = {
      stock: {
        xid: 356789,
        name: "카카오",
        thumbnal: "kakao.svg",
        price: defaultPrice,
      },
      holding: calcStock,
    };
    user.stockHolding = [myStock];
    user.totalPrice = user.totalPrice - price;
    setUser(user);
    setStock(1);
    window.localStorage.setItem("pushapp", JSON.stringify(user));
    alert("구매가 완료되었습니다.");
    modalOpen(false);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = e.target.value === "" ? 0 : parseFloat(e.target.value);
    if (maxStock >= count) {
      setStock(count);
    }
  };

  const numberFormat = (price: number) => {
    let result = new Intl.NumberFormat().format(price);
    return result;
  };
  useEffect(() => {
    setPrice(stock * defaultPrice);
  }, [stock]);

  useEffect(() => {
    try {
      const myStorage = window.localStorage.getItem("pushapp");
      if (myStorage === null) {
        window.localStorage.setItem("pushapp", JSON.stringify(user));
      } else {
        const myInfomation = JSON.parse(myStorage);
        setUser(myInfomation);
      }
    } catch (e) {
      console.log(e);
    }

    console.log("aa", window);
  }, []);

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
          <StockPrice>{numberFormat(defaultPrice)}</StockPrice>
          <StockRate>+50원 (0.15%)</StockRate>
        </StockTitle>
        <dd>
          <MarketPrice>시장가</MarketPrice>
          <div>
            <StockInput type="tel" value={stock} onChange={onChange} />
            <MaxStock>
              최대가능 <b>{maxStock}주</b>
            </MaxStock>
            {user.stockHolding.length > 0 ? (
              <MyHolding>
                보유주식 <b>{user.stockHolding[0].holding}주</b>
              </MyHolding>
            ) : (
              ""
            )}
          </div>
          <TotalTradeContainer>
            <dt>총 구매금액</dt>
            <dd>
              <TotalPriceText>{numberFormat(price)}원</TotalPriceText>
              <TotalPossiblePriceText>
                투자가능금액 <b>{numberFormat(user.totalPrice)}원</b>
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
