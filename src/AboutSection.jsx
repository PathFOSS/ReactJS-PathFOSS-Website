import EmailIcon from "./images/email.svg";

const AboutSection = () => {
    return <section id="about">
        <h3>About PathFOSS</h3>
        <p className="paragraph">My name is Patrick and I go by PathFOSS on GitHub. I am a self-taught full-stack developer with love for UI/UX and Android.</p>
        <p className="paragraph">The trifecta of creation, learning, and doing has been my motivation for progressing quickly in educating myself on hard topics. I always dive head first into new languages, frameworks, and seemingly unsolvable problems to perpetually reignite my passion for software development. I use all of the programs I created almost daily and I'm proud of how far I've come on my own.</p>
        <p className="paragraph">I am open to new job opportunities related to full stack development and excited to help build amazing new projects.</p>
        <div className="iconized-text">
            <img className="icon-small" src={EmailIcon}/>
            <p className="paragraph">info@pathfoss.com</p>
        </div>
    </section>
}
export default AboutSection;