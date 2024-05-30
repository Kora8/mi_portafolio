/*Script slides y ainmacion personaje */
document.addEventListener("DOMContentLoaded", function () {

    const slidesContainer = document.getElementById(`SlidersContainer`);
    const slides = slidesContainer.querySelectorAll(`.slide`);
    const tituloProyecto = document.getElementById(`tituloProyecto`);
    let currentSlideIndex = 0;
    const nombresProyectos = [`Axiologasi`, `Byte Swift`, `Magno Gym`, `DEV-ZONE`];// Nombres de los proyectos
  
    // Función para ACTUAILIZAR el título del proyecto
    function actualizarTituloProyecto() {
      tituloProyecto.textContent = nombresProyectos[currentSlideIndex];
    }
  
    // Ocultamos todos los slides excepto el primero
    for (let i = 1; i < slides.length; i++) {
      slides[i].style.display = `none`;
    }
  
    function avanzarSlide(event) {
      if (event.key === `d` || event.key === `D`) {
        slides[currentSlideIndex].style.display = `none`;
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].style.display = `block`;
        actualizarTituloProyecto();
  
        // Aanimar Adelante
        var animacionPersonaje = document.getElementById("animacion-personaje");
        animacionPersonaje.classList.remove("inicio");
        animacionPersonaje.classList.add("animar");
        animacionPersonaje.addEventListener("animationend", function () {
          this.classList.remove("animar");
          this.classList.add("inicio");
        });
      }
    }
  
    function retrocederSlide(event) {
      if (event.key === `a` || event.key === `A`) {
        slides[currentSlideIndex].style.display = `none`;
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        slides[currentSlideIndex].style.display = `block`;
        actualizarTituloProyecto();
  
        // Animación reversa
        var animacionPersonaje = document.getElementById("animacion-personaje");
        animacionPersonaje.classList.remove("inicio2");
        animacionPersonaje.classList.add("animar-reverse");
        animacionPersonaje.addEventListener("animationend", function () {
          this.classList.remove("animar-reverse");
          this.classList.add("inicio2");
        });
      }
    }
  
    actualizarTituloProyecto();
  
    document.addEventListener(`keydown`, avanzarSlide);
    document.addEventListener(`keydown`, retrocederSlide);
  });

  /*El script del carrusel */
   // Obtener todos los inputs radio
   const radios = document.querySelectorAll(`input[type="radio"]`);

   // Obtener el contenedor de contenido
   const contenedorContenido = document.querySelector(`.contenedorContenido`);
   const Contenedor = document.querySelector(`.contenedor_carrusel`);
   const title_card = document.getElementById(`title_card`);
   const descripcion_card = document.getElementById(`descripcion_card`);
   const habilidad = document.getElementById(`habilidad`);

   // Función para manejar el cambio de input radio
   function handleRadioChange() {
       // Obtener el valor de la rotación basado en el ID del input radio
       let rotation = 0;
       switch (this.id) {
           case `slide1`:
               rotation = 0;
               break;
           case `slide2`:
               rotation = 90;
               break;
           case `slide3`:
               rotation = 180;
               break;
           case `slide4`:
               rotation = 270;
               break;
           default:
               rotation = 0;
       }
   
       // Aplicar la rotación al contenedor de contenido
       contenedorContenido.style.transform = `rotate(${rotation}deg)`;
   }
   
   // Asignar el manejador de eventos para cada input radio
   radios.forEach(radio => {
       radio.addEventListener(`change`, handleRadioChange);
   });
   
   function chageBackground(){
       let background = ``;
       switch (this.id) {
           case `slide1`:
               title_card.innerText = `Explorando Quién Soy`;
               descripcion_card.innerText = `Soy un estudiante universitario de 20 años de México, apasionado por la tecnología y el desarrollo de software. Mi curiosidad me impulsa a aprender constantemente y a encontrar soluciones innovadoras a los desafíos. Valorando la colaboración, estoy comprometido en contribuir positivamente a equipos de trabajo con mi energía y entusiasmo.`;
               habilidad.innerText = `Más sobre mi`;
               break;
           case `slide2`:
               title_card.innerText = `Filosofía de Programación`;
               descripcion_card.innerText = 
               `Valoro el aprendizaje continuo y la colaboración, trabajando para desarrollar software que no solo resuelva problemas complejos, sino que también mejore la vida de las personas. 
               
               Como programador, me enfoco en la innovación y la resolución de problemas, combinando aprendizaje continuo y colaboración efectiva para crear soluciones tecnológicas de alta calidad.`;
               habilidad.innerText = `Filosofia`;
               break;
           case `slide3`:
               title_card.innerText = `Explorando Nuevas Tecnologías: 
               ¿Qué Estoy Aprendiendo?`;
               descripcion_card.innerText = `Aunque actualmente estoy en proceso de dominar React y Node, estoy profundizando activamente mis conocimientos en estas tecnologías. 
               
               Reconozco la importancia de mantenerme al día con las últimas tendencias y herramientas en el mundo del desarrollo web.`;
               habilidad.innerText = `Tecnologías nuevas`;
               break;
           case `slide4`:
               title_card.innerText = `Mi Valor Para Las Empresas`;
               descripcion_card.innerText = `Mi compromiso es mi principal activo. Estoy completamente dedicado a ofrecer lo mejor de mí en cada proyecto en el que participo. 
               
               Soy una persona comprometida con la excelencia y la mejora continua. Creo firmemente en la importancia de mantener altos estándares de calidad en todo lo que hago.`;
               habilidad.innerText = `Mi aporte`;
               break;
           default:
               title_card.innerText = ``;
               descripcion_card.innerText = ``;
       }

       Contenedor.style.background = background;
   }

   radios.forEach(radio => {
       radio.addEventListener(`change`, chageBackground);
   });


 