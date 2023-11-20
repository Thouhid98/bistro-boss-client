import useAdmin from '../hooks/useAdmin';
import useCart from '../hooks/useCart';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [cart] = useCart()

    // Get Admin value from database 
    const [isAdmin] = useAdmin()
    
    return (
        <>
            <div className='flex'>
                <div className='w-64 min-h-screen bg-[#D99904]'>
                    <ul className='menu p-4'>
                        {
                            isAdmin ? 
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addItems'>

                                        Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageItems'>
                                        Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        Manage Bookings </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/users'>
                                        All Users</NavLink>
                                </li>
                            </>
                                :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/history">
                                    
                                        Not History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                     
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                       
                                        Real Payment History</NavLink>
                                </li>
                            </>
                        }

                        {/* shared NavLinks  */}
                        <div className='divider'></div>

                        <li>
                            <NavLink to='/'>
                                Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/salad'>
                                Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/salad'>
                                Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='flex-1 p-6'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;