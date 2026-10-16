import { Mail, Github, Linkedin } from "lucide-react";

function Contact({ email, socials }) {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
          <p className="muted">Feel free to reach out for collaborations or opportunities!</p>

          <div className="contact-links">
            {email && (
              <a href={`mailto:${email}`} className="icon-link icon-link-text">
                <Mail size={18} /> {email}
              </a>
            )}
            {socials?.github && (
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="icon-link icon-link-text">
                <Github size={18} /> GitHub
              </a>
            )}
            {socials?.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link icon-link-text">
                <Linkedin size={18} /> LinkedIn
              </a>
            )}
          </div>

          {email && (
            <a href={`mailto:${email}`} className="btn btn-primary">Send an Email</a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
