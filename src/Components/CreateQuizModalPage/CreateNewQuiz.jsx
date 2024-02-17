import React from 'react'
import {useState, useEffect} from 'react'
import './CreateNewQuiz.css'
import axios from 'axios'


const CreateNewQuiz = ({quizData, setQuizData}) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [imageList, setImageList] = useState([]);
  const [subjectNames, setSubjectNames] = useState([]);

  useEffect(() => {
    // Fetch data from your server or external API
    axios.get('http://localhost:8080/subject/fetch-all-subjects')
      .then(response => {
        if (!response.data || !Array.isArray(response.data)) {
          throw new Error('Invalid response data');
        }

        // Extract subject names
        const names = response.data.map(subject => subject.name);
        setSubjectNames(names);
      })
      .catch(error => {
        console.error('Error fetching subject names:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount


  useEffect(() => {
    fetch('http://localhost:8080/api/v1/quiz/all-quiz-images')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming data is an array of objects with "quizImageFile" property
            const baseImageUrl = 'http://localhost:8080'; // Replace with your actual image server URL

            // Concatenate the base URL with the quizImageFile path for each image
            const imageUrlList = data.map(item => baseImageUrl + item.quizImageFile);

            setImageList(imageUrlList);
        })
        .catch(error => console.error('Error fetching images:', error));
}, []);


  const handleImageClick = (image) => {
    setSelectedImage(image);
    setQuizData (prevData =>({
      ...prevData, selectedImage:{image},
    }))
  };

  

  const handleInputChange =(e)=>{
    const {name, value} = e.target;
    setQuizData(prevData=>({...prevData,[name]: value,}));
  };



  return (
    <div className='createnewquizdiv'>
                <form className='createquizform'>

        <div className='createquizgridcontainer'>

              <div className='textaspectgridcontainer'>
                  <div className='quiz-input'>
                    <label htmlFor="quiz-name">Quiz Name</label><br/>
                   <input type='text' id="quizName"placeholder='Untitled Quiz' name='quizName' value={quizData.quizName} onChange={handleInputChange} required></input>
                  </div>
                  <div className='quiz-input'>
                    <label htmlFor="quiz-subject">Subject</label><br/>
                    <select id='subject' name='subject' value={quizData.subject} onChange={handleInputChange}>
                        <option>None</option>
                 {subjectNames.map(subject => (
                     <option key={subject} value={subject}>{subject}</option>
                 ))}
          </select>
                  </div>
                  <div className='quiz-input'>
                    <label htmlFor="quiz-topic">Topic</label><br/>
                    <input type='text' id="quizTopic" placeholder='Input topic' name='topic' value={quizData.topic} onChange={handleInputChange} required></input>
                  </div>
                  <div className='quiz-input'>
                    <label htmlFor="quizTimer">Timer(minutes)</label><br/>
                    <input type='number' id="timeLimit" placeholder='Input time' name='timeLimit'  value={quizData.timeLimit} onChange={handleInputChange} required></input>
                  </div>
                  <div className='quiz-input'>
                    <label htmlFor="quiz Description">Description</label><br/>
                   <textarea id="decription" placeholder='Quiz Description' name='description' value={quizData.description} onChange={handleInputChange} rows="4" cols="50" ></textarea>
                  </div>
</div>
            <div className="image-selection">
              <label>Select an Image:</label>

        <div className="createQuizimage-grid">
        {imageList.map((image, id) => (
          <img
            key={id}
            src={image}
            alt={`Image ${id + 1}`}
            className={`image-preview ${selectedImage === image ? 'selected' : ''}`}
            onClick={() => handleImageClick(image)}
          />
        ))}

      </div>
   

    </div>
          </div>
          </form>


    </div>
  )
}

export default CreateNewQuiz