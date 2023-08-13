import React, { useEffect, useState } from 'react';
import Fetcher from '../logic/fetcher';
import Styles from '../styles/quote.module.css';

const Quote = () => {
  const [text, setText] = useState({});
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handler = ({ success, result }) => {
    if (success) {
      setText(result[0]);
    }
    setError(!success);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const options = { headers: { 'x-api-key': 'a+94x6tnOQ5uLf0dAfsK/Q==9RRTgmpEtfnPJUbi', 'content-type': 'application/json' }, signal: controller.signal };
    Fetcher('https://api.api-ninjas.com/v1/quotes?category=computers', options).then(handler).catch(() => setError(true));
    return () => controller.abort();
  }, []);

  if (isLoading) {
    return (
      <section className={Styles.section}>
        <h1 className={Styles.loader}>Loading ...</h1>
      </section>
    );
  }
  return (
    <section className={Styles.section}>
      {hasError ? (<h1 className={Styles.error}>An error occured!</h1>)
        : (
          <>
            <p className={Styles.quote}>{text.quote}</p>
            <p className={Styles.author}>{text.author}</p>
          </>
        )}
    </section>
  );
};

export default Quote;
