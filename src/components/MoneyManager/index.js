import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {newBalanceAdd: [], title: '', amount: '', select: ''}

  onAddTitle = event => {
    this.setState({title: event.target.value})
  }

  onAddAmount = event => {
    this.setState({amount: event.target.value})
  }

  onSelectedItem = event => {
    this.setState({select: event.target.value})
  }

  onAddBalanceDetails = event => {
    event.preventDefault()
    const {title, amount, select} = this.state

    const newBalanceObjet = {
      id: uuidv4(),
      title,
      amount,
      select,
    }

    this.setState(prevState => ({
      newBalanceAdd: [...prevState.newBalanceAdd, newBalanceObjet],
      title: '',
      amount: '',
      select: '',
    }))
  }

  render() {
    const {newBalanceAdd, title, amount, select} = this.state
    return (
      <div className="money-manager-app-container">
        <div className="money-manager-container">
          <h1 className="richard-heading">Hi, Richard</h1>
          <p className="richard-para">
            Welcome back to your
            <span className="span-element"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="history-form-container">
          <form className="form-container" onSubmit={this.onAddBalanceDetails}>
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <label className="title-label" htmlFor="titleInputId">
              TITLE
            </label>
            <br />
            <input
              type="text"
              id="titleInputId"
              className="title-input-element"
              placeholder="TITLE"
              onChange={this.onAddTitle}
              value={title}
            />
            <br />
            <label className="title-label" htmlFor="amountInputId">
              AMOUNT
            </label>
            <br />
            <input
              type="text"
              id="amountInputId"
              className="title-input-element"
              placeholder="AMOUNT"
              onChange={this.onAddAmount}
              value={amount}
            />
            <br />
            <label className="title-label" htmlFor="typeSelectId">
              TYPE
            </label>
            <br />
            <select
              id="typeSelectId"
              className="selected-element"
              onChange={this.onSelectedItem}
              value={select}
            >
              {transactionTypeOptions.map(each => (
                <option value={each.displayText} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="list-name-container">
              <div className="title-amount-type-container">
                <p className="title-history-para">Title</p>
                <p className="title-history-para">Amount</p>
                <p className="title-history-para">Type</p>
              </div>
            </div>
            <ul className="unordered-list">
              {newBalanceAdd.map(each => (
                <TransactionItem eachItem={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
