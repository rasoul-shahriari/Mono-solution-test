import React,{Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {

    render() {

        const {home} = this.props.SelectedLanguage.page;

        return (
            <div className="jumbotron" id="home">
                <div className="container">
                    <h1>{home.header}</h1>
                    <p>{home.text}</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">{home.goUp}</a></p>
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

export default connect(mapStateToProps, null)(Home);
