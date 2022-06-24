import React from 'react'
import { Step } from 'semantic-ui-react'

const MaterialDetails = () => (
  <Step.Group vertical>
    <h2 className='headers'>Details of the Procedure</h2>
    <Step active>
      <Step.Content>
        <Step.Title>Purpose</Step.Title>
        <Step.Description>To perform a calibration check on a pipette with automated data capture and compliance
            documentation. The purpose of this test is to check if the pipette is dispensing the same
            amount of liquid each time.
        </Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Step.Content>
        <Step.Title>Scope</Step.Title>
        <Step.Description>This procedure is to be used for demonstrations of automatic calibration and documentation.</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Step.Content>
        <Step.Title>Definitions</Step.Title>
        <Step.Description><b>Pipette :</b> Pipettes are used to transfer or measure set volumes of liquid.</Step.Description>
        <Step.Description><b>Pipette tip :</b> Pipette tips are disposable, attachments for the uptake and dispensing of liquids using a pipette.
        </Step.Description>
        <Step.Description></Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Step.Content>
        <Step.Title>Materials</Step.Title>
        <Step.Description>
            <ul>
                <li>Pipettor</li>
                <li>Cubis Analytical balance</li>
                <li>Pipette tips</li>
                <li>Beaker</li>
                <li>Distilled water</li>
            </ul>
        </Step.Description>
      </Step.Content>
    </Step>

  </Step.Group>
)

export default MaterialDetails