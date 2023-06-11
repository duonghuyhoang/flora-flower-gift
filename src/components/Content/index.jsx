import { Layout } from "antd";
import "./Content.scss";

function Content({ content }) {
  const { Content } = Layout;
  console.log(content);
  return <Content className='content'>{content}</Content>;
}

export default Content;
