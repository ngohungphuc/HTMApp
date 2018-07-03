import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Label, Input} from 'reactstrap';

const CustomInput = (props) => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for={props.name}>{props.label}</Label>
                    <Input
                        type={props.type}
                        name={props.name}
                        id={props.name}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        />
                </FormGroup>
            </Form>
        </div>
    );
};

CustomInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CustomInput;
