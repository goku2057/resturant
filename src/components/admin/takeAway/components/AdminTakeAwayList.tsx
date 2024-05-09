import OrderList from "./takeAwayList/TakeAwayList"

function AdminTakeAwayList() {
  return (
    <div className='h-screen flex flex-col py-5 px-5 md:px-0'>
        <div className="mb-5">
            <h1 className='text-2xl font-bold'>Take Away Food</h1>
            <p className='text-[12px] mt-1 text-gray-400'>Tuesday 31 October, 2023</p>
            <div className='mt-5 border-b-[1px] border-gray-600'></div>
        </div>

        {/* Tables */}
        <div className="overflow-hidden">
            <OrderList />
        </div>
    </div>
  )
}

export default AdminTakeAwayList
