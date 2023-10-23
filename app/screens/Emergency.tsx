import * as React from 'react';
import Container from '../components/Container/Container';
import Text from '../components/Text/Text';
import Slide from '../components/Slide/Slide';
import {useTheme} from '../theme/useTheme';
import TitleBar from '../components/TitleBar/TitleBar';
import {useModal} from 'react-native-modal-provider';
import Button from '../components/Button/Button';
import browserHandler from '../handlers/browserHandler';

const Emergency = () => {
  const {closeModal} = useModal();
  const {theme} = useTheme();
  const titleText = 'Emergency';
  const bodyText = 'Use these resources for assistance.';
  const buttonText = 'Accidents and emergencies';

  return (
    <TitleBar
      backgroundColor="#DC1E35"
      cancellationColor={theme.backgroundColor}
      cancellationText="Close"
      cancellationAction={closeModal}
      confirmationColor={theme.backgroundColor}
      detent="small"
      scaling={0}>
      <Container edges={['bottom']} justifying="center" gap="large">
        <Container padding={false} alignment="center" justifying="flex-end">
          <Text color={theme.backgroundColor} bold size="title">
            {titleText}
          </Text>
          <Text color={theme.backgroundColor} size="large">
            {bodyText}
          </Text>
        </Container>
        <Container padding={false}>
          <Button
            color="#DC1E35"
            text={buttonText}
            icon="arrow-outward"
            onPress={() =>
              browserHandler('https://island.is/en/accidents-and-emergencies')
            }
          />
          <Slide
            onPress={() => console.log('calling')}
            color="#DC1E35"
            text="Slide for emergency call"
            icon="phone"
          />
        </Container>
      </Container>
    </TitleBar>
  );
};

export default Emergency;
