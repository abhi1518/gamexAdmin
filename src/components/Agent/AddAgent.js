import React, { useEffect, useState } from 'react'
import Sidebar from '../comman/Sidebar';
import Header from '../comman/Header';
import { registerAgent } from '../../api';
import Modal from 'react-modal';

function AddAgent() {
    const [formData, setFormData] = useState({
        userName: '',
    });

    const [errors, setErrors] = useState({
        userName: '',
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
            const result = await registerAgent(formData);
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
                                    <h1 className="h3 mb-0 text-gray-800">Add Agent</h1>
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
                    <h2>Agent Added Successful</h2>
                    {/* <p>Show your success message here.</p> */}
                    <button className='mt-4' onClick={() => setModalOpen(false)}>Ok</button>
                </Modal>
            </body>
    </div>
  )
}

export default AddAgent