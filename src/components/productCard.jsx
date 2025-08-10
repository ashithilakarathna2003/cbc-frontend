import { Link} from "react-router-dom";

export default function ProductCard({ product }) {

    return (
      <Link to={"/overview/"+product.productId} className="w-[300px] h-[450px] bg-white shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-200 ease-in-out m-4">
        {/* Product Image */}
        <div className="w-full h-[60%] bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={product?.images?.[0] || "/default.jpg"}
            alt={product?.name || "Product"}
            className="object-cover h-full w-full"
          />
        </div>
  
        {/* Product Info */}
        <div className="p-4 flex flex-col justify-between h-[40%]">
          {/* Name */}
          <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
  
          {/* Price */}
          <div className="flex items-center mt-2 space-x-2">
            <p className="text-red-500 font-bold text-xl">Rs. {product.price.toFixed(2)}</p>
            {product.labelledPrice > product.price && (
              <p className="text-sm line-through text-gray-500">
                Rs. {product.labelledPrice.toFixed(2)}
              </p>
            )}
          </div>
  
          {/* Stock */}
          <p className={`text-sm mt-1 font-medium ${
            product.stock > 0 ? "text-green-600" : "text-red-500"
          }`}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
  
          {/* Button */}
          <button
            className="mt-3 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            disabled={product.stock <= 0}
            
          >
            {product.stock > 0 ? "Buy Now" : "Unavailable"}
          </button>
        </div>
      </Link>
    );
  }
  