import {
  calculatePoints,
  calculateRewardsPerMonth,
} from "../utils/rewardsUtils.js";

describe("calculatePoints", () => {
  it("calculates points correctly for a purchase amount over $100", () => {
    const points = calculatePoints(120);
    expect(points).toBe(90);
  });

  it("calculates points correctly for a purchase amount between $50 and $100", () => {
    const points = calculatePoints(75);
    expect(points).toBe(25);
  });

  it("calculates points correctly for a purchase amount less than $50", () => {
    const points = calculatePoints(30);
    expect(points).toBe(0);
  });
});

describe("calculateRewardsPerMonth", () => {
  it("calculates rewards per month correctly for multiple transactions", () => {
    const transactions = [
      { id: 1, customerId: 1, purchaseAmount: 120, date: "2023-04-15" },
      { id: 2, customerId: 2, purchaseAmount: 50, date: "2023-04-18" },
      { id: 3, customerId: 1, purchaseAmount: 80, date: "2023-04-20" },
      { id: 4, customerId: 3, purchaseAmount: 150, date: "2023-04-25" },
      { id: 5, customerId: 2, purchaseAmount: 75, date: "2023-05-02" },
      { id: 6, customerId: 1, purchaseAmount: 90, date: "2023-05-05" },
      { id: 7, customerId: 3, purchaseAmount: 60, date: "2023-05-10" },
      { id: 8, customerId: 2, purchaseAmount: 120, date: "2023-05-15" },
      { id: 9, customerId: 1, purchaseAmount: 50, date: "2023-05-20" },
      { id: 10, customerId: 3, purchaseAmount: 200, date: "2023-05-25" },
      { id: 11, customerId: 2, purchaseAmount: 70, date: "2023-06-01" },
      { id: 12, customerId: 1, purchaseAmount: 100, date: "2023-06-05" },
      { id: 13, customerId: 3, purchaseAmount: 80, date: "2023-06-10" },
    ];

    const rewardsPerMonth = calculateRewardsPerMonth(transactions);

    expect(rewardsPerMonth).toEqual({
      1: { April: 120, May: 40, June: 50 },
      2: { April: 0, May: 135 },
      3: { April: 150, May: 260, June: 30 },
    });
  });

  it("returns an empty object when no transactions are provided", () => {
    const rewardsPerMonth = calculateRewardsPerMonth([]);
    expect(rewardsPerMonth).toEqual({});
  });

  it("returns the correct rewards per month for a single transaction", () => {
    const transactions = [
      { id: 1, customerId: 1, purchaseAmount: 120, date: "2023-04-15" },
    ];

    const rewardsPerMonth = calculateRewardsPerMonth(transactions);

    expect(rewardsPerMonth).toEqual({
      1: { April: 90 },
    });
  });

  it("returns 0 rewards for a customer with no transactions", () => {
    const transactions = [
      { id: 2, customerId: 2, purchaseAmount: 50, date: "2023-04-18" },
      { id: 3, customerId: 1, purchaseAmount: 80, date: "2023-04-20" },
    ];

    const rewardsPerMonth = calculateRewardsPerMonth(transactions);

    expect(rewardsPerMonth).toEqual({
      1: { April: 30 },
      2: { April: 0 },
    });
  });
});
