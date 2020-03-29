import React from "react";
import { FormattedMessage } from "react-intl";
import { RESUME_PROFILE, RESUME_DATA, LOGO } from "../../constants";
import profile from "../../images/profile.jpg";
import "./Resume.scss";

class Resume extends React.Component {
  componentDidMount() {
    document.title = "Bessy Aguilar: Resume";
  }

  render() {
    let profileSections = RESUME_PROFILE.map((item, index) => {
      return <SumaryProfile key={item.id} item={item} />;
    });

    let dataSections = RESUME_DATA.map((item, index) => {
      return <TechnicalData key={index} item={item} />;
    });
    return (
      <main className="Resume">
        <header className="Resume__header">
          <h1 className="Resume__header__name" aria-labelledby="header">
            Bessy Karina Galdámez Aguilar
          </h1>
          <h2 className="Resume__header__title" aria-labelledby="header">
            <FormattedMessage id="resume.title" />
          </h2>
          <span>
            <FormattedMessage id="resume.location" />
          </span>
          <a
            href="./cv.pdf"
            className="Resume__header__link"
            title="Curriculum PDF"
            alt="PDF"
            download="CV_BessyAguilar"
          >
            <span className="emoji" role="img" aria-label="download">
              ⬇
            </span>
            <FormattedMessage id="resume.download" />
          </a>
        </header>
        <div className="Resume__description">
          <h3
            className="Resume__description__title"
            aria-labelledby="Description title"
          >
            <FormattedMessage id="resume.profile" />
          </h3>
          <figure className="Resume__description__photo">
            <img src={profile} alt="perfil" />
          </figure>
          <p
            className="Resume__description__content"
            aria-labelledby="Description"
          >
            <FormattedMessage id="resume.description" />
          </p>
        </div>
        <div className="Resume__main">
          <aside className="Resume__main__data">{dataSections}</aside>
          <article className="Resume__main__profile">{profileSections}</article>
        </div>
        <footer className="Resume__footer">{LOGO}</footer>
        <section className="loading"></section>
      </main>
    );
  }
}

export default Resume;

class SumaryProfile extends React.Component {
  render() {
    let itemsSumary = this.props.item.items.map(item => {
      return (
        <li
          className="SumaryProfile__list__item"
          aria-labelledby="SumaryProfile"
        >
          <h4 className="SumaryProfile__list__item__title">{item.title}</h4>
          <span className="SumaryProfile__list__item__site">{item.site}</span>
          <span className="SumaryProfile__list__item__year">{item.year}</span>
          {item.description && (
            <div className="SumaryProfile__list__item__description">
              {item.description.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          )}
        </li>
      );
    });

    return (
      <section className="SumaryProfile">
        <h3
          className="SumaryProfile__title"
          aria-labelledby="SumaryProfile Header"
        >
          {this.props.item.sectionName}
        </h3>
        <ul
          className="SumaryProfile__list"
          aria-labelledby="SumaryProfile container"
        >
          {itemsSumary}
        </ul>
      </section>
    );
  }
}

class TechnicalData extends React.Component {
  render() {
    let list = this.props.item.items.map((item, index) => {
      return (
        <li
          className="TechnicalData__list__item"
          key={index}
          aria-labelledby="TechnicalData"
        >
          {item}
        </li>
      );
    });
    return (
      <section className="TechnicalData">
        <h3 className="TechnicalData__title">{this.props.item.sectionName}</h3>
        <ul
          className="TechnicalData__list"
          aria-labelledby="TechnicalData container"
        >
          {list}
        </ul>
      </section>
    );
  }
}
