import React, { Component } from 'react';
import PreBalance from './PreBalance';
import WeighVolume from './WeighVolume';
import Confirmation from './Confirmation';
import Success from './Success';
import { Button } from 'semantic-ui-react';


class MainForm extends Component {
    state = {
        step: 1,
        weight: 1,
        round1: 1,
        round2: 1,
        round3: 1,
        round4: 1,
        round5: 1,
        mean: 0,
        deviation: 0,
        precision: 0,
        accuracy: 0,
        dispenseList: [],
    }
    nextStep = () => {
        const { step, weight } = this.state
        switch (step) {
            case 3:
                this.setState({
                    round1 : weight,                 
                })
                break;
            case 4:
                this.setState({
                    round2 : weight,                 
                })
                break;
            case 5:
                this.setState({
                    round3 : weight,                 
                })
                break;
            case 6:
                this.setState({
                    round4 : weight,                 
                })
                break;
            case 7:
                this.setState({
                    round5 : weight,                 
                })
                break;
        
            default:
                break;
        }    
        this.setState({
            step : step + 1,                 
        })
        this.setState({
            weight : 0,                 
        })
        if(step > 2 && step < 7) {
            window.alert(`Round ${step-1}! please enter the weight in the feild`)
        }
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }
    begin = () => {
        this.setState({
            step : 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    
    render(){
        const { step, weight, precision, accuracy, round1, round2, round3, round4, round5, mean, dispenseList, deviation } = this.state;
        const values = { weight, precision, accuracy, round1, round2, round3, round4, round5, mean, dispenseList, deviation};
        // eslint-disable-next-line default-case
        switch(step) {
        case 1:
            return <>
                    <h3>Start the Routine Pipette Check and Calibration Process from here</h3>
                    <Button color='blue' onClick={this.nextStep}>Start</Button>                    
                   </>
        case 2:
            return <PreBalance 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />          
        case 3:
            return <WeighVolume 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    round={1}
                    />
        case 4:
            return <WeighVolume 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    round={2}
                    />
        case 5:
            return <WeighVolume 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    round={3}
                    />
        case 6:
            return <WeighVolume 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    round={4}
                    />
        case 7:
            return <WeighVolume 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    round={5}
                    />
        case 8:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 9:
            values.mean = (parseInt(round1)+parseInt(round2)+parseInt(round3)+parseInt(round4)+parseInt(round5))/5;
            values.dispenseList.splice(0,5);
            values.dispenseList.push(parseInt(round1));
            values.dispenseList.push(parseInt(round2));
            values.dispenseList.push(parseInt(round3));
            values.dispenseList.push(parseInt(round4));
            values.dispenseList.push(parseInt(round5));
            return <Success begin={this.begin} values={values} />
        }
    }
}

export default MainForm;