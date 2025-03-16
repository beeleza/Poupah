import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import TransactionForm from "../components/TransactionForm";
import TransactionsTable from "../components/TransactionTable";

export default function Transactions() {
    const [transactions, setTransactions] = useState([
        { descricao: "Projeto Freelancer", valor: 2500, tipo: "receita", data: "10/03/2025" },
        { descricao: "Compra de Software", valor: 200, tipo: "despesa", data: "12/03/2025" },
    ]);
    const [showSuccess, setShowSuccess] = useState(false); // Estado para feedback visual

    const addTransaction = (newTransaction) => {
        // Validação simples para garantir que todos os campos estão preenchidos
        if (!newTransaction.descricao || !newTransaction.valor || !newTransaction.tipo || !newTransaction.data) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        setTransactions([...transactions, newTransaction]);
        setShowSuccess(true); // Mostrar feedback visual

        // Esconder o feedback após 3 segundos
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Receitas e Despesas</h1>

            {/* Feedback Visual */}
            {showSuccess && (
                <div className="mb-5 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                    <FaCheckCircle className="mr-2" />
                    Transação adicionada com sucesso!
                </div>
            )}

            {/* Formulário de Cadastro */}
            <div className="mb-8">
                <TransactionForm addTransaction={addTransaction} />
            </div>

            {/* Tabela de Transações */}
            <div>
                <TransactionsTable transactions={transactions} />
            </div>
        </div>
    );
}