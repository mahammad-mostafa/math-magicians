import Styles from '../styles/home.module.css';

const Home = () => (
  <section>
    <h2 className={Styles.title}>Welcome to Math Magicians app</h2>
    <p>
      This project is a simple site built with ReactJS framework.
      It contains a calculator with basic arithmatic operations.
      Also, it fetches a random quote each time from an external api.
    </p>
    <br />
    <p>
      Feel free to try out the calculator and read the quotes!
    </p>
  </section>
);

export default Home;
