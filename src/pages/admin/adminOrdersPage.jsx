import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../components/loading";
import Modal from "react-modal";

// Important: Set app element for accessibility
Modal.setAppElement("#root");

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Modal custom styles
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxHeight: "90vh",
            overflowY: "auto",
            width: "600px"
        }
    };

    useEffect(() => {
        if (isLoading) {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Please login first");
                setIsLoading(false);
                return;
            }

            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/orders", {
                headers: { Authorization: "Bearer " + token }
            })
                .then((res) => {
                    setOrders(res.data);
                    setIsLoading(false);
                })
                .catch((e) => {
                    toast.error("Error fetching orders: " + (e.response?.data?.message || "Unknown error"));
                    setIsLoading(false);
                });
        }
    }, [isLoading]);

    function getStatusBadge(status) {
        let color = "bg-gray-200 text-gray-700";
        if (status === "pending") color = "bg-yellow-100 text-yellow-800";
        if (status === "completed") color = "bg-green-100 text-green-800";
        if (status === "cancelled") color = "bg-red-100 text-red-800";
        return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}>{status}</span>;
    }

    function openModal(order) {
        setSelectedOrder(order);
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
        setSelectedOrder(null);
    }

    return (
        <div className="w-full h-full max-h-full overflow-y-auto p-6">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
                    <table className="w-full text-sm text-gray-700">
                        <thead className="bg-accent text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">Order ID</th>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Email</th>
                                <th className="px-4 py-3 text-left">Address</th>
                                <th className="px-4 py-3 text-left">Phone</th>
                                <th className="px-4 py-3 text-right">Total</th>
                                <th className="px-4 py-3 text-left">Date</th>
                                <th className="px-4 py-3 text-center">Status</th>
                                <th className="px-4 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length === 0 ? (
                                <tr>
                                    <td colSpan="9" className="py-6 text-center text-gray-500">
                                        No orders found.
                                    </td>
                                </tr>
                            ) : (
                                orders.map((order, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-4 py-3">{order.orderId}</td>
                                        <td className="px-4 py-3">{order.name}</td>
                                        <td className="px-4 py-3">{order.email}</td>
                                        <td className="px-4 py-3">{order.address}</td>
                                        <td className="px-4 py-3">{order.phone}</td>
                                        <td className="px-4 py-3 text-right">{order.total.toFixed(2)}</td>
                                        <td className="px-4 py-3">{new Date(order.date).toLocaleDateString()}</td>
                                        <td className="px-4 py-3 text-center">{getStatusBadge(order.status)}</td>
                                        <td className="px-4 py-3 text-center">
                                            <button
                                                onClick={() => openModal(order)}
                                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal */}
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Order Details"
            >
                {selectedOrder && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Order {selectedOrder.orderId}</h2>
                        <p><strong>Name:</strong> {selectedOrder.name}</p>
                        <p><strong>Email:</strong> {selectedOrder.email}</p>
                        <p><strong>Phone:</strong> {selectedOrder.phone}</p>
                        <p><strong>Address:</strong> {selectedOrder.address}</p>
                        <p><strong>Status:</strong> {selectedOrder.status}</p>
                        <p><strong>Date:</strong> {new Date(selectedOrder.date).toLocaleString()}</p>
                        <hr className="my-4" />
                        <h3 className="font-semibold mb-2">Products</h3>
                        <div className="space-y-2">
                            {selectedOrder.products.map((p) => (
                                <div key={p._id} className="flex items-center gap-3 border p-2 rounded">
                                    <img
                                        src={p.productInfo.images[0]}
                                        alt={p.productInfo.name}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                    <div>
                                        <p className="font-semibold">{p.productInfo.name}</p>
                                        <p className="text-sm text-gray-600">Qty: {p.quantity}</p>
                                        <p className="text-sm text-gray-600">Price: {p.productInfo.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className="my-4" />
                        <p className="font-bold text-lg">Total: {selectedOrder.total.toFixed(2)}</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
