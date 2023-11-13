import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import Menuitem from '../../Shared/Menuitem/Menuitem';

const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-8 mt-10 mb-10'>
                {
                    items.map(item =><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
           <Link to={`/order/${title}`}>
           <button className="btn btn-outline btn-warning border-0 border-b-4">Order Now</button>
           </Link>
        </div>
    );
};

export default MenuCategory;