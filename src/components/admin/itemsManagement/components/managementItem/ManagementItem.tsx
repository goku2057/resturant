'use client'

import {FaEdit, FaPlus, FaTrash, FaWeight } from "react-icons/fa"
import DeleteConfirmationDialog from "@/components/component/ConfirmationDialog/DeleteConfirmationDialog";
import { useState } from "react";
import { CldImage } from 'next-cloudinary';

interface ManagementItemProps {
    items: any[];
    setItemForm: any;
    deleteItem: (itemToDelete: any) => void;
  }

  const ManagementItem: React.FC<ManagementItemProps> = ({ items, setItemForm, deleteItem }) => {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<any>(null);
    const [imageId ,setImageId] = useState('g3csp3hddmsrt2xcjcg8');

    
    const showDeleteDialog = (item: any) => {
        setItemToDelete(item);
        setShowDeleteConfirmation(true);
      };
    
      const hideDeleteDialog = () => {
        setItemToDelete(null);
        setShowDeleteConfirmation(false);
      };
    
      const confirmDelete = () => {
        
        if (itemToDelete) {
          deleteItem(itemToDelete);
          hideDeleteDialog();
        }
      };

    return (
        <div>
            {showDeleteConfirmation && (
                <DeleteConfirmationDialog onCancel={hideDeleteDialog} onConfirm={confirmDelete} />
            )}
             <div className='relative grid grid-cols-2 md:grid-cols-5 gap-5 '>
                    <div onClick={setItemForm} className="transition-all min-h-[200px] flex flex-col border-[2px] border-dashed  border-black justify-center items-center text-gray-800 cursor-pointer hover:shadow-xl hover:scale-[1.01] gap-5">
                        <FaPlus size={10}/>
                        <p className="text-[12px]">Add new item</p>
                    </div>
                    {items.map((item: any, index: number) => (
                        <div key={index} className='transition-all border-[2px] relative hover:shadow-xl  bg-white  hover:shadow-[#ff000030] cursor-pointer border-gray-400 hover:border-red-500 hover:scale-[1.02] min-w-[150px] flex flex-col items-center rounded'>
                            <div className=" w-full">
                            {item.imageUrl && <CldImage
                                width="600"
                                height="600"
                                src={item.imageUrl}
                                sizes="100vw"
                                alt="img"
                                className="w-[100%] h-auto md:h-[150px]"
                            />}
                            </div>
    
                            <div key={index} className='flex flex-col items-center w-full pt-5 gap-2'>
                                <h2 className='font-semibold text-black'>
                                    {item?.name} 
                                    <span className="ml-2 text-[10px] font-bold">
                                        ({item?.category})
                                    </span>
                                </h2>
                                <div className='flex gap-2 items-center justify-center text-gray-800'>
                                    <FaWeight className='opacity-50' size={10}/>
                                    <p className='text-[12px] font-semibold '>{item?.description}</p>
                                    <h2 className='font-black ml-5 text-[12px]'>Rs. {item?.price}</h2>
    
                                </div>
                                <div className='flex items-center justify-center w-full text-[12px] text-white mt-2'>
                                    <button  onClick={() => showDeleteDialog(item)} className="bg-red-500 w-full py-3 flex justify-center items-center mt-2"><FaTrash size={15}/> &nbsp; Delete item</button>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>
        </div>
    )
}

export default ManagementItem
