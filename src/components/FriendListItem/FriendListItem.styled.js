import styled from 'styled-components';

export const FriendAvatar = styled.img`
  width: 60px;
  border-radius: 5px;
`;

export const FriendCard = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 4px;

  background-color: #fff;
  border: 2px solid #b7bec6;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const FriendStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-left: 14px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const FriendName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
