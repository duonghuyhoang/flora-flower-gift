import { Layout } from "antd";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";

function DefaultLayout({ content }) {
  return (
    <Layout className='layout'>
      <Header />
      <Content content={content} />
      <Footer />
    </Layout>
  );
}

export default DefaultLayout;
