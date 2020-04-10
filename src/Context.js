import React, { createContext, useReducer } from "react";
import { getDateToday, getExpirationDate } from "./helpers/TimeFormatter";

let reducer = (state, action) => {
  switch (action.type) {
    case "storages":
      var storages = action.payload;
      return { ...state, storages };

    case "store":
      var storages = state.storages;
      const newStore = {
        id: storages.length + 1,
        date: getDateToday(),
        expiration: getExpirationDate("freeze"),
        quantity: action.payload,
        state: "freeze",
        thawedDate: "",
        thawedExpiration: ""
      };

      storages.push(newStore);
      addMilk(newStore);

      return { ...state, storages };

    case "thaw":
      var storages = state.storages;
      var item = {
        ...action.payload,
        state: "thawed",
        thawedDate: getDateToday(),
        thawedExpiration: getExpirationDate("thawed")
      };
      console.log(item);

      storages[
        storages.findIndex(storage => storage.id === action.payload.id)
      ] = item;

      return { ...state, storages };

    case "done":
      var storages = state.storages;
      var item = { ...action.payload, state: "done" };
      storages[
        storages.findIndex(storage => storage.id === action.payload.id)
      ] = item;
      return { ...state, storages };

    default:
      return;
  }
};

const initialState = {
  storages: [
    {
      id: 1,
      date: "March 1, 9:00PM",
      expiration: "July 1, 9:00PM",
      quantity: 90,
      state: "thawed",
      thawedDate: "March 27, 5:00AM",
      thawedExpiration: "April 1, 5:00AM"
    },
    {
      id: 2,
      date: "March 3, 1:00PM",
      expiration: "July 3, 1:00PM",
      quantity: 140,
      state: "freeze",
      thawedDate: "",
      thawedExpiration: ""
    },
    {
      id: 3,
      date: "March 9, 3:20AM",
      expiration: "July 9, 3:20AM",
      quantity: 120,
      state: "thawed",
      thawedDate: "March 30, 1:45AM",
      thawedExpiration: "April 5, 1:45AM"
    }
  ]
};

const StateContext = createContext(initialState);

const addMilk = milk => {
  fetch(
    "https://script.google.com/macros/s/AKfycbwyvDk0ENunSmjxzzPOfBWpyGCIdVa6M9HWAnDijkzKqOwbVLjr/exec?" +
      new URLSearchParams({
        ...milk
      }),
    {
      method: "POST",
      headers: new Headers()
    }
  )
    .then(res => res.json())
    .then(data => console.log(data));
};

const StateProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
