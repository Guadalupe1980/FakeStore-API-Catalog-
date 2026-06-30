import { useState, useEffect } from "react";

function useCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        async function traerCategories() {
            try {
                setLoading(true);
                setError(null)
                const response = await fetch("https://fakestoreapi.com/products");
                
                if (!response.ok) {
                    throw new Error("Fallo la solicitud con el servidor")
                }
                
                const data = await response.json()
                const allCategory = data.map(product => product.category);
                const noCategoryRepeat = [...new Set(allCategory)];
                setCategories(noCategoryRepeat);
            }catch(error){
                setError(error)
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        traerCategories()
    }, [])

  return  {categories, loading, error}
}

export default useCategories;