import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendList } from './FriendList.styled';

export default function FriendsElement({ friends }) {
  return (
    <FriendList>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
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
    }).isRequired
  ).isRequired,
};
