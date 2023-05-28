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
    title: string
    description: string
    comments: IComment[]
}