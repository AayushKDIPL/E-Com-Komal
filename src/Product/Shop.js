import Product from "../Product"
import Sidemenu from "../Sidemenu"
import "./Shop.css"
const Shop=()=>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <Product/>
                    <Sidemenu/>
                </div>
            </div>
        </>
    )
}
export default Shop