import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";
import { TQuizCreateResponse, TQuizCreatePayload } from "./types";

const QuizService = {
  GetQuiz: async (id: string) => {
    const requestData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: `/studi-ku/quiz/take/${id}`,
    };

    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
  GetQuizReview: async () => {
    const requestData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/studi-ku/quiz/review",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
  CreateQuiz: async (payload: TQuizCreatePayload): Promise<TQuizCreateResponse> => {
    const requestData = {
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
      url: "/studi-ku/quiz/create",
    };
    try {
      const res = await ApiService.customRequest(requestData);
      ApiService.setHeader();
      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
export default QuizService;
