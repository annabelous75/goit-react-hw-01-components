import PropTypes from 'prop-types';
import { Item, Stats, Avatar, Name } from './FriendsItem.styled';

export const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Stats isOnline={isOnline}></Stats>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendsItem.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
