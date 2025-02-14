export default function Profile() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Profile</h1>
            </header>
            <main style={styles.main}>
                <p>View and edit your profile.</p>
                <button style={styles.button}>Edit Profile</button>
            </main>
        </div>
    );
}