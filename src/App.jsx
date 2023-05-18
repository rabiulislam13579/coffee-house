import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffees)


  return (
    <div className='bg-[#F4F3F0] m-20'>
      <div className='text-center p-12'>
        <h1 className='text-4xl text-purple-800'>Hot Hot Cold Cold Coffee</h1>
        <h4 className='text-2xl font-semibold text-cyan-900'>total number of coffee : {coffees.length}</h4>
      </div>
      <div className='grid md:grid-cols-2 gap-6 p-6'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
