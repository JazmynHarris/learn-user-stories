import { Bank } from '../src/bank';


const accounts = [{ id: 1234567890, balance: 5000 }, { id: 2039249120, balance: 10000 }];

const usernames = ['user1', 'user2'];

const bank = new Bank(accounts, usernames);

// ISSUE 1
// Scenario 1: successful account created
const acc = bank.createAccount('user1', 20, 1240392084);
if (acc.id !== 1240392084 || acc.balance !== 0 || acc.id.toString().length !== 10) {
    console.log('ISSUE 1 Scenario 1 failed');
} else {
    console.log('ISSUE 1 Scenario 1 passed');
}

try {
    bank.createAccount('user1', 20, 1240392084);
    console.log('ISSUE 1 Scenario 1 failed');
} catch (e) {
    console.log('ISSUE 1 Scenario 1 passed');
}

// Scenario 2: unsuccessful account creation due to underage 
try {
    bank.createAccount('user1', 17, 1240392084);
    console.log('ISSUE 1 Scenario 2 failed');
} catch (e) {
    console.log('ISSUE 1 Scenario 2 passed');
}

// Scenario 2: unsuccessful account creation due to invalid username
try {
    bank.createAccount('user3', 18, 1240392084);
    console.log('ISSUE 1 Scenario 3 failed');
} catch (e) {
    console.log('ISSUE 1 Scenario 3 passed');
}


// ISSUE 2
// Scenario 1: successful deposit made
bank.depositAmount('user1', 1234567890, 2000);
if (bank.checkBalance('user1', 1234567890) !== 7000) {
    console.log('ISSUE 2 Scenario 1 failed');
} else {
    console.log('ISSUE 2 Scenario 1 passed');
}

// Scenario 2: unsuccessful deposit attempted due to invalid username
try {
    bank.depositAmount('user3', 1234567890, 5000);
    console.log('ISSUE 2 Scenario 2 failed');
} catch (e) {
    console.log('ISSUE 2 Scenario 2 passed')
}

// Scenario 3: unsuccessful deposit attempted due to invalid account number
try {
    bank.depositAmount('user1', 1234567899, 5000);
    console.log('ISSUE 2 Scenario 3 failed');
} catch (e) {
    console.log('ISSUE 2 Scenario 3 passed')
}

// Scenario 4: unsuccessful deposit attempted due to invalid deposit number
try {
    bank.depositAmount('user2', 1234567890, -5000);
    console.log('ISSUE 2 Scenario 4 failed');
} catch (e) {
    console.log('ISSUE 2 Scenario 4 passed')
}



// ISSUE 3
// Scenario 1: successful withdrawal
bank.withdrawalAmount('user1', 1234567890, 4000);
if (bank.checkBalance('user1', 1234567890) !== 3000) {
    console.log('ISSUE 3 Scenario 1 failed');
} else {
    console.log('ISSUE 3 Scenario 1 passed');
}

// Scenario 2: unsuccessful withdrawal due to non verified username
try {
    bank.withdrawalAmount('user3', 1234567890, 2000);
    console.log('ISSUE 3 Scenario 2 failed');
} catch (e) {
    console.log('ISSUE 3 Scenario 2 passed')
}

// Scenario 3: unsuccessful withdrawal to invalid account number
try {
    bank.withdrawalAmount('user1', 1234567899, 2000);
    console.log('ISSUE 3 Scenario 3 failed');
} catch (e) {
    console.log('ISSUE 3 Scenario 3 passed')
}

// Scenario 4: unsuccessful withdrawal due to invalid withdrawal amount
try {
    bank.withdrawalAmount('user2', 1234567890, 10001);
    console.log('ISSUE 3 Scenario 4 failed');
} catch (e) {
    console.log('ISSUE 3 Scenario 4 passed')
}



// ISSUE 4
// Scenario 1: successful balance check
if (bank.checkBalance('user2', 2039249120) !== 10000) {
    console.log('ISSUE 4 Scenario 1 failed');
} else {
    console.log('ISSUE 4 Scenario 1 passed');
}

// Scenario 2: unsuccessful balance check due to invalid username
try {
    bank.checkBalance('user3', 1234567890);
    console.log('ISSUE 4 Scenario 2 failed');
} catch (e) {
    console.log('ISSUE 4 Scenario 2 passed')
}

// Scenario 3: unsuccessful balance check due to invalid account number
try {
    bank.checkBalance('user2', 1234567899);
    console.log('ISSUE 4 Scenario 3 failed');
} catch (e) {
    console.log('ISSUE 4 Scenario 3 passed')
}