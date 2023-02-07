/*
 * @Date: 2023-01-15 15:04:34
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-01-15 21:22:45
 * @FilePath: \Jira\src\screens\project-list\list.jsx
 * @Description:
 */
import React from "react";
export const List = (props) => {
  const { list,users } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project,index) => (
          <tr key={index}>
            <td>{project.name}</td>
            <td>{users.find(users=>users.id === project.personId)?.name || '未知'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
