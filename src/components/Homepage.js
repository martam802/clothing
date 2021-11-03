import {
  Page,
  MenuCard,
  MenuContainer,
  MenuCardContent,
  MenuCardContentTitle,
  MenuCardContentSubtitle,
} from "./../styles/common";

export default function Homepage() {
  return (
    <Page>
      <MenuContainer>
        <MenuCard>
          <MenuCardContent>
            <MenuCardContentTitle>HATS</MenuCardContentTitle>
            <MenuCardContentSubtitle>SHOP NOW</MenuCardContentSubtitle>
          </MenuCardContent>
        </MenuCard>
        <MenuCard>
          <MenuCardContent>
            <MenuCardContentTitle>JACKETS</MenuCardContentTitle>
            <MenuCardContentSubtitle>SHOP NOW</MenuCardContentSubtitle>
          </MenuCardContent>
        </MenuCard>
        <MenuCard>
          <MenuCardContent>
            <MenuCardContentTitle>SNEAKERS</MenuCardContentTitle>
            <MenuCardContentSubtitle>SHOP NOW</MenuCardContentSubtitle>
          </MenuCardContent>
        </MenuCard>
        <MenuCard>
          <MenuCardContent>
            <MenuCardContentTitle>WOMENS</MenuCardContentTitle>
            <MenuCardContentSubtitle>SHOP NOW</MenuCardContentSubtitle>
          </MenuCardContent>
        </MenuCard>
        <MenuCard>
          <MenuCardContent>
            <MenuCardContentTitle>MENS</MenuCardContentTitle>
            <MenuCardContentSubtitle>SHOP NOW</MenuCardContentSubtitle>
          </MenuCardContent>
        </MenuCard>
      </MenuContainer>
    </Page>
  );
}
