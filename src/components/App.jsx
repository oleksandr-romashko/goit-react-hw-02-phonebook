import Page from "components/Page/Page.styled";
import Header from "components/Header/Header.styled";
import Phonebook from "components/Phonebook/Phonebook"

export const App = () => {
  return (
    <Page>
      <Header>Contact Book</Header>
      <Phonebook />
    </Page>
  );
};
