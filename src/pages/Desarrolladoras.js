import React from "react";
import sarai_mini from '../img/sarai_mini.jpg'
import sarai from '../img/sarai.jpg'
import yamilet_mini from '../img/yamilet_mini.jpg'
import yamilet from '../img/yamilet.jpg'
import melanie_mini from '../img/melanie_mini.jpg'
import melanie from '../img/melanie.jpg'
import tatiana from '../img/tatiana.jpg'
import tatiana_mini from '../img/tatiana_mini.jpg'

export default function Desarrolladoras() {
    return (
      <div>
        <div styles="height: 1000px; width: 100%;">
          <div className="darEspacio">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div>
                <div className="indicadores">
                  <button className="" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                      <img src={sarai_mini} alt="Fatima Hernandez" />
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                      <img src={yamilet_mini} alt="Yamilet Magaña" />
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                      <img src={melanie_mini} alt="Melanie Elias" />
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">
                      <img src={tatiana_mini} alt="Melanie Elias" />
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button className="" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
                
              <div className="infoContainer">
                <div className="carousel-inner">

                  {/*********** Info 1 **********/}
                  <div className="carousel-item active">
                      <div className="elemento-dev">
                          <div className="info-desarrolladoras">

                              <h4 className="desarrolladoraName">Fátima Hernández</h4>

                              <div className="accordion" id="accordionExample">
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingOne">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Educación
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <strong>Estudios Superiores</strong><br />
                                                  <p>Universidad Centroamericana Jose Simeon Cañas</p>
                                                  <ul>
                                                      <li>Graduada/ Tecnico en produccion Multimedia (2020/2022)</li>
                                                  </ul>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Estudios Complementarios</strong>
                                                  <p>Bootcamp de Programación </p>
                                                  <ul>
                                                      <li>Full Stack junior/Kodigo(Agosto 2022/Marzo 2023)</li>
                                                  </ul>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Educación Básica</strong><br />
                                                  <p>Complejo Educativo Soldado Oscar Antonio Ortiz Reyes</p>
                                                  <ul>
                                                      <li>Bachillerato Técnico Contable (2017/2019)</li>
                                                  </ul>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Idiomas</strong><br />
                                                  <ul>
                                                      <li>Español (Nativo)</li>
                                                      <li>Inglés (Intermedio)</li>
                                                  </ul>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingTwo">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              Habilidades
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <ul>
                                                      <li>Responsable</li>
                                                      <li>Organizada</li>
                                                      <li>Perseverante</li>
                                                      <li>Trabajo en equipo</li>
                                                  </ul>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingThree">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Experiencia laboral
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <strong>TECHO El Salvador </strong><br />
                                                  <p>(Julio-Noviembre 2021)</p> <br />
                                                  <p>Funciones:</p>
                                                  <ul>
                                                      <li>Community Manager</li>
                                                      <li>Manejo de Redes Sociales</li>
                                                      <li>Creación de contenido multimedia</li>
                                                  </ul>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Asociación de Scouts de El Salvador  </strong><br />
                                                  <p>(Febrero-Agosto 2022)</p> <br />
                                                  <p>Funciones:</p>
                                                  <ul>
                                                      <li>Asistente de comunicaciones</li>
                                                      <li>Creación de contenido multimedia</li>
                                                      <li>Producción de contenido</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <div className="imagen-desarrolladoras">
                              <img src={ sarai } alt="Fátima Hernández" />
                              <div className="aboutMe">
                                  <p>Soy una persona creativa, proactiva y con interés en la tecnología.
            Estudiante de Produccion Multimedia y Programación, áreas que deseo complementar entre sí.</p>
                              </div>
                          </div>
                      </div>  
                  </div>

                  {/********** Info 2 **********/}
                  <div className="carousel-item">
                      <div className="elemento-dev">
                          <div className="info-desarrolladoras">

                              <h4 className="desarrolladoraName">Yamilet Magaña</h4>

                              <div className="accordion" id="accordionExample">
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingOne">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Educación
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <strong>Estudios Complementarios</strong><br />
                                                  <p>Bootcamp de Programación</p>
                                                  <ul>
                                                      <li>Full Stack junior/Kodigo(Agosto 2022/Febrero 2023)</li>
                                                  </ul>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Educación Básica</strong><br />
                                                  <p>Centro Escolar INSA</p>
                                                  <ul>
                                                      <li>Bachillerato General 2010-2011</li>
                                                  </ul>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Idiomas</strong>
                                                  <ul>
                                                      <li>Español (Nativo)</li>
                                                      <li>Inglés (Intermedio)</li>
                                                  </ul>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingTwo">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              Habilidades
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <ul>
                                                      <li>Sociable</li>
                                                      <li>Trabajo en equipo</li>
                                                      <li>Perseverante</li>
                                                      <li>Actitud de Servicio</li>
                                                  </ul>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingThree">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Experiencia laboral
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <strong>Cobranza Banco Azteca </strong><br />
                                                  <p>(2016-2017)</p> <br />
                                                  <p>Funciones:</p>
                                                  <ul>
                                                      <li>Atencion al cliente</li>
                                                  </ul>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Circus El Salvador </strong><br />
                                                  <p>(2021-actualmente)</p> <br />
                                                  <p>Funciones:</p>
                                                  <ul>
                                                      <li>Manejo de Redes Sociales</li>
                                                      <li>Atencion al Cliente</li>
                                                      <li>Cobros</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <div className="imagen-desarrolladoras">
                              <img src={ yamilet } alt="Yamilet Magaña" />
                              <div className="aboutMe">
                                  <p>Soy una persona con entusiasmo por aprender, proactiva y dinamica. Estudiante de programacion, con mucho deseo de crecer en esta area. Me gusta el trabajar en equipo.</p>
                              </div>
                          </div>
                      </div> 
                  </div>

                  {/********** Info 3 **********/}
                  <div className="carousel-item">
                      <div className="elemento-dev">
                          <div className="info-desarrolladoras">

                              <h4 className="desarrolladoraName">Melanie Elías</h4>

                              <div className="accordion" id="accordionExample">
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingOne">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Educación
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <strong>Estudios Complementarios</strong><br />
                                                  <p>Bootcamp de Programación </p> <br />
                                                  <p>Full Stack Junior / Kodigo (Agosto 2022 / Febrero 2023)</p>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Estudio de idioma Coreano</strong><br />
                                                  <p>Instituto Rey Sejong (2022) </p>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Educación Básica</strong><br />
                                                  <p>Universidad Don Bosco</p> <br />
                                                  <p>Bachillerato General en línea (2021)</p>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Idiomas</strong><br />
                                                  <p>Español (Nativo)</p> <br />
                                                  <p>Inglés (Intermedio)</p>
                                                  <br />
                                                  <p>Coreano (Basico II) </p>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingTwo">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              Habilidades
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <ul>
                                                      <li>Responsabilidad</li>
                                                      <li>Analítica y resolución de problemas</li>
                                                      <li>Trabajo en Equipo</li>
                                                      <li>Autodidacta</li>
                                                  </ul>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingThree">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Experiencia laboral
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <strong>Grupo Scout 58 </strong><br />
                                                  <p>(Febrero 2022)</p> <br />
                                                  <p>Funciones:</p>
                                                  <ul>
                                                      <li>Asistente administrativa</li>
                                                  </ul>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Proactive Solutions LATAM</strong><br />
                                                  <p>(2021)</p> <br />
                                                  <p>Funciones:</p>
                                                  <ul>
                                                      <li>Asistente administrativa</li>
                                                      <li>Creación de contenido y material de marketing</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <div className="imagen-desarrolladoras">
                              <img src={ melanie } alt="Melanie Elías" />
                              <div className="aboutMe">
                                  <p>Soy una persona con interés en creación de sistemas para la automatización de procesos, creativa y crítica.
            Estudiante de programación e idiomas con los cuales deseo ampliar el alcance de los proyectos en los que trabaje.</p>
                              </div>
                          </div>
                      </div> 
                  </div>

                  {/********** Info 4 **********/}
                  <div className="carousel-item">
                      <div className="elemento-dev">
                          <div className="info-desarrolladoras">

                              <h4 className="desarrolladoraName">Tatiana Iraheta</h4>

                              <div className="accordion" id="accordionExample">
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingOne">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Educación
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <strong>Estudios Superiores</strong><br />
                                                  <p>ITCA-MEGATEC</p> <br />
                                                  <p>Graduada/ TEC. EN ING. DE SISTEMAS INFORMATICOS (2014/2015)</p>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Estudios Complementarios</strong><br />
                                                  <p>Bootcamp de Programación </p>
                                                  <br />
                                                  <p>Full Stack junior/Kodigo(Agosto 2022/Febrero 2023)</p>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Educación Básica</strong><br />
                                                  <p>Instituto Nacional Simon Bolivar</p> <br />
                                                  <p>Bachillerato Industrial en Electronica (2010/2013)</p>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Idiomas</strong><br />
                                                  <p>Español (Nativo)</p> <br />
                                                  <p>Inglés (Basico)</p>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingTwo">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              Habilidades
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <ul>
                                                      <li>Responsable</li>
                                                      <li>Organizada</li>
                                                      <li>Perseverante</li>
                                                      <li>Trabajo en Equipo</li>
                                                  </ul>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingThree">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Experiencia laboral
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <strong>AGENCIA NOVOA</strong><br />
                                                  <p>(Enero-Diciembre 2017)</p> <br />
                                                  <p>Funciones:</p>
                                                  <ul>
                                                      <li>Soporte Tecnico</li>
                                                      <li>Mantenimiento de computadoras</li>
                                                      <li>Cambio de software (S.O)</li>
                                                  </ul>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>AEROMAN</strong><br />
                                                  <p>(Enero 2018 - a la fecha)</p> <br />
                                                  <p>Funciones:</p>
                                                  <ul>
                                                      <li>Avionics Mechanic</li>
                                                      <li>Aircraft maintenance fleet A320 and A330</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <div className="imagen-desarrolladoras">
                              <img src={ tatiana } alt="Tatiana Iraheta" />
                              <div className="aboutMe">
                                  <p>Soy una persona que me encanta la tecnologia, le apasiona apreder mas sobre el tema, me gusta mucho la programacion y base de datos.</p>
                              </div>
                          </div>
                      </div> 
                  </div>

                  {/********** Info 5 **********/}
                  <div className="carousel-item">
                      <div className="elemento-dev">
                          <div className="info-desarrolladoras">

                              <h4 className="desarrolladoraName">Flor</h4>

                              <div className="accordion" id="accordionExample">
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingOne">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              Educación
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <strong>Estudios Superiores</strong><br />
                                                  <p>Universidad de El Salvador</p> <br />
                                                  <p>Ingenieria química (en proceso)</p>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Estudios Complementarios</strong><br />
                                                  <p>Bootcamp de Programación </p>
                                                  <br />
                                                  <p>Full Stack junior/Kodigo(Agosto 2022/Febrero 2023)</p>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Educación Básica</strong><br />
                                                  <p>Complejo  educativo republica del Japón</p> <br />
                                                  <p>Bachillerato general</p>
                                              </div>

                                              <div className="infoSpace">
                                                  <strong>Idiomas</strong><br />
                                                  <p>Español (Nativo)</p> <br />
                                                  <p>Inglés (Intermedio)</p>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingTwo">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              Habilidades
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <ul>
                                                      <li>Comunicación efectiva</li>
                                                      <li>Responsabilidad</li>
                                                      <li>Habilidades interpersonales</li>
                                                  </ul>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingThree">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              Experiencia laboral
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <div className="infoSpace">
                                                  <strong>Estudio y ejecución de diferentes proyectos durante el bootcamp de Full Stack Junior</strong><br />
                                                  <br />
                                                  <p>Funciones:</p>
                                                  <ul>
                                                      <li>Pagina web de Anapsis (Frontend)</li>
                                                      <li>Pagina web de sitios turísticos de El Salvador (Frontend)</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          <div className="imagen-desarrolladoras">
                              <img src={ tatiana } alt="Flor" />
                              <div className="aboutMe">
                                  <p>Programadora Junior con capacidad de análisis y funcionar tanto de forma independiente como en un equipo. He desarrollado diferentes proyectos frontend con éxito.</p>
                              </div>
                          </div>
                      </div> 
                  </div>


                </div>
              </div>
                

            </div>
          </div>
        </div>

      </div>
    )
  };
    