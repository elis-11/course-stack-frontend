import { useContext, useState, useEffect } from "react";
import AppContext from "../AppContext.js";

const PageAdmin = () => {
  const { currentUserIsInGroup } = useContext(AppContext);

  const [notYetApprovedUsers, setNotYetApprovedUsers] = useState([]);
  const [loadAllUsers1, setLoadAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      loadNotYetApprovedUsers();
    })();
  }, []);

    useEffect(() => {
    (async () => {
      loadAllUsers();
    })();
  }, []);

  const handle_approveUserButton = async (id) => {
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    };
    const response = await fetch(
      "http://localhost:3003/approveuser",
      requestOptions
    );
    if (response.ok) {
      await response.json();
      loadNotYetApprovedUsers();
    }
  };

  const loadNotYetApprovedUsers = async () => {
    const requestOptions = {
      method: "GET",
      credentials: "include",
    };
    const response = await fetch(
      "http://localhost:3003/notyetapprovedusers",
      requestOptions
    );
    if (response.ok) {
      const data = await response.json();
      setNotYetApprovedUsers((prev) => [...data.users]);
    }
  };

  const loadAllUsers = async () => {
    const requestOptions = {
      method: "GET",
      credentials: "include",
    };
    const response = await fetch("http://localhost:3003/username", requestOptions);
    if (response.ok) {
      const data = await response.json();
      setLoadAllUsers((prev) => [...data.users]);
    }
  };

  const handle_deleteuser = async (id) => {
    const response = await fetch("http://localhost:3003/deleteuser", {
      method: "delete",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      loadNotYetApprovedUsers();
    }
  };

  return (
    <div>
      {currentUserIsInGroup("admins") && (
        <div className="panel">
          <h3>Content Editor Section:</h3>
          ShowAllUsers:
           <h4>{loadAllUsers.length} Users</h4>
          <div>
            <button>Edit Welcome Page</button>
          </div>
          <div>
            <button>Create New Page</button>
          </div>
        </div>
      )}

      {currentUserIsInGroup("admins") && (
        <div className="panel">
          <h3>Admin Section:</h3>
          <h4>{notYetApprovedUsers.length} Users to Approve</h4>
          <table className="minimalListBlack">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {notYetApprovedUsers.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.username}</td>
                    <td>
                      <button
                        onClick={() => handle_approveUserButton(user._id)}
                      >
                        Approve
                      </button>
                      <div>
                        <button onClick={() => handle_deleteuser(user._id)}>
                          Delete users
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <button>Create users</button>
          </div>
          <div>
            <button>Edit users</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageAdmin;
