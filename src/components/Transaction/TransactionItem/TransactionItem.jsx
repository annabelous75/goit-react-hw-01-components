import PropTypes from 'prop-types';
import { TableBody, TableValue } from './TransactionItem.styled';
export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableBody>
      <tr>
        <TableValue>{type}</TableValue>
        <TableValue>{amount}</TableValue>
        <TableValue>{currency}</TableValue>
      </tr>
    </TableBody>
  );
};

TransactionItem.protoTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};