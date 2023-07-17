import './App.css';
function Nav() {
    return (
        <>
            <section id='nav'>
                <ul>
                    <li>
                        <img src='logo.png' alt='' width={"100%"} style={{ aspectRatio: "1/1" }}></img>
                    </li>
                    <li>
                        Our News
                    </li>
                    <li>
                        About us
                    </li>
                    <li>
                        Faq
                    </li>
                </ul>
                
            </section>
            <button>Log in</button>
        </>
    )
}
export default Nav