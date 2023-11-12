import Sectiontitle from '../../../components/Sectiontitle/Sectiontitle';
import Menuitem from '../../Shared/Menuitem/Menuitem';
import useMenu from '../../../hooks/useMenu';

const Popularmanu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems);
    //     })
    // }, [])

    return (
        <div className='mb-16 mt-16 mr-2'>
            <Sectiontitle 
            heading={'From Our Manu'} 
            subHeading={'---Popular Items---'}
            >
            </Sectiontitle>

            <div className='grid md:grid-cols-2 gap-8 mt-10'>
                {
                    popular.map(item =><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
            <button className="btn text-center btn-outline btn-warning border-0 border-b-4">View Full Menu</button>
        </div>
    );
};

export default Popularmanu;