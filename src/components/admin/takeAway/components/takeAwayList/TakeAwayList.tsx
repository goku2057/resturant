import { FaPerson, FaFilter } from "react-icons/fa6";

function TakeAwayList() {
   const orderList = [
        {
            face:'🍗',
            name: 'monkey D Luffy',
            menu: [
                {first: 'Spicy meat'},
                {second: 'More meat'},
            ],
            price: 500,
            status: 'completed',
        },
        {
            face:'🍺',
            name: 'Roronoa Zoro',
            menu: [
                {first: 'Old Booze'},
                {second: 'More booze'},
            ],
            price: 400,
            status: 'pending',
        },
        {
            face:'🚬',
            name: 'Vinsmoke Sanji',
            menu: [
                {first: 'Plata pyaza'},
                {second: 'Wine'},
            ],
            price: 600,
            status: 'completed',
        },
        {
            face:'🤑',
            name: 'Catbuglar Nami',
            menu: [
                {first: 'Grillez Money plant'},
                {second: 'Pizza'},
            ],
            price: 200,
            status: 'completed',
        },
        {
            face:'🔫',
            name: 'Brave Ussop',
            menu: [
                {first: 'Chiken'},
                {second: 'More chicken'},
            ],
            price: 400,
            status: 'completed',
        },
        {
            face:'😈',
            name: 'Demon Child Robin',
            menu: [
                {first: 'Strabery Icecream'},
                {second: 'Soft taco'},
            ],
            price: 100,
            status: 'completed',
        },
        {
            face:'🦝',
            name: 'Cotton Candy Chopper',
            menu: [
                {first: 'Cotton candy'},
                {second: 'More Cotton candy'},
            ],
            price: 50,
            status: 'completed',
        },
        {
            face:'💀',
            name: 'Brook',
            menu: [
                {first: 'Goat skull soup'},
                {second: 'Booze'},
            ],
            price: 500,
            status: 'completed',
        },
        {
            face:'🐟',
            name: 'Jinbe',
            menu: [
                {first: 'Grilled fish'},
                {second: 'Cooked fish'},
            ],
            price: 300,
            status: 'completed',
        },
    ]

    return (
        <div className=" bg-admindarkColor h-screen  pt-10  font-semibold">

            {/* OrderDetailsTitles */}
            <div className="px-5">
                <OrderListDetails />
            </div>

            {/* Divider */}
            <div className="border-b-[1px] border-gray-600 my-4"></div>

            {/* Order Lists */}
            <div className="hide-scroolbar h-[50vh] overflow-scroll">
                {orderList.map(( item, index) => (
                    <div key={index} className="">
                        <div className={`transition-all order-list px-5 grid grid-cols-4  gap-10 items-center py-3   ${item.status == 'completed' ? 'hover:bg-[#806dd4d5]' : 'hover:bg-[#d46d94d5]' } ${index == 1? 'bg-[#d46d94d5]' : ''}`}>
                        <div className="flex gap-3 items-center">
                            <div className={`${item.status == 'completed' ? 'bg-[#41ad4110]': 'bg-[#963d3d27]'} text-[16px] rounded-[50%] p-1 flex items-center`} >
                                {item.face}
                            </div>
                            <p>{item.name}</p>
                        </div>
                        <div className="md:mr-10 ml-5 md:ml-0">
                            {item.menu.map((fooditem, index) => (
                                <div key={index}>
                                    <p>{fooditem.first}</p>
                                    <p>{fooditem.second}</p>
                                </div>
                            ))}
                            
                        </div>
                        <div>
                            <p>Rs {item.price}</p>
                        </div>
                        <div>
                            <div>
                                <p className={`cursor-pointer text-[12px] mr-10 px-2 py-1 rounded-2xl flex justify-center items-center  text-admingreenColor ${item.status == 'completed' ? 'bg-[#2e4e2e94]': 'bg-[#963d3d7e]'}`}>{item.status}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TakeAwayList

export const OrderListDetails = () => {
    return (
        <div className="">
            <div className="flex justify-between">
                <h2>Take Away Report</h2>
                <h2 className="flex items-center gap-2 border-[1px] p-2 border-gray-600 text-[12px] text-gray-300 cursor-pointer font-normal rounded"><FaFilter size={12}/>Filter Order</h2>
                
            </div>
            <div className="grid grid-cols-4 mt-4 gap-10">
                <h3>Customer</h3>
                <h3 className="ml-5 md:ml-0">Menu</h3>
                <h3>Total Payment</h3>
                <h3>Status</h3>
            </div>
        </div>
    )
}




/*

const orderList = [
        {
            name: 'monkey D Luffy',
            menu: [
                {first: 'Spicy meat'},
                {second: 'More meat'},
            ],
            price: 500,
            status: 'completed',
        },
        {
            name: 'Roronoa Zoro',
            menu: [
                {first: 'Old Booze'},
                {second: 'More booze'},
            ],
            price: 400,
            status: 'completed',
        },
        {
            name: 'Vinsmoke Sanji',
            menu: [
                {first: 'Plata pyaza'},
                {second: 'Wine'},
            ],
            price: 600,
            status: 'completed',
        },
        {
            name: 'Catbuglar Nami',
            menu: [
                {first: 'Grillez Money plant'},
                {second: 'Pizza'},
            ],
            price: 200,
            status: 'completed',
        },
        {
            name: 'Brave Ussop',
            menu: [
                {first: 'Chiken'},
                {second: 'More chicken'},
            ],
            price: 400,
            status: 'completed',
        },
        {
            name: 'Demon Child Robin',
            menu: [
                {first: 'Strabery Icecream'},
                {second: 'Soft taco'},
            ],
            price: 100,
            status: 'completed',
        },
        {
            name: 'Cotton Candy Chopper',
            menu: [
                {first: 'Cotton candy'},
                {second: 'More Cotton candy'},
            ],
            price: 50,
            status: 'completed',
        },
        {
            name: 'Brook',
            menu: [
                {first: 'Goat skull soup'},
                {second: 'Booze'},
            ],
            price: 500,
            status: 'completed',
        },
        {
            name: 'Jinbe',
            menu: [
                {first: 'Grilled fish'},
                {second: 'Cooked fish'},
            ],
            price: 300,
            status: 'completed',
        },
    ]

*/