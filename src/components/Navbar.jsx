import InfoIcon from "../images/info-circle.svg";
import GitHubIcon from "../images/github.svg";

const Navbar = () => {
    return <nav>
        <h3><span>PathFOSS</span> Portfolio</h3>
        <div>
            <a className="img-btn" href="https://github.com/PathFOSS" rel="nofollow" target="_blank">
                <img src={GitHubIcon}/>
            </a>
            <a className="img-btn" href="#about">
                <img src={InfoIcon}/>
            </a>
        </div>
    </nav>
}
export default Navbar;