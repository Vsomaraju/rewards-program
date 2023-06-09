// Core
import { useEffect, useState } from "react";
// Styles
import "../styles/RewardsProgram.css";
// Mock
import { mockTransactions } from "../mocks/transactions";
// UTILS
import {
  calculateRewardsPerMonth,
  calculateTotalPoints,
} from "../utils/rewardsUtils";

// RewardsProgram Component
const RewardsProgram = () => {
  const [transactions, setTransactions] = useState([]);
  const [rewardsPerMonth, setRewardsPerMonth] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    // Simulating an asynchronous API call to fetch transaction data
    const fetchTransactions = () => {
      setTimeout(() => {
        setTransactions(mockTransactions);
      }, 700);
    };

    fetchTransactions();
  });

  useEffect(() => {
    const calculateRewards = () => {
      const rewards = calculateRewardsPerMonth(transactions);
      setRewardsPerMonth(rewards);
      const total = calculateTotalPoints(transactions);
      setTotalPoints(total);
    };

    calculateRewards();
  }, [transactions]);

  return (
    <>
      <h1>Rewards Program</h1>
      <div>
        <h2>Transaction Data:</h2>
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Purchase Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.customerId}</td>
                <td>${transaction.purchaseAmount}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Rewards Program</h2>
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Month</th>
              <th>Rewards</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(rewardsPerMonth).map((customerId) => {
              const customerRewards = rewardsPerMonth[customerId];
              return Object.keys(customerRewards).map((month) => (
                <tr key={`${customerId}-${month}`}>
                  <td>{customerId}</td>
                  <td>{month}</td>
                  <td>{customerRewards[month]}</td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
      <div>
        <p>Total Points: {totalPoints}</p>
      </div>
    </>
  );
};

export default RewardsProgram;
