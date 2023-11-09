import React from 'react'
import Sidebar from '../comman/Sidebar';
import Header from '../comman/Header';

function AddPoints() {
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
                            <div className="container-fluid">

                                {/*  <!-- Page Heading --> */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Add Points</h1>

                                </div>

                                {/*   <!-- Content Row --> */}
                                <div className="row">

                                    {/*   <!-- Content Column --> */}
                                    <div className='col-lg-12 mb-4'>
                                        {/* <form className="login-form" onSubmit={handleSubmit}> */}
                                        <form className="login-form" >
                                            {/* <!-- Email input --> */}
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3">Phone No.</label>
                                                {/* <input type="number" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a phone no." value={email} onChange={(e) => setEmail(e.target.value)} /> */}
                                                <input type="number" id="form3Example3" className="form-control form-control-lg"
                                                    placeholder="Enter a phone no." />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3">Points</label>
                                                {/* <input type="number" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a phone no." value={email} onChange={(e) => setEmail(e.target.value)} /> */}
                                                <input type="number" id="form3Example3" className="form-control form-control-lg"
                                                    placeholder="Enter points" />
                                            </div>

                                            {/* <!-- Password input --> */}


                                            <div className="d-flex justify-content-between align-items-center">

                                            </div>

                                            <div className="text-center text-lg-start mt-4 pt-2">
                                                {/* <button type="submit" className="btn btn-primary btn-lg">Proceed</button> */}
                                                <button className="btn btn-primary btn-lg">Proceed</button>

                                            </div>
                                        </form>
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

export default AddPoints