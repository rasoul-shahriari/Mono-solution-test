import React,{Component} from 'react';
import {connect} from 'react-redux';

class About extends Component {

    render() {
        const {about} = this.props.SelectedLanguage.page;

        return (
            <div className="jumbotron" id="about">
                <div className="container">
                    <h1>{about.header}</h1>
                    <h3>{about.subheader}</h3>
                    <p>{about.text}</p>
                    <p>{about.forMore} <a href={about.url} data-target="blank">{about.url}</a></p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">{about.goUp}</a></p>
                </div>
            </div>
        );
    }
};

function mapStateToProps({SelectedLanguage}) {
    return {
        SelectedLanguage
    };
}

export default connect(mapStateToProps, null)(About);
