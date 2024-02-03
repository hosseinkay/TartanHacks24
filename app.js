const studentNameElement = document.getElementById('student-name');
const xrpBalanceElement = document.getElementById('xrp-balance');
const transactionHistoryElement = document.getElementById('transaction-history');
const storeListElement = document.getElementById('store-list');
const sendButton = document.getElementById('send-button');
const receiveButton = document.getElementById('receive-button');

// Sample data and functions
function getStudentData() {
    return {
        name: 'John Doe',
        balance: 100
    };
}

function getTransactionHistory() {
    return [
        { type: 'Received', amount: 50 },
        { type: 'Sent', amount: 30 },
        // Add more transactions as needed
    ];
}

function getStoreList() {
    return ['Campus Store A', 'Campus Restaurant B', 'Dining Hall C', 'Student Services', 'Printer Fees'];
}

// Update student name and XRP balance
const studentData = getStudentData();
studentNameElement.textContent = `Welcome, ${studentData.name}!`;
xrpBalanceElement.textContent = `XRP Balance: ${studentData.balance} XRP`;

// Event handling for buttons
sendButton.addEventListener('click', () => {
    // Implement logic for sending XRP
    // Update transaction history and balance accordingly
});

receiveButton.addEventListener('click', () => {
    // Implement logic for receiving XRP
    // Update transaction history and balance accordingly
});

// Populate transaction history and store list
const transactions = getTransactionHistory();
const storeList = getStoreList();

transactions.forEach(transaction => {
    const transactionItem = document.createElement('div');
    transactionItem.textContent = `${transaction.type}: ${transaction.amount} XRP`;
    transactionHistoryElement.appendChild(transactionItem);
});

storeList.forEach(store => {
    const storeItem = document.createElement('li');
    storeItem.textContent = store;
    storeListElement.appendChild(storeItem);
});

