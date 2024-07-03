import React, { useState, useEffect } from 'react';
import '../screens/Profile.css';

function Profile() {
    const [userData, setUserData] = useState({
        fullname: '',
        gmail: '',
        gender: '',
        birthday: '',
        phone: '',
        address: ''
    });

    const storedUsername = localStorage.getItem('username');
    const token = localStorage.getItem('accessToken');
    useEffect(() => {
        if (storedUsername) {
            fetchUserData(storedUsername);
        }
    }, [storedUsername]);

    const fetchUserData = async (username) => {
        try {
            const response = await fetch(`http://localhost:9999/users/${username}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div>
            <div className="container-xl px-4 mt-4">
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
                                    <p className="form-control">{userData.fullname}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Email address</label>
                                    <p className="form-control">{userData.gmail}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Gender</label>
                                    <p className="form-control">{userData.gender}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Birthday</label>
                                    <p className="form-control">{userData.birthday}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Phone number</label>
                                    <p className="form-control">{userData.phone}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1">Address</label>
                                    <p className="form-control">{userData.address}</p>
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