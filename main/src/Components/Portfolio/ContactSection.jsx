import { useState } from "react";

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("https://formspree.io/f/mldleevo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
    <section className="contact" id="contact">
        <div className="section-header">
            <h2 className="section-title">Contact <span>Me</span></h2>
            <p className="section-subtitle">Get in touch</p>
        </div>
        <div className="contact-container">
            <div className="contact-info">
                <h3 className="contact-title">Let's talk about everything!</h3>
                <p className="contact-text">
                    Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                </p>
                <div className="info-item">
                    <i className="fas fa-envelope"></i>
                    <div className="info-content">
                        <h4>Email</h4>
                        <p>sulmanmehar4@gmail.com</p>
                    </div>
                </div>
                <div className="info-item">
                    <i className="fas fa-phone"></i>
                    <div className="info-content">
                        <h4>Phone</h4>
                        <p>+92 165 535971</p>
                    </div>
                </div>
                <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="info-content">
                        <h4>Location</h4>
                        <p>Islamabad, Pakistan</p>
                    </div>
                </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        "Sending..."
                    ) : (
                        <>
                            Send Message <i className="fas fa-paper-plane"></i>
                        </>
                    )}
                </button>

                {submitStatus === "success" && (
                    <p className="form-success">Message sent successfully!</p>
                )}
                {submitStatus === "error" && (
                    <p className="form-error">Error sending message. Please try again.</p>
                )}
            </form>
        </div>
    </section>
    );
}

export default ContactSection;