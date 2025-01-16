export type AccountType = {
    id: number,
    balance: number
}

export interface BankType {
    createAccount(username: string, age: number, accountNumber: number): AccountType
    depositAmount(username: string, accountNumber: number, amount: number): void
    withdrawalAmount(username: string, accountNumber: number, amount: number): void
    checkBalance(username: string, accountNumber): number

}