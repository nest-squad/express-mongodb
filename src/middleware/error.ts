import { NextFunction, Response } from "express";

export default (err:any, req:any, res:Response, next:NextFunction) => {
  if (err){
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
      code   : 4004,
    });

    throw err;
  }
};
