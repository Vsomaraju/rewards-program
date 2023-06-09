# Rewards Program

The Rewards Program is a React component that calculates and displays the rewards earned by customers based on their recorded purchases. It utilizes utility functions to calculate the rewards per month and the total rewards.

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.

```bash
cd rewards-program
```

3. Install the dependencies using npm or yarn.

```bash
npm install
```
or 
```bash
yarn install
```

## Usage

1. Start the development server.

```bash
npm start
```
or 
```bash
yarn start
```

2. Open your web browser and visit http://localhost:3000 to see the Rewards Program in action.

## How It Works

The Rewards Program component fetches a record of transactions from a simulated API call. The transactions include the customer ID, purchase amount, and date of each transaction.

Using the provided data, the component utilizes utility functions to calculate the rewards per month for each customer and the total rewards across all customers.

The calculated rewards are then displayed in a table, showing the customer ID, month, and reward points. Additionally, the total rewards earned by all customers are displayed below the table.

## Customization

To customize the Rewards Program component, you can modify the utility functions in the `rewardsUtils.js` file. The `calculatePoints` function defines the logic for calculating reward points based on the purchase amount. The `calculateRewardsPerMonth` function calculates the rewards per month for each customer. The `calculateTotalPoints` function calculates the total rewards earned by all customers.

You can also modify the table structure, styles, and layout by updating the `RewardsProgram.js` component and the associated CSS file.
