import { useDispatch } from 'react-redux'
import { AppDispatch } from "@/hook/redux-toolkit/store";
import { touchTable } from '@/hook/redux-toolkit/features/admin/table-slice'
import {FaSkull,FaArrowUp, FaArrowDown, FaTable} from 'react-icons/fa'
import { useState } from 'react';

function AdminTable({onTableSelection}: any) {
    const [selectedTable, setSelectedTable] = useState<number | null>(null);
    const [tableStatus, setTableStatus] = useState<string | null>(null);
    
    const dispatch = useDispatch<AppDispatch>();

    const tables = [
        {
            name: "Table 1",
            status: "available",
            dish: ['Veg Momo', 'Pure Vegetarian Momo'],
        },
        {
            name: "Table 2",
            status: "booked",
            dish: ['Chicken Biryani', 'Vegetable Pulao'],
        },
        {
            name: "Table 3",
            status: "available",
            dish: ['Pizza Margherita', 'Pepperoni Pizza'],
        },
        {
            name: "Table 4",
            status: "available",
            dish: ['Sushi Rolls', 'Sashimi Platter'],
        },
        {
            name: "Table 5",
            status: "booked",
            dish: ['Pasta Alfredo', 'Spaghetti Bolognese'],
        },
        {
            name: "Table 6",
            status: "available",
            dish: ['Burger Deluxe', 'Veggie Burger'],
        },
        {
            name: "Table 7",
            status: "booked",
            dish: ['Tandoori Chicken', 'Butter Naan'],
        },
        {
            name: "Table 8",
            status: "available",
            dish: ['Salmon Sashimi', 'Dragon Roll'],
        },
        {
            name: "Table 9",
            status: "available",
            dish: ['Caprese Salad', 'Bruschetta'],
        },
        {
            name: "Table 10",
            status: "available",
            dish: ['Chocolate Cake', 'Fruit Tart'],
        },
        {
            name: "Table 11",
            status: "available",
            dish: ['Paneer Tikka', 'Dal Makhani'],
        },
        {
            name: "Table 12",
            status: "available",
            dish: ['Tiramisu', 'Cheesecake'],
        },
    ];

    const handleTableSelection = (table : any, index: number) => {
        setSelectedTable(index);
        setTableStatus(table.status);

        dispatch(touchTable({status: table.status, tableName: table.name, dish: table.dish}))
    }

    return (
        <div className='text-black  grid grid-cols-2 md:grid-cols-3 gap-5 '>
            
            {tables.map((table, index) => (
            <div 
                key={index} 
                onClick={() => handleTableSelection(table, index)}
                className='shadow-sm  transition-all hover:scale-[1.02] cursor-pointer '
            >
                <div className={`p-3 pr-20 bg-adminbgColor font-bold  ${ selectedTable === index ? table.status === "available" ? "bg-admingreenColor" : "bg-adminredColor" : "" } ${table.status == 'available' ? "hover:bg-admingreenColor" : "hover:bg-adminredColor"}`}>
                <div className='flex items-center gap-2 mb-4'>
                <div className='p-1 bg-gray-300 rounded'>{table.status == 'available' ? <FaTable size={10}/> : <FaSkull size={10}/>}</div>
                    <p className={`text-[10px] ${table.status == 'available' ? "text-[#3A7326]" : "text-[#ff3a3a]"}`}>{table.status}</p>
                    <div className={`p-1 rounded-3xl ${table.status == 'available' ? "text-admingreenColor bg-[#305230]" : "text-[#ff5d5d] bg-[#523030]"}`}>
                        {table.status == 'available' ?<FaArrowUp size={6}/> : <FaArrowDown size={6}/>}
                    </div>
                </div>
                <h1 className='text-xl font-semibold mb-2'>{table.name}</h1>
                <div className='text-[8px]'> 
                {table.status == 'available' ?
                <div><br /><br /></div>
                :
                <div className='font-semibold'>
                    {table.dish.map((dishItem, index) => (
                    <div key={index}>
                        {dishItem}
                    </div>
                ))}
                </div>
                }
                     
                </div>
                </div>
            </div>
            ))}
        
        </div>
    )
}

export default AdminTable
