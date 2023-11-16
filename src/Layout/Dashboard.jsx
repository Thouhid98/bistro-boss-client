import Cart from '../pages/Dashboard/Cart/Cart';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
        <div className='flex'>
            <div className='w-64 min-h-full bg-[#D99904]'>
                <ul className='menu p-4'>
                    <li>
                        <NavLink to='/dashboard/userHome'>
                         User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'>
                        
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                             My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            Reviews </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                             My Bookings</NavLink>
                    </li>
                    <div className='divider'></div>

                    <li>
                        <NavLink to='/'>
                         Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                         Menu</NavLink>
                    </li>
                </ul>
            </div>

            <div className='flex-1 p-6'>
                <Cart></Cart>
                <Outlet></Outlet>
                
            </div>
        </div>
        </>
    );
};

export default Dashboard;