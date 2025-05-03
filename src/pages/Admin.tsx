import { useEffect, useState } from "react";
import api from "../api/api";

interface ContactData {
  _id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

const Admin = () => {
  const [data, setData] = useState<ContactData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<ContactData[]>("/");
        setData(response.data);
      } catch (err) {
        setError("Erro ao carregar dados");
        console.error("API Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <img src="./assets/loading.gif" alt="loadingbar" />
      </div>
    );
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Mensagem</th>
              <th>Data de envio</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
