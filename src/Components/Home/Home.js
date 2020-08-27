/* eslint-disable react/jsx-no-undef */
import React from 'react';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const check = <FontAwesomeIcon icon={faCheck} />
    return (
        <div id="home">
            <div className="jumbotron home-info">
                <h1 className="display-4">Bootcamp Quality at 1/10 of the Cost</h1>
                <p className="lead"> <span>Pro Academy</span> is the world’s fastest, most efficient way to master the skills tech companies want. 100% online, part-time and self-paced.</p>
                <hr className="my-4" />
                <p>Industry leading programs built and recognized by top companies worldwide</p>
                <a className="btn btn-success btn-lg" href="/learn-more" role="button">Learn more</a>
            </div>
            <div className="jumbotron home-detail">
                <h4>Only at <span>Pro Academy</span>: <strong>Job-Ready Skills</strong></h4>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-primary">Learn by doing {check}</li>
                    <li className="list-group-item list-group-item-primary">Practitioner-level skills {check}</li>
                    <li className="list-group-item list-group-item-primary">Job-focused content {check}</li>
                    <li className="list-group-item list-group-item-primary">Real human help {check}</li>
                    <li className="list-group-item list-group-item-primary">Personalized code reviews {check}</li>
                    <li className="list-group-item list-group-item-primary">Real-life projects {check}</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;