import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import Workflow from '../mainComponents/WorkFlow';
import { Values } from '../models/Values';

interface Props {
    begin: () => void;
    values: Values;
}
class Success extends Component<Props>{
    done = (e) => {
        e.preventDefault();
        this.props.begin();
    }

    render(){
        const { values } = this.props;
        values.deviation = Math.sqrt(values.dispenseList.map(x => Math.pow(x - values.mean, 2))
                            .reduce((a, b) => a + b) / 5)
        values.precision = (values.deviation/values.mean)*100;
        values.accuracy = Math.round(values.mean);
        
        return(
            <div>
                <h1 className="ui centered">Done!</h1>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Test Volume</Table.HeaderCell>
                            <Table.HeaderCell>Mean (µl)</Table.HeaderCell>
                            <Table.HeaderCell>Std. Deviation (µl)</Table.HeaderCell>
                            <Table.HeaderCell>Precision (%)</Table.HeaderCell>
                            <Table.HeaderCell>Accuracy (%)</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>100%</Table.Cell>
                            <Table.Cell>{values.mean}</Table.Cell>
                            <Table.Cell>{values.deviation.toPrecision(5)}</Table.Cell>
                            <Table.Cell>{values.precision.toPrecision(5)}%</Table.Cell>
                            <Table.Cell>{values.accuracy}%</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Test Volume</Table.HeaderCell>
                            <Table.HeaderCell>Dispense-1</Table.HeaderCell>
                            <Table.HeaderCell>Dispense-2</Table.HeaderCell>
                            <Table.HeaderCell>Dispense-3</Table.HeaderCell>
                            <Table.HeaderCell>Dispense-4</Table.HeaderCell>
                            <Table.HeaderCell>Dispense-5</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>100%</Table.Cell>
                            <Table.Cell>{values.round1}</Table.Cell>
                            <Table.Cell>{values.round2}</Table.Cell>
                            <Table.Cell>{values.round3}</Table.Cell>
                            <Table.Cell>{values.round4}</Table.Cell>
                            <Table.Cell>{values.round5}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Button color='blue' onClick={this.done}>Try Again</Button>
                <Workflow/>
            </div>
        )
    }
}

export default Success;