import {
  MenuCardContent,
  MenuCardContentSubtitle,
  MenuCard,
  MenuCardContentTitle,
  BackgroundImage,
} from "../styles/common";

export default function MenuItem({ title, imageUrl }) {
  return (
    <>
      <MenuCard>
        <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
        <MenuCardContent>
          <MenuCardContentTitle> {title.toUpperCase()}</MenuCardContentTitle>
          <MenuCardContentSubtitle>SHOP NOW</MenuCardContentSubtitle>
        </MenuCardContent>
      </MenuCard>
    </>
  );
}
