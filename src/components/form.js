import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { createUser } from "../actions";
import {required, email, number, minValue18} from '../utility/form_validation';
import {renderInputField, renderSelectField, renderRadioButtonField , renderCheckBoxField} from '../utility/form_field_creator';

class Form extends Component {
    constructor(props) {
        super(props)
    }

    onSubmit(values) {
        console.log('value', values);
        this.props.createUser(values, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const {form: {header,sexField,nameField,surNameField,emailField,ageField,favoriteColorField, employedField, submitField, cancelField }} = this.props.SelectedLanguage.page;
        const { handleSubmit, pristine,submitting } = this.props;
        return (
            <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                <h2 className="form__header">{header}</h2>
                <Field label="" name="name" placeholder={nameField.placeholder} type="text" component={renderInputField} validate={required} />
                <Field label="" name="surname" placeholder={surNameField.placeholder} type="text" component={renderInputField} validate={required} />
                <Field label="" type="email" placeholder={emailField.placeholder} name="email" component={renderInputField} validate={email} />
                <Field name="age" type="number" placeholder={ageField.placeholder} component={renderInputField} label="" validate={[required, number, minValue18]} />
                <Field name="favoriteColor" component={renderSelectField} label={favoriteColorField.label} validate={required}>
                    <option>{favoriteColorField.option0} </option>
                    <option value="#ff0000">{favoriteColorField.option1}</option>
                    <option value="#00ff00">{favoriteColorField.option2}</option>
                    <option value="#0000ff">{favoriteColorField.option3}</option>
                </Field>
                <Field label={sexField.label} component={renderRadioButtonField} name="gender" validate={required} options={[
                    { title: sexField.option0, value: sexField.option0},
                    { title: sexField.option1, value: sexField.option1}
                ]}/>
                <Field name="employed" type="checkbox" component={renderCheckBoxField} className="form__checkbox" label={employedField.label} />
                <button type="submit" disabled={pristine || submitting} className="form__button">{submitField.text}</button>
                <Link to="/" className="form__button form__button--red">{cancelField.text}</Link>
            </form>
        );
    }
};

function mapStateToProps({SelectedLanguage}) {
    return {
        SelectedLanguage
    };
}

export default reduxForm({
    form: "PostsNewForm"
})(connect(mapStateToProps, { createUser })(Form));
