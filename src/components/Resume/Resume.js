import React from "react";
import "./Resume.scss";

const profile = [
  {
    id: 1,
    sectionName: "Educación",
    year: "2007 - 2009",
    title: "Tecnico en computacíon",
    site: "INTAE, San Pedro Sula, Honduras"
  },
  {
    id: 2,
    sectionName: "Experiencia Laboral",
    year: "Marzo 2019 - Septiembre 2019",
    title: "Diseñadora Web",
    site: "BaboonLab"
  }
];

const data = [
  {
    sectionName: "Contacto",
    items: ["hola@bkaguilar.com", "bkaguilar.com", "t.me/bkaguilar"]
  },
  {
    sectionName: "Habilidades",
    items: [
      "Control de versiones GIT",
      "Docker",
      "React",
      "Javascript",
      "HTML5",
      "CSS3",
      "NodeJS",
      "Suite Adobe(Illustrator, Photoshop, XD, Lightroom)"
    ]
  }
];

class Resume extends React.Component {
  render() {
    let profileSections = profile.map((item, index) => {
      return <SumaryProfile key={item.id} item={item} />;
    });

    let dataSections = data.map((item, index) => {
      return <TechnicalData key={index} item={item} />;
    });
    return (
      <main className="Resume">
        <header className="Resume__header">
          <h1 className="Resume__header__name">Bessy G. Aguilar</h1>
          <h2 className="Resume__header__title">Front end en proceso....</h2>
          <p className="Resume__header__description">
            Engineer valued for driving high-performance accessible web
            experiences. I design quality, user-friendly and scalable products
            regardless of stack.
          </p>
        </header>
        <article className="Resume__article">{profileSections}</article>
        <aside className="Resume__dates">{dataSections}</aside>
        <section className="loading"></section>
      </main>
    );
  }
}

export default Resume;

class SumaryProfile extends React.Component {
  render() {
    return (
      <section className="Section">
        <h3 className="Section__title">{this.props.item.sectionName}</h3>
        <ul className="Section__list">
          <li className="Section____list__item">
            <span className="Section__list__item__year">
              {this.props.item.year}
            </span>
            <div className="Section__list__item__wrapper">
              {this.props.item.title}
              <span className="Section__list__item__wrapper__site">
                {this.props.item.site}
              </span>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

class TechnicalData extends React.Component {
  render() {
    let list = this.props.item.items.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return (
      <section className="TechnicalData">
        <h3 className="TechnicalData__title">{this.props.item.sectionName}</h3>
        <ul>{list}</ul>
      </section>
    );
  }
}
