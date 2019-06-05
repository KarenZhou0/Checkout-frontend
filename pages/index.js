import Layout from '../components/Layout';
import PayButton from '../components/PayButton';

export default () => (
  <Layout>
    <h1>Serverless Stripe Checkout</h1>
        <PayButton amount={200} />
  </Layout>
);
