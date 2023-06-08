export interface IUser{
    name: string,
    email: string,
    password: string,
    role: string
}

export interface IComment{
    username: string
    text: string
    articleId: string | number
}
export interface IArticle{
    _id: number
    title: string
    description: string
    comments: IComment[]
}

export interface IAuth{
    isLoading: boolean,
    error: string,
    userToken: string | null
}

export interface ILogin{
    email: string,
    password: string
}