import api from ".";

const commentCode = async (code: string) => {
    const response = await api.post("/comment", { code });
    return response.data;
};

const documentCode = async (code: string) => {
    const response = await api.post("/document", { code });
    return response.data;
};

const analyzeCode = async (code: string) => {
    const response = await api.post("/analyze", { code });
    return response.data;
};

export { commentCode, documentCode, analyzeCode };