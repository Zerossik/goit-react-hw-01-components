import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionHead,
  TransactionValue,
  TransactionRow,
} from './TransactionHistory.styled';
export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TransactionHead>Type</TransactionHead>
          <TransactionHead>Amount</TransactionHead>
          <TransactionHead>Currency</TransactionHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionRow key={id}>
            <TransactionValue>{type}</TransactionValue>
            <TransactionValue>{amount}</TransactionValue>
            <TransactionValue>{currency}</TransactionValue>
          </TransactionRow>
        ))}
      </tbody>
    </TransactionTable>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
