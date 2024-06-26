import EmailIcon from "../images/email.svg";

const AboutSection = () => {
    return <section id="about">
        <h3>About PathFOSS</h3>
        <p className="paragraph">My name is Patrick and I go by PathFOSS on GitHub. I am a hobbyist technology enthusiast with love for website design and Android.</p>
        <p className="paragraph">The trifecta of creation, learning, and doing has been my motivation for progressing quickly in educating myself on hard topics. I always dive head first into new seemingly unsolvable problems to perpetually reignite my passion for technology. I use all of the programs I created almost daily and I'm proud of how much I've managed to thrive independently.</p>
        <p className="paragraph">I am open to new job opportunities so please do not hesitate to contact me by email.</p>
        <div className="iconized-text">
            <img className="icon-small" src={EmailIcon} alt="email icon"/>
            <p className="paragraph">info@pathfoss.com</p>
        </div>
    </section>
}
export default AboutSection;