import FoodCard from '../../../components/Sectiontitle/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className='grid lg:grid-cols-4 mb-4'>
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;