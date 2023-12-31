import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCardContainer from "./GameCardContainer";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const Gamegrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing="20px"
    >
      {isLoading &&
        skeletons.map((skelelton) => (
          <GameCardContainer key={skelelton}>
            <GameCardSkeleton></GameCardSkeleton>
          </GameCardContainer>
        ))}

      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCards game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default Gamegrid;
