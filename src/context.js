import React, { createContext, useState } from 'react';

export const Context = createContext()

export const ContextProvider = (props) => {

  return (
    <Context.Provider value={{}}>
      {props.children}
    </Context.Provider>
  )
}
