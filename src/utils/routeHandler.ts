import { Request, Response } from "express";

// Handler to protect routes from unexpected errors
type HandlerCallback = (request: Request, response: Response) => void;
export default (callback: HandlerCallback) => (
  request: Request,
  response: Response
) => {
  try {
    callback(request, response);
  } catch (err) {
    response.json({
      success: false,
      data: null,
      errors: ["An unexpected error has occurred", err.toString()],
    });
    return;
  }
};
