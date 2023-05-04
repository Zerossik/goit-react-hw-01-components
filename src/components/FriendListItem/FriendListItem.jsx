import {
  FriendAvatar,
  FriendCard,
  FriendStatus,
  FriendName,
} from '../FriendList/FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendCard key={id}>
      <FriendStatus
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></FriendStatus>
      <FriendAvatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
}
