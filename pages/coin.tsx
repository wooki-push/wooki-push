import styled from "styled-components";
import { useState, useEffect } from "react";
import useSWR from "swr";
import fetch from "node-fetch";
import { SmallGraph } from "@components/index";
import { ISmallGraph } from "../types";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
`;
const MarketItem = styled.li`
  padding: 17px 20px;
  span {
    display: inline-block;
    padding: 5px;
  }
`;

interface IMarket {
  english_name: string;
  korean_name: string;
  market: string;
}

interface CoinDictory {
  market: string;
  changeRate: number;
  chart: [];
}

interface ICoin {
  result: CoinDictory[];
}

const Market = (props: { data: CoinDictory[] }) => {
  return (
    <>
      {props.data.map(({ market, changeRate, chart }, key) => {
        return (
          <MarketItem key={key}>
            <span>{market}</span>
            <span>{(changeRate * 100).toFixed(2)}%</span>
            {chart.length === 0 ? (
              ""
            ) : (
              <SmallGraph color="#0051c7" value={chart} />
            )}
          </MarketItem>
        );
      })}
    </>
  );
};

const Coin = ({ result }: ICoin) => {
  const candlesUrl = "https://api.upbit.com/v1/candles/days";
  result.map(async (info, key) => {
    const { data, error } = useSWR(
      candlesUrl + `?market=${info.market}&count=20`,
      (url) => {
        return fetch(url).then((res) => res.json());
      },
    );
    if (error) {
      return <span>error...</span>;
    }
    if (!data) {
      return <span>loading...</span>;
    }
    result[key].changeRate = data[0].change_rate;
    result[key].chart = data.map((i: any) => i.trade_price);
  });
  return <Container>{<Market data={result} />}</Container>;
};
export const getServerSideProps = async () => {
  const url = "https://api.upbit.com/v1/market/all?isDetails=false";
  // const tiker = "https://api.upbit.com/v1/ticker";

  const options = { method: "GET", headers: { Accept: "application/json" } };
  const res = await fetch(url, options);
  const data: IMarket[] = await res.json();

  const result: CoinDictory[] = [];
  const LIMIT: number = 10;
  // let coinList: string = "";

  data.slice(-LIMIT).map(async (info, key) => {
    result.push({
      market: info.market,
      changeRate: 0,
      chart: [],
    });
    // coinList += `${info.market}` + (key === LIMIT - 1 ? "" : ", ");
  });

  // const tickerCall = await fetch(tiker + `?markets=${coinList}`, options);
  // const tikerList: any = await tickerCall.json();

  return { props: { result } };
};

export default Coin;
