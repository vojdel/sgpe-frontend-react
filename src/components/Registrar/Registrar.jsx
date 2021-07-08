import NavRegistrar from './NavRegistrar'
import FooterRegistrar from './FooterRegistrar.jsx'

const Registrar = () => (
  <div className="bg-gray-100">

    <NavRegistrar />

      <section className="h-50-vh mb-4">
        <div className="page-header align-items-start section-height-50 pt-5 pb-11 m-3 border-redius-lg" style={{ backgroundImage: 'url(/img/img3.jpg)' }}>
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                <p className="text-load text-white">Use these awesome forms to login or create new account in your project for free.</p>
              </div>
            </div>
          </div>
        </div>
      <div className="container">
        <div className="row mt-lg-n10 mt-md-n11 mt-n10">
          <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div className="card z-index-0">
              <div className="card-header text-center pt-4">
                <h5>Register with</h5>
              </div>
              <div className="row px-xl-5 px-sm-4 px-3">
                <div className="col-3 ms-auto px-1">
                  <a href="" className="btn btn-outline-light w-100"></a>
                </div>
              </div>
              <div className="card-body">
                <form rolw="form text-left">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" arial-describedby="email-addon" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" arial-describedby="email-addon" />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" arial-describedby="password-addon" />
                  </div>
                  <div className="form-check form-check-info text-left">
                    <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" checked />
                    <label htmlFor="flexCheckDefault" className="form-check-label">
                      I agree the <a href="#" className="text-dark font-weight-bolder">Terms and Conditions</a>
                    </label>
                  </div>
                  <div className="text-center">
                    <button className="btn bg-gradient-dark w-100 my-4 mb-2">Sign Up</button>
                  </div>
                  <p className="text-sm mt-3 mb-0">
                    Already have an account? <a href="#" className="text-dark font-weight-bolder">Sign in</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterRegistrar />

  </div>
)
export default Registrar
