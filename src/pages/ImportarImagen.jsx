import '../css/ImportarImagen_css/ImportarImagem.css'
import '../css/Dashbord.css'
import '../../node_modules/react-datepicker/dist/react-datepicker.css'
import  { useState,useEffect } from "react";

import MenuLateral from '../components/MenuLateral/MenuLateral'
export default function ImportarImagen() {
    //escolha de qual consorcio awa ou social , sao elementos diferentes
    const [isConsorcio, setisConsorcio] = useState('');

    useEffect (()=>{
      console.log(isConsorcio)
    },[isConsorcio])


    //seleção de data com valor pro banco 
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
                            <select value={isConsorcio} onChange={e => setisConsorcio(e.target.value)} id="consorcio-select">{/*precisa ser passo antes o value pra ter um val*/ }
                            <option value="">Escolha uma opção</option>
                            <option value="awa">Awa</option>
                            <option value="social">Social</option>
                            </select>
                        </div>
                        {isConsorcio==='awa'?<><div className='orv-lado'>
                            <label htmlFor="obra-select">Selecione uma Obra :</label>
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
                        </>:
                        <>
                        <div className='orv-lado'>
                        <label htmlFor="data-select">Selecione uma data:</label>
                            <input
                              type="date"
                              id="data-select"
                              value={selectedDate}
                              onChange={handleDateChange}
                            />
                        </div>
                        <div className='orv-lado-label'>
                            <label htmlFor="local-select">Preencha com o título da Ação e Obra</label>
                            <input type="text" name="local" id="local-select"/>
                            
                        </div>
                        <div className='orv-lado'>
                            <label htmlFor="periodo-select">Selecione o período:</label>
                            <select  id="periodo-select">
                            <option value="">Escolha uma opção</option>
                            <option value="manha">Manhã</option>
                            <option value="tarde">tarde</option>
                            <option value="noite">Noite</option>
                            </select>
                        </div>
                        </>
                        }
                        
                        
                        
                        

                      </div>
                      <div className='orv-sele-update'>
                        <div className='orv-container-photo'>
                          <div className='orv-update-photo'>
                              <label className='label-photo' htmlFor="selecionar-photo">Selecionar ou Arrastar fotos..</label>
                              <input type="file"  id="selecionar-photo"  className='file-input' multiple accept="image/png, image/jpeg"/>
                          </div>
                          <div className='orv-list-photo'>
                            
                              <div className='orv-list-upload'>
                                  <div className='item'><i className='icon bi bi-image-fill'></i></div>
                                  <div className='item'><p> ARQUIVO</p></div>
                                  <div className='item' ><i className='bi bi-check-circle-fill'></i> </div>
                              </div>
                              <div className='orv-list-upload'>
                                  <div className='item'><i className='icon bi bi-image-fill'></i></div>
                                  <div className='item'><p> ARQUIVO</p></div>
                                  <div className='item' ><i className="bi bi-x-circle-fill"></i></div>
                              </div>
                              <div className='orv-list-upload'>
                                  <div className='item'><i className='icon bi bi-image-fill'></i></div>
                                  <div className='item'><p> ARQUIVO</p></div>
                                  <div className='item' ><i className="bi bi-arrow-clockwise"></i></div>
                              </div>
                          </div>
                        </div>  
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )

}


