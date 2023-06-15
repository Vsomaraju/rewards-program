// Calculate reward points based on purchase amount
export function calculatePoints(purchaseAmount) {
  let points = 0;
  if (purchaseAmount > 100) {
    points += 2 * (purchaseAmount - 100);
    points += 1 * Math.max(0, 100 - 50);
  } else if (purchaseAmount > 50) {
    points += 1 * (purchaseAmount - 50);
  }
  return points;
}

// Calculate rewards per month for each customer
export function calculateRewardsPerMonth(transactions) {
  const rewardsPerMonth = {};

  transactions.forEach((transaction) => {
    const { customerId, purchaseAmount, date } = transaction;
    const month = new Date(date).toLocaleString("default", { month: "long" });

    if (!rewardsPerMonth[customerId]) {
      rewardsPerMonth[customerId] = {};
    }

    if (!rewardsPerMonth[customerId][month]) {
      rewardsPerMonth[customerId][month] = 0;
    }

    rewardsPerMonth[customerId][month] += calculatePoints(purchaseAmount);
  });

  return rewardsPerMonth;
}

// Calculate total reward points
export const calculateTotalPoints = (transactions) => {
  let totalPoints = 0;

  transactions.forEach((transaction) => {
    const { purchaseAmount } = transaction;
    totalPoints += calculatePoints(purchaseAmount);
  });

  return totalPoints;
};
