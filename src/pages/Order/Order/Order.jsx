import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [menu] = useMenu()
    console.log(menu);

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabindex, setTabindex] = useState(initialIndex);

    console.log(category);

    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    // console.log(salad);
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div>
            <Cover img={orderCoverImg} title={'Order Now'} ></Cover>

            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

            {/* <FoodCard></FoodCard> */}
        </div>
    );
};

export default Order;