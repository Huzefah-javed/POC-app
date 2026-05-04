export const roleChecker=(role)=>{

    return (req, res, next)=>{

        if(role === req.user.role) return next()
        else{
        const error = new Error("unauthorized, the role is incorrect")
        next(error)    
    }
    }
    
}