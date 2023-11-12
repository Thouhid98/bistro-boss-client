import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import manuImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import Sectiontitle from '../../components/Sectiontitle/Sectiontitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
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
            <MenuCategory items={offered} ></MenuCategory>
        </div>
    );
};

export default Menu;