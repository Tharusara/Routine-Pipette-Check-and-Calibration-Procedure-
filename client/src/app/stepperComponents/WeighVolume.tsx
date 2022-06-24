import React, { ChangeEventHandler, Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Values } from '../models/Values';

interface Props {
    values: Values;
    round: number;
    nextStep: () => void;
    prevStep: () => void;
    handleChange: (e) => ChangeEventHandler<HTMLInputElement>;
}
class WeighVolume extends Component<Props>{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values, round } = this.props
        return(
        <Form color='blue' >
            <h3 className="ui centered">Weigh the pipettes at 100% volume 
            <h1 className={(round%2 === 0) ? 'spec' : 'spec-back'}>Round {round}</h1></h3>
            <Form.Field>
                <label>1. Aspirate and dispense 100% of the volume into the beaker</label>
                <input placeholder='Dispense'
                onChange={this.props.handleChange('dispense')}
                disabled
                defaultValue={"100%"}
                />
            </Form.Field>
            <Form.Field>
                <label>2. Weight of water</label>
                <input placeholder='Weight of water' type={'number'} id='weight'
                onChange={this.props.handleChange('weight')}
                defaultValue={values.weight}
                />
            </Form.Field>
            <Form.Field>
                <label>3. Tare the balance</label>
            </Form.Field>
            <Button color='green' onClick={this.back}>Back</Button>
            <Button color='blue' onClick={this.saveAndContinue}> Continue Next</Button>
        </Form>
        )
    }
}

export default WeighVolume;