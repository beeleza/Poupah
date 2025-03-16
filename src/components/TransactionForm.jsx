import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      descricao,
      valor: parseFloat(valor),
      tipo,
      data,
    };
    addTransaction(newTransaction);
    setDescricao("");
    setValor("");
    setTipo("receita");
    setData("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Adicionar Transação</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Valor
          </label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tipo
          </label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Data
          </label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Adicionar Transação
      </button>
    </form>
  );
};

export default TransactionForm;
