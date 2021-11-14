import React, { Component } from 'react';
import classes from '../contact/contact.module.css';
import IMG from '../../images/contact.jpg';
import InputComp from '../../component/input/input';
import axios from '../../axiosComp';
import Spinner from '../../UI/spinner/spinner';

class Contact extends Component {
  state = {
    form: {
      personName: {
        elementType: 'input',
        config: {
          type: 'text',
          place: 'Enter Name'
        },
        value: ' ',
        validation: {
          isRequired: true
        },
        isValid: false,
        clicked: false
      },
      email: {
        elementType: 'input',
        config: {
          type: 'email',
          place: 'Enter  Email'
        },
        value: ' ',
        validation: {
          isRequired: true
        },
        isValid: false,
        clicked: false
      },
      message: {
        elementType: 'textarea',
        config: {
          type: 'text',
          place: 'Message',
          rows: 8,
          cols: 30
        },
        value: ' ',
        validation: {
          isRequired: true
        },
        isValid: false,
        clicked: false
      }
    },
    formValidity: false,
    loading: false
  };

  validationCheckHandler = (val, rules) => {
    let valid = true;
    if (rules.isRequired) {
      valid = val.trim() !== '';
      // console.log(valid);
    }
    return valid;
  };

  changeHandler = (event, selectedEl) => {
    const updatedForm = { ...this.state.form };
    const updatedElement = { ...updatedForm[selectedEl] };
    updatedElement.value = event.target.value;
    updatedElement.clicked = true;
    updatedElement.isValid = this.validationCheckHandler(
      updatedElement.value,
      updatedElement.validation
    );
    updatedForm[selectedEl] = updatedElement;
    let formValidity = true;
    for (const i in updatedForm) {
      formValidity = updatedForm[i].isValid && formValidity;
    }
    this.setState({
      form: updatedForm,
      formValidity: formValidity
    });
    //console.log(updatedForm)
  };

  submitClickHandler = () => {
    this.setState({
      loading: true
    });
    let contactData = {};
    for (const el in this.state.form) {
      contactData[el] = this.state.form[el].value;
    }
    axios
      .post('contacts.json', contactData)
      .then(() => {
        console.log('sent');
        this.setState({
          loading: false
        });
        this.props.history.push('/');
      })
      .catch(() => {
        console.log('Works');
        this.setState({
          loading: false
        });
      });
  };

  render() {
    let formArray = [];
    for (const key in this.state.form) {
      formArray.push({
        id: key,
        setup: this.state.form[key]
      });
    }

    let form = (
      <div className={classes.form}>
        {formArray.map(el => (
          <InputComp
            key={el.id}
            elementType={el.setup.elementType}
            config={el.setup.config}
            value={el.setup.value}
            isvalid={el.setup.isValid}
            clicked={el.setup.clicked}
            placeValue={el.setup.config.place}
            changed={event => this.changeHandler(event, el.id)}
          />
        ))}
        <button disabled={!this.state.formValidity} onClick={this.submitClickHandler}>
          Submit
        </button>
      </div>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.contact}>
            <img src={IMG} alt="slide" />
            <address>
              <div>
                <h3>E-mail</h3>
                <h4>
                  <a href="mailto:khushimuskaan1999@gmail.com">
                    khushimuskaan<br></br>1999@gmail.com
                  </a>
                </h4>
              </div>
            </address>
          </div>
          {form}
        </div>
        <div className={classes.details}>
          <h5>E-mail</h5>
          <h5>
            <a href="mailto:khushimuskaan1999@gmail.com">
              khushimuskaan<br></br>1999@gmail.com
            </a>
          </h5>
        </div>
      </div>
    );
  }
}

export default Contact;
