import Navigation from "../components/Navigation";
import image from "../assets/img_about.jpg";
import "../css/About.css";
const About = () => {
    const paragraf = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."; return <>
        <Navigation />
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>About Us</h1>
                    <div style={{ height: "16px" }} />
                    <p>{paragraf}</p>
                </div>
                <div className="col">
                    <img src={image} alt="img_about" />
                </div>
            </div>
        </div>
    </>
}

export default About;