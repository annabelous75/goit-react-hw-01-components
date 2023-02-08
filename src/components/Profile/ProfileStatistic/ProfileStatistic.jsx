import PropTypes from 'prop-types';
import { Stats, StatsInfo, Label, Quantity } from './ProfileStatistic.styled';
export const ProfileStatistic = ({ followers, views, likes }) => {
  return (
    <Stats>
      <StatsInfo>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsInfo>
      <StatsInfo>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsInfo>
      <StatsInfo>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsInfo>
    </Stats>
  );
};

ProfileStatistic.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
