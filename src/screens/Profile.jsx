import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import EditProfile from "./EditProfile"; // Import EditProfile component
import "../style/profile.css";

function Profile() {
  const [profile, setProfile] = useState({});
  const [dataEdit, setDataEdit] = useState(null);
  const [editVisible, setEditVisible] = useState(false);
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetch(`http://localhost:9999/users/${username}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [username]);

  const handleEditProfile = () => {
    setDataEdit(profile);
    setEditVisible(true);
  };

  const handleUpdateProfile = (id, updatedData) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      ...updatedData
    }));
  };

  return (
    <div>
      <div className="container-xl px-4 mt-4">
        <nav className="nav nav-borders">
          <a
            className="nav-link active ms-0"
            href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details"
            target="__blank"
          >
            Profile
          </a>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="mt-4 text-center" style={{ marginLeft: "100px" }}>
              <Button onClick={handleEditProfile}>Edit Profile</Button>
            </div>
          </div>
          <div className="col-xl-8 d-flex justify-content-center">
            <div className="card mb-4">
              <div className="card-header text-center">Account Details</div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="small mb-1">Full Name</label>
                  <p className="form-control">{profile.fullname}</p>
                </div>
                <div className="mb-3">
                  <label className="small mb-1">Email address</label>
                  <p className="form-control">{profile.gmail}</p>
                </div>
                <div className="mb-3">
                  <label className="small mb-1">Gender</label>
                  <p className="form-control">{profile.gender}</p>
                </div>
                <div className="mb-3">
                  <label className="small mb-1">Birthday</label>
                  <p className="form-control">{profile.birthday}</p>
                </div>
                <div className="mb-3">
                  <label className="small mb-1">Phone number</label>
                  <p className="form-control">{profile.phone}</p>
                </div>
                <div className="mb-3">
                  <label className="small mb-1">Address</label>
                  <p className="form-control">{profile.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {editVisible && (
        <EditProfile
          editVisible={editVisible}
          setEditVisible={setEditVisible}
          data={dataEdit}
          onUpdate={handleUpdateProfile}
        />
      )}
    </div>
  );
}

export default Profile;
