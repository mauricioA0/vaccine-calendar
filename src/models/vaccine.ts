import { createModel } from "@rematch/core";
import IPeriod from "../interfaces/Period";
import { IVaccineEvent } from "../interfaces/VaccineEvent";
import { PERIODS, VACCINES_HISTORY } from "../mock/VaccineEvents";
import { RootModel } from "./";

interface VaccineState {
  periods: IPeriod[];
  vaccineEvents: IVaccineEvent[];
}

const initialState = {
  periods: PERIODS,
  vaccineEvents: VACCINES_HISTORY,
} as VaccineState;

export const vaccine = createModel<RootModel>()({
  state: initialState,
  reducers: {
    updateEvent(state, payload: VaccineState) {
      return { ...state, payload };
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number, globalState) {
      await new Promise((resolve) => setTimeout(resolve, payload));
      dispatch.vaccine.updateEvent(globalState.vaccine);
    },
  }),
});
