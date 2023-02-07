/*
 * @Date: 2023-01-15 21:26:56
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-06 23:04:47
 * @FilePath: \Jira\src\utils\index.js
 * @Description:
 */
export const isFalsy = (value) => (value === 0 ? false : !value);
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
