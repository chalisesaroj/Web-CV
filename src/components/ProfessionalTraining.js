import React from 'react';
import './cvstyling.css';

const trainings = [
  {
    title: "JAVA Programming Master Class",
    instructor: "Tim Buchalka",
    platform: "www.udemy.com",
    duration: "132 hours",
    link:"https://www.udemy.com/course/java-the-complete-java-developer-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Beta_Prof_la.EN_cc.ROW-English&campaigntype=Search&portfolio=ROW-English&language=EN&product=Course&test=&audience=DSA&topic=&priority=Beta&utm_content=deal4584&utm_term=_._ag_162511579404_._ad_696197165418_._kw__._de_c_._dm__._pl__._ti_aud-2268488108639%3Adsa-1677053911088_._li_9070019_._pd__._&matchtype=&gad_source=1&gclid=CjwKCAiAxqC6BhBcEiwAlXp455sfmfT148TCK5BFne_h5UHoUebI5nSz_3x-wGx-4HwGtDrCvVXoMhoCErcQAvD_BwE&couponCode=BFCPSALE24"
  },
  {
    title: "JAVA Data Structures and Algorithms Master Class",
    instructor: "Elshad Karimov",
    platform: "www.udemy.com",
    duration: "46.5 hours",
    link:"https://www.udemy.com/course/java-data-structures-and-algorithms-masterclass/?srsltid=AfmBOoph_c_rdX4AZhiC6MzBVU5hdbnz58ZjhOxyhdflifHRm8jWj22J&couponCode=BFCPSALE24"
  },
  {
    title: "Building Real-Time REST APIs with Spring Boot - Blog App",
    instructor: "Ramesh Fadatare",
    platform: "Java Guides via Udemy",
    duration: "33.5 hours",
    link:"https://www.udemy.com/course/building-real-time-rest-apis-with-spring-boot/?srsltid=AfmBOoq9tYH7stprmYxttdG-ZAkZr95Hov5DeXqR750k2AHPl4CAaUAe&couponCode=BFCPSALE24"
  },
  {
    title: "Selenium WebDriver with Java - Basics to Advanced+Frameworks",
    instructor: "Rahul Shetty",
    platform: "www.udemy.com",
    duration: "55.5 hours",
    link:"https://www.udemy.com/course/selenium-real-time-examplesinterview-questions/?srsltid=AfmBOoo2blx_jshJJ-sXLLoZisnx0fYngrKX_73Wgnb6LS7Awnxrxswb&couponCode=BFCPSALE24"
  },
];

const ProfessionalTraining = () => {
  return (
    <section>
      <h2>Professional Training</h2>
      <ul>
        {trainings.map((training, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
          <a href={training.link} style={{textDecoration:"none",color:"inherit"}}>  {training.title} from the instructor
        <strong>{training.instructor}</strong>
          via <strong>{training.platform}</strong>
            --{training.duration}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProfessionalTraining;
