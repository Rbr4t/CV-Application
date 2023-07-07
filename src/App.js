import { GeneralCV, GeneralInfo } from "./components/General";
import Skills, { SkillsCV } from "./components/Skills";
import Education, { EducationCV } from "./components/Education";
import Experience, { ExperienceCV } from "./components/PrevExperiance";
import { useState } from "react";
import './index.css'

function App() {
  const [data, setValue] = useState({
    general: null,
    skills: null,
    education: null,
    experience: null
    }
  );

  const myCallBackGeneral = (dataFromChild) => {
    setValue({...data, general: dataFromChild})
  } 

  const myCallBackSkills = (dataFromChild) => {
    setValue({...data, skills: dataFromChild})
  } 

  const myCallBackEducation = (dataFromChild) => {
    setValue({...data, education: dataFromChild})
  } 

  const myCallBackExperience = (dataFromChild) => {
    setValue({...data, experience: dataFromChild})
  } 

  return (
    <main>
      <form className="edit">
        <div>
          <h2>Personal information</h2>
          <GeneralInfo callBackState={myCallBackGeneral} />
        </div>

        <div>
         <Skills callBackState={myCallBackSkills} />
        </div>

        <div>
          <Education callBackState={myCallBackEducation} />
        </div>

        <div>
          <Experience callBackState={myCallBackExperience} />
        </div>
      
      </form>

      <div className="cv">
        <GeneralCV props={data.general}/>
        <SkillsCV props={data.skills}/>
        <EducationCV props={data.education}/>
        <ExperienceCV props={data.experience} />
      </div>
    </main>
    
  );
}

export default App;
