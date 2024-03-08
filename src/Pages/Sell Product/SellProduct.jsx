import { useContext, useRef } from "react";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from 'sweetalert2'

const SellProduct = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    console.log(user);

    const formRef = useRef()
    const handleNewProduct = e => {
        
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const sellerName = form.get('sellerName')
        const sellerEmail = form.get('sellerEmail')
        const sellerImage = user.photoURL;
        const name = form.get('productName');
        const price1 = form.get('price');
        const price = parseInt(price1)
        const image = form.get('imageURL');
        const details = form.get('details');
        
        const newItem = { name,  price, image, details, sellerName , sellerEmail, sellerImage}
        console.log(newItem);
        axiosSecure.post('/addItem',newItem)
        .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service added to cart!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                formRef.current?.reset();
            }
        })
        
        

    }

    return (
        <div className="mb-48">
            <Helmet><title>Sell Product || BoroBazar</title></Helmet>
            <h2 className="text-3xl my-10 text-center">Add a new product!</h2>
            <form ref={formRef} onSubmit={handleNewProduct} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name="sellerName" defaultValue={user.displayName} readOnly placeholder="Seller Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text" name="sellerEmail" defaultValue={user.email} placeholder="Product Name"  readOnly className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="productName" placeholder="Product Name" className="input input-bordered" required />
                </div>
                


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="imageURL" placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price </span>
                    </label>
                    <input type="number" step={0.1} name="price" placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea name="details" placeholder="Details" className="textarea textarea-bordered textarea-lg w-full " required ></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default SellProduct;