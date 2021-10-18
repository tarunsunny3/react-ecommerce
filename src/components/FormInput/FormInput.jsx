import React from 'react'
import './FormInputStyles.scss';
const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className="group">
            {
                label ? <label className={`${otherProps.value.length>=1 ? 'shrink': ''} form-input-label`}>{label}</label>: null
            }
            <input className="form-input"  onChange={handleChange} {...otherProps} />
            
        </div>
    )
}

export default FormInput
