export enum ActionTypes {
  SHOW_MODAL = 'SHOW_MODAL',
}

export interface ShowingModal {
  type: ActionTypes.SHOW_MODAL;
  payload: {
    show: boolean;
  };
}

export type Actions = ShowingModal;
