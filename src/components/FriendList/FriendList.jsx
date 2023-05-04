import PropTypes from 'prop-types';
import {
  FriendAvatar,
  FriendList,
  FriendCard,
  FriendStatus,
  FriendName,
} from './FriendList.styled';

export default function FriendsElement({ friends }) {
  return <FriendList />;
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
