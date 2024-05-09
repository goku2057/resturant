'use client'

import React, { useContext, useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { CldImage } from 'next-cloudinary';
import { CartContext } from '@/components/appContext';

const Search = ({onSearch}: any) => {
  const {addToCart} = useContext(CartContext);

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null)
  const [search, setSearch] = useState<string>('')
  const [inputActive, setInputActive] = useState<boolean>(false); 

  const handleChange = (event: any) => {
    const searchText = event.target.value;
    setSearch(searchText);
  };

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };

  useEffect(() => {
    if (search.trim() !== '') {
      fetchMenuItems();
    } else {
      // Clear items when the search query is empty
      setItems([]);
    }
  }, [search]);


const fetchMenuItems = async () => {

  try {
    const res = await fetch(`
    /api/menu?isCombination=false&search=${search !== '' ? search: ''}`,
    {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch menu items");
      }

      const data = await res.json();
      setItems(data.items);
      setError(null)
    } catch (error: any) {
      setError(error)
    }
  };

  const handleSearchClick = (item: any) => {
    // addToCart(item);
  }
  
  return (
    <div className='relative'>
      <div className={`transition-all text-white rounded-3xl border-2 ${inputActive ? 'border-red-500' : 'hover:border-blue-500'} bg-gray-800 flex md:mt-5 justify-between w-full md:w-96 pr-5 items-center`}>
        <input 
          type="text" 
          placeholder='Search a food' 
          className=' bg-transparent rounded-3xl outline-none w-full px-5 py-3'  
          onChange={handleChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <FaSearch size={20}/>
      </div>

      {search.trim() !== '' && !error && (
        <div className='absolute z-[20] shadow-2xl shadow-[black] mt-5 bg-gray-800 border border-blue-900  text-white rounded-xl py-5 px-3 w-full'>
          {items.length > 0 ? (
            items.map((item: any, index: number) => (
              <div className='transition-all  cursor-pointer hover:scale-[0.95]' onClick={() => handleSearchClick(item)}>
              <div className='transition-all border-2 border-blue-500 hover:border-red-500 rounded-xl p-2 my-4 flex gap-2' key={index}>
              <div className="">
                {item.imageUrl && <CldImage
                    width="100"
                    height="100"
                    src={item.imageUrl}
                    sizes="100vw"
                    alt={item.name}
                    className="w-[50px]  h-[50px] rounded-full shadow-md shadow-[#00000069]"
                />}
            </div>
                <div className='flex flex-col justify-around'>
                  <div className='font-bold'>{item.name}</div>
                  <div className='text-sm'>{item.description} . Rs {item.price}</div>
                </div>
              </div>
              </div>
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search
