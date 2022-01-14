import { useParams } from "react-router-dom";

// functional Component
const Product = ()=> {
    const {id} = useParams();

    return (
        <div> This is product section. ID: {id}</div>
    )
    
}

export default Product;