import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

export default function useFetchProducts() {
  const { id } = useParams();
  const [getproducto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const traerProductos = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMessage("");

    try {
      let url = id 
        ? `https://fakestoreapi.com/products/${id}` 
        : `https://fakestoreapi.com/products`;

      let response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("No se pudo conectar con el servidor");
      }

      let data = await response.json();

      if (data) {
        setProducto(data);
      } else {
        throw new Error("Producto no encontrado");
      }

    } catch (err) {
      setError(true);
      setMessage(err.message);
      //console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    traerProductos();
  }, [traerProductos]);

  return { getproducto, loading, error, message, reintentar: traerProductos 
  };
}