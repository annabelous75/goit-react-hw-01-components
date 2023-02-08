import user from '../data/user.json';
import friends from '../data/friends.json';
import upcomingData from '../data/data.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { Transaction } from './Transaction/Transaction';
export const App = () => {
  return (
    <>
      <Profile user={user}/>
      <Statistics upcomingData={upcomingData} title="UPLOAD STATS" />
      <Friends friends={friends} />
      <Transaction transactions={transactions} />
    </>
  );
};
