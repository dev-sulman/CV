function ServicesSection() {
    return(
        <>
          {/* <!-- Services Section --> */}
      <section className="services" id="services">
         <div className="section-header">
            <h2 className="section-title">My <span>Services</span></h2>
            <p className="section-subtitle">What I offer</p>
         </div>
         <div className="services-container">
            <div className="service-card">
               <div className="service-icon">
                  <i className="fas fa-code"></i>
               </div>
               <h3 className="service-title">Web Development</h3>
               <p className="service-description">
                  Custom website development tailored to your business needs with modern technologies and best practices.
               </p>
               <a href="https://web.dev/" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="service-card">
               <div className="service-icon">
                  <i className="fas fa-paint-brush"></i>
               </div>
               <h3 className="service-title">UI/UX Design</h3>
               <p className="service-description">
                  Beautiful and intuitive user interfaces designed to enhance user experience and engagement.
               </p>
               <a href="https://www.interaction-design.org/literature/topics/ux-design?srsltid=AfmBOorbwahUezU54IHSjd9qq7zWmmAyLqSjX3MGiK1jsOuf-sSymXWG" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="service-card">
               <div className="service-icon">
                  <i className="fas fa-mobile-alt"></i>
               </div>
               <h3 className="service-title">Responsive Design</h3>
               <p className="service-description">
                  Websites that look and function perfectly on all devices from desktop to mobile.
               </p>
               <a href="https://www.interaction-design.org/literature/topics/responsive-design?srsltid=AfmBOorktkVX7CWf5NX_swtkcAQDnsBYfkUVDn359crJEzIEyHd7G5lT" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="service-card">
               <div className="service-icon">
                  <i className="fas fa-search"></i>
               </div>
               <h3 className="service-title">SEO Optimization</h3>
               <p className="service-description">
                  Improve your website's visibility and ranking on search engines with proven SEO strategies.
               </p>
               <a href="https://searchengineland.com/guide/what-is-seo" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="service-card">
               <div className="service-icon">
                  <i className="fas fa-bullhorn"></i>
               </div>
               <h3 className="service-title">Digital Marketing</h3>
               <p className="service-description">
                  Comprehensive digital marketing solutions to grow your online presence and reach.
               </p>
               <a href="https://thriveagency.com/digital-marketing-services/" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="service-card">
               <div className="service-icon">
                  <i className="fas fa-headset"></i>
               </div>
               <h3 className="service-title">Support & Maintenance</h3>
               <p className="service-description">
                  Ongoing support and maintenance to keep your website running smoothly and securely.
               </p>
               <a href="https://www.outerboxdesign.com/web-design/website-maintenance" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
         </div>
      </section>
        </>
    )
}
export default ServicesSection;