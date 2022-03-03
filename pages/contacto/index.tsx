import { Form } from "react-bootstrap";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Contact() {
  return (
    <div className="page">
      <Header activeItem="contact" />

      <div className="container  p-4">
        <div className="row d-flex  justify-content-between">
          <div className="col-12  col-lg-4">
            <h3 className="text-primary">Contacto</h3>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
          <div className="pt-4 col-12 col-lg-4 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
            <div className="contact-details-item mb-3">
              <strong className="mb-2 d-block">Contáctenos en</strong>

              <p>
                Dirección: 759 SW Fed Hwy suite 304A Stuart FL 34994 · Estados
                Unidos "Electromovilidad cuando Quieras" Colombia · Ecuador ·
                Bolivia
              </p>
              <p className="mt-1 mb-1">(+57) 3243222725</p>
              <p className="mt-1 mb-1">(+57) 3243222724</p>
              <p>somos@citybestapp.com</p>
            </div>

            <div className="contact-details-item mb-3">
              <strong className="mb-2 d-block">Nuestras Redes Sociales</strong>

              <div className="social-contact">
                {/* <span className="social-icon">
                  <i className="fab fa-facebook"></i>
                </span> */}

                <span className="social-icon">
                  <i className="fab fa-youtube"></i>
                </span>
                {/* <i className="fab fa-linkedin"></i> */}
                <span className="social-icon">
                  <img src="img/linkedin.svg" alt="" className="" />
                </span>

                <span className="social-icon">
                  <img src="img/instagram.svg" alt="" className="" />
                </span>
              </div>
            </div>

            <div className="contact-details-item mb-3">
              <strong className="mb-2 d-block">Horario de atención</strong>

              <p>Lunes a Viernes, 09:00 a 18:00 hrs</p>
              <p>Sábado, 09:00 a 12:00 hrs</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ContactForm() {
  return (
    <div className="contact-form">
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Introduce tu nombre" />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce tu número telefónico"
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="text" placeholder="ejemplo@correo.com" />
        </Form.Group>

        <Form.Group controlId="comment">
          <Form.Label>Comentario</Form.Label>
          <Form.Control type="text-area" placeholder="Escribe tu comentario" />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="btn-outline" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
}
