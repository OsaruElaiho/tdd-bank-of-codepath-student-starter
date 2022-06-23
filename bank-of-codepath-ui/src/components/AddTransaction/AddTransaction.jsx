import * as React from "react"
import "./AddTransaction.css"

export default function AddTransaction(props) {
  function handleOnFormFieldChange (e) {
   if(e.target.name == "description"){
    props.setForm(props.from.description)
   } else if(e.target.name == "category"){
    props.setForm(props.form.category)
   } else{
    props.setForm(props.form.amount)
   }
  }

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm 
      //handleOnFormFieldChange={handleOnFormFieldChange()}
      />
    </div>
  )
}

export function AddTransactionForm(props) {
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input 
          name="description"
          placeholder="choose description"
          type={"text"}
          value={props.description}
           //onChange={props.handleOnFormFieldChange()}
          />
        </div>
        <div className="field">
          <label>Category</label>
          <input 
          name="category"  
          placeholder="choose category"
          type={"text"}
          value={props.category}
          // onChange={props.handleOnFormFieldChange()}
          />
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input 
          name="amount"  
          placeholder="choose amount"
          type={"number"}
          value={props.amount}
           // onChange={props.handleOnFormFieldChange()}
          />
        </div>

        <button className="btn add-transaction" type="submit" onClick={() => handleOnFormFieldChange()}>
          Add
        </button>
      </div>
    </div>
  )
}
