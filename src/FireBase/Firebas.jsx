import React from "react";
import { signInWithCredential, FacebookAuthProvider as FBAuthProvider } from "firebase/auth";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { auth } from "./firebase"; // adjust path if needed

const FacebookLogin = () => {
  const handleLoginSuccess = ({ provider, data }) => {
    const credential = FBAuthProvider.credential(data.accessToken);

    signInWithCredential(auth, credential)
      .then((result) => {
        console.log("Firebase Login Success:", result.user);
        // You can redirect or set user state here
      })
      .catch((error) => {
        console.error("Firebase Auth Error:", error);
      });
  };

  const handleLoginFailure = (err) => {
    console.error("Facebook Login Error:", err);
  };

  return (
    <LoginSocialFacebook
      appId="YOUR_FACEBOOK_APP_ID"
      onResolve={handleLoginSuccess}
      onReject={handleLoginFailure}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
  );
};

export default FacebookLogin;
