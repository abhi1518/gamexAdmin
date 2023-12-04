import React, { useEffect, useState } from 'react'
import Sidebar from '../comman/Sidebar';
import Header from '../comman/Header';
import { Link } from 'react-router-dom';
import { getAllAgent, blockAgent, unblockAgent } from "../../api";

function AllAgent() {
    const [userData, setUserData] = useState([]);

    const handleAllAgent = async (event) => {
      try {
        const result = await getAllAgent();
        console.log(result.data);
        setUserData(result.data);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    };
  
    const handleUnblockAgent = async (username) => {
      try {
        await unblockAgent(username);
        window.location.reload();
      } catch (error) {
        console.error('Error blocking user:', error);
      }
    };
  
    const handleBlockAgent = async (username) => {
      try {
        await blockAgent(username);
        window.location.reload();
      } catch (error) {
        console.error('Error blocking user:', error);
      }
    };
  
  
    useEffect(() => {
      handleAllAgent();
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
                                                    <h5 className="pb-2 mb-0">All Agent List</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex text-muted">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Agent User Name</th>
                                                            {/* <th>Name</th> */}
                                                            <th>Phone No.</th>
                                                            {/* <th>Balance</th> */}
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {userData.map((row) => (
                                                            <tr key={row.id}>
                                                                <td><Link to={`/agent-details/${row.userName}`}>{row.userName}</Link></td>
                                                                <td>{row.phoneNumber}</td>
                                                                <td>{row.agentBlocked ? (
                                                                    <button type="button" className="btn btn-success" onClick={() => handleUnblockAgent(row.userName)}>
                                                                        Unblock
                                                                    </button>
                                                                ) : (
                                                                    <button type="button" className="btn btn-danger" onClick={() => handleBlockAgent(row.userName)}>
                                                                        Block
                                                                    </button>
                                                                )}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* <nav
  className="table-bottom-center-pagination"
  aria-label="Page navigation example "
>
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        1
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        2
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav> */}
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
            </body>
        </div>
    )
}

export default AllAgent