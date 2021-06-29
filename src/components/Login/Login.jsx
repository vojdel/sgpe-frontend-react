import FooterLogin from './Footerlogin.jsx';
import Nav from './Nav.jsx';

const Login = (  ) => {
  return (
    <div className="position-sticky z-index-sticky top-0">
      <div className="row">
        <div className="col-12">
          
         <Nav /> 

          <section>
            <div className="page-header section-height-75">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-colum mx-auto">
                    <div className="card card-plain mt-8 border-white">
                      <div className="card-header pb-0 text-left bg-transparent border-white">
                        <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                        <p className="mb-0">Escribe tu corre y tu contraseña</p>
                      </div>
                      <div className="card-body">
                        <form role="form text-left">
                          <label>Email</label>
                          <div className="mb-3">
                            <input type="email" name="" id="" className="form-control" placeholder="Email" aria-describedby="password-addon"/>
                          </div>
                          <label>Password</label>
                          <div className="mb-3">
                            <input type="password" name="" id="" className="form-control" placeholder="Password" aria-describedby="password-addon"/>
                          </div>
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="rememberMe" checked="" style={{ width: '40px' }} />
                            <label className="form-check-label" for="rememberMe">Remember me</label>
                            </div>
                            <div className="text-center">
                              <button type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center pt-0 px-lg-2 px-1 border-white">
                        <p className="mb-4 text-sm mx-auto">Don't have an account? <a href="#" className="text-info text-gradient font-weight-bold">Sign up</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                      <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{backgroundImage: "url(/img/img1.jpg)"}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FooterLogin />

        </div>
      </div>
    </div>
  )
}
export default Login
