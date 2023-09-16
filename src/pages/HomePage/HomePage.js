import Container from 'components/Container/Container';
import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 'calc(1em / 10)',
    color: '058484',
  },
};

const HomePage = () => {
  return (
    <Container>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome to PHONEBOOK{' '}
          <span role="img" aria-label="Иконка приветствия">
            💁‍♀️
          </span>
        </h1>
      </div>
    </Container>
  );
};

export default HomePage;
