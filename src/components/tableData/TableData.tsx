import { useContext } from "react";
import { AppContext } from "../context/context";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./tableStyles.scss";

export const TableData = () => {
  const { usersData } = useContext(AppContext);

  return (
      <Table className="generalTable" striped bordered hover>
        <thead>
          <tr>
            <th>Name of user</th>
            <th>Check data</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td className="tableData">
                <img className="tableData__userImage" src={user.avatar.link} />
                <p className="tableData__userName">
                  {user.firstName} {user.lastName}
                </p>
              </td>
              <td>
                <div className="tableData__buttonBox">
                  <Button>
                    <Link className="link" to={`/user-timesheet/${user.id}`}>
                      Check time sheet
                    </Link>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
  );
};
