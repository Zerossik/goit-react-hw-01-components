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
    <ProfileComponent className="profile">
      <Description className="description">
        <Avatar
          src={avatar ? avatar : ImgAvatar}
          alt="User avatar"
          className="avatar"
        />
        <Username className="name">{username}</Username>
        <PrimeryText className="tag">@{tag}</PrimeryText>
        <PrimeryText className="location">{location}</PrimeryText>
      </Description>
      <StatsList>
        <StatsItem>
          <StatsText className="label">Followers</StatsText>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <StatsText className="label">Views</StatsText>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <StatsText className="label">Likes</StatsText>
          <span className="quantity">{likes}</span>
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
