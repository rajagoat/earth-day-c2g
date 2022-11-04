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
                <label>Email Address</label>
                <input
                    type="text"
                />
            </div>
            <div className={styles.formItem}>
                <label>You are a</label>
                <div className={styles.formRadio}>
                    <input type="radio" name="userType" id="farmer" value='FARMER' />
                    <label htmlFor="farmer">Farmer</label>
                    <input type="radio" name="userType" id="gleaner" value='GLEANER' />
                    <label htmlFor="gleaner">Gleaner</label>
                    <input type="radio" name="userType" id="foodbank" value='FOODBANK' />
                    <label htmlFor="foodbank">Food Bank</label>
                </div>
            </div>
            <button>Sign Up</button>
        </form>
    );
}

export default SignUpForm;