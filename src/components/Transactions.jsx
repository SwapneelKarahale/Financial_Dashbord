const Transactions = ({ transactions }) => (
  <div>
    <h3>Recent Transactions</h3>
    <ul>
      {transactions.map((tx) => (
        <li key={tx.id}>
          {tx.date} - {tx.type}: ${tx.amount}
        </li>
      ))}
    </ul>
  </div>
);

export default Transactions;
