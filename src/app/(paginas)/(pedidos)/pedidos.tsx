// src/app/paginas/pedidos/index.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Pedido {
  id: number;
  cliente: string;
  produto: string;
  quantidade: number;
  data: string;
}

const PedidosPage: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get(
          "https://seu-backend-url.com/api/pedidos"
        );
        setPedidos(response.data);
      } catch (err) {
        setError("Erro ao carregar pedidos");
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Pedidos</h1>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            <strong>Cliente:</strong> {pedido.cliente} <br />
            <strong>Produto:</strong> {pedido.produto} <br />
            <strong>Quantidade:</strong> {pedido.quantidade} <br />
            <strong>Data:</strong> {new Date(pedido.data).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PedidosPage;
