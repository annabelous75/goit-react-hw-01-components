import { TransactionList } from "./TransactionList/TransactionList";
import { TransactionWrapper, Title } from './Transaction.styled';
export const Transaction = ({ transactions }) => {
  return (
    <TransactionWrapper>
      <Title>TRANSACTION HISTORY</Title>
      <TransactionList transactions={transactions} />
    </TransactionWrapper>
  );
};
