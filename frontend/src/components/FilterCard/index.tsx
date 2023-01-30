import './styles.css';

export default function FilterCard() {
  return (
    <div className='container'>
      <div className='container-card-form'>
        <form>
          <div>
            <input id='inpt'
              name="min"
              type="text"
              placeholder='Preço mínimo'
            />
          </div>
          <div>
            <input id='inpt'
              name="max"
              type="text"
              placeholder='Preço máximo'
            />
          </div>

          <div className='btn-container mr-top'>
            <button className='btn'>Filtrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}