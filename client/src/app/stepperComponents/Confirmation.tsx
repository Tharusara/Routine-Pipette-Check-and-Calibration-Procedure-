import React from 'react';
import { Button, List } from 'semantic-ui-react';
import { Values } from '../models/Values';

interface Props {
    values: Values;
    nextStep: () => void;
    prevStep: () => void;
}

export default function Confirmation({values: { round1, round2, round3, round4, round5 }, nextStep, prevStep}: Props) {
    function saveAndContinue(e) {
        e.preventDefault();
        nextStep();
    }

    function back(e){
        e.preventDefault();
        prevStep();
    }

    return(
        <div>
            <h1 className="ui centered">Confirm your Records</h1>
            <p>Click Confirm if the following details have been correctly entered</p>
            <List>
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>Round 1 Weight of water: <b>{round1}</b></List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>Round 2 Weight of water: <b>{round2}</b></List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>Round 3 Weight of water: <b>{round3}</b></List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>Round 4 Weight of water: <b>{round4}</b></List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>Round 5 Weight of water: <b>{round5}</b></List.Content>
                </List.Item>
            </List>

            <Button color='green' onClick={back}>Back</Button>
            <Button color='blue' onClick={saveAndContinue}>Confirm</Button>
        </div>
    )
}

