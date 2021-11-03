import styled from "styled-components";

export const Page = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
    font-family: "Open Sans Condensed";
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
    /* overflow hidden keeps image in the frame when zooming in  */
    overflow: hidden;
  }
`;

export const BackgroundImage = styled.div`
   {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

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
    background-color: white;
    opacity: 0.7;
    position: absolute;
  }
`;

export const MenuCardContentTitle = styled.h1`
   {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  }
`;

export const MenuCardContentSubtitle = styled.p`
   {
    font-weight: lighter;
    font-size: 16px;
  }
`;
