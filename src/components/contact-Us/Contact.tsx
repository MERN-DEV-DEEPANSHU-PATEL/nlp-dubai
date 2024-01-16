import "./Contact.scss"

const Contact = () => {
    return(
         <div className="contact-container">
            <h1>Request a call back</h1>
        <div className="">   
             <form className="form-container">
             <div className="card-desktop">    
               <div>
                  <input type="text" placeholder="Name*" className="input-container" />
                   <input type="text" placeholder="Email*" className="input-container" />
                </div >
                <div>
                   <input type="text" placeholder="Phone*" className="input-container" />
                   <input type="text" placeholder="Message*" className="input-container" />
                </div>
            </div>
                
                <button>
                    Submit
                </button>
             </form>
          </div> 
        </div> 
    )
}

export default Contact