import { useState } from 'react';

function BankApplication(){
    const [balance, setBalance] = useState(0);
    const [UserRequestedValue, setUserRequestedValue] = useState(0.0);
    const BankName = "Welcome to Banking Application";
    const UserName = "Mustafa";

    //calculate Deposit
    const Deposit = () => {
        //amountDeposit
        //setBalance(parseFloat(balance) + parseFloat(UserRequestedValue));
        setBalance((parseFloat(UserRequestedValue)>0)?parseFloat(balance) + parseFloat(UserRequestedValue):parseFloat(balance))
      };
    //calculate withdrawal
    const Withdraw = () => {
        //parseFloat(balance) - parseFloat(UserRequestedValue)
        setBalance((parseFloat(balance)>parseFloat(UserRequestedValue))?parseFloat(balance) - parseFloat(UserRequestedValue):parseFloat(balance));
      };

    //pass rate and increase that percent to the principle
    const CalcInterest = () => {
        let rate=5;
        const interest = (parseFloat(balance) * rate) / 100;
        setBalance(parseFloat(balance) - parseFloat(interest));
      };

    const ChargeFees = () => {
        let fee=2;
        if(fee)
        {
            const fees = (parseFloat(balance) * fee) / 100;
            setBalance(parseFloat(balance) - parseFloat(fees));

        }
      };

//import './index.css';
      return (
        <div className="bank">
          <h2>{BankName}</h2>
          <h3>User: {UserName}</h3>
          <h1>Balance: <b>{balance}</b></h1>
          <p>Enter the amount:</p>
          <input
          id="BankUserInput"
          required
          type="number"
          value={UserRequestedValue}
          onChange={(e)=>setUserRequestedValue(e.target.value)}
          />
          <hr></hr>
          <p>
          <button onClick={Deposit}>Deposit</button>
          <button onClick={Withdraw}>Withdraw</button>
          </p>
          
          <button onClick={CalcInterest}>Add Intrest</button>
          <button onClick={ChargeFees}>Add Fees</button>
        </div>
      );

}

export default BankApplication;
