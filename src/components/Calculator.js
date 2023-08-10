import PropTypes from 'prop-types';
import Styles from '../styles/calculator.module.css';

const Button = ({ name }) => {
  if (['/', '*', '-', '+', '='].includes(name)) {
    return <button type="button" className={`${Styles.button} ${Styles.orange}`}>{name}</button>;
  }
  return <button type="button" className={name === '0' ? Styles.zero : Styles.button}>{name}</button>;
};

Button.propTypes = { name: PropTypes.string.isRequired };

const Calculator = () => {
  const values = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <section className={Styles.section}>
      <p className={Styles.result}>0</p>
      {values.map((value) => <Button key={value} name={value} />)}
    </section>
  );
};

export default Calculator;
