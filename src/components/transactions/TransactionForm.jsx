import { useState } from "react";
import { useGlobalState } from "../../context/GlobalContext";

function TransactionForm() {
    const { addTransaction } = useGlobalState();
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);

    const onSumit = (e) => {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: +amount,
        });

        setAmount(0);
        setDescription("");
    };
    return (
        <div>
            <form onSubmit={onSumit}>
                <input
                    type="text"
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    placeholder="Enter a Description"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <input
                    type="number"
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    step="0.01"
                    placeholder="00.00"
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value);
                    }}
                />
                <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;
