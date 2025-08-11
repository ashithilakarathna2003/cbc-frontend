import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products")
                .then((res) => {
                    setProducts(res.data);
                    setIsLoading(false);
                })
                .catch(() => {
                    toast.error("Failed to load products");
                    setIsLoading(false);
                });
        }
    }, [isLoading]);

    function deleteProduct(productId) {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("Please login first");
            return;
        }

        axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId, {
            headers: { Authorization: "Bearer " + token }
        })
            .then(() => {
                toast.success("Product deleted successfully");
                setIsLoading(true);
            })
            .catch((e) => {
                toast.error(e.response?.data?.message || "Delete failed");
            });
    }

    return (
        <div className="w-full h-full max-h-full overflow-y-auto relative p-6">
            {/* Add Product Button */}
            <Link
                to="/admin/add-product"
                className="bg-green-600 hover:bg-green-700 transition-colors duration-200 text-white font-semibold py-2 px-4 rounded-full shadow-lg fixed bottom-6 right-6 flex items-center justify-center text-2xl"
                title="Add Product"
            >
                +
            </Link>

            {/* Loading Spinner */}
            {isLoading ? (
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[70px] h-[70px] border-4 border-gray-300 border-t-accent rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
                    <table className="w-full text-sm text-gray-700">
                        <thead className="bg-accent text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">Product ID</th>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3">Image</th>
                                <th className="px-4 py-3 text-right">Labelled Price</th>
                                <th className="px-4 py-3 text-right">Price</th>
                                <th className="px-4 py-3 text-center">Stock</th>
                                <th className="px-4 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="py-6 text-center text-gray-500">
                                        No products found.
                                    </td>
                                </tr>
                            ) : (
                                products.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                                    >
                                        <td className="px-4 py-3">{item.productId}</td>
                                        <td className="px-4 py-3">{item.name}</td>
                                        <td className="px-4 py-3 flex justify-center">
                                            <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="w-12 h-12 object-cover rounded-md shadow-sm"
                                            />
                                        </td>
                                        <td className="px-4 py-3 text-right">{item.labelledPrice}</td>
                                        <td className="px-4 py-3 text-right">{item.price}</td>
                                        <td className="px-4 py-3 text-center">{item.stock}</td>
                                        <td className="px-4 py-3 flex justify-center gap-3">
                                            <button
                                                onClick={() => deleteProduct(item.productId)}
                                                className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
                                                title="Delete"
                                            >
                                                <FaTrash />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    navigate("/admin/edit-product", { state: item });
                                                }}
                                                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors"
                                                title="Edit"
                                            >
                                                <FaEdit />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
