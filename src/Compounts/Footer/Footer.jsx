import React from 'react';
import './Footer.css';
import 'react-toastify/dist/ReactToastify.css'; // Correct import for toast styles
import { ToastContainer, toast } from 'react-toastify';

function Footer() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const Name = formData.get('Name');
        const Phone_number = formData.get('Phone_number');
        const Message = formData.get('Message');

        // Validate fields
        if (!Name || !Phone_number || !Message) {
            if (!Name) {
                toast.error('Enter your name');
            }
            if (!Phone_number) {
                toast.error("Phone number is required!");
            }
            if (!Message) {
                toast.error("Message is required!");
            }
            return;
        }

        // Sending loader
        toast.success(setResult("Sending...."));
        toast.info("Sending...");

        // Append additional data
        formData.append("access_key", "6559fa33-68bd-4f9a-8a4a-36583fd11d47");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        // Show success or error based on response
        if (data.success) {
            setResult("Form Submitted Successfully");
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.error("Error", data);
            setResult(data.message);
            toast.error(data.message || "Submission failed");
        }
    };

    return (
        <div>
            <ToastContainer /> {/* Place ToastContainer here */}
            <footer>
                <div className="row">
                    <div className="col-sm-6 col-md-4 footer-navigation">
                        <h3><a href="#">FARM-<span>MART</span></a></h3>
                        <p className="links">
                            <a href="#">Home</a> <strong> · </strong>
                            <a href="#">Blog</a> <strong> · </strong>
                            <a href="#">Pricing</a> <strong> · </strong>
                            <a href="#">About</a> <strong> · </strong>
                            <a href="#">Faq</a> <strong> · </strong>
                            <a href="#">Contact</a>
                        </p>
                        <p className="company-name">FARM-MART © 2024</p>
                    </div>
                    <div className="col-sm-6 col-md-4 footer-contacts">
                        <div>
                            <span className="fa fa-map-marker footer-contacts-icon"></span>
                            <p><span className="new-line-span">SANGIL</span> MAHARASHTRA, INDIA</p>
                        </div>
                        <div>
                            <i className="fa fa-phone footer-contacts-icon"></i>
                            <p className="footer-center-info email text-left">9022703006</p>
                        </div>
                        <div>
                            <i className="fa fa-envelope footer-contacts-icon"></i>
                            <p><a href="#" target="_blank" className='email1'>farmmart69@company.com</a></p>
                        </div>
                    </div>
                    <div className="col-md-4 footer-about">
                        <h2>Any Question?</h2>
                        <div>
                            <form onSubmit={onSubmit}>
                                <input className='input1' type="text" placeholder='Enter your Name:' name='Name' />
                                <input className='input1' type="number" placeholder='Enter a Phone Number:' name='Phone_number' />
                                <textarea placeholder='Any Message' name='Message' />
                                <button className='button12' name='submit'>Submit</button>
                                <div>
                                    <span>{result}</span>
                                </div>
                            </form>
                        </div>
                        <div className="social-links social-icons">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;