import Product from "../Product"
import Sidemenu from "../Sidemenu"
import "./Shop.css"
const Shop=()=>{
    return(
        <>
            <div className="container mt-4">
                <div className="row">
                    <Product/>
                    <Sidemenu/>
                </div>
            </div>
        </>
    )
}
export default Shop