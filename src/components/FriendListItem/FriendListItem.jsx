import PropTypes from 'prop-types';
import {
  FriendAvatar,
  FriendCard,
  FriendStatus,
  FriendName,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendCard>
      <FriendStatus
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></FriendStatus>
      <FriendAvatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
