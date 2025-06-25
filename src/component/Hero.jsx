const Hero = (props) => {
  return <div>
    <ul>
      <li>{props.item['name'] }</li>
      <li>{props.item['age'] }</li>
      <li>{props.item['city'] }</li>
    </ul>
  </div>;
};

export default Hero;
