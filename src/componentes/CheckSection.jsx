function CheckSection(props) {
  /*   let checkSection = [

    ];
       */

  return (
    <>
      <div className="row title-secction shadow">
        <div className="col-md-6 col-7">
          <p className='h4'>{props.elemnt.encabezado} </p>
        </div>
        <div className="col-2">
          <p className='h3'>SI</p>
        </div>
        <div className="col-2">
          <p className='h3'>NO</p>
        </div>
      </div>
      {
        props.elemnt.detalle.map((x, index) => {


          return (
            <div className="row item-secction" key={index}>
              <div className="col-md-6 col-7">
                <p className='h5'>{x}</p>
              </div>
              <div className="col-2">
                <input className='form-check-input' name={"checkbox"+x} type="radio" /* id="checkbox2" */ />
              </div>
              <div className="col-2">
                <input className='form-check-input' name={"checkbox"+x} type="radio" /* id="checkbox2" */ />
              </div>
            </div>)
        }

        )
      }



    </>
  );


}

export default CheckSection;


