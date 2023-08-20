import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCardContainer from "./GameCardContainer";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";

const Gamegrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing="20px"
      >
        {isLoading &&
          skeletons.map((skelelton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skelelton}></GameCardSkeleton>
            </GameCardContainer>
          ))}

        {games.map((game) => (
          <GameCardContainer>
            <GameCards key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
