export function clearToken(authorization: string){
   // const token = authorization.replace("Bearer ", "");

    const token = authorization.split(" ")[1]

    console.log(token)
    
    return token;
}