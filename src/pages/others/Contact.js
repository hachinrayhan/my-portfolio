import React from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';


const SERVICE_ID = "service_95g3b8f";
const TEMPLATE_ID = "template_21j25xx";
const USER_ID = "YELAFNbkU77HETB1q";

const Contact = () => {
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
        navigate('/');
    };
    return (
        <div className='w-full max-w-sm mx-auto border-solid border-2 rounded-md border-indigo-600 p-8'>
            <form onSubmit={handleOnSubmit}>
                <h2 className='text-3xl font-bold text-start'>Contact Me</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="user_name" placeholder="Your Name" required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="user_email" placeholder="Your Email" required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea name="message" placeholder="Message" required className="textarea textarea-bordered"></textarea>
                </div>
                <input type="submit" value="Send Message" className='btn btn-outline btn-primary mt-4' />
            </form>
        </div>
    );
};

export default Contact;