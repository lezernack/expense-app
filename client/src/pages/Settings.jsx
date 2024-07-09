//STYLES
import styles from ".../styles/settingsComponents/Settings.modules.scss";

//COMPONENTS
import { Title } from "../components/Titles/Titles";
import MainContainer from "../components/Containers/MainContainer.jsx";

//UTILS
import { useUserUpdatePassword } from "../queries/user.js";
import { useState } from "react";
import { queryClient } from "../constants/config.js";

const Settings = () => {
  const {
    mutate: UpdatePassword,
    isError,
    error,
    isLoading,
  } = useUserUpdatePassword();

  const [oldPw, setOldPw] = useState();
  const [newPw, setNewPw] = useState();

  let body = {
    oldPassword: oldPw,
    newPassword: newPw,
  };

  return (
    <MainContainer>
      <Title>Settings</Title>
      <form action="submit" onSubmit={(e) => e.preventDefault}>
        <div className={styles.container}>
          {/* OLD PW */}
          <div className={styles.password}>
            <Label htmlFor="oldPassword">Current Password :</Label>
            <input
              type="password"
              name="password"
              value={oldPw}
              autoComplete="current-password"
              onChange={(e) => setOldPw(e.target.value)}
            />
          </div>
          <div className={styles.password}>
            {/* NEW PW */}
            <label htmlFor="newPassword">New Password :</label>
            <input
              type="password"
              name="password"
              value={newPw}
              autoComplete="new-password"
              onChange={(e) => setNewPw(e.target.value)}
            />
          </div>
          <button
            onClick={() =>
              UpdatePassword(body, {
                onSuccess: () => {
                  queryClient.invalidateQueries("user");
                  queryClient.removeQueries();
                },
              })
            }
          >
            {isLoading ? "Loading" : "Change Password"}
          </button>
        </div>
        {isError && (
          <div style={{ marginTop: "1rem", color: "red" }}>
            {error.response.data}
          </div>
        )}
      </form>
    </MainContainer>
  );
};

export default Settings;
