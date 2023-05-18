import React from 'react';
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleAddCoffee=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const newCoffee={name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
        })





    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-4xl font-extrabold'>add a coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* row of name and quantity*/}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="coffee name" name='name' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                 {/* row of supplier and taste */}
                 <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="supplier" name='supplier' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                 {/* row of category and details */}
                 <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="category" name='category' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="details" name='details' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                 {/* row of photo */}
                 <div className=''>
                    <div className="form-control md:w-full mb-8">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="photo url" name='photo' className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                <input type="submit" value="ADD COFFEE" className="btn btn-block" />
            </form>

        </div>
    );
};

export default AddCoffee;