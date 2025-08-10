import React, { useState, useRef } from 'react';
import './Profile.css';

const Profile = () => {
  const [images, setImages] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImages(file);
    }
  };

  return (
    <div className="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top" style={{marginLeft:"2%" , width:"210%"}}>
          <div className="container-fluid">
            <button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button">
              <i className="fas fa-bars"></i>
            </button>
            <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                <div className="input-group-append">
                  <button className="btn btn-primary py-0" type="button">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    
                  </button>
                </div>
              </div>
            </form>

              <div className="d-none d-sm-block topbar-divider"></div>
              <li className="nav-item dropdown no-arrow">
                <div className="nav-item dropdown no-arrow">
                  <a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">
                    <span className="d-none d-lg-inline mr-2 text-gray-600 small">Prathmesh`</span>
                    <img className="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg" alt="Profile" />
                  </a>
                </div>
                </li>
          </div>
        </nav>

        <div className="container-fluid" style={{marginLeft:"2%" , width:"210%"}}>
          <h3 className="text-dark mb-4">Profile</h3>
          <div className="row mb-3">
            <div className="col-lg-4">
              <div className="card mb-3">
                <div className="card-body text-center shadow">
                  <img
                    className="rounded-circle mb-3 mt-4 "
                    src={images ? URL.createObjectURL(images) : 'https://via.placeholder.com/200'}
                  
                    width="200"
                    height="200"
                    alt="Profile"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <div className="mb-3">
                    <button
                      className="btn btn-primary btn-sm"
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                    >
                      Change Photo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card shadow mb-3">
                <div className="card-header py-3">
                  <p className="text-primary m-0 font-weight-bold">User Settings</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="username"><strong>Username</strong></label>
                          <input className="form-control" type="text" placeholder="user.name" name="username" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="email"><strong>Email Address</strong></label>
                          <input className="form-control" type="email" placeholder="user@example.com" name="email" />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="first_name"><strong>First Name</strong></label>
                          <input className="form-control" type="text" placeholder="John" name="first_name" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="last_name"><strong>Last Name</strong></label>
                          <input className="form-control" type="text" placeholder="Doe" name="last_name" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-sm" type="submit">Save Settings</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card shadow mb-3">
                <div className="card-header py-3">
                  <p className="text-primary m-0 font-weight-bold">Contact Settings</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="address"><strong>Address</strong></label>
                      <input className="form-control" type="text" placeholder="Sunset Blvd, 38" name="address" />
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="city"><strong>City</strong></label>
                          <input className="form-control" type="text" placeholder="Los Angeles" name="city" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="country"><strong>Country</strong></label>
                          <input className="form-control" type="text" placeholder="USA" name="country" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-sm" type="submit">Save Settings</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card shadow mb-5">
                <div className="card-header py-3">
                  <p className="text-primary m-0 font-weight-bold">Forum Settings</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="signature"><strong>Signature</strong></label>
                      <textarea className="form-control" rows="4" name="signature"></textarea>
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-switch">
                        <input className="custom-control-input" type="checkbox" id="formCheck-1" />
                        <label className="custom-control-label" htmlFor="formCheck-1">
                          <strong>Notify me about new replies</strong>
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-sm" type="submit">Save Settings</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
