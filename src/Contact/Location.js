import "./Location.css"
const Location=()=>{
    return(
        <>
            <div className="container location-map">
                <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112113.14831042667!2d77.23833489106983!3d28.583696305714234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719902076097!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                <div className="location mt-5">
                    <div className="location1">
                        <h4>Office</h4>
                        <p>205 North Michigan Avenue, Suite 810
                        Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                        <a href="#">View map</a>
                    </div>
                    <div className="location1 pe-2">
                        <h4>Studio</h4>
                        <p>205 North Michigan Avenue, Suite 810
                        Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                        <a href="#">View map</a>
                    </div>
                    <div className="location1 pe-5">
                        <h4>Shop</h4>
                        <p>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                        <a href="#">View Map</a>
                    </div>
                </div>
            </div>
            <hr className="mt-5 mb-5"></hr>
        </>
    )
}
export default Location