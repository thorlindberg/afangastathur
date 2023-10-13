import * as React from 'react';
import Container from '../components/Container/Container';
import Text from '../components/Text/Text';
import Slide from '../components/Slide/Slide';
import {useTheme} from '../theme/useTheme';

const Emergency = () => {
  const {theme} = useTheme();
  const titleText = 'Emergency';
  const bodyText = 'Use these resources for assistance';

  return (
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
  );
};

export default Emergency;
