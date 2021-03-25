import { getCats,getCatsFailed,getCatsSucceeded} from "./action.creator";

export type GetCatsActions = ReturnType<typeof getCats>

export type GetCatsSucceededActions = ReturnType<typeof getCatsFailed>

export type GetCatsFailedActions = ReturnType<typeof getCatsSucceeded>

export type CatsActions = GetCatsActions | GetCatsSucceededActions | GetCatsFailedActions;