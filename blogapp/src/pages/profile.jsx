import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";

function Profile() {
  const style = {
    profile: "text-3xl font-semibold tracking-wide mt-6",
    username: "font-medium text-gray-500 my-2",
    email: "text-sm text-gray-500 mb-6",
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }

  if (!user) return null;
  return (
    <div>
      <h1 className={style.profile}>Profile</h1>
      <h1 className={style.username}>Username: {user.username}</h1>
      <p className={style.email}>Email: {user.attributes.email}</p>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Profile);
