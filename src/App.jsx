import './Css/App.css';
import './logoJRM.png';
import CheckSection from './componentes/CheckSection';
import Data from "./Json/Data.json";



function App() {
  let date = '26/04/2023';
  let km = '500,000';
  let numcamion = 12345678;
  let config = {
    /* title: 'REVISIÓN DE PUNTOS BÁSICO DEL VEHICULO', */
    title: 'Revisión de puntos básicos del vehiculo',
    pathLogo: '',
    datainfo: {
      head: 'INFORMACION INICIAL',
      date: ('FECHA: ' + date),
      kilometraje: ('KILOMETRAJE: ' + km + ' km'),
      numEco: ('NO. ECO: ' + numcamion)
    }
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="title shadow mb-4">
              <h1>{config.title}</h1>
            </div>
          </div>
        </div>
        <div className="info shadow">
          <div className="row">
            <div className="col-12 col-md-3">
              <p className='info-item'>{config.datainfo.head}</p>
            </div>
            <div className="col-12 col-md-3">
              <p className='info-item'>{config.datainfo.date}</p>
            </div>
            <div className="col-12 col-md-3">
              <p className='info-item'>{config.datainfo.kilometraje}</p>
            </div>
            <div className="col-12 col-md-3">
              <p className='info-item'>{config.datainfo.numEco}</p>
            </div>
          </div>
        </div>{/* fin seccion info */}

        {
          Data.seccion.map((x, index)=>{
            console.log(x.encabezado+"numero de vuelta:" + index);       
            return(
              <CheckSection key={index} elemnt={x}></CheckSection>
            );
          }
          )
        }
      </div>
    </div>
  );
}

export default App;
