export interface ISingUp {
  name: string,
  email: string,
  password: string
}

export interface ISingIn {
  email: string,
  password: string
}

export interface IAuthResponse {
  accessToken: string,
  refreshToken: string,
  user: {
    email: string,
    id: number,
    name: string
  }
}

export interface IRefreshResponse {
  accessToken: string,
  refreshToken: string,
  user: {
    id: number,
    name: string,
    email: string
  }
}

export interface IBoard {
  name: string
}

export interface IBoardResponse {}

export interface ITask {
  title: string,
  description: string
}

export interface ITaskResponse {}
