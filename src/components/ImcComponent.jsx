import React, { useState } from 'react';

const ImcComponent = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [message, setMessage] = useState('');

    const calcularIMC = () => {
        if (peso > 0 && altura > 0) {
            const alturaMetros = altura / 100;
            const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
            definirClassificacao(imcCalculado);
        } else {
            alert('Por favor, insira valores válidos.');
        }
    };

    const definirClassificacao = (imc) => {
        if (imc < 18.5) {
            setMessage('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 24.9) {
            setMessage('Peso normal');
        } else if (imc >= 25 && imc < 29.9) {
            setMessage('Sobrepeso');
        } else {
            setMessage('Obesidade');
        }
    };

    return (
        <div>
            <h2>Calculadora de IMC</h2>
            <div>
                <label>Peso (kg):</label>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder= "Digite seu peso"
                />
            </div>
            <div>
                <label>Altura (cm):</label>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Digite sua altura"
                />
            </div>
            <button onClick={calcularIMC}>Calcular IMC</button>
            {imc && (
                <div>
                    <h3>Seu IMC: {imc}</h3>
                    <h4>Classificação: {message}</h4>
                </div>
            )}
        </div>
    );
};

export default ImcComponent;
