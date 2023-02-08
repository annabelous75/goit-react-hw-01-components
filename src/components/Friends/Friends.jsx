import friends from '../../data/friends.json';
import { FriendsList } from './FriendsList/FriendsList';
import { Boxwrapperstyled } from './Boxwrapperstyled';
import { theme } from '../../utils/theme';

export const Friends = () => {
  return (
    <Boxwrapperstyled
      width={400}
      bg={theme.colors.wrapper}
      borderRadius="10px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      ml="auto"
      mr="auto"
      mb={5}
      p={5}
      as="section"
    >
      <Boxwrapperstyled
        width="100%"
        pb={4}
        textAlign="center"
        m={0}
        color={theme.colors.heading}
        as="h2"
      >
        USER'S FRIENDS
      </Boxwrapperstyled>
      <FriendsList friends={friends} />
    </Boxwrapperstyled>
  );
};