import PropTypes from 'prop-types';
import { FriendsItem } from '../FriendsItem/FriendsItem';
import { FriendListStyle } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendsItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendListStyle>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
