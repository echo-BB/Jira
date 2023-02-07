import { useEffect, useState } from "react";

/*
 * @Date: 2023-01-15 21:26:56
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-07 18:25:39
 * @FilePath: \Jira\src\utils\index.ts
 * @Description:
 */
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object:object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback:()=>void) => {
  useEffect(() => {
    callback();
  }, []);
};
export const useDebounce = <V>(value:V, delay?:number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
