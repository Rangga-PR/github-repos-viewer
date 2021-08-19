import React, { Dispatch, ReactNode, createContext, useReducer } from "react";

type ProviderPropsType = {
  children?: ReactNode;
};

type ReposStateType = {
  loading: boolean;
  error: string;
  data: Object[];
};

type ReposActionType = {
  type: string;
  data?: Object[];
  error?: string;
  page?: number;
};

const GET_REPOS = "GET_REPOS";
const GET_REPOS_FAILED = "GET_REPOS_FAILED";
const GET_REPOS_SUCCESS = "GET_REPOS_SUCCESS";

const reposStore = createContext<{
  state: ReposStateType;
  dispatch: Dispatch<ReposActionType>;
}>({
  state: { loading: false, data: [], error: "" },
  dispatch: () => undefined,
});
const { Provider } = reposStore;

const ReposProvider = ({ children }: ProviderPropsType) => {
  const [state, dispatch] = useReducer(
    (state: ReposStateType, action: ReposActionType): ReposStateType => {
      switch (action.type) {
        case GET_REPOS:
          return {
            ...state,
            loading: true,
            error: "",
          };
        case GET_REPOS_FAILED:
          return {
            ...state,
            loading: false,
            ...(action?.error && { error: action.error }),
            data: [],
          };
        case GET_REPOS_SUCCESS:
          return {
            ...state,
            loading: false,
            ...(action?.data?.length && {
              data:
                action?.page !== 1
                  ? [...state.data, ...action.data]
                  : action.data,
            }),
          };
        default:
          return state;
      }
    },
    { loading: false, error: "", data: [] }
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export {
  reposStore,
  ReposProvider,
  GET_REPOS,
  GET_REPOS_FAILED,
  GET_REPOS_SUCCESS,
};
