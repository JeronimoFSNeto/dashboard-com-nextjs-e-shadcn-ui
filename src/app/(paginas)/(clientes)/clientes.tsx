// src/app/paginas/clientes/index.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

const ClientesPage: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get(
          "https://seu-backend-url.com/api/clientes"
        );
        setClientes(response.data);
      } catch (err) {
        setError("Erro ao carregar clientes");
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <strong>Nome:</strong> {cliente.nome} <br />
            <strong>Email:</strong> {cliente.email} <br />
            <strong>Telefone:</strong> {cliente.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientesPage;
