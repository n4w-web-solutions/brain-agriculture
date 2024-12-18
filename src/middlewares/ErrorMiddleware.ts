import { Request, Response, NextFunction } from "express";

export const ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};
