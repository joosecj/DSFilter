import './App.css'
import FilterCard from './components/FilterCard'
import Header from './components/Header'
import ListingCard from './components/ListingCard';

function App() {


  return (
    <>
      <Header />
      <section id='content'>
        <FilterCard />
        <ListingCard />
      </section>

    </>
  );
}

export default App
