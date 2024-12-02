import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";

export const healthCheck = asyncHandler(async (req, res) => {
  try {
    res.status(200).json(new ApiResponse(200, "OK", "Health Check Success"));
  } catch (error) {
    throw new ApiError(500, "Internal Server Error");
  }
});
