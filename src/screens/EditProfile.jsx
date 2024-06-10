import React, { useState } from 'react';
import Header from '../components/Header';
import '../style/editprofile.css';
function EditProfile() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSaveChanges = () => {
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Gender:", gender);
        console.log("Birthday:", birthday);
        console.log("Phone:", phone);
        console.log("Address:", address);
    };

    return (
        <div>
            <div className="container-xl px-4 mt-4">
                <nav className="nav nav-borders">
                    <a className="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Edit Profile</a>
                </nav>
                <hr className="mt-0 mb-4" />
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header">Profile Picture</div>
                            <div className="card-body text-center">
                                <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                <button className="btn btn-primary" type="button">Upload new image</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 d-flex justify-content-center">
                        <div className="card mb-4">
                            <div className="card-header text-center">Account Details</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputFullName">Full Name</label>
                                        <input className="form-control" id="inputFullName" type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputEmail">Email address</label>
                                        <input className="form-control" id="inputEmail" type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                        <input className="form-control" id="inputPassword" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputGender">Gender</label>
                                        <select className="form-control" id="inputGender" value={gender} onChange={(e) => setGender(e.target.value)}>
                                            <option value="">Select your gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                                        <input className="form-control" id="inputBirthday" type="date" placeholder="Enter your birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                        <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputAddress">Address</label>
                                        <input className="form-control" id="inputAddress" type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                    <button className="btn btn-primary" type="button" onClick={handleSaveChanges}>Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;