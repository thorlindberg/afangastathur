import * as React from 'react';
import Container from '../components/Container/Container';
import Text from '../components/Text/Text';
import Slide from '../components/Slide/Slide';
import {useTheme} from '../theme/useTheme';
import TitleBar from '../components/TitleBar/TitleBar';
import {useModal} from '../components/ModalProvider/context';

const Emergency = () => {
  const {closeModal} = useModal();
  const {theme} = useTheme();
  const titleText = 'Emergency';
  const bodyText = 'Use these resources for assistance';

  return (
    <TitleBar
      backgroundColor="#DC1E35"
      cancellationColor={theme.backgroundColor}
      cancellationText="Close"
      cancellationAction={closeModal}
      confirmationColor={theme.backgroundColor}
      detent="small">
      <Container edges={['bottom']} gap="large">
        <Container alignment="center" gap="small">
          <Text color={theme.backgroundColor} bold size="title">
            {titleText}
          </Text>
          <Text color={theme.backgroundColor} size="large">
            {bodyText}
          </Text>
        </Container>
        <Slide
          onPress={() => console.log('calling')}
          color="#DC1E35"
          text="Slide for emergency call"
          icon="phone"
        />
      </Container>
    </TitleBar>
  );
};

export default Emergency;
