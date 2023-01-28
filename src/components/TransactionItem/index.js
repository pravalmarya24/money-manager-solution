import './index.css'

// Write your code here
const TransactionItem = props => {
  const {eachItem} = props
  const {title, amount, select} = eachItem
  return (
    <li className="balance-list">
      <div className="transaction-list-name-container">
        <div className="transaction-amount-type-container">
          <p className="transaction-history-para">{title}</p>
          <p className="transaction-history-para">{amount}</p>
          <p className="transaction-history-para">{select}</p>
        </div>
      </div>
    </li>
  )
}

export default TransactionItem
