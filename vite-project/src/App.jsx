
import Hero from './component/Hero';
const App = () => {

  const ItemObj = {
    name: 'Kazi Ariyan',
    age:35,
    city:'USA'
  }
  return (
    <div>
     <Hero item={ItemObj}/>
    </div>
  );
};

export default App;