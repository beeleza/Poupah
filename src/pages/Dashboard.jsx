import React, { useState } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

// Registrando os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Dashboard = () => {
    const [saldo, setSaldo] = useState(5000);

    // Dados para o gráfico de pizza (Doughnut)
    const doughnutData = {
        labels: ['Receitas', 'Despesas', 'Investimentos'],
        datasets: [
            {
                label: 'Valores em R$',
                data: [3000, 1500, 500],
                backgroundColor: ['#10B981', '#EF4444', '#3B82F6'],
                hoverOffset: 4,
            },
        ],
    };

    // Dados para o gráfico de barras (Bar)
    const barData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
            {
                label: 'Receitas',
                data: [2000, 3000, 2500, 4000, 3500, 5000],
                backgroundColor: '#10B981',
            },
            {
                label: 'Despesas',
                data: [1500, 2000, 1800, 2200, 2500, 3000],
                backgroundColor: '#EF4444',
            },
        ],
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">Dashboard Financeiro</h1>

            {/* Cards Informativos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div className="p-5 bg-white shadow rounded-lg">
                    <h2 className="text-lg text-gray-600">Saldo Atual</h2>
                    <p className="text-3xl font-bold text-green-600">R$ {saldo.toLocaleString()}</p>
                </div>
                <div className="p-5 bg-white shadow rounded-lg">
                    <h2 className="text-lg text-gray-600">Receitas do Mês</h2>
                    <p className="text-3xl font-bold text-blue-600">R$ 3.000</p>
                </div>
                <div className="p-5 bg-white shadow rounded-lg">
                    <h2 className="text-lg text-gray-600">Despesas do Mês</h2>
                    <p className="text-3xl font-bold text-red-600">R$ 1.500</p>
                </div>
            </div>

            {/* Gráficos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 bg-white shadow rounded-lg">
                    <h2 className="text-lg font-semibold mb-3">Distribuição de Gastos</h2>
                    <Doughnut data={doughnutData} />
                </div>
                <div className="p-5 bg-white shadow rounded-lg">
                    <h2 className="text-lg font-semibold mb-3">Receitas vs Despesas (Últimos 6 Meses)</h2>
                    <Bar
                        data={barData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: false,
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;