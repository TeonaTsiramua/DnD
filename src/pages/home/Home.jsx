import {
  SContainer,
  SGameDescription,
  SGameLink,
  SGameSection,
  SGameTitle,
  SHeader,
} from './styles';

const Home = () => {
  return (
    <SContainer>
      <SHeader>
        <h1>Welcome to Fun Games!</h1>
        <p>
          Explore and enjoy our selection of interactive and fun drag-and-drop
          games!
        </p>
      </SHeader>

      <SGameSection>
        <SGameLink to='/dnd'>
          <SGameTitle>D&D Component</SGameTitle>
          <SGameDescription>Drag and drop component</SGameDescription>
        </SGameLink>

        <SGameLink to='/reorder'>
          <SGameTitle>Reorder Game</SGameTitle>
          <SGameDescription>
            Drag and drop items to reorder them. Arrange them correctly to win!
          </SGameDescription>
        </SGameLink>

        <SGameLink to='/match-game'>
          <SGameTitle>Match Game</SGameTitle>
          <SGameDescription>
            Drag icons to their corresponding words. Match them all to win!
          </SGameDescription>
        </SGameLink>

        <SGameLink to='/sentence'>
          <SGameTitle>Make Sentence</SGameTitle>
          <SGameDescription>
            Engage in a fun and interactive learning experience! Drag and drop
            icons to their corresponding words to form a complete sentence.
          </SGameDescription>
        </SGameLink>
      </SGameSection>
    </SContainer>
  );
};

export default Home;
