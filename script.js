document.getElementById('expense-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (name && amount) {
        addExpense(name, amount);
        updateTotalAmount();
        clearForm();
    }
});

function addExpense(name, amount) {
    const expenseList = document.getElementById('expense-list');

    const listItem = document.createElement('li');
    listItem.innerHTML = `${name}: $${amount} <button class="remove-btn" onclick="removeExpense(this)">Remove</button>`;

    expenseList.appendChild(listItem);
}

function removeExpense(button) {
    const listItem = button.parentElement;
    listItem.remove();
    updateTotalAmount();
}

function updateTotalAmount() {
    const expenses = document.querySelectorAll('#expense-list li');
    let totalAmount = 0;

    expenses.forEach(expense => {
        const amount = parseFloat(expense.textContent.split('$')[1]);
        totalAmount += amount;
    });

    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
}
