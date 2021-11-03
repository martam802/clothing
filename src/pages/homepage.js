import Directory from "../components/Directory";
import { Page, MenuContainer } from "../styles/common";

export default function Homepage() {
  return (
    <Page>
      <MenuContainer>
        <Directory />
      </MenuContainer>
    </Page>
  );
}
