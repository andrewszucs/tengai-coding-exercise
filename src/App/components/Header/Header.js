import React from "react";
import { useAppState } from "../../hooks";

function Header() {
  const { account } = useAppState();
  return <div>Header, {JSON.stringify(account)}</div>;
}

export default Header;
