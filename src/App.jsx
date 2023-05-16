import './Css/App.css';
import './logoJRM.png';
import CheckSection from './componentes/CheckSection';
import Data from "./Json/Data.json";
import Swal from 'sweetalert2';



function App() {

  const alerta1=()=>{
    
      Swal.fire(
        'Agrega el no.economico del viaje para cargar los datos del vehiculo',
        'You clicked the button!',
        'success'
      )
    
  }

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
     {alerta1()}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="title shadow mb-4">
              <h1>{config.title}</h1>
            </div>
          </div>
        </div>


        <div className='selector-secction col-2'>
          <select class="form-select" aria-label="Default select example">
            <option selected>Selecciona un No.economico</option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
        </div>


        <div className='selector-secction col-5'>
          <select class="form-select" aria-label="Default select example">
            <option selected>Selecciona un No.economico</option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
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
          Data.seccion.map((x, index) => {
            console.log(x.encabezado + "numero de vuelta:" + index);
            return (
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
