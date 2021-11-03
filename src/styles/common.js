import styled from "styled-components";

export const Page = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
  }
`;

export const MenuContainer = styled.div`
   {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const MenuCard = styled.div`
   {
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
  }
`;

export const MenuCardContent = styled.div`
   {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }
`;

export const MenuCardContentTitle = styled.div`
   {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  }
`;

export const MenuCardContentSubtitle = styled.div`
   {
    font-weight: lighter;
    font-size: 16px;
  }
`;
