import "./Message.css"
const Message=()=>{
    return(
        <>
            <div className="container text-center">
                <div className="message">
                    <h3>Drop Us a Line</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <form className="form">
                        <div className="form-row">
                            <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="form-input"
                            />
                            <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-input"
                            />
                        </div>
                        <div className="form-row">
                            <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            className="form-input"
                            />
                            <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="form-input"
                            />
                        </div>
                        <div className="form-row">
                            <textarea
                            name="message"
                            placeholder="Message"
                            className="form-textarea"
                            />
                        </div>
                    </form>
                    <a className="btn-message mt-4 me-4" href="/">Send Message</a>
                </div>
            </div>
        </>
    )
}
export default Message