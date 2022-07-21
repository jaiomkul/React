import { useParams } from "react-router-dom"

export const UserData = () => {

    const { id } = useParams();
    return (
        <div>
            <h1>User Id: { id }</h1>
        </div>
    );
};