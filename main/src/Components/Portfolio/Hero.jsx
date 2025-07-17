import zone from './zone.jpg';
function HeroSection() {



    return (
        <>
            <main>
                {/* <!-- Hero Section --> */}
                <section className="hero" id="home">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h3 className="greeting">Hello, It's Me</h3>
                            <h1 className="name">Sulman Dev.</h1>

                            <p className="description">Creative professional with expertise in web development and design. Passionate about creating beautiful, functional digital experiences.</p>

                            <a href="#about" className="down-btn">Explore More <i className="fas fa-arrow-down"></i></a>
                        </div>
                        <div className="hero-image">
                            <div className="image-wrapper">
                                <img src={zone} style={{ borderRadius: "50%",  mixBlendMode:"lighten"}} alt="Sulman Bashir" className="about-img" />
                                {/* <div className="glow-circle"></div> */}
                                {/* <div className="shape-animation"></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="scroll-indicator">
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <div className="arrows">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </section>


            </main>

        </>
    )
}

export default HeroSection;