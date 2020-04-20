import React
from 'react';
import Layout from '../core/Layout';
import{ToastContainer
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const About = () => {

return(
  <Layout>
  <div className="col-md-6 offset-md-3">
      <ToastContainer />
      <h1 className="p-5 text-center">About</h1>
      <p>Created and curated for women by women.</p>
  </div>
</Layout>
)
};

export default About;