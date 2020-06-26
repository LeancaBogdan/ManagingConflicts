import React from 'react';

import classes from './ClientLayout.module.css';
import ClientHeader from '../../clientComponents/ClientHeader/ClientHeader';
import ClientBody from '../../clientComponents/ClientBody/ClientBody'

class clientLayout extends React.Component {
  state = {
    index: 0,
    brochure: {
      name: "BROȘURA 1",
      scenarios: 
      [
        {
        name: "SCENARIUL 1",
        description: "Imaginaţi-vă că faceţi parte dintr-un grup care are sarcina de a decide tipul aeronavelor de transport din unitatea Dumneavoastră, cu care veţi participa la un exerciţiu multinaţional pentru exersarea şi consolidarea tehnicilor, a tacticilor şi a procedurilor pentru executarea misiunilor de transport aerian. Dumneavoastră şi cei mai mulţi membri ai grupului consideraţi că ar fi mai bine să participe aeronavele de transport C-27J Spartan, dar Ioana sugerează că aeronavele de transport C-130B Hercules sau chiar C-130H Hercules sunt mai potrivite. Ar trebui să luaţi o decizie de grup cât mai rapid, dar Ioana spune că este mai important să discutaţi amănunţit argumentele şi contraargumentele pentru utilizarea unuia dintre cele trei tipuri de aeronave şi abia apoi să decideţi.",
        questions: [
          {
            type: "multiple",
            description: "Personajul principal care creează divergenţă în grup este de sex:",
            options: ["Feminin", "Masculin"]
          },
          {
            type: "ranking",
            description: "Indicaţi măsura în care Ioana a generat dezacorduri în grup privind acţiunile care trebuie realizate pentru îndeplinirea sarcinii",
            options: ["Deloc", "", "", "", "În mare măsură"]
          },
          {
            type: "text",
            description: "Cum aţi gestiona acest conflict? ",
            options: []
          },
          {
            type: "multiple_ranking",
            description: "Indicaţi măsura în care sunteţi de acord cu fiecare dintre următoarele enunţuri despre echipa din care faceţi parte în scenariul prezentat, încercuind răspunsul Dvs. pe o scală de la 1 (Dezacord puternic) la 7 (Acord puternic)",
            options:[
                {
                  type: "ranking",
                  description: "Consider că această echipă nu va îndeplini cu succes sarcina de muncă alocată",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Consideră că această echipă va fi foarte productivă în sarcini viitoare. ",
                  options: ["", "", "", "", "", "", ""]
                }
            ]
          }
        ]
      },
      {
          name: "SCENARIUL 2",
          description: "Imaginați-vă că faceți parte dintr-un grup care are sarcina de a decide cum trebuie să realizați transportarea eficientă a unei aparaturi militare între două locații. Dumneavoastră și cei mai mulți membri ai grupului consideraţi că ar fi bine să urmați traseul DN 107P, dar Marius sugerează că traseul mai lung pe DN 107S este mai potrivit datorită calităţii carosabilului. Ar trebui să luați o decizie de grup cât mai rapid, dar Marius spune că este mai important să discutați amănunțit argumentele și contraargumentele pentru cele două trasee (folosind și alte criterii, nu doar calitatea carosabilului) și abia apoi să decideți. ",
          questions:[
            {
              type: "multiple",
              description: "Personajul principal care creează divergenţă în grup este de sex:",
              options: ["Feminin", "Masculin"]
            },
            {
              type: "ranking",
              description: "Indicaţi măsura în care Marius a generat dezacorduri în grup privind acţiunile care trebuie realizate pentru îndeplinirea sarcinii:",
              options: ["Deloc", "", "", "", "În mare măsură"]
            },
            {
              type: "text",
              description: "Cum aţi gestiona acest conflict? ",
              options: []
            },
            {
              type: "multiple_ranking",
              description: " Indicaţi măsura în care sunteţi de acord cu fiecare dintre următoarele enunţuri despre echipa din care faceţi parte în scenariul prezentat, încercuind răspunsul Dvs. pe o scală de la 1 (Dezacord puternic) la 7 (Acord puternic)",
              options:[
                  {
                    type: "ranking",
                    description: "Consider că această echipă nu va îndeplini cu succes sarcina de muncă alocată",
                    options: ["", "", "", "", "", "", ""]
                  },
                  {
                    type: "ranking",
                    description: "Consideră că această echipă va fi foarte productivă în sarcini viitoare. ",
                    options: ["", "", "", "", "", "", ""]
                  }
              ]
            }
          ]
      }
      ]
    }
  };

  constructor(props) {
    super(props);
    this.nextScenario = this.nextScenario.bind(this);
    this.previousScenario = this.previousScenario.bind(this);
  }

  checkIndexAndUpdateButtons (index) {

    document.getElementById('nextButton').style.visibility = 'visible';
    document.getElementById('backButton').style.visibility = 'visible';
    document.getElementById('sendButton').style.visibility = 'hidden';

    console.log(this.state.brochure.scenarios.length)
    console.log(index)

    if (this.state.brochure.scenarios.length === index + 1)
    {
      document.getElementById('nextButton').style.visibility = 'hidden';
      document.getElementById('sendButton').style.visibility = 'visible';
    }

    if (index === 0)
    {
      document.getElementById('backButton').style.visibility = 'hidden';

    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.checkIndexAndUpdateButtons(this.state.index);
  }

  componentDidMount() {
    this.checkIndexAndUpdateButtons(this.state.index);
  }

  nextScenario () {
    if (this.state.brochure.scenarios.length === this.state.index + 1)
    {
      return;
    }

    this.setState({index:this.state.index+1})
    window.scrollTo(0, 0);
  }

  previousScenario () {
    if (this.state.index === 0)
    {
      return;
    }

    this.setState({index:this.state.index-1})
    window.scrollTo(0, 0);
  }

  send() {
    alert("Aici ar trebui sa se trimita rezultatu. Va multumim pentru participare!");
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div className={classes.Content}>
        <ClientHeader title={this.state.brochure.name}/>
        <ClientBody scenario={this.state.brochure.scenarios[this.state.index]} />
        <div className={classes.Buttons}>
        <button className={classes.SendButton} id="sendButton" onClick={this.send}>Trimite</button>
        <button id="backButton" className={classes.Button} onClick={this.previousScenario}>Înapoi</button>
        <button id="nextButton" className={classes.Button} onClick={this.nextScenario}>Înainte</button>
        </div>
      </div>
  );
  }
}

export default clientLayout;
