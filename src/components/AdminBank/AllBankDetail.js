import React, { useEffect, useState } from 'react'
import Sidebar from '../comman/Sidebar';
import Header from '../comman/Header';
import { Link } from 'react-router-dom';
import { getAllBankDetail, deleteAccount, blockBankDetail, unblockBankDetail } from "../../api";

function AllBankDetail() {
    const [bankData, setBankData] = useState([]);
    const handleAllBankDetail = async (event) => {
        try {
            const result = await getAllBankDetail();
            console.log(result.data);
            setBankData(result.data);
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };
    const handleDeleteAccount = async (accountNumber) => {
        try {
            const result = await deleteAccount(accountNumber);
            console.log(result);
            window.location.reload();
        } catch (error) {
            console.error('Error during account deletion:', error.message);
        }
    };
    const handleUnblockBankAccount = async (bankAccountNumber) => {
        try {
            await unblockBankDetail(bankAccountNumber);
            window.location.reload();
        } catch (error) {
            console.error('Error blocking user:', error);
        }
    };
    const handleBlockBankAccount = async (bankAccountNumber) => {
        try {
            await blockBankDetail(bankAccountNumber);
            window.location.reload();
        } catch (error) {
            console.error('Error blocking user:', error);
        }
    };
    useEffect(() => {
        handleAllBankDetail();
    }, []);
    return (
        <div>
            <body id="page-top">
                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">
                    {/*  <!-- Sidebar --> */}
                    <Sidebar />
                    {/*  <!-- End of Sidebar --> */}=
                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        {/*  <!-- Main Content --> */}
                        <div id="content">
                            {/*  <!-- Topbar --> */}
                            <Header />
                            {/*  <!-- End of Topbar --> */}
                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">
                                {/*   <!-- Content Row --> */}
                                <div className="row">
                                    {/*   <!-- Content Column --> */}
                                    <div className='col-lg-12 mb-4'>
                                        <div className="table-container" style={{ overflowX: 'auto' }}>
                                            <div className="row">
                                                <div className="col">
                                                    <h5 className="pb-2 mb-0">All Bank List</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex text-muted">
                                                <table className="table">
                                                    <thead>
                                                        <tr>                                                            
                                                            {/* <th>Name</th> */}
                                                            <th>Account No.</th>
                                                            <th>Bank Name</th>
                                                            <th>Account Holder Name</th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {bankData.map((row) => (
                                                            <tr key={row.id}>
                                                                <td><Link to={`/admin-bank-details/${row.bankAccountNumber}`}>{row.bankAccountNumber}</Link></td>
                                                                <td>{row.bankName}</td>
                                                                {/* <td>{row.bankAccountNumber}</td> */}
                                                                <td>{row.accountHolderName}</td>
                                                                <td>
                                                                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteAccount(row.bankAccountNumber)}>
                                                                        Delete
                                                                    </button>
                                                                </td>
                                                                <td>{row.active ? (
                                                                    <button type="button" className="btn btn-success" onClick={() => handleUnblockBankAccount(row.bankAccountNumber)}>
                                                                        Active
                                                                    </button>
                                                                ) : (
                                                                    <button type="button" className="btn btn-danger" onClick={() => handleBlockBankAccount(row.bankAccountNumber)}>
                                                                        Unactive
                                                                    </button>
                                                                )}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*   <!-- /.container-fluid --> */}
                        </div>
                        {/*   <!-- End of Main Content -->
                        <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2023</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}
                    </div>
                    {/*  <!-- End of Content Wrapper --> */}
                </div>
                {/*  <!-- End of Page Wrapper -->
                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </body >
        </div >
    )
}

export default AllBankDetail