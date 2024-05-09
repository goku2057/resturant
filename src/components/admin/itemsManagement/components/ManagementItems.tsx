'use client'

import React, { useEffect, useState } from "react";
import ManagementItem from "./managementItem/ManagementItem";
import AddNewItem from "./addNewItem/AddNewItem";

// Make a type file and import from there
export type MenuItem = {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    category: string;
    isCombination: Boolean,
};

function ManagementItems() {
    const [itemForm, setItemForm] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [loading, setLoading] = useState(true)
    const [allItems, setAllItems] = useState<MenuItem[]>([])

    useEffect(() => {
        fetchMenuItems()
    }, [])

    // Create custom hook for this function
    const fetchMenuItems = async () => {
        try {
            setLoading(true)

            const res = await fetch('/api/menu', {
                method: "GET",
                headers: {
                    "Content-Type": "Application/json"
                },
            });

            if (!res.ok) {
                throw new Error("Failed to fetch menu items");
            }

            const result = await res.json()
            setAllItems(result.items); // Store all items locally
        } catch (error: any) {
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const filterItems = () => {
        if (selectedCategory === '') {
            return allItems;
        }

        // console.log(allItems.filter(item => item.category === selectedCategory));
        return allItems.filter(item => item.category === selectedCategory);
    };

    // SelectedCategory 
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category)
    }

    
    // AddItem  !!! This method is handled by items alone
    const handleAddNewItem = () => {
        setItemForm(false);
    };

    // DeleteItem
    const deleteItem = async (itemToDelete: any) => {

      setAllItems((prevItems) =>
        prevItems.filter((item) => item !== itemToDelete)
      );

        // delete in db
        try {
            const response = await fetch(`/api/menu/delete`, {
                method: "DELETE",
                body: JSON.stringify({itemToDelete})
            });
        } catch (error) {
            console.log("error deleting the menu items: ", error);
        }
    };

  return (
    <div className='md:h-screen flex flex-col justify-between py-5 px-5 md:px-0'>
        
        <div className="mb-5 flex flex-col items-center md:items-start">
            <h1 className='md:text-2xl font-bold'>Settings</h1>
        </div>

        <div className=" bg-gray-200 px-5 py-3 flex flex-col">
            <h2 className="font-semibold mb-5 text-[17px] text-black">Project Management</h2>
            <ul className="mb-5 flex font-semibold gap-10 text-[12px] text-black">
                <li><button onClick={() => handleCategoryClick('')} className={`transition-all   bg-transparent px-1 py-1 border-b-[1px] ${selectedCategory === 'all' ? 'text-adminblueColor border-adminblueColor' : 'border-admindarkColor text-gray-800'} text-adminblueColor hover:border-adminblueColor hover:text-adminblueColor`}>All Item</button></li>
                <li><button onClick={() => handleCategoryClick('veg')} className={`transition-all   bg-transparent px-1 py-1 border-b-[1px] ${selectedCategory === 'veg' ? 'text-adminblueColor border-adminblueColor' : 'border-admindarkColor text-gray-800'} text-adminblueColor hover:border-adminblueColor hover:text-adminblueColor`}>Veg</button></li>
                <li><button onClick={() => handleCategoryClick('buff')} className={`transition-all   bg-transparent px-1 py-1 border-b-[1px] ${selectedCategory === 'buff' ? 'text-adminblueColor border-adminblueColor' : 'border-admindarkColor text-gray-800'} text-adminblueColor hover:border-adminblueColor hover:text-adminblueColor`}>Buff</button></li>
                <li><button onClick={() => handleCategoryClick('chicken')} className={`transition-all   bg-transparent px-1 py-1 border-b-[1px] ${selectedCategory === 'chicken' ? 'text-adminblueColor border-adminblueColor' : 'border-admindarkColor text-gray-800'} text-adminblueColor hover:border-adminblueColor hover:text-adminblueColor`}>Chicken</button></li>
            </ul>
            {/* Tables */}
            <div className="hide-scroolbar h-[50vh] flex flex-col md:h-[55vh] overflow-scroll  pr-5 md:mr-0 md:p-2">
            {itemForm ? (
                <div className="z-[10]">
                    <AddNewItem addItem={handleAddNewItem} />
                </div>
                ) : (
                    loading ? (<div>loading items...</div>) : (
                    <ManagementItem items={filterItems()} setItemForm={setItemForm} deleteItem={deleteItem}/>
                )
            )}
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-5 px-5 py-5 bg-gray-200 text-black font-bold">
            <button onClick={() => {setItemForm(false)}} className="transition-all hover:scale-[1.05]  bg-transparent hover:bg-adminblueColor text-[12px] border-[1px] border-adminblueColor py-3 px-10 ">Discard Changes</button>
         </div>
    </div>
  )
}

export default ManagementItems
