import React from 'react';
import { Header } from '../../components/Transaction/Header';
import { Balance } from '../../components/Transaction/Balance';
import { IncomeExpenses } from '../../components/Transaction/IncomeExpenses';
import { TransactionList } from '../../components/Transaction/TransactionList';
import { Link } from 'react-router-dom';
import { AddTransaction } from '../../components/Transaction/AddTransaction';
import TrackerData from './Tracker_data'

import { GlobalProvider } from '../../context/GlobalState';

import './Tracker.css'

function Tracker() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <button className='back-btn'>
            <Link to={`/`}>Back</Link>
        </button>
      </div>
      <h1>Here is the data from the database</h1>
      <TrackerData />
    </GlobalProvider>
  );
}

export default Tracker;