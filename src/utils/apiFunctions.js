import axios from "axios";

// This is to create the base URL for connecting to the backend
export const api = axios.create({
  baseURL: "http://localhost:8080"
});

export async function getAllSubjects(){
    try{
        const result = await api.get("/subject/fetch-all-subjects");
        // ".data" is neccessary to return the data from the backend
        return result.data;
    }catch(error){
        throw new Error("Error fetching Subject");
    }
}