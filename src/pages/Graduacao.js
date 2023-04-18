import "../css/Graduacao.css";
import jigorokano from '../docs/jigorokano.png';
import icon1 from '../docs/icon1.png';
import saudacao from '../docs/saudacao.gif';
import React from 'react';


function Graduacao() {

    const questions = [
      { id: 1, question: "Nome do criador de judo", answer: "Jigoro Kano" },
      { id: 2, question: "Ano oficial de criação", answer: "1882" },
      { id: 3, question: "Três princípios do judo", answer: "Answer 3" },
      { id: 4, question: "Cores dos cintos de judo", answer: "Answer 4" },
      { id: 5, question: "Nome da vestimenta utilizada no judo", answer: "Answer 5" },
      { id: 6, question: "Cor do cinto de mais alto grau", answer: "Answer 6" },
      { id: 7, question: "Nome da primeira escola de judo", answer: "Answer 7" },
      { id: 8, question: "Formas de cumprimento no judo", answer: "Answer 8" },
      { id: 9, question: "Tipos de técnicas", answer: "Answer 9" },
      { id: 10, question: "Quatro movimentos de uma técnica", answer: "Answer 10" },
      { id: 11, question: "Tipos de pontuação numa competição", answer: "Answer 11" },
      { id: 12, question: "Formas de ganhar um combate de judo", answer: "Answer 12"},
      { id: 13, question: "Exemplos de faltas num combate de judo", answer: "Answer 13"},
      { id: 14, question: "Exercícios básicos de aquecimento", answer: "Answer 14"},
    ];

    return <div class="pagegraduacoes"> 
        <h1>
            History of Judo
        </h1>
        <div class="GFG">

            <img src={jigorokano} alt="Jigoro Kano" class="center jigorokano"/>
            <br/>
            <p>
            Judo (judo 柔 道 - caminho suave) é uma arte marcial praticada como desporto, fundada por Jigoro Kano em 1882. Os seus objetivos são fortalecer o físico, a mente e o espírito de forma integrada, para além de desenvolver técnicas de defesa pessoal. 
            </p>
            
            <img src={icon1} alt="icon1" height="50rem" class="center" />
            <center><strong>A luta é a arte em que se usa ao máximo a força física e espiritual.</strong></center>
            <img src={icon1} alt="icon1" height="50rem" class="center" />

            <p>Jigoro Kano nasceu em 1860 em Mikage, Japão. Quando jovem, ele era magro e fraco e decidiu aprender ju-jitsu para se defender contra bullying. Depois de encontrar um mestre de ju-jitsu em Tóquio, ele se dedicou a estudar e aperfeiçoar o ju-jitsu, eventualmente sintetizando várias escolas e criando o judô. Ele escolheu os golpes mais eficazes e racionais, eliminando as práticas perigosas e incompatíveis com o fim elevado que visava, possibilitando uma prática segura e racional.</p>
            
            <img src={icon1} alt="icon1" height="50rem" class="center" />
            <p><center><strong>A UNESCO considerou o Judo como o desporto mais completo a ser praticado por crianças e jovens dos 4 aos 21 anos de idade.</strong></center></p>
            <img src={icon1} alt="icon1" height="50rem" class="center" />
            
            <p>O primeiro contacto de Portugal com o judo aconteceu através de uma demonstração pública feita por dois oficiais da Armada Japonesa ancorada em Lisboa. Ao longo dos anos, vários mestres de judo visitaram Portugal e ajudaram a disseminar esta arte marcial no país. Em 1946, António Correia Pereira fundou a Academia de Budo, a primeira instituição onde se ensinava judo em Portugal. Em 1958, Kiyoshi Kobaiyashi veio a Portugal e acabou por ficar, tornando-se assim o pai do judo português.</p>

            <br/>
            <img src={saudacao} alt="Saudação" class="center saudacao"/>
            <br/>

            <p>
            Com milhares de praticantes e federações espalhados pelo mundo, o Judo tornou-se um dos desportos mais praticados. Não restringindo os seus adeptos a homens com vigor físico e estendendo os seus ensinamentos a mulheres, crianças e idosos, o Judo teve um aumento significativo no número de praticantes.
            </p>
            

        </div>
        



        <h1>Graduacao</h1>
                  <p>Os judocas são classificados em duas graduações: kyu e dan.</p>
          <br/>
        <div class="belts">
          <div class="white">6º Kyo</div>
          <div class="yellow">5º Kyo</div>
          <div class="orange">4º Kyo</div>
          <div class="green">3º Kyo</div>
          <div class="blue">2º Kyo</div>
          <div class="brown">1º Kyo</div>
          <div class="black">1º a 5º Dan</div>
          <div class="redblack">6º a 8º Dan</div>
          <div class="red">9º e 10º Dan</div>
        </div>


        <h1>Documentação</h1>
          
          <p>IPDJ - <a href="docs/MANUAL-Graduações-2021_.pdf">Manual de Graduações e Regulamento de Graduações</a></p>
          <br/>

          <p>IPDJ - <a href="docs/Regulamento-de-Organização-de-Provas-V2_fs.pdf">Regulamento Organização de Provas</a></p>
          <br/>

          <p>IPDJ - <a href="docs/21ci152-Regulamento-e-Modelo-do-Judo-de-Alto-Rendimento-e-Seleções-Nacionais-1.pdf">Regulamento e Modelo do Judo de Alto Rendimento e Seleções Nacionais</a></p>



        <h1>Técnicas do Gokyo</h1>

        <table>
          <tr>
            <th>1º Kyo</th>
            <th>2º Kyo</th>
            <th>3º Kyo</th>
            <th>4º Kyo</th>
            <th>5º Kyo</th>
            
          </tr>
          <tr>
            <td>De-ashi-harai</td>
            <td>Ko-soto-gari</td>
            <td>Ko-soto-gake</td>
            <td>Sumi-gaeshi</td>
            <td>O-soto-guruma</td>
          </tr>
          <tr>
            <td>Hiza-guruma</td>
            <td>Ko-uchi-gari</td>
            <td>Tsuri-goshi</td>
            <td>Tani-otoshi</td>
            <td>Uki-waza</td>
          </tr>
          <tr>
            <td>Sasae-tsuri-komi-ashi</td>
            <td>Koshi-guruma</td>
            <td>Yoko-otoshi</td>
            <td>Hane-maki-komi</td>
            <td>Yoko-wakare</td>
          </tr>
          <tr>
            <td>Uki-goshi</td>
            <td>Tsuri-komi-goshi</td>
            <td>Ashi-guruma</td>
            <td>Sukui-nage</td>
            <td>Yoko-guruma</td>
          </tr>
          <tr>
            <td>O-soto-gari</td>
            <td>Okuri-ashi-harai</td>
            <td>Hane-goshi</td>
            <td>Utsuri-goshi</td>
            <td>Ushiro-goshi</td>
          </tr>
          <tr>
            <td>O-goshi</td>
            <td>Tai-otoshi</td>
            <td>Harai-tsuri-komi-ashi</td>
            <td>O-guruma</td>
            <td>Ura-nage</td>
          </tr>
          <tr>
            <td>O-uchi-gari</td>
            <td>Harai-goshi</td>
            <td>Tomoe-nage</td>
            <td>Soto-maki-komi</td>
            <td>Sumi-otoshi</td>
          </tr>
          <tr>
            <td>Seoi-nage</td>
            <td>Uchi-mata</td>
            <td>Kata-guruma</td>
            <td>Uki-otoshi</td>
            <td>Yoko-gake</td>
          </tr>
        </table>
 
        <p class="minitext">*clica numa técnica</p>

        <h1>Perguntas Modelo</h1>
        <p>Exemplos de perguntas de preparação para um Exame de Judo.</p>
        <br/>

              
        <container>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <div className="wrap-collabsible">
                  <input id={"collapsible" + index} className="toggle" type="checkbox" />
                  <label htmlFor={"collapsible" + index} className="lbl-toggle">
                    {question.question}
                  </label>
                  <div className="collapsible-content">
                    <div className="content-inner">
                      <p>{question.answer}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </container>




    </div>;   
    }


export default Graduacao;
