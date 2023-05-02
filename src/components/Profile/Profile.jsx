import PropTypes from 'prop-types';
import ImgAvatar from '../../img/avatar.webp';
import {
  Username,
  ProfileComponent,
  Avatar,
  StatsItem,
  StatsList,
  PrimeryText,
  Description,
  StatsText,
} from './Profile.styled';
export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileComponent>
      <Description>
        <Avatar
          src={avatar ? avatar : ImgAvatar}
          alt="User avatar"
          className="avatar"
        />
        <Username>{username}</Username>
        <PrimeryText>@{tag}</PrimeryText>
        <PrimeryText>{location}</PrimeryText>
      </Description>
      <StatsList>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <span>{likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileComponent>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
