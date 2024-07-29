import { createContext, useContext, useReducer } from 'react';

const NewsContext = createContext();
const NewsDispatchContext = createContext();

const newsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      return [...state, action.payload];
    default:
      return state;
  }
};

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, []);

  return (
    <NewsContext.Provider value={state}>
      <NewsDispatchContext.Provider value={dispatch}>
        {children}
      </NewsDispatchContext.Provider>
    </NewsContext.Provider>
  );
};

export const useNewsState = () => useContext(NewsContext);
export const useNewsDispatch = () => useContext(NewsDispatchContext);
