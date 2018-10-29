import React, { Component } from 'react';
import './RestaurantForm.css';

class RestaurantInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ownerName: '',
            email: '',
            phoneNumber: '',
            restaurantName: '',
            invalid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);
    }
    
    handleSubmit(event) {
        event.preventDefault();

        if (!event.target.checkValidity()) {
            //Error! Form is invalid. Notify the user?
            this.setState({ displayErrors: true, invalid: true, });
            console.log("Invalid submit");
            return;
        }

        this.setState({ displayErrors: false, invalid: false });

        alert('A restaurant was submitted: ' + this.state.restaurantName);
        console.log('A restaurant was submitted: ' + this.state.restaurantName);
    }

    render() {

        const { displayErrors } = this.state;
        const { invalid } = this.state.invalid;

        //TODO: Render a form and do form-validation on it;
        //Let the user know if the form is invalid. -> Use JSX expression to check state
        //of this.state.invalid whether to render a "form invalid" div.

        return (
            <div>
                <div>
                    
                    <form className={'RestaurantForm'} 
                            onSubmit={this.handleSubmit} noValidate> 
                        <div>
                            <label htmlFor="Name" className="field-divided">Your name</label>
                            <input id="name" name="ownerName" type="text" className="input"
                                onChange={this.handleChange} required/>
                        </div>
                            
                        <div>
                        <label htmlFor="email" className="field-divided">Your email</label>
                        <input id="email" name="email" type="email" className="input"
                                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                onChange={this.handleChange} required/>
                        </div>

                        <div>
                        <label htmlFor="phoneNumber">Your phone number</label>
                        <input id="phoneNumber" name="phoneNumber" 
                                pattern="\d+" type="text" className="input"
                                onChange={this.handleChange} required/>
                        </div>

                        <div>
                        <label htmlFor="restaurantName">Your restaurant's name</label>
                        <input id="restaurantName" name="restaurantName" type="text" 
                                className="input" onChange={this.handleChange} required/>
                        </div>

                        <button>Send data!</button>
                    </form>
                </div>

                <div className="form-success-block">
                    {invalid && 
                    <h2>INVALID RESPONSE</h2>
                    }
                </div>
            </div>
        );
    }
}

export default RestaurantInput;