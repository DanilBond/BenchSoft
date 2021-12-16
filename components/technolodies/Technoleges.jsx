import React from "react";
import TechnolegesItem from "./technolegesItem/TechnolegesItem";
import pytgonImg from "../../images/python.png";
import dockerImg from "../../images/docker.png";
import angular from "../../images/angular.svg";
import django from "../../images/django.svg";
import figma from "../../images/figma.svg";
import firebase from "../../images/firebase.svg";
import gitlab from "../../images/gitlab.svg";
import javascript from "../../images/javascript.svg";
import jira from "../../images/jira.svg";
import kotlin from "../../images/kotlin.svg";
import mongodb from "../../images/mongodb.svg";
import mysql from "../../images/mysql.svg";
import next from "../../images/next-js.svg";
import node from "../../images/nodejs.svg";
import postgresql from "../../images/postgresql.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import sass from "../../images/sass.svg";
import swift from "../../images/swift.svg";
import typescript from "../../images/typescript.svg";
import webpack from "../../images/webpack.svg";
import vue from "../../images/vue.svg";
import nestjs from "../../images/nestjs.svg";
import google from "../../images/google-cloud.svg";
import graphql from "../../images/graphql.svg";
import babel from "../../images/babel.svg";
import aws from "../../images/aws.svg";
import circleci from "../../images/circleci.svg";

const Technoleges = (props) => {
    return (
        <div className="technoleges" id="tech">
            <h1 className="technoleges_title" data-aos="flip-up">
            Tech stack
            </h1>

            <div className="deskTech">
                <div className="t_agile">
                    <div className="technoleges_blocks">
                        <TechnolegesItem text="Python" img={pytgonImg.src} />
                        <TechnolegesItem text="Angular" img={angular.src} />
                        <TechnolegesItem text="Django" img={django.src} />
                        <TechnolegesItem text="Figma" img={figma.src} />
                        <TechnolegesItem text="Firebase" img={firebase.src} />
                        <TechnolegesItem text="next" img={next.src} />
                        <TechnolegesItem text="Gitlab" img={gitlab.src} />
                    </div>
                    <div className="technoleges_blocks">
                        <TechnolegesItem text="Docker" img={dockerImg.src} />
                        <TechnolegesItem
                            text="Javascript"
                            img={javascript.src}
                        />
                        <TechnolegesItem text="Jira" img={jira.src} />
                        <TechnolegesItem text="Kotlin" img={kotlin.src} />
                        <TechnolegesItem text="Mongodb" img={mongodb.src} />
                        <TechnolegesItem text="Mysql" img={mysql.src} />
                        <TechnolegesItem text="Node" img={node.src} />
                    </div>
                </div>
                <div className="t_agile">
                    <div className="technoleges_blocks">
                        <TechnolegesItem
                            text="Postgresql"
                            img={postgresql.src}
                        />
                        <TechnolegesItem text="React" img={react.src} />
                        <TechnolegesItem text="Redux" img={redux.src} />
                        <TechnolegesItem text="Sass" img={sass.src} />
                        <TechnolegesItem text="Swift" img={swift.src} />
                        <TechnolegesItem
                            text="Typescript"
                            img={typescript.src}
                        />
                        <TechnolegesItem text="Webpack" img={webpack.src} />
                    </div>
                    <div className="technoleges_blocks">
                        <TechnolegesItem text="vue" img={vue.src} />
                        <TechnolegesItem text="Nestjs" img={nestjs.src} />
                        <TechnolegesItem text="Google-cloud" img={google.src} />
                        <TechnolegesItem text="Graphql" img={graphql.src} />
                        <TechnolegesItem text="Babel" img={babel.src} />
                        <TechnolegesItem text="Aws" img={aws.src} />
                        <TechnolegesItem text="Circleci" img={circleci.src} />
                    </div>
                </div>
            </div>

            <div className="teach">
                <div className="technoleges_blocks">
                    <TechnolegesItem text="Python" img={pytgonImg.src} />
                    <TechnolegesItem text="Angular" img={angular.src} />
                    <TechnolegesItem text="Django" img={django.src} />
                    <TechnolegesItem text="Figma" img={figma.src} />
                    <TechnolegesItem text="Firebase" img={firebase.src} />
                    <TechnolegesItem text="next" img={next.src} />
                    <TechnolegesItem text="Gitlab" img={gitlab.src} />
                </div>
                <div className="technoleges_blocks">
                    <TechnolegesItem text="Docker" img={dockerImg.src} />
                    <TechnolegesItem text="Javascript" img={javascript.src} />
                    <TechnolegesItem text="Jira" img={jira.src} />
                    <TechnolegesItem text="Kotlin" img={kotlin.src} />
                    <TechnolegesItem text="Mongodb" img={mongodb.src} />
                    <TechnolegesItem text="Mysql" img={mysql.src} />
                    <TechnolegesItem text="Node" img={node.src} />
                </div>
                <div className="technoleges_blocks">
                    <TechnolegesItem text="Postgresql" img={postgresql.src} />
                    <TechnolegesItem text="React" img={react.src} />
                    <TechnolegesItem text="Redux" img={redux.src} />
                    <TechnolegesItem text="Sass" img={sass.src} />
                    <TechnolegesItem text="Swift" img={swift.src} />
                    <TechnolegesItem text="Typescript" img={typescript.src} />
                    <TechnolegesItem text="Webpack" img={webpack.src} />
                </div>
                <div className="technoleges_blocks">
                    <TechnolegesItem text="vue" img={vue.src} />
                    <TechnolegesItem text="Nestjs" img={nestjs.src} />
                    <TechnolegesItem text="Google-cloud" img={google.src} />
                    <TechnolegesItem text="Graphql" img={graphql.src} />
                    <TechnolegesItem text="Babel" img={babel.src} />
                    <TechnolegesItem text="Aws" img={aws.src} />
                    <TechnolegesItem text="Circleci" img={circleci.src} />
                </div>
            </div>
        </div>
    );
};

export default Technoleges;
