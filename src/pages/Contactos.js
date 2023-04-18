import React from 'react';
import "../css/Contactos.css";
import icon1 from '../docs/icon1.png';


function Contactos() {
    return <div>
        
        
        <h1>Clube Judo 82</h1>

        

        <p><strong>Categoria</strong> Clube desportivo</p>

        <img src={icon1} alt="icon1" height="50rem" class="center" />
        <center><strong>Há mais de 40 anos na Maia a ensinar a arte do judo a jovens e adultos.</strong></center>
        <img src={icon1} alt="icon1" height="50rem" class="center" />

        <p><strong>Endereço</strong> Praceta Ferreira de Castro 20 - Águas Santas, Maia, Portugal, 4425-082</p>
        <p><strong>Telemóvel</strong> (+351) 938 403 222 </p>
        <p><strong>Horário</strong></p>

        <table>
            <tr>
                <td>&nbsp;</td>
                <th>Segunda-feira</th>
                <th>Terça-feira</th>
                <th>Quarta-feira</th>
                <th>Quinta-feira</th>
                <th>Sexta-feira</th>
            </tr>
            <tr>
                <td>18h00-18h45</td>
                <td>Infantil, 3-5anos</td>
                <td></td>
                <td></td>
                <td></td>
                <td>Infantil, 3-5anos</td>

            </tr>
            <tr>
                <td>18h45-19h30</td>
                <td>Infantil, 6-9anos</td>
                <td>18h30-19h30 Juvenil, 9-14anos</td>
                <td></td>
                <td>18h30-19h30 Juvenil, 9-14anos</td>
                <td>Infantil, 6-9anos</td>
            </tr>
            <tr>
                <td>19h30-21h00</td>
                <td>Adultos/ Competição, +14anos</td>
                <td>Iniciação/ Manutenção, +14anos</td>
                <td>Adultos/ Competição, +14anos *CAR</td>
                <td>Iniciação/ Manutenção, +14anos</td>
                <td>Adultos/ Competição, +14anos</td>
            </tr>

        </table>

        <p>*CAR - Centro de Alto Rendimento de Gaia, Vila Nova de Gaia. </p>
        

</div>;   
    }


export default Contactos;