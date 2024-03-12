const Footer = () => {
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return <footer>
        <div>
            <div id="footer-explainer">
                <a onClick={ScrollToTop}><h4>PathFOSS</h4></a>
                <p>Providing sensible Android solutions since 2023</p>
                <p id="footer-license">PathFOSS.com | GPLv3 Licensed Website</p>
            </div>
            <div id="footer-menu">
                <h4>Browse</h4>
                <a href="https://github.com/PathFOSS">GitHub</a>
                <a href="mailto:patrick@pathfoss.com">Send Email</a>
            </div>
        </div>
    </footer>
}
export default Footer;