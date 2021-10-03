import React from 'react';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';
import TransactionItem from './TransactionsItem';


const TransactionHistory = ({ items }) => {
    return (
        <section className={style.heads}>
        <h2>transactions History</h2>
        <table className={style.history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(item => (
          <TransactionItem 
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          />
      ))}
  </tbody>
</table>
</section>
    )
}

export default TransactionHistory;

TransactionHistory.prototypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}