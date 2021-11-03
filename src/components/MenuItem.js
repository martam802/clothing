import {
  MenuCardContent,
  MenuCardContentSubtitle,
  MenuCard,
  MenuCardContentTitle,
  BackgroundImage,
} from "../styles/common";
import { useRouter } from "next/router";

export default function MenuItem({ title, imageUrl, linkUrl }) {
  const router = useRouter();
  console.log(linkUrl);
  return (
    <>
      <MenuCard onClick={() => router.push(`${linkUrl}`)}>
        <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
        <MenuCardContent>
          <MenuCardContentTitle> {title.toUpperCase()}</MenuCardContentTitle>
          <MenuCardContentSubtitle>SHOP NOW</MenuCardContentSubtitle>
        </MenuCardContent>
      </MenuCard>
    </>
  );
}
