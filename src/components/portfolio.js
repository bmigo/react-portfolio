// EDIT SO THAT REACT WORKS

const Portfolio = () => {
  return (
    <body>
    <header>
        <h1>Hello, I'm Bernadette Migo</h1>
        <nav class="topnav">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
    </header>
    {'\n'}
    <section id="about" className="about">
        <h2>About Me</h2>
        <p>My name is Bernadette Migo. I'm a junior software developer centered in the greater Richmond area</p>
        <img src="./assets/images/bernie.jpeg" alt="Picture of Bernadette Migo" id="bernieImg"></img>
    </section>

    <section id="work" className="work">
        <h3>My Work</h3>
        <div>
            <div >
                <a href="https://github.com/bmigo/Horiseon"><img src="./assets/images/horiseon.jpg" id="horiseonImg"></a>
            </div>
            <div>
                <div className="box">HTML</div>
                <div className="box">CSS</div>
                <div className="box">JavaScript</div>
            </div>
        </div>
        
    </section>
    </body>
  )
}