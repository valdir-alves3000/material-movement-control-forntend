import CircleIcon from "@mui/icons-material/Circle";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { IconButton } from "@mui/material";
import {
  AppTable,
  AppTableBodyTr,
  AppTableTd,
  AppTableTh,
} from "@styles/Table.style";
import { AppContext } from "contexts/AppContext";
import { IUserResponse } from "data/types/IApp";
import { useContext } from "react";
import { ListAllUserContainer } from "./ListAllUser.style";

const ListAllUser = ({ users }: IUserResponse) => {
  const { formatDate } = useContext(AppContext);

  return (
    <ListAllUserContainer>
      <AppTable>
        <thead>
          <tr>
            <AppTableTh>ID</AppTableTh>
            <AppTableTh>Name</AppTableTh>
            <AppTableTh>admin</AppTableTh>
            <AppTableTh>created_at</AppTableTh>
            <AppTableTh>updated_at</AppTableTh>
            <AppTableTh></AppTableTh>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <AppTableBodyTr key={user.id}>
              <AppTableTd>{user.id}</AppTableTd>
              <AppTableTd>{user.name}</AppTableTd>
              <AppTableTd>
                {user.admin ? (
                  <CircleIcon color="success" style={{ fontSize: "12px" }} />
                ) : (
                  <CircleIcon color="error" style={{ fontSize: "12px" }} />
                )}
              </AppTableTd>
              <AppTableTd>{formatDate(user.created_at!)}</AppTableTd>
              <AppTableTd>{formatDate(user.updated_at!)}</AppTableTd>
              <AppTableTd>
                <IconButton onClick={async () => {}}>
                  <RemoveCircleOutlineOutlinedIcon color="error" />
                </IconButton>
              </AppTableTd>
            </AppTableBodyTr>
          ))}
        </tbody>
      </AppTable>
    </ListAllUserContainer>
  );
};

export { ListAllUser };
