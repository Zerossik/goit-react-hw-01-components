import PropTypes from 'prop-types';
import {
  FriendAvatar,
  FriendList,
  FriendCard,
  FriendStatus,
  FriendName,
} from './FriendList.styled';

export default function FriendsElement({ friends }) {
  return (
    <FriendList className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendCard key={id}>
          <FriendStatus
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          ></FriendStatus>
          <FriendAvatar src={avatar} alt={name} />
          <FriendName>{name}</FriendName>
        </FriendCard>
      ))}
    </FriendList>
  );
}

FriendsElement.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
