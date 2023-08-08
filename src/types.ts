export interface IUser{
    name: string,
    email: string,
    password: string,
    role: string
}

export interface IComment{
    _id: number|string
    username: string
    text: string
    articleId: string | number
}

export interface IToken{
    username: string,
    userRole: string,
    id: string|number,
    exp: number,
    iat: number
}

export interface IArticle{
    _id: number
    title: string
    description: string
    comments: IComment[]
    author: string
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

type TSource = {
    id: null,
    name: string
}
export interface INews{
    source: TSource,
    author: string,
    title: string,
    description: string,
    url: string
    urlToImage: string,
    publishedAt: string,
    content: string
}