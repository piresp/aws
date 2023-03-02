import React from "react";
import { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";
import Link from "next/link";
import "../../../configureAmplify";

export default function Navbar() {
  const style = {
    nav: "flex justify-center pt-3 pb-3 space-x-4 border-b bg-cyan-500 border-gray-300",
    link: "rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slage-100 hover:text-slate-900",
  };

  const [signedUser, setSignedUser] = useState(false);

  useEffect(() => {
    authListener();
  }, []);

  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return setSignedUser(true);
        case "isgnOut":
          return setSignedUser(false);
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      setSignedUser(true);
    } catch (err) {}
  }

  return (
    <nav className={style.nav}>
      {[
        ["Home", "/"],
        ["Create Post", "/create-post"],
        ["Profile", "/profile"],
      ].map(([title, url], index) => (
        <Link legacyBehavior href={url} key={index}>
          <a className={style.link}>{title}</a>
        </Link>
      ))}

      {signedUser && (
        <Link legacyBehavior href="/my-posts">
          <a className={style.link}>My Posts</a>
        </Link>
      )}
    </nav>
  );
}
