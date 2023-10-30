import React,{ ReactNode, createContext, useState } from "react";
import users from '../../mockupData/users.json'
import timeSheets from '../../mockupData/timesheets.json'
import { IEmployee } from "../../types/users";
import { ITimesheet } from "../../types/timesheets";

type Props = {
  children: ReactNode;
};

interface AppContextInterface {
  usersData: IEmployee[];
  timeSheetsData: ITimesheet[];
}

export const AppContext = createContext<AppContextInterface>({
  usersData:[],
  timeSheetsData: [],
});


export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [usersData, setUsers] = useState<IEmployee[]>(users as IEmployee[]);
  const [timeSheetsData, setTimeSheets] = useState<ITimesheet[]>(timeSheets as ITimesheet[]);

  const contextValue = {
    usersData,
    timeSheetsData,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};