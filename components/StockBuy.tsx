import styled from "styled-components";
import { TradeButton as TB, TradeContainer as TC } from "./TradeButton";

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
  padding: 20px;
`;
const StockBuy = () => {
  return (
    <StockContainer>
      <TradeContainer>
        <TradeButton tradeType="buy">구매하기</TradeButton>
      </TradeContainer>
    </StockContainer>
  );
};

export default StockBuy;
