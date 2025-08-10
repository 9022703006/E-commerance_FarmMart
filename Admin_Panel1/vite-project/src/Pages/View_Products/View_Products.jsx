import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import './View_Products.css';

const View_Products = () => {
    const url = "http://localhost:4000"
    const [list, setList] = useState([]);
    //api calling
    const fetchlist = async () => {
        const response = await axios.get('http://localhost:4000/api/animals/list');
        console.log(response.data);
        if (response.data.success) {
            setList(response.data.data);
        }
        else {
            toast.error("Error");
        }
    }
    const remove_products = async (Products_id) => {
        try {
            const response = await axios.post(`${url}api/animals/remove`, { id: Products_id });
            if (response.data.success) {
                console.log("Deleted successfully:", Products_id);
                await fetchlist();
            } else {
                console.warn("Delete failed:", response.data.message);
            }
        } catch (error) {
            console.error("Error deleting product:", error.message || error);
        }
    };

    useEffect(() => {
        fetchlist();

    }, [])
    return (
        <div className='list flex-col  list_table '>
            <h3>Products List:</h3>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((values, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ffffff' }}>
                            <td>
                                <img
                                    src={`${url}/uploads/${values.images}`}
                                    alt="Product"
                                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
                                />
                            </td>
                            <td style={{ color: '#007bff', fontWeight: 'bold' }}>{values.name}</td>
                            <td style={{ color: '#28a745' }}>{values.category}</td>
                            <td style={{ color: '#dc3545' }}>₹{values.price}</td>
                            <td style={{ fontStyle: 'italic' }}>{values.description}</td>
                            <td onClick={() => remove_products(values._id)} style={{ cursor: "pointer" }}>x</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default View_Products
