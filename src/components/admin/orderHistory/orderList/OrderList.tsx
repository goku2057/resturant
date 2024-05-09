import { useDispatch } from "react-redux";
import { AppDispatch } from "@/hook/redux-toolkit/store";
import { orderFood } from "@/hook/redux-toolkit/features/admin/order-slice";
import { useEffect, useState } from "react";
import { dbTimeForCustomer } from "@/lib/datetime-function";
import Sidebar from "./Sidebar";
import OrderDetailsTitles from "./OrderDetailsTitles";
import PriceDetails from "./PriceDetails";


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
   const [filterOrderData, setFilterOrderData] = useState<OrderItem[]>([]);
   const [arrayOrderData, setArrayOrderData] = useState<OrderItem[]>([]);
   const [activeFilter, setActiveFilter] = useState<string>('all');
   const [activeDate, setActiveDate] = useState<string>('');
   const [totalPaid, setTotalPaid] = useState<string>('');
   const [totalPending, setTotalPending] = useState<string>('');

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        fetch('/api/orderHistory')
            .then(response => response.json())
            .then(data => {
                setOrderData(data.reverse());
                setFilterOrderData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        let filteredOrders = orderData;
        
        if (activeDate === 'day') {
            console.log("day here");
            const currentDate = new Date();
            filteredOrders = orderData.filter(order => {
                const orderDate = new Date(order.createdAt);
                return orderDate.getDate() === currentDate.getDate() &&
                    orderDate.getMonth() === currentDate.getMonth() &&
                    orderDate.getFullYear() === currentDate.getFullYear();
            });
        } else if (activeDate === 'week') {
            const currentDate = new Date();
            const lastDayOfWeek = new Date(currentDate);
            lastDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
            const firstDayOfWeek = new Date(currentDate);
            firstDayOfWeek.setDate(currentDate.getDate() - (6 - currentDate.getDay()));
            filteredOrders = orderData.filter(order => {
                const orderDate = new Date(order.createdAt);
                return orderDate >= firstDayOfWeek && orderDate <= lastDayOfWeek;
            });
        } else if (activeDate === 'month') {
            const currentDate = new Date();
            const lastDayOfMonth = new Date(currentDate);
            lastDayOfMonth.setDate(currentDate.getDate() - currentDate.getDay());
            const firstDayOfMonth = new Date(currentDate);
            firstDayOfMonth.setDate(currentDate.getDate() - (30 - currentDate.getDay()));

            filteredOrders = orderData.filter(order => {
                const orderDate = new Date(order.createdAt);
                return orderDate >= firstDayOfMonth && orderDate <= lastDayOfMonth;
            });
        } else if (activeDate === 'year') {
            const currentDate = new Date();
            const lastDayOfYear = new Date(currentDate);
            lastDayOfYear.setDate(currentDate.getDate() - currentDate.getDay());
            const firstDayOfYear = new Date(currentDate);
            firstDayOfYear.setDate(currentDate.getDate() - (365 - currentDate.getDay()));

            filteredOrders = orderData.filter(order => {
                const orderDate = new Date(order.createdAt);
                return orderDate >= firstDayOfYear && orderDate <= lastDayOfYear;
            });
        }

        setFilterOrderData(filteredOrders);
    }, [activeDate]);

    useEffect(() => {
        let filteredOrders = filterOrderData;
    
        if (activeFilter !== 'all') {
            filteredOrders = filterOrderData.filter(order => {
                return activeFilter === 'paid' ? order.paid === true : order.paid === false;
            });
        }

        setArrayOrderData(filteredOrders);

        // Calculate total paid and total pending
        const totalPaidAmount = filteredOrders.reduce((acc, order) => {
            if (order.paid) {
                return acc + order.cartProducts.reduce((acc, product) => acc + parseInt(product.price), 0);
            }
            return acc;
        }, 0);

        const totalPendingAmount = filteredOrders.reduce((acc, order) => {
            if (!order.paid) {
                return acc + order.cartProducts.reduce((acc, product) => acc + parseInt(product.price), 0);
            }
            return acc;
        }, 0);

        setTotalPaid(totalPaidAmount.toFixed(2));
        setTotalPending(totalPendingAmount.toFixed(2));
    }, [activeFilter, filterOrderData]);

    useEffect(() => {
        if (activeFilter === 'all') {
            setArrayOrderData(filterOrderData);
        } else {
            const filteredOrders = filterOrderData.filter(order => {
                if (activeFilter === 'paid') {
                    return order.paid === true;
                } else if (activeFilter === 'pending') {
                    return order.paid === false;
                }
            });
            setArrayOrderData(filteredOrders);
        }
    }, [activeDate]);

    const handleSelection = (item: OrderItem, index: number) => {
        setSelectedTable(index)
        dispatch(orderFood({face: item.email[0], id: item._id, status: item.paid, customerName: item.email, price: item?.cartProducts.reduce((acc, product) => acc + parseFloat(product.price), 0), dish: item.cartProducts}))
    }

    return (
        <div className="  text-white  md:min-h-[100vh] flex  flex-col md:flex-row font-semibold">
            
            {/* sidebar for filtering */}
            <div className="md:w-[15rem] py-10 md:py-0 md:fixed md:h-full bg-gray-900 md:pt-10">
                <div className=" ">
                    <Sidebar activeDate={activeDate} setActiveDate={setActiveDate}/>
                </div>
            </div>

            <div className="w-full bg-gray-800 pt-5 md:ml-[15rem]">
                {/* Component for price details */}
                <div className="m-5 w-[50%]">
                    <PriceDetails date={activeDate} totalPaid={totalPaid} totalPending={totalPending}/>
                </div>
                
                {/* OrderDetailsTitles */}
                <OrderDetailsTitles activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>

                {/* Divider */}
                <div className="border-b-[1px] border-gray-600 my-4"></div>

                {/* Order Lists */}
                <div className="  ">
                    {arrayOrderData.map((data, index) => (
                        <div 
                        key={index} 
                        onClick={() => handleSelection(data as OrderItem, index)}
                        className="">
                            <div className={`transition-all order-list px-5 grid md:grid-cols-5 grid-cols-3 gap-10 items-center  py-3 ${selectedTable === index ? data?.paid == true ?  "bg-[#6dd491d5]" : "bg-[#eb5a5a9c]" : "" } ${data?.paid == true ? 'hover:bg-[#6dd48cd5]' : 'hover:bg-adminredColor' }`}>
                            <div className="flex gap-3 items-center">
                                <div className={`${data?.paid == true ? 'bg-[#3dcf3da2]': 'bg-[#d33e3ec4]'} text-[16px] h-[2rem] w-[2rem] justify-center rounded-[50%]  p-2  flex items-center uppercase text-white`} >
                                    {data?.email[0]}
                                </div>
                                <p className="!text-white !font-semibold">{data?.phone}</p>
                            </div>
                            <div className="md:mr-10 ml-5 md:ml-0 sm:block hidden">
                                {data?.cartProducts.map((product, index) => (
                                    <div key={index}>
                                        <p className="!text-white">{product?.title}</p>
                                    </div>
                                ))}
                                
                            </div>
                            <div className="sm:block hidden">
                                <div className="!text-white !font-bold"> 
                                    <p className="!text-white !font-semibold">{dbTimeForCustomer(data.createdAt)}</p>
                                </div>
                            </div>
                            <div className="sm:text-start text-center">
                                <div className="!text-white !font-bold"> 
                                    <p className=" !text-white !font-bold">
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
            </div>
        </div>
    )
}

export default OrderList