import React, { ChangeEventHandler, Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Values } from '../models/Values';

interface Props {
    values: Values;
    nextStep: () => void;
    prevStep: () => void;
    handleChange: (e) => ChangeEventHandler<HTMLInputElement>;
}
class PreBalance extends Component<Props>{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        return(
            <Form color='green' >
                <h3 className="ui centered">Prepare balance</h3>
                <Form.Field>
                    <label>1. Place a beaker with "1000ul" of distilled H20 on the balance and tare</label>
                    <input
                    placeholder='Balance'
                    onChange={this.props.handleChange('balance')}
                    disabled
                    defaultValue={'1000ul'}
                    />
                </Form.Field>
                <Form.Field>
                    <label>2. Place a new pipette tip on the pipettor</label>
                </Form.Field>
                <Button color='blue' onClick={this.saveAndContinue}>Continue Next </Button>
            </Form>
        )
    }
}

export default PreBalance;