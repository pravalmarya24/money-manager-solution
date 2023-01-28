import './index.css'

// Write your code here
const MoneyDetails = () => (
  <div className="money-details-container">
    <div className="your-balance-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="your-bal-img-size"
      />
      <div className="your-bal-description">
        <p className="your-bal-para">Your Balance</p>
        <h1 className="your-bal-heading">Rs 40000</h1>
      </div>
    </div>
    <div className="your-Income-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="Income"
        className="your-Income-img-size"
      />
      <div className="your-Income-description">
        <p className="your-Income-para">Your Income</p>
        <h1 className="your-Income-heading">Rs 50000</h1>
      </div>
    </div>
    <div className="your-Expenses-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="Expenses"
        className="your-Expenses-img-size"
      />
      <div className="your-Expenses-description">
        <p className="your-Expenses-para">Your Expenses</p>
        <h1 className="your-Expenses-heading">Rs 30000</h1>
      </div>
    </div>
  </div>
)

export default MoneyDetails
