import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';


const Users = () => {

    const loadedUsers = useLoaderData();

    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?!',
            text: 'Do you want to delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`https://coffee-store-server-theta-ten.vercel.app/user/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount === 1) {
                                const remaining = users.filter((user) => user._id !== id);
                                setUsers(remaining);
                                toast.success('User deleted successfully');
                            }

                        })
                }
            })
    }

    return (
        <div>
            <div className="w-1/3 mx-auto p-10 border">
                <p className="text-3xl font-medium text-center mb-12">Users : {users.length}</p>
                <div>
                    {
                        users.map((user) => <div key={user._id} className="border p-5 mb-4 text-center space-y-2">
                            <p>Email : {user.email}</p>
                            <p>Create : {user.createdAt}</p>
                            <p><button
                                className="btn bg-red-500 text-white"
                                onClick={() => handleDelete(user._id)}>Delete</button></p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;