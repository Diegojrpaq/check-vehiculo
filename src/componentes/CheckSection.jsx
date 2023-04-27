function CheckSection() {
  /*   let checkSection = [

    ];
       */

    return(
       <>
        <div className="row title-secction">
            <div className="col-md-6 col-7">
              <p className='h4'>NIVELES DE LIQUIDOS </p>
            </div>
            <div className="col-2">
              <p className='h3'>SI</p>
            </div>
            <div className="col-2">
              <p className='h3'>NO</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-7">
              <p className='h5'>Aceite de motor </p>
            </div>
            <div className="col-2">
              <input className='form-check-input' name="checkbox1" type="radio" /* id="checkbox2" */ />
            </div>
            <div className="col-2">
              <input className='form-check-input' name="checkbox1" type="radio" /* id="checkbox2" */ />
            </div>
          </div>
       </>
    );

    
}

export default CheckSection;