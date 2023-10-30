import { useCallback, useEffect, useState, useContext } from "react";
import { AppContext } from "../context/context";

import { IEmployee } from "../../types/users";
import { ITimesheet } from "../../types/timesheets";
import { Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./styles.scss";
import { useParams } from "react-router-dom";

export const UserTimeSheet = () => {
  let { id } = useParams();
  const { usersData, timeSheetsData } = useContext(AppContext);
  const [totalMinutes, setTotalMinutes] = useState<number>(0);
  const [userGeneral, setUserGeneral] = useState<{userData: IEmployee, workTime: ITimesheet[]}[]>([]);

  const getTimeSheetToUser = useCallback(() => {
    const user = usersData.find((user) => user.id === id);

    if (user) {
      const eachUserTime = timeSheetsData.filter((info) => info.userId === id);
      const totalMinutes = eachUserTime.reduce((total, time) => total + time.minutes, 0);
      eachUserTime.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());
      
      setTotalMinutes(totalMinutes)
      setUserGeneral((prev) => [...prev, { userData: user, workTime: eachUserTime, totalMinutes }]);
    }
  }, [usersData, timeSheetsData, id]);

  function toHoursAndMinutes(totalMinutes:number) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
  
    return `${hours} hours ${padTo2Digits(minutes)} minutes`;
  }
  
  function padTo2Digits(num:number) {
    return num.toString().padStart(2, '0');
  }
  
  useEffect(() => {
    getTimeSheetToUser();
  }, []);

  return (
    <Container style={{padding:"30px 0", maxWidth:'800px'}}>
      {userGeneral.map((person, index) => (
        <div className="userContainer" key={index}>
          <Stack
            direction="horizontal"
            gap={1}
            className="userContainer__nameBox"
          >
            <img
              src={person.userData.avatar.link}
              className="userContainer__nameBox__img"
            />
            <p className="userContainer__nameBox__userName">
              {person.userData.firstName} {person.userData.lastName}
            </p>
          </Stack>
         
          <div className="timeDataContainer">
          {person.workTime.map((time) => (
             <Stack key={time.id} className="timeInfo">
              {time.startTime.slice(0,10) === time.endTime.slice(0,10) ? <p className="timeInfo__date">{time.startTime.slice(0,10)}</p> :  <p className="timeInfo__date">{time.startTime.slice(0,10) && time.endTime.slice(0,10)}</p> }
              <p className="timeInfo__time" key={time.id}>{toHoursAndMinutes(time.minutes)}</p>
            </Stack>
          ))}
          </div>
          <Stack>
           <div className="totalTimeContainer">
            <p className="totalTimeContainer__titleTime">Total time:</p> 
            <p className="totalTimeContainer__currentTime">{toHoursAndMinutes(totalMinutes)}</p>
           </div>
          </Stack>
        </div>
      ))}
    </Container>
  );
};
