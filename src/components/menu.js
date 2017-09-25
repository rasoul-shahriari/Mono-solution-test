import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchData, switchLanguage} from '../actions';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    changeLanguage(language) {
        this.props.switchLanguage(language);
    }

    toggleMenu() {
        var x = document.getElementById("myTopnav");
        if (x.className === "menu") {
            x.className += " active";
        } else {
            x.className = "menu";
        }
    }

    render() {
        const {menu} = this.props.SelectedLanguage.page;
        return(
            <nav>
                <div className="menu" id="myTopnav">
                    <Link to="/" className="menu__link" href="#">{menu.home}</Link>
                    <Link to="/about" className="menu__link" href="#">{menu.about}</Link>
                    <Link to="/form" className="menu__link" href="#">form</Link>
                    <a href="#" className="menu__link menu__link--icon" onClick={this.toggleMenu}>&#9776;</a>
                    <a href="#" data-target="#" className="menu__link menu__link--language" onClick={this.changeLanguage.bind(this,'en')}>EN</a>
                    <a href="#" data-target="#" className="menu__link menu__link--language" onClick={this.changeLanguage.bind(this,'lt')}>LT</a>
                    <a href="#" data-target="#" className="menu__link menu__link--language" onClick={this.changeLanguage.bind(this,'ru')}>RU</a>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({SelectedLanguage}) {
    return {
        SelectedLanguage
    };
}

export default connect(mapStateToProps, {fetchData, switchLanguage})(Menu)
