import { useReducer } from "react";
import { IslandStates, Action } from "../types";

const initialState: IslandStates = {
  islandDataState: "close",
  startState: false,
  formState: true,
  quickMenuState: true,
  deleteSectionState: true,
  messageState: true,
  message: "",
};

function reducer(state: IslandStates, action: Action) {
  const { type } = action;

  if (type === "START") {
    if (state.islandDataState === "close") return state;
    return {
      ...state,
      islandDataState: "close",
      startState: false,
      formState: true,
      quickMenuState: true,
      deleteSectionState: true,
      messageState: true,
      message: "",
    };
  }

  if (type === "OPEN_QUICK_MENU") {
    if (state.islandDataState === "quick") return state;

    return {
      ...state,
      islandDataState: "quick",
      startState: true,
      formState: true,
      quickMenuState: false,
      deleteSectionState: true,
    };
  }

  if (type === "OPEN_FORM") {
    if (state.islandDataState === "create") return state;

    return {
      ...state,
      islandDataState: "create",
      startState: true,
      formState: false,
      quickMenuState: true,
      deleteSectionState: true,
    };
  }

  if (type === "OPEN_DELETE") {
    if (state.islandDataState === "delete") return state;

    return {
      ...state,
      islandDataState: "delete",
      startState: true,
      formState: true,
      quickMenuState: true,
      deleteSectionState: false,
    };
  }

  if (type === "SHOW_MESSAGE") {
    if (state.islandDataState === "success") return state;

    return {
      ...state,
      islandDataState: "message",
      startState: true,
      formState: true,
      quickMenuState: true,
      deleteSectionState: true,
      messageState: false,
      message: action.payload,
    };
  }

  return state;
}

export function useStore() {
  const [
    {
      islandDataState,
      startState,
      formState,
      quickMenuState,
      deleteSectionState,
      messageState,
      message,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const setIslandStart = () => {
    dispatch({ type: "START" });
  };

  const setIslandQuick = () => {
    dispatch({ type: "OPEN_QUICK_MENU" });
  };

  const setIslandForm = () => {
    dispatch({ type: "OPEN_FORM" });
  };
  const setIslandDelete = () => {
    dispatch({ type: "OPEN_DELETE" });
  };

  const showMessage = (customMessage: string) => {
    dispatch({ type: "SHOW_MESSAGE", payload: customMessage });
  };

  return {
    islandDataState,
    startState,
    formState,
    quickMenuState,
    deleteSectionState,
    messageState,
    message,
    setIslandStart,
    setIslandQuick,
    setIslandForm,
    setIslandDelete,
    showMessage,
  };
}
