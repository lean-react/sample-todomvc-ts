import React from "react";

// See: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#context

// create context with no upfront defaultValue
// without having to do undefined check all the time

export function createStore<StateType, ActionsType>() {
  const store = React.createContext<{state: StateType, dispatch: (action: ActionsType) => void } | undefined>(undefined);
  function useStore() {
    const ctx = React.useContext(store);
    if (!ctx) throw new Error("useStore must be inside a StoreProvider with a value");
    return ctx;
  }
  return [useStore, store.Provider] as const; // make TypeScript infer a tuple, not an array of union types
}
