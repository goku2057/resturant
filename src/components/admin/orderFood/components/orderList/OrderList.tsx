import { FaPerson, FaFilter } from "react-icons/fa6"
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/hook/redux-toolkit/store";
import { orderFood } from "@/hook/redux-toolkit/features/admin/order-slice";
import { useEffect, useState } from "react";
import { dbTimeForCustomer } from "@/lib/datetime-function";

interface orderItem {
    face: string;
    name: string;
    menu: string[];
    price: number;
    status: string;
}

interface Product {
    imgUrl: string;
    title: string;
    weight: string;
    price: string;
    size: number | null;
}

interface OrderItem {
    _id: string,
    email: string,
    phone: string,
    address: string,
    cartProducts: Product[],
    paid: boolean,
    createdAt: string,
}

function OrderList({onOrderSelection}: any) {
   const [selectedTable, setSelectedTable] = useState<number | null>(null);
   const [orderData, setOrderData] = useState<OrderItem[]>([]);
   const [arrayOrderData, setArrayOrderData] = useState<OrderItem[]>([]);
   const [activeFilter, setActiveFilter] = useState('all');
   const [page, setPage] = useState(0)

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        fetch('/api/order').then(response => {
            response.json().then(data => {
                setOrderData(data.reverse())
            })
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    }, [,selectedTable])

    // Filter the order based on paid - pending - all
    useEffect(() => {
        if (activeFilter === 'all') {
            setArrayOrderData(orderData);
        } else {
            const filteredOrders = orderData.filter(order => {
                if (activeFilter === 'paid') {
                    return order.paid === true;
                } else if (activeFilter === 'pending') {
                    return order.paid === false;
                }
            });
            setArrayOrderData(filteredOrders);
        }
    }, [activeFilter, orderData]);

    const handleSelection = (item: OrderItem, index: number) => {
        setSelectedTable(index)
        dispatch(orderFood({face: item.email[0], id: item._id, status: item.paid, customerName: item.email, price: item?.cartProducts.reduce((acc, product) => acc + parseFloat(product.price), 0), dish: item.cartProducts}))
    }

    // add pagination, filtering
    const totalPages = Math.ceil(arrayOrderData.length / 5)

    const handlePageClick = (newPage: number) => {
        setPage(newPage)
    }

    const startIndex = page * 5;
    const endIndex = (page + 1) * 5;

    return (
        <div className=" bg-white rounded  min-h-[75vh]  pt-10  font-semibold">

            {/* OrderDetailsTitles */}
            <div className="px-5">
                <div className="">
                    <div className="flex justify-between">
                        <h2>Order Report</h2>
                        <div className="flex items-center gap-2 border-gray-600 text-[12px] text-black cursor-pointer font-normal">
                            <h3 onClick={() => setActiveFilter('all')} className={`rounded text-[12px] ${activeFilter === 'all' ? 'bg-gray-800' : 'bg-gray-400'}  text-white p-2`}>all</h3>
                            <h3 onClick={() => setActiveFilter('paid')} className={`rounded text-[12px] ${activeFilter === 'paid' ? 'bg-green-500' : 'bg-green-300'}  text-white p-2`}>paid</h3>
                            <h3 onClick={() => setActiveFilter('pending')} className={`rounded text-[12px] ${activeFilter === 'pending' ? 'bg-red-500' : 'bg-red-300'}  text-white p-2`}>pending</h3>
                        </div>
                        
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-5 mt-4 gap-10 ">
                        <h3 className="text-black">Customer</h3>
                        <h3 className="sm:block hidden text-black">Menu</h3>
                        <h3 className="sm:block hidden text-black">Time</h3>
                        <h3 className="text-black text-center sm:text-start">Total Payment</h3>
                        <h3 className="text-black">Status</h3>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-b-[1px] border-gray-600/40 my-4"></div>

            {/* Order Lists */}
            <div className=" h-[45vh] overflow-scroll ">
                {arrayOrderData.slice(startIndex, endIndex).map((data, index) => (
                    <div 
                    key={index} 
                    onClick={() => handleSelection(data as OrderItem, index)}
                    className="">
                        <div className={`transition-all order-list px-5 grid md:grid-cols-5 grid-cols-3 gap-10 items-center  py-3 ${selectedTable === index ? data?.paid == true ?  "bg-[#6dd491d5]" : "bg-[#eb5a5a9c]" : "" } ${data?.paid == true ? 'hover:bg-[#6dd48cd5]' : 'hover:bg-adminredColor' }`}>
                        <div className="flex gap-3 items-center">
                            <div className={`${data?.paid == true ? 'bg-[#3dcf3da2]': 'bg-[#d33e3ec4]'} text-[12px] h-[25px] w-[30px] justify-center rounded-[50%]  p-2  flex items-center uppercase text-white`} >
                                {data?.email[0]}
                            </div>
                            <p className="!text-black !font-semibold">{data?.phone}</p>
                        </div>
                        <div className="md:mr-10 ml-5 md:ml-0 sm:block hidden">
                            {data?.cartProducts.slice(0, 2).map((product, index) => (
                                <div key={index}>
                                    <p className="!text-black">{product?.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="sm:block hidden">
                            <div className="!text-black !font-bold"> 
                                <p className="!text-gray-900 !font-semibold">{dbTimeForCustomer(data.createdAt)}</p>
                            </div>
                        </div>
                        <div className="sm:text-start text-center">
                            <div className="!text-black !font-bold"> 
                                <p className=" !text-black !font-bold">
                                    <span className="font-semibold text-[10px]">Rs </span> 
                                    {data?.cartProducts.reduce((acc, product) => acc + parseFloat(product.price), 0)}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className={`cursor-pointer text-[10px] md:text-[14px] p-2  rounded flex justify-center items-center  !text-white ${data.paid == true ? 'bg-[#50af50d7]': 'bg-[#e04949dc]'}`}>{data.paid == true ? 'paid' : 'Pending'}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="py-5 gap-2 flex justify-center items-center">
                {totalPages > 0 && [...Array(totalPages)].map((val, index) => (
                    <button
                        className={`py-1 px-2 bg-gray-500 text-white rounded text-[12px] ${page === index && 'bg-green-500'}`}
                        key={index}
                        onClick={() => handlePageClick(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default OrderList