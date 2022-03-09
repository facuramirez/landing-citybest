import { useMediaQuery } from "@react-hook/media-query";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const slides = {

  "news-10": {
    img: "https://i1.wp.com/revistadiners.com.co/wp-content/uploads/2021/08/citybest_1200x800_2021.jpg?fit=1024%2C684&ssl=1",
    title:
      "La chilena CityBest llegará a España en 2023 como rival de Uber y Cabify",
    description:
      "El transporte urbano e interurbano de proximidad sigue sumando jugadores. La chilena CityBest, que opera en varios países de Latinoamérica como Argentina, Perú, Bolivia, Colombia y próximamente Brasil, desembarcará en España en 2023, según confirma a elEconomista su CEO, Gonzalo Casanga.",
    source: "El Economista",
    url: "https://www.eleconomista.es/empresas-finanzas/noticias/11570311/01/22/La-chilena-CityBest-llegara-a-Espana-en-2023-como-rival-de-Uber-y-Cabify.html",
    footer: (
      <p className="details-footer">
        Fuente: El Economista <br /> 17/01/2022 <br />
        España
      </p>
    ),
  },

  "news-11": {
    img: "https://www.semana.com/resizer/4ln-NBjgLMSmoK55luzxn9TFLhs=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/OKITZOU5XFGTHD57L4U4M4SZFM.jpg",
    title: "La nueva app de transporte ecoamigable que llega a Colombia",
    description: "Para Gonzalo Casanga, el chileno creador de la aplicación, el gran valor innovador de esta propuesta es un completo ecosistema que les facilitará la logística a conductores y usuarios, pues involucra, además de la alianza inicial con los hoteles, que asegurará el acercamiento a los clientes, la infraestructura tecnológica, un parque automotor propio y privado y la instalación de puntos de recarga. “Si bien hay grandes avances en políticas públicas e incentivos en movilidad eléctrica, en los puntos de recargas es donde vemos el mayor reto. Hace falta más ejecución y menos webinars por parte de las empresas encargadas”, indicó Casanga.",
    source: "Semana",
    url: "https://www.semana.com/hablan-las-marcas/articulo/citybest-la-app-de-transporte-urbano-con-vehiculos-ecologicos-que-llega-a-colombia/202200/",
    footer: (
      <p className="details-footer">
        Fuente: Semana <br /> 17/02/2020 <br />
        Colombia
      </p>
    ),
  },
  "news-1": {
    img: "https://i1.wp.com/revistadiners.com.co/wp-content/uploads/2021/08/citybest_1200x800_2021.jpg?fit=1024%2C684&ssl=1",
    title: "El pecado es querer ser Uber. CEO de CityBest ",
    description:
      "Gonzalo Casanga, presidente de CityBest, habló con Diners sobre esta nueva solución de transporte amigable con el ambiente que llega a Colombia, sus alianzas y proyecciones.",
    source: "revistadiners",
    url: "https://revistadiners.com.co/estilo-de-vida/tecnologia/94333_el-pecado-es-querer-ser-uber-ceo-de-citybest/",
    footer: (
      <p className="details-footer">
        Fuente: revistadiners <br /> 27/08/2021 <br /> Colombia
      </p>
    ),
  },
  "news-2": {
    img: "https://elcomercio.pe/resizer/EVuGQiQRB35xxdE1arui3TjPIEI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QE4PFHQTIJCBRHOGYBXHZKBE7A.JPG",
    title:
      "Gonzalo Casanga, creador de CityBest: La empatía comercial es clave para comprender e innovar",
    description:
      "Una nueva alternativa de transporte urbano llegó a Paraguay. Gonzalo Casanga, CEO y director de Citybest, destacó que la aplicación estará disponible al público para finales de julio.",
    source: "elcomercio",
    url: "https://elcomercio.pe/publirreportaje/gonzalo-casanga-creador-de-citybest-la-empatia-comercial-es-clave-para-comprender-e-innovar-noticia/",
    footer: (
      <p className="details-footer">
        Fuente: elcomercio <br /> 18/10/2021 <br /> Perú
      </p>
    ),
  },
  "news-3": {
    img: "https://elcomercio.pe/resizer/38HoBcbfNVThgjOfKckO1O_6S1g=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3VUTBOQDBZHVXGGTY4U5KINCNE.jpg",
    title: "CityBest: la innovadora app de movilidad ecoamigable llega al Perú",
    description:
      "Citybest proveerá viajes más ecoamigables, gracias a su flota de automóviles a gas, eléctricos e híbridos. Conversamos con Gonzalo Casanga, presidente de CityBest, acerca de esta nueva solución de transporte.",
    source: "elcomercio",
    url: "https://elcomercio.pe/publirreportaje/citybest-la-innovadora-app-de-movilidad-ecoamigable-llega-al-peru-noticia/",
    footer: (
      <p className="details-footer">
        Fuente: elcomercio <br /> 13/09/2021 <br /> Perú
      </p>
    ),
  },
  "news-4": {
    img: "https://www.eltiempo.com/files/article_main/files/crop/uploads/2021/08/31/612e77023a813.r_1630436125808.0-31-1280-670.jpeg",
    title: "Llega a Colombia Citybest, la app que favorece la electromovilidad",
    description:
      "La aplicación, que funcionará desde noviembre, contará con una flota de vehículos 100% ecoamigables.",
    source: "elcomercio",
    url: "https://www.eltiempo.com/contenido-comercial/llega-a-colombia-citybest-la-app-que-favorece-la-electromovilidad-614618",
    footer: (
      <p className="details-footer">
        Fuente: elcomercio <br /> 31/09/2021 <br /> Colombia
      </p>
    ),
  },
  "news-5": {
    img: "img/news-3.png",
    title: "Nace una nueva opción de movilidad con Citybest",
    description:
      "Una nueva alternativa de transporte urbano llegó a Paraguay. Gonzalo Casanga, CEO y director de Citybest, destacó que la aplicación estará disponible al público para finales de julio.",
    source: "5dias",
    url: "https://www.5dias.com.py/negocios/nace-una-nueva-opcion-de-movilidad-con-citybest",
    footer: (
      <p className="details-footer">
        Fuente: 5dias <br /> 9/7/2020 <br /> Paraguay
      </p>
    ),
  },
  "news-6": {
    img: "img/news-1.png",
    title:
      "Esta firma de servicio de transporte pretende cambiar las reglas del juego",
    description:
      "La aplicación Taxicity funciona hace un año y medio en Chile, con una excelente recepción de parte de sus 42.000 usuarios, según Gonzalo Casanga, CEO de Citybest. Y a partir de diciembre la compañía pretende estar operativa en Paraguay.",

    url: "https://infonegocios.com.py/y-ademas/esta-firma-de-servicio-de-transporte-pretende-cambiar-las-reglas-del-juego",
    source: "Infonegocios",
    footer: (
      <p className="details-footer">
        Fuente: Infonegocios <br />
        23/10/2019 <br />
        Paraguay
      </p>
    ),
  },
  "news-7": {
    img: "img/news-2.jpeg",

    title:
      "Citybest alista su ingreso al país para competir con Uber e inDriver",
    description: `La expansión de las plataformas tecnológicas de ride-hailing o vehículos de alquiler con conductor para viajes (principalmente) urbanos llevan a los operadores a enfilar sus estrategias para pugnar por el mercado del eje troncal y eclipsar a un rezagado sector de radiotaxis al que le cuesta renovarse, según lo que se percibe en las ciudades del país.`,
    url: "https://eldeber.com.bo/edicion-impresa/citybest-alista-su-ingreso-al-pais-para-competir-con-uber-e-indriver_162674",
    footer: (
      <p className="details-footer">
        Fuente: El Deber <br /> 14/1/2020 <br /> Bolivia
      </p>
    ),
    source: "El deber",
  },

  "news-8": {
    img: "img/news-4.png",
    title:
      "Una tercera aplicación de viajes, tipo Uber, entrará al mercado en 45 días",
    description:
      "Citybest es el nombre la aplicación que se lanzará al mercado hacia finales de marzo y que busca convertirse en el “mejor segundo” en el negocio de las aplicaciones de intermediación de viajes, tipo Uber y Muv",
    source: "ABC Noticias",
    url: "https://www.abc.com.py/edicion-impresa/economia/2020/02/12/una-tercera-aplicacion-de-viajes-tipo-uber-entrara-al-mercado-en-45-dias/",
    footer: (
      <p className="details-footer">
        Fuente: ABC Noticias <br /> 14/2/2020 <br /> Paraguay
      </p>
    ),
  },
  "news-9": {
    img: "img/news-5.png",
    title:
      "Con nueva app de movilidad Citybest, conductores se llevan el 90% del viaje",
    description:
      "La más reciente aplicación de movilidad instalada en el país, Citybest, que tendrá su lanzamiento próximamente, hace pública la información de que contará con paquetes especiales de ayuda para los socios conductores, como ser un cobro único de G. 64.000 por mes, por lo que consideran que se convertirá en la mejor alternativa para generar ingresos.",
    source: "La Nación",
    url: "https://www.lanacion.com.py/negocios/2020/08/02/con-nueva-app-de-movilidad-citybest-conductores-se-llevan-el-90-del-viaje/",
    footer: (
      <p className="details-footer">
        Fuente: La Nación <br /> 2/8/2020 <br />
        Paraguay
      </p>
    ),
  },

};

export default function NewsCarousel() {
  const NewsSlide = ({ id, title, image }) => {
    const details = getDetails(id);

    return (
      <div key={id}>
        <img className="new-carousel-img" src={image} alt="" />
        <p className="legend">
          <strong className="title">{title}</strong>

          <p>Fuente: {details.source}</p>

          <a className="text-secondary" href={details.url} target="BLANK">
            Ver más
          </a>
        </p>
      </div>
    );
  };

  const customRenderThumb = (children) =>
    children.map((item) => {
      const details = getDetails(item.props.id);
      return (
        <div className="news-caption">
          <img src={details.img} />

          <div className="content">
            <strong className="d-block mt-2">{details.title}</strong>
            <p>{details.description}</p>

            <div className="d-flex ">
              <a className="text-secondary" href={details.url} target="BLANK">
                <strong>Ver más</strong>
              </a>
            </div>

            {details.footer}
          </div>
        </div>
      );
    });

  const getDetails = (id) => {
    return slides[id];
  };

  const isMobile = useMediaQuery("(min-width: 0px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const NewsItems = () => {
    console.log("slides", slides);

    return (
      <div className="news-items">
        {Object.keys(slides).map((e) => {
          const item = slides[e];
          return (
            <div key={e} className="news-item">
              <img src={item.img} />

              <div className="content">
                <strong className="title">{item.title}</strong>
                <p className="desc">{item.description}</p>

                <div className="d-flex mb-3">
                  <a className="text-secondary" href={item.url} target="BLANK">
                    <strong>Ver más</strong>
                  </a>
                </div>

                {item.footer}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="d-block d-xl-none">
        <NewsItems />
      </div>
      <div className="d-none d-xl-block">
        <Carousel renderThumbs={customRenderThumb}>


          <NewsSlide
            id="news-11"
            title="La nueva app de transporte ecoamigable que llega a Colombia"
            image="https://www.semana.com/resizer/4ln-NBjgLMSmoK55luzxn9TFLhs=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/OKITZOU5XFGTHD57L4U4M4SZFM.jpg"
          />

          <NewsSlide
            id="news-10"
            title="La chilena CityBest llegará a España en 2023 como rival de Uber y Cabify"
            image="https://i1.wp.com/revistadiners.com.co/wp-content/uploads/2021/08/citybest_1200x800_2021.jpg?fit=1024%2C684&ssl=1"
          />

          <NewsSlide
            id="news-1"
            title="El pecado es querer ser Uber. CEO de CityBest"
            image="https://i1.wp.com/revistadiners.com.co/wp-content/uploads/2021/08/citybest_1200x800_2021.jpg?fit=1024%2C684&ssl=1"
          />

          <NewsSlide
            id="news-2"
            title="Gonzalo Casanga, creador de CityBest: La empatía comercial es clave para comprender e innovar"
            image="https://elcomercio.pe/resizer/EVuGQiQRB35xxdE1arui3TjPIEI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QE4PFHQTIJCBRHOGYBXHZKBE7A.JPG"
          />

          <NewsSlide
            id="news-3"
            title="Citybest alista su ingreso al país para competir con Uber e inDriver"
            image="https://elcomercio.pe/resizer/38HoBcbfNVThgjOfKckO1O_6S1g=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3VUTBOQDBZHVXGGTY4U5KINCNE.jpg"
          />

          <NewsSlide
            id="news-4"
            title="Llega a Colombia Citybest, la app que favorece la electromovilidad"
            image="https://www.eltiempo.com/files/article_main/files/crop/uploads/2021/08/31/612e77023a813.r_1630436125808.0-31-1280-670.jpeg"
          />

          <NewsSlide
            id="news-5"
            title="Nace una nueva opción de movilidad con Citybest"
            image="img/news-3.png"
          />

          <NewsSlide
            id="news-6"
            title="Esta firma de servicio de transporte pretende cambiar las reglas del
          juego"
            image="img/news-1.png"
          />

          <NewsSlide
            id="news-7"
            title="Citybest alista su ingreso al país para competir con Uber e inDriver"
            image="img/news-2.jpeg"
          />

          <NewsSlide
            id="news-8"
            title="Una tercera aplicación de viajes, tipo Uber, entrará al mercado en 45
            días"
            image="img/news-4.png"
          />

          <NewsSlide
            id="news-9"
            title="Con nueva app de movilidad Citybest, conductores se llevan el 90% del
            viaje"
            image="img/news-5.png"
          />
        </Carousel>
      </div>
    </div>
  );
}
