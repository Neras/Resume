import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/common/Layout/';
import Header from './components/common/Header/';
import Skills from './components/Skills/';
import Projects from './components/Projects/';

import './static/style.css';

class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout>
                <Header />
                <div className="resume-div__content">
                    <Skills/>
                    <Projects/>
                </div>
            </Layout>
        );

    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
)
