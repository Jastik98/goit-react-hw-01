import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.itemTable}>
      <thead className={css.itemThead}>
        <tr className={css.itemTheadTr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.itemTbody}>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td className={css.itemType}>{item.type}</td>
              <td className={css.itemAmount}>{item.amount}</td>
              <td className={css.itemCurrency}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;