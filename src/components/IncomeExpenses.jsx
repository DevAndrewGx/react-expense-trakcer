import { useGlobalState } from "../context/GlobalContext";

function IncomeExpenses() {
    const { transactions } = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount)
    
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2);

    console.log(income);
    const expense = amounts.filter(item => item<0).reduce((acc, item) => (acc += item), 0).toFixed(2)* -1;
    
    console.log(amounts);
    return (
        <>
            <div className="flex justify-between my-2">
                <h4>Income</h4>
                <p>{income}</p>
            </div>
            <div className="flex justify-between my-2">
                <h4>Expense</h4>
                {expense}
            </div>
        </>
    );
}

export default IncomeExpenses;