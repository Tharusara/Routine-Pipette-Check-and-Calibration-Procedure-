import React from 'react';
import NavBar from './NavBar';
import { Container, Grid} from 'semantic-ui-react';
import MainForm from '../stepperComponents/MainForm';
import MaterialDetails from './MaterialDetails';


function App() {

  function handleFormOpen(id?: string) {
      console.log(id);
  }

  return (
    <div>
      <NavBar openForm={handleFormOpen} />
      <Container style={{marginTop: '7em'}}>        
        <Grid>
            <Grid.Column width='5'>
              <MaterialDetails/>
            </Grid.Column>
            <Grid.Column width='11'>
              <MainForm />                              
            </Grid.Column>            
        </Grid>
      </Container>
    </div>
  );
}

export default App;