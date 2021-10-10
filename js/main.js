const getMyAgeCurrent = () => {
    const currentYear = new Date().getFullYear();
    const monthOfBirth = 1999;
    return currentYear  -  monthOfBirth;
 }
 
 window.onload = () => {
     document.querySelector("#about-me").innerHTML = ` <p>
     Soy <strong>Alfredo Hernandez Pérez</strong>, tengo ${ getMyAgeCurrent() } años, con
     sede en Tantoyuca, Veracruz, México, actualmente soy
     Desarrollador Full Stack, me encanta la
     programación, es una de mis pasiones, me interesó aprender estas
     tecnologias enfocadas al desarrollo de software por las cosas increibles que se
     pueden llegar a realizar, tanto como una app muy sencilla que ayuda
     millones de personas o hasta crear una red social que genere un alto
     impacto y cambie la forma en que nos comunicamos. Diseñar es una de mis 
     habilidades para complementar con la programación y otra no menos importante me gustan los videojuegos!
   </p>`
 }