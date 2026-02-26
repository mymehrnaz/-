export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-32 w-full object-cover rounded"
      />
      <h3 className="mt-2 font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold">${product.price}</p>
    </div>
  );
}
