/* eslint-disable no-unused-vars */

import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const MyBookings = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const { carts, refetch } = useCart();
    console.log(carts)

    const axiosSecure = useAxiosSecure();
    console.log(carts);

    const filterCart = carts.filter(cart => cart?.email === user?.email)
    console.log(filterCart)

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/carts/delete/${id}`)
              .then(res => {
                if (res.data.deletedCount > 0) {
                  refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              })
          }
        });
      };
    return (
        <div className="w-9/12 mx-auto mt-6">
            <Helmet><title>My Cart</title></Helmet>
            <div className="overflow-x-auto">

                <div className="flex justify-around">

                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th> Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterCart?.map((service, index) =>
                                <tr key={service._id}>
                                    <th>
                                        {
                                            index + 1
                                        }
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={service.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>

                                                <div className="text-sm opacity-50">{service.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className=" badge-sm">${service.price} </span>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(service?._id)} className="btn btn-error btn-xs">Delete</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyBookings;