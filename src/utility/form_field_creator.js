import React,{Component} from 'react';

export const renderInputField = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} className="form__input"/>
      {touched && (error && <span className="form__error">{error}</span>)}
    </div>
  </div>
)

export const renderCheckBoxField = ({ input, label, type, placeholder, className , meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
      <input {...input} placeholder={placeholder} type={type} className={`form__input ${className}`}/>
  </div>
)

export const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div className="form__field-wrapper">
    <label>{label}</label>
    <div>
      <select {...input} className="form__select">
        {children}
      </select>
      {touched && error && <span className="form__error">{error}</span>}
    </div>
  </div>
)

export const renderRadioButtonField = ({ input, label, type, meta: { touched, error }, options }) => (
  <div className="form__field-wrapper">
    <label>{label}</label>
    <div>
      <div>
        {options.map(o => <label className="form__checkbox-label" key={o.value}><input type="radio" {...input} value={o.value} checked={o.value === input.value} /> {o.title}</label>)}
          {touched && error && <span className="form__error">{error}</span>}
      </div>
    </div>
  </div>
)
