import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const Workflow = () => (
  <Step.Group vertical>
    <h2 className='headers'>Completed Steps</h2>
    <Step active>
      <Step.Content>
        <Step.Title>1. Prepare balance</Step.Title>
        <Step.Group>
          <Step completed>
            <Icon/>
            <Step.Content>
            <Step.Title>1.1. Place a beaker with 1000ul of distilled H20 on the balance and tare</Step.Title>
            </Step.Content>
            <Step.Description>
            </Step.Description>
          </Step>
        </Step.Group>
      </Step.Content>
    </Step>

    <Step active>
      <Step.Content>
        <Step.Title>2. Place a new pipette tip on the pipettor</Step.Title>
      </Step.Content>
    </Step>

    <Step active>
      <Step.Content>
        <Step.Title>3. Weigh the pipettes at 100% volume five times</Step.Title>
        <Step.Group> 
          <Step completed>
            <Icon name='payment' />
            <Step.Content>
              <Step.Title>3.1. Aspirate and dispense 100% of the volume into the beaker </Step.Title>
              <Step.Description>(Action)</Step.Description>
            </Step.Content>
          </Step> 
        </Step.Group>
        <Step.Group> 
          <Step completed>
            <Icon name='payment' />
            <Step.Content>
              <Step.Title>3.2. Record the weight in the table in step 6.4 (automatic fetch from lab tools)</Step.Title>
              <Step.Description>(Automatic/Manually) add</Step.Description>
            </Step.Content>
          </Step> 
        </Step.Group>
        <Step.Group> 
          <Step completed>
            <Icon name='payment' />
            <Step.Content>
              <Step.Title>3.3. Tare the balance</Step.Title>
              <Step.Description>(Action)</Step.Description>
            </Step.Content>
          </Step> 
        </Step.Group>
        <Step.Group> 
          <Step completed>
            <Icon name='payment' />
            <Step.Content>
              <Step.Title>3.4. Repeat steps 3.1 to 3.3 four more times to complete the process</Step.Title>
              <Step.Description>(Action)</Step.Description>
            </Step.Content>
          </Step> 
        </Step.Group>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default Workflow