import React from "react";
import { RESUME_PROFILE, RESUME_DATA } from "../../constant";
import profile from "../../images/perfil.jpg";
import "./Resume.scss";

class Resume extends React.Component {
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
          <h1 className="Resume__header__name">Bessy G. Aguilar</h1>
          <h2 className="Resume__header__title">Front end en proceso....</h2>
        </header>
        <div className="Resume__description">
          <h3 className="Resume__description__title">Perfil</h3>
          <figure className="Resume__description__photo">
            <img src={profile} alt="perfil" />
          </figure>
          <p className="Resume__description__content">
            Engineer valued for driving high-performance accessible web
            experiences. I design quality, user-friendly and scalable products
            regardless of stack.
          </p>
        </div>
        <div className="Resume__main">
          <aside className="Resume__data">{dataSections}</aside>
          <article className="Resume__profile">{profileSections}</article>
        </div>

        <section className="loading"></section>
      </main>
    );
  }
}

export default Resume;

class SumaryProfile extends React.Component {
  render() {
    return (
      <section className="SumaryProfile">
        <h3 className="SumaryProfile__title">{this.props.item.sectionName}</h3>
        <ul className="SumaryProfile__list">
          <li className="SumaryProfile__list__item">
            <h4 className="SumaryProfile__list__item__title">
              {this.props.item.title}
            </h4>
            <span className="SumaryProfile__list__item__site">
              {this.props.item.site}
            </span>
            <span className="SumaryProfile__list__item__year">
              {this.props.item.year}
            </span>
          </li>
        </ul>
      </section>
    );
  }
}

class TechnicalData extends React.Component {
  render() {
    let list = this.props.item.items.map((item, index) => {
      return (
        <li className="TechnicalData__list__item" key={index}>
          {item}
        </li>
      );
    });
    return (
      <section className="TechnicalData">
        <h3 className="TechnicalData__title">{this.props.item.sectionName}</h3>
        <ul className="TechnicalData__list">{list}</ul>
      </section>
    );
  }
}
