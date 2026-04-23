export const roleChecker=(role, actualRole)=>{
    if(role === actualRole) return 
    else{
        const error = new Error("unauthorized, the role is incorrect")
        error.status = 401
        throw error     
    }
    
}