import TextElement from "./TextElement";
import FreedomIcon from "./images/freedom.svg";
import PrivacyIcon from "./images/privacy.svg";
import MinimalismIcon from "./images/minimalism.svg";

const TripleSection = () => {
    return <section className="triple-section">
        <TextElement image={FreedomIcon} title="Freedom" text="Every program created is free to use in both meanings of the word. Firstly, all prorams are free of charge and are maintained with the help of donations. Secondly, the user has the freedom to fork the software into their liking as everything on this page is open sourced."/>
        <TextElement image={PrivacyIcon} title="Privacy" text="Privacy is a human right, but in this digital age, it is harder than ever to remain private. That is why the code published here is 100% free of trackers, miners, analytics, telemetry, ads, and all other nasty things that come with most software nowadays."/>
        <TextElement image={MinimalismIcon} title="Minimalism" text="Popular software often relies on excessive animations, videos, and graphics. As a result, installation sizes and the minimum resources used to run these programs are increasing. To combat this, all code on this page is optimized for performance and minimum storage size."/>
    </section>
}
export default TripleSection;