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
        </div>
    );
};

export default MenuCategory;