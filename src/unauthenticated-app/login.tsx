
/*
* @Date: 2023-02-12 22:57:09
 * @LastEditors: EchoWang
 * @LastEditTime: 2023-02-22 23:38:06
 * @FilePath: \Jira\src\unauthenticated-app\login.tsx
* @Description: 
*/
//LoginScreen.tsx
import { useAuth } from 'context/auth-context';
import { FC, FormEvent, ReactElement } from 'react';

interface IProps {}
interface Iparams {
  username: string;
  password: string;
}

export const LoginScreen: FC<IProps> = (): ReactElement => {
  const {login, user} = useAuth()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };
  return (
    <>

        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor={'username'}>用户名</label>
            <input type="text" id={'username'} />
          </div>
          <div>
            <label htmlFor={'password'}>密码</label>
            <input type="password" id={'password'} />
          </div>
          <button type={'submit'}>登录</button>
        </form>
    </>
  );
};

