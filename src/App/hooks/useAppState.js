import { AppStateContext } from "../contexts";
import { useContext } from "react";

function useAppState() {
  const appState = useContext(AppStateContext);
  console.log(appState);
  return appState || {};
}

export default useAppState;
