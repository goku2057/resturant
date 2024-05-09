import OrderList from "./orderList/OrderList"

function AdminOrderList({onOrderSelection}: any) {

  const handleOrderSelection = (table:any) => {
        onOrderSelection(table);
    };

  return (
    <div className='h-screen  flex flex-col py-5 px-5 md:px-0 text-black'>
        <div className="mb-5">
            <h1 className='text-2xl font-black'>Ordered Food</h1>
            <p className='text-[12px] mt-1 text-gray-700 font-semibold'>Tuesday 31 October, 2023</p>
            <div className='mt-5 border-b-[1px] border-gray-800'></div>
        </div>

        {/* Tables */}
        <div className="overflow-hidden shadow-sm shadow-[#00000075]">
            <OrderList onOrderSelection={handleOrderSelection}/>
        </div>
    </div>
  )
}

export default AdminOrderList
