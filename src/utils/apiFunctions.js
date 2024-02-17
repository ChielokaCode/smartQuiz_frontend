// // apiFunctions.js

// // A placeholder function to simulate fetching subjects from an API
// export const getAllSubjects = async () => {
//     try {
//       // Simulate an API call (you should replace this with your actual API call)
//       const response = await fetch('http://localhost:8080/subject/fetch-all-subjects');
      
//       // Check if the response is successful (status code 200)
//       if (response.ok) {
//         // Parse the JSON response and return the data
//         return await response.json();
//       } else {
//         // If the response is not successful, throw an error
//         throw new Error(`Failed to fetch subjects. Status: ${response.status}`);
//       }
//     } catch (error) {
//       // Handle any errors that occur during the API call
//       console.error('Error fetching subjects:', error.message);
//       throw error; // You may choose to handle errors differently based on your application's needs
//     }
//   };
  
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

// export const fetchQuizForUser = async(number, subject) =>{
//     try {
//         const response = await api.get(
//             `/quiz/fetch-questions-for-user?numOfQuestions=${number}&subject=${subject}`
//         )
//         return response.data
//     } catch (error) {
//         console.error(error)
//         return []
//     }
// }


