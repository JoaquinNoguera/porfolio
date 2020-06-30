import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';
import GithubIcon from '../../static/github.svg'
import { Image } from 'cloudinary-react';
import CV from '../../static/CV.pdf';
import './style.scss';

export default function (){
    return(
        <div id="home">
        <Helmet>
                <link rel="canonical" href="https://www.joaquinoguera.com/" />
                <meta property="og:title" content="Joaquin Noguera - Página Personal" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content=" http://www.joaquinnoguera.com/" />
                <meta property="og:image" content=" https://external.faep9-1.fna.fbcdn.net/safe_image.php?d=AQAZstNL2GKf8bXk&w=584&h=584&url=https%3A%2F%2Fres.cloudinary.com%2Fdbtp7mkgk%2Fimage%2Fupload%2Fv1%2Fporfolio%2FDSCN5169_vnq1bv.jpg&_nc_hash=AQCwYe-R5DiuKmF6" />
                <meta property="og:description" content="Hola soy Joaquín Noguera y este es mi porfolio. Aquí podrás ver todos mis proyectos personales y trabajos, así como mis competencias en el desarrollo web." />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Joaquin Noguera - Página Personal" />
                <meta name="twitter:description" content="Hola soy Joaquín Noguera y este es mi porfolio. Aquí podrás ver todos mis proyectos personales y trabajos, así como mis competencias en el desarrollo web." />
                <meta name="twitter:creator" content="@nvjoaquin13" />
                <meta name="twitter:site" content="@nvjoaquin13" />
                <meta name="twitter:image" content="https://external.faep9-1.fna.fbcdn.net/safe_image.php?d=AQAZstNL2GKf8bXk&w=584&h=584&url=https%3A%2F%2Fres.cloudinary.com%2Fdbtp7mkgk%2Fimage%2Fupload%2Fv1%2Fporfolio%2FDSCN5169_vnq1bv.jpg&_nc_hash=AQCwYe-R5DiuKmF6" />


                <title>Joaquin Noguera - Página Personal </title>
    
                <meta name="description" content="Hola soy Joaquín Noguera y este es mi porfolio. Aquí podrás ver todos mis proyectos personales y trabajos, así como mis competencias en el desarrollo web." />
                <meta name="apple-mobile-web-app-title" content="Joaquin Noguera - Página Personal" />
        </Helmet>
        <Nav
            active="HOME"
        />
        <Content
            className="flex-column"
        >
          
            <div>
                <a
                    aria-label="página de github"
                    href="https://github.com/JoaquinNoguera"
                    className="social-icon"
                >
                    <GithubIcon/>
                </a>
            </div>
            
            <div 
                className="cover"
            >
                <Image 
                    cloudName="dbtp7mkgk" 
                    publicId="porfolio/DSCN5169_vnq1bv.jpg" 
                    width="320" 
                    height="352"  
                    crop="scale"
                    alt="Lugar de trabajo"
                    id="my-image"
                />
            </div>
            <h1>
                Joaquín Noguera Velazquez
            </h1>
            
            <h2> 
                Desarrollador Web
            </h2>
            <a 
                aria-label="curriculum"
                href={CV}
            >
            <button>
                DESCARGAR CV
            </button>
            </a>
        </Content>
        </div>
    );
}