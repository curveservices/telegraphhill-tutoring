import Button from "../button";
import "./index.scss";

const CTA = () => {
  return (
    <div className="call-to-action">
      <div className="text-container">
        <h2 className="card-title">Ready to get started?</h2>
        <p>
          Contact me to discuss tutoring sessions, or you can email me -
          vanessaslade@gmail.com
        </p>
      </div>
      <div className="btn-container">
        <Button
          text="Contact Me"
          link="/contact-me"
        />
      </div>
    </div>
  );
};

export default CTA;
