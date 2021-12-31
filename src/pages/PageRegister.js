import { useContext, useState } from "react";
import AppContext from "../AppContext";
import { useNavigate } from "react-router";

const PageRegister = () => {
  const { setCurrentUser, currentUserIsInGroup } = useContext(AppContext);
  const navigate = useNavigate();

  const [userNameRegister, setUserNameRegister] = useState("");
  const [firstNameRegister, setFirstNameRegister] = useState("");
  const [secondNameRegister, setSecondNameRegister] = useState("");
  const [emailRegister1, setEmailRegister1] = useState("");
  const [emailRegister2, setEmailRegister2] = useState("");
  const [passwordRegister1, setPasswordRegister1] = useState("");
  const [passwordRegister2, setPasswordRegister2] = useState("");

  const handleFirstNameRegister = (e) => {
    const firstNameRegister = e.target.value;
    setFirstNameRegister(firstNameRegister);
  };

  const handleSecondNameRegister = (e) => {
    const secondNameRegister = e.target.value;
    setSecondNameRegister(secondNameRegister);
  };
  const handleUserNameRegister = (e) => {
    const userNameRegister = e.target.value;
    setUserNameRegister(userNameRegister);
  };
  const handleEmailRegister1 = (e) => {
    const emailRegister1 = e.target.value;
    setEmailRegister1(emailRegister1);
  };

  const handleEmailRegister2 = (e) => {
    const emailRegister2 = e.target.value;
    setEmailRegister2(emailRegister2);
  };

  const handlePasswordRegister1 = (e) => {
    const passwordRegister1 = e.target.value;
    setPasswordRegister1(passwordRegister1);
  };

  const handlePasswordRegister2 = (e) => {
    const passwordRegister2 = e.target.value;
    setPasswordRegister2(passwordRegister2);
  };

  const handleRegisterButton = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          username: userNameRegister,
          firstName: firstNameRegister,
          lastName: secondNameRegister,
          email1: emailRegister1,
          email2: emailRegister2,
          password1: passwordRegister1,
          password2: passwordRegister2,
        },
      }),
    };

    const response = await fetch(
      "http://localhost:3003/createuser",
      requestOptions
    );
    if (response.ok) {
      const _currentUser = await response.json();
      setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
      setUserNameRegister("");
      setFirstNameRegister("");
      setSecondNameRegister("");
      setEmailRegister1("");
      setEmailRegister2("");
      setPasswordRegister1("");
      setPasswordRegister2("");
      navigate("/");
    }
  };

  return (
    <div>
      {currentUserIsInGroup("loggedOutUsers") && (
        <form>
          <fieldset>
            <legend>Register</legend>
            <div></div>
            <div className="row">
              <label htmlFor="firstname">Name</label>
              <input
                type="text"
                id="firstNameRegister"
                value={firstNameRegister}
                onChange={handleFirstNameRegister}
                placeholder="Enter your firstname"
              />
            </div>
            <div className="row">
              <label htmlFor="secondname"></label>
              <input
                type="text"
                id="secondNameRegister"
                value={secondNameRegister}
                onChange={handleSecondNameRegister}
                placeholder="Enter your lastname"
              />
            </div>
            <div className="row">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="username"
                value={userNameRegister}
                onChange={handleUserNameRegister}
                placeholder="Enter your username *"
              />
            </div>

            <div className="row">
              <label htmlFor="emailRegister1">Email</label>
              <input
                type="text"
                id="emailregister1"
                value={emailRegister1}
                onChange={handleEmailRegister1}
                placeholder="Enter your email *"
              />
            </div>
            <div className="row">
              <label htmlFor="emailRegister2"></label>
              <input
                type="text"
                id="emailregister2"
                value={emailRegister2}
                onChange={handleEmailRegister2}
                placeholder="Enter your email again *"
              />
            </div>
            <div className="row">
              <label htmlFor="password">Password1</label>
              <input
                type="password"
                id="passwordRegister1"
                value={passwordRegister1}
                onChange={handlePasswordRegister1}
                placeholder="Enter your password *"
              />
            </div>
            <div className="row">
              <label htmlFor="password">Password2</label>
              <input
                type="password"
                id="passwordRegister2"
                value={passwordRegister2}
                onChange={handlePasswordRegister2}
                placeholder="Your password same like the first one *"
              />
            </div>
            <div className="buttonRow">
              <button onClick={handleRegisterButton}>Register</button>
              <div className="buttonRow">
                <button>Reset</button>
              </div>
            </div>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default PageRegister;
