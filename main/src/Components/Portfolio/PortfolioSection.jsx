function portfolio() {
    return(
        <>
        {/* <!-- Portfolio Section --> */}
      <section className="portfolio" id="portfolio">
         <div className="section-header">
            <h2 className="section-title">My <span>Portfolio</span></h2>
            <p className="section-subtitle">My recent work</p>
         </div>
         {/* <div className="portfolio-filter">
            <button className="filter-btn active" data-filter="all">All</button>
            <button className="filter-btn" data-filter="web">Web Design</button>
            <button className="filter-btn" data-filter="app">App Design</button>
            <button className="filter-btn" data-filter="graphic">Graphic Design</button>
         </div> */}
         <div className="portfolio-container">
            <div className="portfolio-item" data-category="web">
               <div className="portfolio-img">
                  <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Project 1"/>
                  <div className="portfolio-overlay">
                     <h3 className="project-title">E-commerce Website</h3>
                     <p className="project-category">Web Design</p>
                     <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                  </div>
               </div>
            </div>
            <div className="portfolio-item" data-category="app">
               <div className="portfolio-img">
                  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Project 2"/>
                  <div className="portfolio-overlay">
                     <h3 className="project-title">Fitness App</h3>
                     <p className="project-category">App Design</p>
                     <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                  </div>
               </div>
            </div>
            <div className="portfolio-item" data-category="graphic">
               <div className="portfolio-img">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Project 3"/>
                  <div className="portfolio-overlay">
                     <h3 className="project-title">Brand Identity</h3>
                     <p className="project-category">Graphic Design</p>
                     <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                  </div>
               </div>
            </div>
            <div className="portfolio-item" data-category="web">
               <div className="portfolio-img">
                  <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Project 4"/>
                  <div className="portfolio-overlay">
                     <h3 className="project-title">Corporate Website</h3>
                     <p className="project-category">Web Design</p>
                     <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                  </div>
               </div>
            </div>
            <div className="portfolio-item" data-category="app">
               <div className="portfolio-img">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Project 5"/>
                  <div className="portfolio-overlay">
                     <h3 className="project-title">Task Manager App</h3>
                     <p className="project-category">App Design</p>
                     <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                  </div>
               </div>
            </div>
            <div className="portfolio-item" data-category="graphic">
               <div className="portfolio-img">
                  <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Project 6"/>
                  <div className="portfolio-overlay">
                     <h3 className="project-title">Marketing Materials</h3>
                     <p className="project-category">Graphic Design</p>
                     <a href="#" className="project-link"><i className="fas fa-link"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    )
}
export default portfolio;