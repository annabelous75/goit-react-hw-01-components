import { Container } from './ProfileWrapper.styled';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStatistic } from './ProfileStatistic/ProfileStatistic';
export const Profile = ({
    user: {
        username,
        avatar,
        tag,
        location,
        stats: {
            followers, views, likes,
        }
    },
}) => {
    return (
     <Container>
      <ProfileDescription
        Name={username}
        Avatar={avatar}
        Tag={tag}
        Location={location}
      />
      <ProfileStatistic followers={followers} views={views} likes={likes} />
    </Container>
    )
};