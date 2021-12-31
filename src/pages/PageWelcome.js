import { useContext } from "react";
import AppContext from "../AppContext";

const PageWelcome = () => {
  const { currentUser, currentUserIsInGroup } = useContext(AppContext);
  return (
    <div>

      <div>
        {currentUserIsInGroup("loggedOutUsers") && (
          <div className="panel">Welcome to this site.</div>
        )}
        {currentUser.username && (
          <h2>
            Current User: {currentUser.firstName} {currentUser.lastName}
          </h2>
        )}

        {currentUserIsInGroup("members") && (
          <div className="panel">
            <h3>Current Site News for Members</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              explicabo voluptate quia asperiores sit! Vel molestiae labore
              ratione non dolores? Exercitationem soluta quo id laboriosam,
              autem perferendis? Fuga, suscipit ipsa.
            </p>
          </div>
        )}

        {currentUserIsInGroup("notApprovedUsers") && (
          <div className="panel">
            <h3>Thank you for registering!</h3>
            An administrator will approve your account as soon as possible.
          </div>
        )}
      </div>
    </div>
  );
};

export default PageWelcome;
