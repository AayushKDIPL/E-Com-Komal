import Product from "./Product";
import "./Products.css"
import Sidemenu from "./Sidemenu";
const Products=()=>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <Sidemenu/>
                    <Product/>
                </div>
            </div>
        </>
    )
}
export default Products;