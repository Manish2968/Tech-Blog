
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allUser, deleteUser, editProfile, getUserById } from "../../../Redux/User/Auth/Action";

const AdminPanel = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);
  
  

  useEffect(() => {
   if(users.length == 0)
   {
      allUser()
      .then((user)=>{
        setUsers(user);
        setShowModal(true);
      })
      .catch((error)=>{
         console.log("error ",error);
      })
   }
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const newSearchUser = users.filter((user) =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setUsers(newSearchUser);
  };

  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      (deleteUser(id)).then((data) => {
        setUsers(data);
      });
    }
  };

  const handleView=(id)=>{
      getUserById(id)
      .then((user)=>{
        setModalData(user);
        editProfile(id)
        .then((result)=>{
          console.log("in the edit profile");

        })
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return (
    <div>
      <h1>All Users</h1>
      <form className="d-flex" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          className="form-control my-2"
          placeholder="Search Contact"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="btn btn-info mx-2">
          Search
        </button>
      </form>
      <p>
        Your Total Contacts: <strong>{users.length}</strong>
      </p>
      <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={(user.id)}>
              <th scope="row">{user.name}</th>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <Link
                  className="btn btn-info"
                  onClick={() => {
                    setModalData(user);
                    setShowModal(true);
                  }}
                >
                  View
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteContact((user.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{modalData.name}</h3>
          <p>
            <strong>Email</strong>: {modalData.email}
          </p>
          <p>
            <strong>Phone</strong>: {modalData.mobile}
          </p>
          <p>
            <strong>Gender</strong>: {modalData.gender}
          </p>
        </Modal.Body>
        <Modal.Footer>
        
          <button
            className="btn btn-danger"
            onClick={() => deleteContact((2))}
          >
            Delete
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPanel;


