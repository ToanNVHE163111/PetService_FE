import React, { useState } from 'react';
import '../style/profile.css';
function Profile() {
    const [fullName, setFullName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('password123');
    const [gender, setGender] = useState('Male');
    const [birthday, setBirthday] = useState('1990-01-01');
    const [phone, setPhone] = useState('123-456-7890');
    const [address, setAddress] = useState('123 Main St, City, Country');

    return (
        <div>
            <div className="container-xl px-4 mt-4">
                <nav className="nav nav-borders">
                    <a className="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
                </nav>
                <hr className="mt-0 mb-4" />
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 d-flex justify-content-center">
                        <div className="card mb-4">
                            <div className="card-header text-center">Account Details</div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="small mb-1">Full Name</label>
                                    <p className="form-control">{fullName}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Email address</label>
                                    <p className="form-control">{email}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Password</label>
                                    <p className="form-control">{password}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Gender</label>
                                    <p className="form-control">{gender}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Birthday</label>
                                    <p className="form-control">{birthday}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Phone number</label>
                                    <p className="form-control">{phone}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Address</label>
                                    <p className="form-control">{address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;