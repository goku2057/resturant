import AdminTable from "./AdminTable";

function AdminItems({onTableSelection}: any) {

  const handleTableSelection = (table:any) => {
        onTableSelection(table);
    };

  return (
    <div className='flex flex-col py-5 px-5 md:px-0'>
        <div className="mb-5">
            <h1 className='text-2xl font-bold text-black'>Reserve Table</h1>
            <p className='text-[12px] mt-1 text-gray-800'>Tuesday 31 October, 2023</p>
            <div className='mt-5 border-b-[1px] border-gray-800'></div>
        </div>

        {/* Tables */}
        <div className="">
            <AdminTable  onTableSelection={handleTableSelection}  />
        </div>
    </div>
  )
}

export default AdminItems
