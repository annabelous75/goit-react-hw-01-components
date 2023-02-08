import PropTypes from 'prop-types';
import { TableWrapper,TableHead, TableColumnName } from './TransactionList.styled';
import { TransactionItem } from '../TransactionItem/TransactionItem';
export const TransactionList = ({ transactions }) => {
  return (
    <TableWrapper>
      <TableHead>
        <tr>
          <TableColumnName>Type</TableColumnName>
          <TableColumnName>Amount</TableColumnName>
          <TableColumnName>Currency</TableColumnName>
        </tr>
      </TableHead>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      })}
    </TableWrapper>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
