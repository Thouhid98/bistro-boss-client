import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import manuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import Sectiontitle from '../../components/Sectiontitle/Sectiontitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    console.log(menu);
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
            </Helmet>
            <Cover img={manuImg} title={'Our Menu'}></Cover>
            <div className='mt-5 mb-2'>
            <Sectiontitle subHeading='---Do not Miss---' heading="Today's Offer"></Sectiontitle>
            </div>
            {/* main cover  */}
            <MenuCategory items={offered} ></MenuCategory>
    
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title={'dessert'} img={dessertImg}></MenuCategory>
            {/* pizz  */}
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
            {/* Salad */}
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;