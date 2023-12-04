import React, { useEffect, useState } from 'react'
import Sidebar from '../comman/Sidebar';
import Header from '../comman/Header';
import { addAdminBankAccount } from '../../api';
import Modal from 'react-modal';

function AddBankDetail() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        bankName: '',
        branchName: '',
        accountHolderName: '',
        bankAccountNumber: '',
        ifscCode: '',
        qr: null,
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const result = await addAdminBankAccount(formData);
          setModalOpen(true);
        //   console.log(result);
        } catch (error) {
          console.error('Error during registration:', error.message);
        }
      };
    const handleChange = (event) => {
        const { name, value, files } = event.target;
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: name === 'qr' ? files[0] : value, // Updated to handle file input
        }));
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
                                    <h1 className="h3 mb-0 text-gray-800">Add Bank Detail</h1>
                                </div>
                                <div className="row">
                                    <div className='col-lg-12 mb-4'>
                                        <form className="login-form" onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formUserName">Bank Name</label>
                                                <input
                                                    type="text"
                                                    id="formBankName"
                                                    className={`form-control form-control-lg`}
                                                    placeholder="Enter a bank name"
                                                    name="bankName"
                                                    value={formData.bankName}
                                                    onChange={handleChange}
                                                />
                                                {/* {errors.userName && <div className="invalid-feedback">{errors.userName}</div>} */}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formFirstName">Branch Name</label>
                                                <input
                                                    type="text"
                                                    id="formBrtanchName"
                                                    className={`form-control form-control-lg`}
                                                    placeholder="Enter a branch name"
                                                    name="branchName"
                                                    value={formData.branchName}
                                                    onChange={handleChange}
                                                />
                                                {/* {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>} */}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formLastName">Account Holder Name</label>
                                                <input
                                                    type="text"
                                                    id="formAccountHolderName"
                                                    className={`form-control form-control-lg`}
                                                    placeholder="Enter a account holder name"
                                                    name="accountHolderName"
                                                    value={formData.accountHolderName}
                                                    onChange={handleChange}
                                                />
                                                {/* {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>} */}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formPhoneNo">Bank Account No.</label>
                                                <input
                                                    type="text"
                                                    id="formPhoneNo"
                                                    className={`form-control form-control-lg`}
                                                    placeholder="Enter a bank account no."
                                                    name="bankAccountNumber"
                                                    value={formData.bankAccountNumber}
                                                    onChange={handleChange}
                                                />
                                                {/* {errors.phoneNo && <div className="invalid-feedback">{errors.phoneNo}</div>} */}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formPassword">Ifsc code</label>
                                                <input
                                                    type="text"
                                                    id="formIfscCode"
                                                    className={`form-control form-control-lg`}
                                                    placeholder="Enter a ifsc code"
                                                    name="ifscCode"
                                                    value={formData.ifscCode}
                                                    onChange={handleChange}
                                                />
                                                {/* {errors.password && <div className="invalid-feedback">{errors.password}</div>} */}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formQrCode">
                                                    Qr code
                                                </label>
                                                <input
                                                    type="file"
                                                    id="formQrCode"
                                                    className={`form-control form-control-lg`}
                                                    placeholder="Enter a qr code"
                                                    name="qr"
                                                    onChange={handleChange}
                                                />
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
                    <h2>Bank Detail Added Successful</h2>
                    {/* <p>Show your success message here.</p> */}
                    <button className='mt-4' onClick={() => setModalOpen(false)}>Ok</button>
                </Modal>
            </body>
        </div>
    )
}

export default AddBankDetail