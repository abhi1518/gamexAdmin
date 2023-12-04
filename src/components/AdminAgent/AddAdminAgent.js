import React, { useState } from 'react';
import Sidebar from '../comman/Sidebar';
import Header from '../comman/Header';
import { registerAdminAgent } from '../../api';
import Modal from 'react-modal';

function AddAdminAgent() {
    const [formData, setFormData] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        phoneNo: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        phoneNo: '',
        password: '',
    });

    const [isModalOpen, setModalOpen] = useState(false);

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        // Validate user name
        if (formData.userName.trim() === '') {
            newErrors.userName = 'User name is required';
            valid = false;
        } else {
            newErrors.userName = '';
        }

        // Validate first name
        if (formData.firstName.trim() === '') {
            newErrors.firstName = 'First name is required';
            valid = false;
        } else {
            newErrors.firstName = '';
        }

        // Validate last name
        if (formData.lastName.trim() === '') {
            newErrors.lastName = 'Last name is required';
            valid = false;
        } else {
            newErrors.lastName = '';
        }

        // Validate phone number
        if (formData.phoneNo.trim() === '') {
            newErrors.phoneNo = 'Phone number is required';
            valid = false;
        } else {
            newErrors.phoneNo = '';
        }

        // Validate password
        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required';
            valid = false;
        } else {
            newErrors.password = '';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Proceed with form submission
            handleRegister();
            console.log('Form submitted:', formData);
        } else {
            console.log('Form has validation errors');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = async () => {
        try {
            const result = await registerAdminAgent(formData);
            // console.log(result);
            setModalOpen(true);
        } catch (error) {
            console.error('Error during registration:', error.message);
        }
    };

    return (
        <div>
            <body id="page-top">
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Header />
                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Add Admin Agent</h1>
                                </div>
                                <div className="row">
                                    <div className='col-lg-12 mb-4'>
                                        <form className="login-form" onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formUserName">User Name</label>
                                                <input
                                                    type="text"
                                                    id="formUserName"
                                                    className={`form-control form-control-lg ${errors.userName && 'is-invalid'}`}
                                                    placeholder="Enter a user name"
                                                    name="userName"
                                                    value={formData.userName}
                                                    onChange={handleChange}
                                                />
                                                {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formFirstName">First Name</label>
                                                <input
                                                    type="text"
                                                    id="formFirstName"
                                                    className={`form-control form-control-lg ${errors.firstName && 'is-invalid'}`}
                                                    placeholder="Enter a first name"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                />
                                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formLastName">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="formLastName"
                                                    className={`form-control form-control-lg ${errors.lastName && 'is-invalid'}`}
                                                    placeholder="Enter a last name"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                />
                                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formPhoneNo">Phone No.</label>
                                                <input
                                                    type="text"
                                                    id="formPhoneNo"
                                                    className={`form-control form-control-lg ${errors.phoneNo && 'is-invalid'}`}
                                                    placeholder="Enter a phone no."
                                                    name="phoneNo"
                                                    value={formData.phoneNo}
                                                    onChange={handleChange}
                                                />
                                                {errors.phoneNo && <div className="invalid-feedback">{errors.phoneNo}</div>}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formPassword">Password</label>
                                                <input
                                                    type="password"
                                                    id="formPassword"
                                                    className={`form-control form-control-lg ${errors.password && 'is-invalid'}`}
                                                    placeholder="Enter a password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                            </div>
                                            <div className="text-center text-lg-start mt-4 pt-2">
                                                <button type="submit" className="btn btn-primary btn-lg">Proceed</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2023</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setModalOpen(false)}
                    contentLabel="Example Modal"
                    style={{
                        overlay: {
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        },
                        content: {
                          height: '200px', // Adjust the height as needed
                          width: '300px',  // Adjust the width as needed
                          margin: 'auto',  // Center the modal horizontally
                        },
                      }}
                >
                    <h2>Admin Agent Added Successful</h2>
                    {/* <p>Show your success message here.</p> */}
                    <button className='mt-4' onClick={() => setModalOpen(false)}>Ok</button>
                </Modal>
            </body>
        </div>
    );
}

export default AddAdminAgent;
