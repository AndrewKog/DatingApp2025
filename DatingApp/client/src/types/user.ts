export type User={
    id: string;
    displayname:string;
    email:string;
    token:string;
    imageUrl?:string;
}

export type LoginCreds={
    email: string;
    pasword:string;
}

export type RegisterCreds={
    email:string;
    displayname:string;
    password:string;
}