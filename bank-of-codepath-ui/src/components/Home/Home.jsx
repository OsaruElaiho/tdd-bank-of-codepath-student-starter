import * as React from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Home(props) {
  useEffect(() => {
    const fetchData = async() => {
      props.setIsLoading(true);
      await axios.get("http://localhost:3001/bank/transactions")
      .then(res => {
        console.log("transactions", res.data.transactions)
        props.setTransactions(res.data.transactions);
        props.setIsLoading(false);
      }).catch( err=> {
        props.setError(err);
      })
      await axios.get("http://localhost:3001/bank/transfers")
      .then( res=> {
        props.setTransfers(res.data.transfers);
        props.setIsLoading(false);
      }).catch(err => {
        props.setError(err);
      })
    }
    fetchData();
    },[])

    // const transactionsArr = props.transactions
    // Filtering transactions
    const filteredTransactions = props.filterInputValue ? 
    props.transactions.filter((currTransaction) => currTransaction.description.toLowerCase().indexOf(props.filterInputValue.toLowerCase()) !== -1)
    : props.transactions
    // should filter the transactions based on whether or not the lowercased description 
    // property of a transaction contains(indexOf) the lowercased filterInputValue

    function handleOnCreateTransaction () {

    }
  return (
    <div className="home">
      <AddTransaction 
        isCreating={props.isCreating} 
        setIsCreating={props.setIsCreating} 
        form={props.newTransactionForm}
        setForm={props.setNewTransactionForm}
        handleOnSubmit={handleOnCreateTransaction}
      />
      {props.isLoading ? 
      (<h1>Loading...</h1>) : 
      (<BankActivity transactions={filteredTransactions} />)}
      {props.error ? (<h2>{props.error}</h2>) : (null)}
    </div>
  )
}
