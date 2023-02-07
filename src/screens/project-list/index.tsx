/*
 * @Date: 2023-01-15 15:00:21
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-07 17:40:02
 * @FilePath: \Jira\src\screens\project-list\index.tsx
 * @Description:
 */
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObject ,useDebounce,useMount} from "utils";
import { User } from "./search-panel";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

// interface 

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 1000);

  const [list, setList] = useState([]);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParam]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
