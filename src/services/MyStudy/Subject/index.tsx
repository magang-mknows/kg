import { handleError } from "@/utilities/helper";
import ApiService from "@/services/Api";
const SubjectService = {
  GetAllSubject: async () => {
    const requestData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/subject",
    };
    try {
      const res = await ApiService.customRequest(requestData);

      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};

export default SubjectService;
