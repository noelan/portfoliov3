import React from "react";
import Fade from "react-reveal/Fade";

const MyProjects = props => {
  // Title, description, img , fade direction

  return (
    <>
      <div class="myProject" id="project">
        <h1 class="righteous myWhite text-center font-weight-bold p-5">
          Expériences et projets
        </h1>
        <div class="container">
          <div class="row justify-content-center ">
            <div class="col-lg-8 col-sm-12">
              <h3 class="aPropos text-center">Stage chez Senzu ( 1 mois )</h3>
              <p>
                Création d'une application Android permettant d'utiliser les
                données des puces NFC.
              </p>
              <p>Prise en main du logiciel Android studio</p>
              <div class="text-center">
                <p class="btn btn-primary">Android Studio</p>
                <p class="btn btn-secondary">Java</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <img
                alt="img"
                class="myImg"
                src="https://images.pexels.com/photos/226664/pexels-photo-226664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
          </div>
          <hr />
          <div class="row justify-content-center">
            <div class="col-lg-8 col-sm-12">
              <h3 class="aPropos text-center">Tutoriels book !</h3>
              <p>Site 'bac à sable' regroupant des tutoriels vidéos !</p>
              <p>
                Mise en place d'une API (Api Platform) et un rendu en React
                (Javascript)
              </p>
              <div class="text-center">
                <p class="btn btn-primary">Smyfony</p>
                <p class="btn btn-secondary">Api Platform</p>
                <p class="btn btn-warning">React</p>
                <a href="https://tutoriels-book.herokuapp.com/#/">
                  <p class="text-center">Celui-ci est en ligne !</p>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <a href="https://tutoriels-book.herokuapp.com/#/">
                <img
                  alt="img"
                  class="myImg"
                  src="https://zupimages.net/up/20/02/dkmd.png"
                />
              </a>
            </div>
          </div>
          <hr />
          <div class="row justify-content-center">
            <div class="col-lg-8 col-sm-12">
              <h3 class="aPropos text-center">Funny Shop</h3>
              <p>
                Site de E commerce 'bac à sable' créé pour parfaire mes
                compétences et principalement avec le framework Symfony.
              </p>
              <p>
                Mise en place de mail automatique lors de l'inscription,
                interface d'administration (CRUD), panier d'achat actuellement
                en constante évolution !
              </p>
              <a href="https://cloth-a.herokuapp.com/">
                <p class="text-center">Celui-ci est en ligne !</p>
              </a>
              <div class="text-center">
                <p class="btn btn-primary">Symfony</p>
                <p class="btn btn-success">Twig</p>
                <p class="btn btn-info">Doctrine</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <a href="https://cloth-a.herokuapp.com/">
                <img
                  alt="img"
                  class="myImg"
                  src="https://zupimages.net/up/20/02/nx8t.png"
                />
              </a>
            </div>
          </div>
          <hr />
          <div class="row justify-content-center">
            <div class="col-lg-8 col-sm-12">
              <h3 class="aPropos text-center">Event Team</h3>
              <p>
                Site réalisé en cours de formation permettant de gerer le
                planning des utilisateur 'Google Agenda like'.
              </p>
              <p>
                Mise en place du Modèle Vue Controlleur, travail en équipe (4
                personnes)en méthode agile.
              </p>
              <div class="text-center">
                <p class="btn btn-primary">PHP</p>
                <p class="btn btn-success">Scrum</p>
                <p class="btn btn-secondary">Git</p>
                <p class="btn btn-warning">Js Vanilla</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <img
                alt="img"
                class="myImg"
                src="https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
          </div>
          <hr />
          <div class="row justify-content-center">
            <div class="col-lg-8 col-sm-12">
              <h3 class="aPropos text-center">Site de solfège débutant</h3>
              <p>
                Site réalisé en parallèle de la formation permettant d'apprendre
                le solfège à travers des mini-jeux.
              </p>
              <p>
                Ce projet a été réalisé afin découvrir de et approfondir le
                Javascript Vanilla
              </p>
              <div class="text-center">
                <p class="btn btn-warning">Javascript Vanilla</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <img
                alt="img"
                class="myImg"
                src="https://images.pexels.com/photos/1210530/pexels-photo-1210530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
