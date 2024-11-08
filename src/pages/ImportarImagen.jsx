import '../css/ImportarImagen_css/ImportarImagem.css'
import '../css/Dashbord.css'
import '../../node_modules/react-datepicker/dist/react-datepicker.css'
import  { useState } from "react";

import MenuLateral from '../components/MenuLateral/MenuLateral'
export default function ImportarImagen() {

  
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  return (
    <div className='cor-de-fundo'>
        <MenuLateral/>
        <div className='orv-importar-imagem'>
              <div className='orv-fundo-trans'>
                  <div className='orv-titulo-imagem'><h2>Importar Imagens</h2></div>
                  <div className='orv-info'>
                      <div className='orv-sele-consorcio'>
                        <div className='orv-lado'><label htmlFor="consorcio-select">Selecione um consórcio :</label>
                            <select  id="consorcio-select">
                            <option value="">Escolha uma opção</option>
                            <option value="awa">Awa</option>
                            <option value="social">Social</option>
                            </select>
                        </div>
                        <div className='orv-lado'>
                          <label htmlFor="obra-select">Selecione um Obra :</label>
                          <select  id="obra-select">
                            <option value="">Escolha uma opção</option>
                            <option value="obra1">Obra 1</option>
                            <option value="obra2">Obra 2</option>
                          </select>
                        </div>
                        <div className='orv-lado'>
                          <label htmlFor="setor-select">Selecione um Setor:</label>
                          <select  id="setor-select">
                            <option value="">Escolha uma opção</option>
                            <option value="engenharia">Engenharia</option>
                            <option value="seguranca">Segurança</option>
                            <option value="ambiental">Ambiental</option>
                            <option value="social">Social</option>
                          </select>
                        </div>
                        <div className='orv-lado'>
                            <label htmlFor="subpasta-select">Selecione a Subpasta:</label>
                            <select  id="subpasta-select">
                            <option value="">Escolha uma opção</option>
                            <option value="int-urb">Int-urb</option>
                            <option value="ses">Ses</option>
                            <option value="hab">Hab</option>
                            <option value="map">Map</option>
                            <option value="social">Social</option>
                            </select>
                        </div>
                        <div className='orv-lado'>
                        <label htmlFor="data-select">Selecione uma data:</label>
                            <input
                              type="date"
                              id="data-select"
                              value={selectedDate}
                              onChange={handleDateChange}
                            />
                           
                        </div>

                      </div>
                      <div className='orv-sele-update' >
                        
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )

}


