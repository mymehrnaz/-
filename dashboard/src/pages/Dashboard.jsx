import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const categories = [...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p =>
    selectedCategories.length === 0 ||
    selectedCategories.includes(p.category)
  );

  return (
    <div className="p-6 m-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
