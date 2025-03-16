import React, { useState } from "react";
import { FaSearch, FaArrowUp, FaArrowDown } from "react-icons/fa";

const TransactionsTable = ({ transactions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtrar transações com base no termo de pesquisa
  const filteredTransactions = transactions.filter((t) =>
    t.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Mudar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white p-4 shadow rounded-lg mt-5">
      <h2 className="text-lg font-semibold mb-4">Histórico de Transações</h2>

      {/* Barra de Pesquisa */}
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Pesquisar transações..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      {/* Tabela de Transações */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Descrição</th>
            <th className="p-2 text-left">Valor</th>
            <th className="p-2 text-left">Tipo</th>
            <th className="p-2 text-left">Data</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((t, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="p-2">{t.descricao}</td>
              <td
                className={`p-2 font-bold ${
                  t.tipo === "receita" ? "text-green-600" : "text-red-600"
                }`}
              >
                {t.tipo === "receita" ? (
                  <FaArrowUp className="inline mr-1" />
                ) : (
                  <FaArrowDown className="inline mr-1" />
                )}
                R$ {t.valor.toFixed(2)}
              </td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    t.tipo === "receita"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {t.tipo === "receita" ? "Receita" : "Despesa"}
                </span>
              </td>
              <td className="p-2">{t.data}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginação */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        <span className="text-gray-600">
          Página {currentPage} de{" "}
          {Math.ceil(filteredTransactions.length / itemsPerPage)}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage ===
            Math.ceil(filteredTransactions.length / itemsPerPage)
          }
          className="p-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default TransactionsTable;
