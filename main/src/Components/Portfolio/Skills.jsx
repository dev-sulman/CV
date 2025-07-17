function Skills() {
    return(
        <>
      
      <section className="skills" id="skills">
         <div className="section-header">
            <h2 className="section-title">My <span>Skills</span></h2>
           
         </div>
         <div className="skills-container">
            <div className="technical-skills">
               <h3 className="skills-category">Technical Skills</h3>
               <div className="skill-item">
                  <div className="skill-info">
                     <span className="skill-name">HTML/CSS</span>
                     <span className="skill-percent">95%</span>
                  </div>
                  <div className="skill-bar">
                     <div className="skill-progress" style={{width:"98%"}}></div>
                  </div>
               </div>
               <div className="skill-item">
                  <div className="skill-info">
                     <span className="skill-name">JavaScript</span>
                     <span className="skill-percent">85%</span>
                  </div>
                  <div className="skill-bar">
                     <div className="skill-progress" style={{width:"85%"}}></div>
                  </div>
               </div>
            
               <div className="skill-item">
                  <div className="skill-info">
                     <span className="skill-name">React</span>
                     <span className="skill-percent">95%</span>
                  </div>
                  <div className="skill-bar">
                     <div className="skill-progress" style={{width:"95%"}}></div>
                  </div>
               </div>
             
               <div className="skill-item">
                  <div className="skill-info">
                     <span className="skill-name">Node.js</span>
                     <span className="skill-percent">75%</span>
                  </div>
                  <div className="skill-bar">
                     <div className="skill-progress" style={{width:"75%"}}></div>
                  </div>
               </div>
                  <div className="skill-item">
                  <div className="skill-info">
                     <span className="skill-name">UI</span>
                     <span className="skill-percent">85%</span>
                  </div>
                  <div className="skill-bar">
                     <div className="skill-progress" style={{width:"85%"}}></div>
                  </div>
               </div>
            </div>
            <div className="professional-skills">
               <h3 className="skills-category">Professional Skills</h3>
               <div className="radial-skills">
                  <div className="radial-skill">
                     <div className="radial-progress" data-percent="90">
                        <svg className="radial-svg" viewBox="0 0 100 100">
                           <circle className="radial-bg" cx="50" cy="50" r="45"></circle>
                           <circle className="radial-fill" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <div className="radial-text">90%</div>
                     </div>
                     <span className="radial-label">Creativity</span>
                  </div>
                  <div className="radial-skill">
                     <div className="radial-progress" data-percent="85">
                        <svg className="radial-svg" viewBox="0 0 100 100">
                           <circle className="radial-bg" cx="50" cy="50" r="45"></circle>
                           <circle className="radial-fill" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <div className="radial-text">85%</div>
                     </div>
                     <span className="radial-label">Communication</span>
                  </div>
                  <div className="radial-skill">
                     <div className="radial-progress" data-percent="95">
                        <svg className="radial-svg" viewBox="0 0 100 100">
                           <circle className="radial-bg" cx="50" cy="50" r="45"></circle>
                           <circle className="radial-fill" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <div className="radial-text">95%</div>
                     </div>
                     <span className="radial-label">Team Work</span>
                  </div>
                  <div className="radial-skill">
                     <div className="radial-progress" data-percent="80">
                        <svg className="radial-svg" viewBox="0 0 100 100">
                           <circle className="radial-bg" cx="50" cy="50" r="45"></circle>
                           <circle className="radial-fill" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <div className="radial-text">80%</div>
                     </div>
                     <span className="radial-label">Project Management</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    )
}
export default Skills;