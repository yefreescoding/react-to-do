export interface Task {
  id: string;
  name: string;
  description: string;
  checked: boolean;
}

export interface IslandStates {
  islandDataState: string;
  startState: boolean;
  formState: boolean;
  quickMenuState: boolean;
  deleteSectionState: boolean;
  messageState: boolean;
  message: string;
}

export type Action =
  | { type: "START" }
  | { type: "OPEN_QUICK_MENU" }
  | { type: "OPEN_FORM" }
  | { type: "OPEN_DELETE" }
  | { type: "SHOW_MESSAGE"; payload: string };
