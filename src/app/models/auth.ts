export class RegisterDto {
  constructor(
    public email: string = "",
    public password: string = "",
    public name: string = ""
  ) { }
}

export class LoginDto {
  constructor(
    public email: string = "",
    public password: string = ""
  ) { }
}

export interface ILoginDto {
  email: string,
  password: string
}

export type User = {
  id: number,
  name: string,
  email: string
}

export type LoggedUser = {
  accessToken: string,
  user: User
}
