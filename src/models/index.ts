import { Models } from "@rematch/core";
import { vaccine } from "./vaccine";

export interface RootModel extends Models<RootModel> {
  vaccine: typeof vaccine;
}

export const models: RootModel = { vaccine };
