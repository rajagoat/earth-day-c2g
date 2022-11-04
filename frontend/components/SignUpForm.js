import styles from '../styles/SignUpForm.module.css'

const SignUpForm = () => {
    return (
        <form className={styles.formContainer}>
            <div className={styles.formItem}>
                <label>Username</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>Password</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>Retype Password</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>First Name(s)</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>Last Name</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>Street Address</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>Postal Code</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>City</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>Province</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>Phone Number</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>Email Address</label>
                <input
                    type="text"
                />
            </div>
        </form>
    );
}

export default SignUpForm;