import React from 'react';
import { FaRegEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                         const remaining=coffees.filter(coff=>coff._id!==_id)
                         setCoffees(remaining)   

                        }
                    })
            }
        })
    }



    return (
        <div className='bg-[#F5F4F1]'>
            <div className="card card-side bg-base-100 shadow-xl p-4">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full">
                    <div>
                        <h2 className="card-title">Name:{name}</h2>
                        <p>{quantity}</p>
                        <p className='text-xl font-semibold '>{supplier}</p>
                        <p className='text-red-500'>{taste}</p>
                        <p>{category}</p>
                        <p>{details}</p>
                    </div>
                    <div className="card-actions justify-end mr-3 mt-2">
                        <div className="grid grid-cols-1 space-y-2">
                            <button className='p-3 bg-[#E3B577] rounded text-white' ><FaRegEye /></button>
                            <Link to={`updateCoffee/${_id}`}><button className='p-3 bg-black text-white rounded' ><FaEdit /></button></Link>
                            <button
                                onClick={() => { handleDelete(_id) }}
                                className='p-3 bg-red-500 text-white rounded'
                            ><FaTrashAlt /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;