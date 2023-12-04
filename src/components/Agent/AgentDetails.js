import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../comman/Sidebar';
import Header from '../comman/Header';
import '../dashboard/Dashboard.css';
import { Link } from 'react-router-dom';
import { getAgentByUsername, blockAgent, unblockAgent } from "../../api";


function AgentDetails() {
    const { userName } = useParams();
    const [phoneNo, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [userNa, setUserName] = useState("");
    const [isBlocked, setIsBlocked] = useState(false);

    const handlegetAgentUsername = async (userName) => {
        try {
            const result = await getAgentByUsername(userName);
            console.log(result);
            const user = result.data;
            setPhoneNumber(user?.phoneNumber);
            setFirstName(user?.firstName);
            setLastName(user?.lastName);
            setPassword(user?.password);
            setUserName(user?.userName);
            setIsBlocked(user?.agentBlocked);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const handleToggleBlockAgent = async () => {
        try {
            if (isBlocked) {
                await unblockAgent(userName);
            } else {
                await blockAgent(userName);
            }
            // Toggle the state
            setIsBlocked(!isBlocked);
        } catch (error) {
            console.error('Error toggling user block status:', error);
        }
    };

    useEffect(() => {
        handlegetAgentUsername(userName);
    }, []);
  return (
    <div>
        <body id="page-top">
                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">
                    {/*  <!-- Sidebar --> */}
                    <Sidebar />
                    {/*  <!-- End of Sidebar --> */}
                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        {/*  <!-- Main Content --> */}
                        <div id="content">
                            {/*  <!-- Topbar --> */}
                            <Header />
                            {/*  <!-- End of Topbar --> */}
                            {/* <!-- Begin Page Content --> */}
                            <div className="container">
                                {/*   <!-- Content Row --> */}
                                <div className="row">
                                    {/*   <!-- Content Column --> */}
                                    <div className='col-lg-12 mb-4 col-sm-12'>
                                        <div className="table-container" style={{ overflowX: 'auto' }}>
                                            <div className="row">
                                                <div className="col">
                                                    <h5 className="pb-2 mb-0">Agent Details</h5>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="">
                                                {/* Conditionally render each piece of information */}
                                                {firstName && <p><b>First Name :</b> {firstName}</p>}
                                                {lastName && <p><b>Last Name :</b> {lastName}</p>}
                                                {userNa && <p><b>User Name :</b> {userNa}</p>}
                                                {phoneNo && <p><b>Phone No. :</b> {phoneNo}</p>}
                                                {password && <p><b>Password :</b> {password}</p>}
                                                <button
                                                    type="button"
                                                    className={`btn ${isBlocked ? 'btn-success' : 'btn-danger'} mx-5 px-5`}
                                                    onClick={handleToggleBlockAgent}
                                                >
                                                    {isBlocked ? 'Unblock' : 'Block'}
                                                </button>
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
                <Link className="scroll-to-top rounded" to="#page-top">
                    <i className="fas fa-angle-up"></i>
                </Link>
            </body>
    </div>
  )
}

export default AgentDetails