// import { useContext, useEffect, useState } from "react";

// import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";



const MyBookings = () => {


    return (
        <div className="w-9/12 mx-auto mt-20">
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
                            cart.map((service, index) => 
                                <tr key={service._id}>
                                    <th>
                                        {
                                            index+1
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
                                        <button className="btn btn-ghost btn-xs">Update</button>
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