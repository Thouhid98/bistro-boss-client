import { useLoaderData } from "react-router-dom";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";

const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item);
    return (
        <div>
            <Sectiontitle heading='Update Items' subHeading='---Refresh Info---'></Sectiontitle>
        </div>
    );
};

export default UpdateItem;