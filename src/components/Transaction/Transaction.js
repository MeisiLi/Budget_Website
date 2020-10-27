import React from 'react';
import Moment from 'react-moment';

import { notification } from 'antd';

export const Transaction = ({ transaction }) => {

  function deleteTransaction(id) {
    fetch(`http://ballistic-circular-parent.glitch.me/deletespending?id=${id}`)
      .then(console.log('delete', id))
      .catch(error => 
        console.log(error)
      )
  }

  function openNotificationWithIcon(type) {
    notification[type]({
      message: 'Delete',
      description:
        'Delete Transcation Successfully',
    });
  };

  const sign = transaction.Amount < 0 ? '-' : '+';

  return (
    <li className={transaction.Amount < 0 ? 'minus' : 'plus'}>
      {transaction.Category} 
      <p><Moment format="YYYY:MM:DD HH:mm:ss">{transaction.Time}</Moment></p>
      <span>{sign}${Math.abs(transaction.Amount)}</span>
      <button 
        onClick={() => {deleteTransaction(transaction._id); openNotificationWithIcon('warning')}} 
        className="delete-btn">
          x
      </button>
    </li>
  )
}
