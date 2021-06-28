import Siderbar from './layout/Siderbar'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

const Dashboard = () => {
  return (
    <div className="g-sidenav-show bg-gray-100 min-vw-100">
      <Siderbar />
      <main className="main-content mt-1 border-radius-lg">
        <Navbar />
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-mb-8">
              <div className="card">
                <div className="card-body py-3">
                  Hello World!!
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Dashboard;
