import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Welcome to JobHub</h1>
            </header>
            <main style={styles.main}>
                <p>Your one-stop solution for job hunting.</p>
                <button style={styles.button}>Get Started</button>
            </main>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    header: {
        backgroundColor: '#282c34',
        padding: '20px',
        color: 'white',
    },
    main: {
        marginTop: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default Home;