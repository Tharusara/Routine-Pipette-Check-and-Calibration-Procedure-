import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/logo512.png" alt="logo" style={{marginRight: '10px'}} />
                    Routine Pipette Check and Calibration
                </Menu.Item>
                <Menu.Item name='workflow visualization' />
                <Menu.Item>
                    <Button onClick={openForm} as={NavLink} to='/steps' positive content='Scientific Process' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}