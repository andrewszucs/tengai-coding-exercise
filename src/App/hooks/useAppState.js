import { AppStateContext } from "../contexts";
import { useContext } from "react";

function useAppState() {
  const appState = useContext(AppStateContext);
  return appState;
}

export default useAppState;
