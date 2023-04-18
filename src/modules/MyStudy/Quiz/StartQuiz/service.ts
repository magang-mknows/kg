import ApiService from "@/services/Api";
import { handleError } from "@/utilities/helper";

const QuizStartService = {
  GetQuizById: async (id: string) => {
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
};
export default QuizStartService;
