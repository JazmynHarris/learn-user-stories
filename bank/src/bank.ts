import { BankType, AccountType } from "./types";

export class Bank implements BankType {
    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     * The constructor initialized the bank with accounts and usernames
     * @param accounts - array of accounts
     * @param username - array of usernames
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * 
     * @param id - account id
     * @returns AccountType | undefined
     */
    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    }

    private isAccountNumberInvalid(accountNumber: number): boolean {
        return accountNumber.toString().length !== 10;
    }

    private isUsernameExists(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * Creates an account in the bank
     * @param username - username in the bank
     * @param age - age of the user
     * @param accountNumber - account number to create
     * @returns a new account with a ten-digit id and zero balance
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {

        if (this.isAccountNumberInvalid(accountNumber)) {
            throw new Error('Invalid account number');
        }

        if (!this.isUsernameExists(username)) {
            throw new Error('Username not found');
        }

        if (age < 18) {
            throw new Error('User is under 18');
        }

        if (this.findAccountById(accountNumber)) {
            throw new Error('Account already exists');
        }

        const account: AccountType = {
            id: accountNumber,
            balance: 0
        };

        this.accounts.push(account);
        return account;
    }

    /**
     * Deposits a positive, non-zero amount of money to an existing bank account
     * @param username - username in the bank
     * @param accountNumber - existing bank account number
     * @param amount - amount to deposit into account
     */
    depositAmount(username: string, accountNumber: number, amount: number): void {
        if (!this.isUsernameExists(username)) {
            throw new Error('Username not found');
        }

        if (this.findAccountById(accountNumber) === undefined) {
            throw new Error('Account does not exist');
        }

        if (amount <= 0) {
            throw new Error('Invalid Deposit Amount');
        }

        this.accounts.map(account => {
            if (account.id === accountNumber) {
                account.balance = account.balance + amount;
            } 
        })
    }

    /**
     * Withdrawals an amount from an existing account
     * @param username - username of the user
     * @param accountNumber - a 10-digit number of an existing account
     * @param amount - amount to withdrawal from account
     */
    withdrawalAmount(username: string, accountNumber: number, amount: number): void {
        if (!this.isUsernameExists(username)) {
            throw new Error('Username not found');
        }

        if (this.findAccountById(accountNumber) === undefined) {
            throw new Error('Account does not exist');
        }

        const account = this.findAccountById(accountNumber);
        if (account !== undefined && (amount > account.balance || amount === 0)) {
            throw new Error('Invalid Withdrawal Amount');
        }

        this.accounts.map(account => {
            if (account.id === accountNumber) {
                account.balance = account.balance - amount;
            }
        })
    }

    /**
     * Checks the balance of an existing account
     * @param username - username of the user
     * @param accountNumber - a 10-digit number of an existing account
     * @returns the balance of the account number
     */
    checkBalance(username: string, accountNumber: any): number {
        if (!this.isUsernameExists(username)) {
            throw new Error('Username not found');
        }

        const account = this.findAccountById(accountNumber);
        if (account === undefined) {
            throw new Error('Account does not exist');
        } else {
            return account.balance;
        }
    }
}