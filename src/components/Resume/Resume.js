import React from "react";
import "./Resume.scss";

class Resume extends React.Component {
  render() {
    return (
      <main className="Resume">
        <header className="Resume__header">
          <h1 className="Resume__header__name">Bessy G. Aguilar</h1>
          <h2 className="Resume__header__title">
            Front end en proceso....Zaragoza, España
          </h2>
          <p className="Resume__header__description">
            Engineer valued for driving high-performance accessible web
            experiences. I design quality, user-friendly and scalable products
            regardless of stack.
          </p>
        </header>
        <article className="Resume__article">
          <section className="Resume__article__contact">
            <h3 className="title">Contacto</h3>
            <ul>
              <li>hola@bkaguilar.com</li>
              <li>bkaguilar.com</li>
              <li>//t.me/bkaguilar</li>
              <li>Zaragoza, España</li>
            </ul>
          </section>
          <section className="Resume__article__education">
            <h3 className="title">Educación</h3>
          </section>
          <section className="Resume__article__experience">
            <h3 className="title">Experiencia Laboral</h3>
          </section>
        </article>
        <aside className="Resume__dates">
          <section className="Resume__dates__contact">
            <h3 className="title">Contacto</h3>
            <ul>
              <li>hola@bkaguilar.com</li>
              <li>bkaguilar.com</li>
              <li>//t.me/bkaguilar</li>
            </ul>
          </section>
          <section className="Resume__dates__skills">
            <h3 className="title">Habilidades</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>NodeJS</li>
              <li>Suite Adobe(Illustrator, Photoshop, XD, Lightroom)</li>
            </ul>
          </section>
        </aside>
      </main>
    );
  }
}

export default Resume;
