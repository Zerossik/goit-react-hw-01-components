import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';
import FriendsElement from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsElement friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
