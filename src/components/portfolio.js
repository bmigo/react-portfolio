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
    <br>
    <section id="about" class="about">
        <h2>About Me</h2>
        <p>My name is Bernadette Migo. I'm a junior software developer centered in the greater Richmond area</p>
        <img src="./assets/images/bernie.jpeg" alt="Picture of Bernadette Migo" id="bernieImg">
    </section>

    <section id="work" class="work">
        <h3>My Work</h3>
        <div>
            <div class=>
                <a href="https://github.com/bmigo/Horiseon"><img src="./assets/images/horiseon.jpg" id="horiseonImg"></a>
            </div class="row">
            <div>
                <div class="box">HTML</div>
                <div class="box">CSS</div>
                <div class="box">JavaScript</div>
            </div>
        </div>
        
    </section>
  )
}