const asynchanlder=(fun)=>async(req,res,next)=>{
    try {
        await fun(req,res,next)
        
    } catch (error) {
        res.status(error.code || 500).json({
            success:false,
            message:error.message
        })
        
    }

}
export {asynchanlder}

//here we are going to use hof