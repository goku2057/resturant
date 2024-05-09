'use client'

import React,{ useEffect, useState } from 'react';
import EditableImage from '@/components/component/EditableImage';


function AddNewItem({addItem}: any) {
  const [newItem, setNewItem] = useState({
    imageUrl: '/assets/images/cafe2.png',
    name: '',
    description: '',
    isCombination: false,
    category: '',
    price: 0,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: name === 'price' ? Number(value) : value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if(newItem.name !== '' && newItem.description !== '' && newItem.price !== 0 && newItem.category !== '') {
      const data = newItem
      try {

        const response = await fetch('/api/menu/create', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const newItemFromAPI = await response.json(); 
    
          // Reset the form
          setNewItem({
            imageUrl: '/assets/images/cafe2.png',
            name: '',
            description: '',
            isCombination: false,
            category: '',
            price: 0,
          });
        } else {
          console.error('Failed to create item');
        }

      } catch (error: any) {
        console.error(error);
      }

      addItem(newItem);
    } else {
      alert('Please enter all fields');
      addItem(newItem);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, category: value }));
  };

  const handleImageChange = (link: string) => {
    setNewItem((prevItem) => ({ ...prevItem, imageUrl: link }));
  };

  return (
    <div className="md:w-[60vw] w-auto fixed top-[45%] left-[50%] md:top-[55%] transform translate-x-[-50%] translate-y-[-50%] flex items-center justify-center py-10 px-10 md:py-5 md:px-40 bg-adminbgColor border-2 border-adminblueColor text-white">
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">

        <div className='flex items-center'>
          <EditableImage setLink={handleImageChange}/>
        </div>
        <div className='flex items-center'>
          <label htmlFor="name" className='text-black mr-2 text-sm font-bold'>name : </label>
          <input
            placeholder="Name"
            className="border text-sm font-bold rounded  py-2 px-3 text-black outline-none"
            type="text"
            value={newItem.name}   
            name="name"
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>
        <div className='flex items-center'>
          <label htmlFor="weight" className='text-black mr-2 text-sm font-bold'>weight : </label>
          <input
            placeholder="Weight"
            className="border text-sm font-bold rounded py-2 px-3 text-black outline-none"
            type="text"
            value={newItem.description}
            name="description"
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>
        <div className='flex items-center'>
          <label htmlFor="price" className='text-black mr-2 text-sm font-bold'>price : </label>
          <input
            placeholder="Price"
            className="border text-sm font-bold rounded  py-2 px-3 text-black outline-none"
            type="number"
            value={newItem.price}
            name="price"
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>
        <div className='flex items-center'>
          <label htmlFor="category" className='text-black mr-2 text-sm font-bold'>category : </label>
          <select
            className="border text-sm font-bold rounded py-2 px-3 text-black outline-none"
            value={newItem.category}
            name="category"
            onChange={handleCategoryChange}
          >
            <option value="veg">select</option>
            <option value="veg">veg</option>
            <option value="buff">buff</option>
            <option value="chicken">chicken</option>
          </select>
        </div>
        <button type='submit' className="transition-all bg-adminblueColor hover:shadow hover:scale-[1.05] text-[12px] border-[1px] border-adminblueColor mt-3 py-2 px-10">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNewItem;
