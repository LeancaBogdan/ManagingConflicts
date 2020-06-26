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
            type: "ranking",
            description: "Indicaţi măsura în care Ioana a generat tensiune și animozitate în grup pe baza unor remarci personale şi aspecte de interacţiune interpersonală",
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
                  description: "Consideră că această echipă va fi foarte productivă în sarcini viitoare.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Consider că membrii acestei echipe sunt satisfăcuţi să lucreze împreună.",
                  options: ["", "", "", "", "", "", ""]
                }
            ]
          },
          {
            type: "multiple_ranking",
            description: "Indicaţi măsura în care sunteţi de acord cu fiecare dintre următoarele enunţuri despre Ioana, încercuind răspunsul Dvs. pe o scală de la 1 (Dezacord puternic) la 7 (Acord puternic)",
            options:[
                {
                  type: "ranking",
                  description: "În viitor, voi evita acest membru al echipei.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Dacă fac o greşeală în munca cu acest membru al echipei, este posibil ca acesta să îmi reproşeze greşeala.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Acest membru nu ar acţiona în mod deliberat ca să îmi submineze eforturile de muncă.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Am senzaţia că acest membru îmi valorizează competenţele şi contribuţiile mele la munca noastră comună.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Am senzaţia că acest membru îmi valorizează competenţele şi contribuţiile mele la munca noastră comună.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Aş recomanda acest membru al echipei pentru post de supervizor/ lider.",
                  options: ["", "", "", "", "", "", ""]
                }
            ]
          },
          {
            type: "ranking",
            description: "Cum consideraţi că se simt membrii în această echipă?",
            options: ["Groaznic", "Nefericiţi", "Mai degrabă nemulțumiţi", "Mixt", "Mai degrabă mulțumiţi", "Mulţumiţi", "Încântaţi"]
          },
          {
            type: "ranking",
            description: "Starea de spirit descrie experiența emoțională generală care poate fi declanșată de un anumit stimul sau eveniment, iar starea de spirit poate avea o valență pozitivă sau negativă. Cum aţi descrie starea Dvs. de spirit ca membru al echipei prezentată în acest scenariu?",
            options: ["Foarte bună tot timpul", "Mai degrabă bună ", "Mai degrabă negativă", "Negativă tot timpul"]
          },
          {
            type: "ranking",
            description: "Starea de spirit descrie experiența emoțională generală care poate fi declanșată de un anumit stimul sau eveniment, iar starea de spirit poate avea o valență pozitivă sau negativă. Cum aţi descrie starea generală de spirit a echipei din care faceţi parte în acest scenariu?",
            options: ["Foarte bună tot timpul", "Mai degrabă bună ", "Mai degrabă negativă", "Negativă tot timpul"]
          }
        ]
      },
      {
        name: "SCENARIUL 2",
        description: "Imaginați-vă că faceți parte dintr-un grup care are sarcina de a decide cum trebuie să realizați transportarea eficientă a unei aparaturi militare între două locații. Dumneavoastră și cei mai mulți membri ai grupului consideraţi că ar fi bine să urmați traseul DN 107P, dar Marius sugerează că traseul mai lung pe DN 107S este mai potrivit datorită calităţii carosabilului. Ar trebui să luați o decizie de grup cât mai rapid, dar Marius spune că este mai important să discutați amănunțit argumentele și contraargumentele pentru cele două trasee (folosind și alte criterii, nu doar calitatea carosabilului) și abia apoi să decideți.",
        questions: [
          {
            type: "multiple",
            description: "Personajul principal care creează divergenţă în grup este de sex:",
            options: ["Feminin", "Masculin"]
          },
          {
            type: "ranking",
            description: "Indicaţi măsura în care Marius a generat dezacorduri în grup privind acţiunile care trebuie realizate pentru îndeplinirea sarcinii",
            options: ["Deloc", "", "", "", "În mare măsură"]
          },
          {
            type: "ranking",
            description: "Indicaţi măsura în care Marius a generat tensiune și animozitate în grup pe baza unor remarci personale şi aspecte de interacţiune interpersonală",
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
                  description: "Consideră că această echipă va fi foarte productivă în sarcini viitoare.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Consider că membrii acestei echipe sunt satisfăcuţi să lucreze împreună.",
                  options: ["", "", "", "", "", "", ""]
                }
            ]
          },
          {
            type: "multiple_ranking",
            description: "Indicaţi măsura în care sunteţi de acord cu fiecare dintre următoarele enunţuri despre Marius, încercuind răspunsul Dvs. pe o scală de la 1 (Dezacord puternic) la 7 (Acord puternic)",
            options:[
                {
                  type: "ranking",
                  description: "În viitor, voi evita acest membru al echipei.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Dacă fac o greşeală în munca cu acest membru al echipei, este posibil ca acesta să îmi reproşeze greşeala.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Acest membru nu ar acţiona în mod deliberat ca să îmi submineze eforturile de muncă.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Am senzaţia că acest membru îmi valorizează competenţele şi contribuţiile mele la munca noastră comună.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Am senzaţia că acest membru îmi valorizează competenţele şi contribuţiile mele la munca noastră comună.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Aş recomanda acest membru al echipei pentru post de supervizor/ lider.",
                  options: ["", "", "", "", "", "", ""]
                }
            ]
          },
          {
            type: "ranking",
            description: "Cum consideraţi că se simt membrii în această echipă?",
            options: ["Groaznic", "Nefericiţi", "Mai degrabă nemulțumiţi", "Mixt", "Mai degrabă mulțumiţi", "Mulţumiţi", "Încântaţi"]
          },
          {
            type: "ranking",
            description: "Starea de spirit descrie experiența emoțională generală care poate fi declanșată de un anumit stimul sau eveniment, iar starea de spirit poate avea o valență pozitivă sau negativă. Cum aţi descrie starea Dvs. de spirit ca membru al echipei prezentată în acest scenariu?",
            options: ["Foarte bună tot timpul", "Mai degrabă bună ", "Mai degrabă negativă", "Negativă tot timpul"]
          },
          {
            type: "ranking",
            description: "Starea de spirit descrie experiența emoțională generală care poate fi declanșată de un anumit stimul sau eveniment, iar starea de spirit poate avea o valență pozitivă sau negativă. Cum aţi descrie starea generală de spirit a echipei din care faceţi parte în acest scenariu?",
            options: ["Foarte bună tot timpul", "Mai degrabă bună ", "Mai degrabă negativă", "Negativă tot timpul"]
          }
        ]
      },
      {
        name: "SCENARIUL 3",
        description: "Imaginaţi-vă că faceţi parte dintr-un grup a cărui sarcină de lucru este să propună activităţi pentru desfăşurarea paradei militare care va avea loc cu ocazia a 100 de ani de existenţă a unităţii. În cadrul sesiunii de lucru, apar neînțelegeri și ostilitate deoarece Alexandra consideră că grupul are doar membrii incompetenți cu care ea nu este compatibilă. Certurile frecvente cu Alexandra îi conduc pe membrii grupului să evite să lucreze cu ea. Sentimentul este reciproc deoarece Alexandra vă spune că nu îi place să lucreze cu membrii acest grup, generând din nou tensiune în cadrul grupului",
        questions: [
          {
            type: "multiple",
            description: "Personajul principal care creează divergenţă în grup este de sex:",
            options: ["Feminin", "Masculin"]
          },
          {
            type: "ranking",
            description: "Indicaţi măsura în care Alexandra a generat dezacorduri în grup privind acţiunile care trebuie realizate pentru îndeplinirea sarcinii",
            options: ["Deloc", "", "", "", "În mare măsură"]
          },
          {
            type: "ranking",
            description: "Indicaţi măsura în care Alexandra a generat tensiune și animozitate în grup pe baza unor remarci personale şi aspecte de interacţiune interpersonală",
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
                  description: "Consideră că această echipă va fi foarte productivă în sarcini viitoare.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Consider că membrii acestei echipe sunt satisfăcuţi să lucreze împreună.",
                  options: ["", "", "", "", "", "", ""]
                }
            ]
          },
          {
            type: "multiple_ranking",
            description: "Indicaţi măsura în care sunteţi de acord cu fiecare dintre următoarele enunţuri despre Alexandra, încercuind răspunsul Dvs. pe o scală de la 1 (Dezacord puternic) la 7 (Acord puternic)",
            options:[
                {
                  type: "ranking",
                  description: "În viitor, voi evita acest membru al echipei.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Dacă fac o greşeală în munca cu acest membru al echipei, este posibil ca acesta să îmi reproşeze greşeala.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Acest membru nu ar acţiona în mod deliberat ca să îmi submineze eforturile de muncă.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Am senzaţia că acest membru îmi valorizează competenţele şi contribuţiile mele la munca noastră comună.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Am senzaţia că acest membru îmi valorizează competenţele şi contribuţiile mele la munca noastră comună.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Aş recomanda acest membru al echipei pentru post de supervizor/ lider.",
                  options: ["", "", "", "", "", "", ""]
                }
            ]
          },
          {
            type: "ranking",
            description: "Cum consideraţi că se simt membrii în această echipă?",
            options: ["Groaznic", "Nefericiţi", "Mai degrabă nemulțumiţi", "Mixt", "Mai degrabă mulțumiţi", "Mulţumiţi", "Încântaţi"]
          },
          {
            type: "ranking",
            description: "Starea de spirit descrie experiența emoțională generală care poate fi declanșată de un anumit stimul sau eveniment, iar starea de spirit poate avea o valență pozitivă sau negativă. Cum aţi descrie starea Dvs. de spirit ca membru al echipei prezentată în acest scenariu?",
            options: ["Foarte bună tot timpul", "Mai degrabă bună ", "Mai degrabă negativă", "Negativă tot timpul"]
          },
          {
            type: "ranking",
            description: "Starea de spirit descrie experiența emoțională generală care poate fi declanșată de un anumit stimul sau eveniment, iar starea de spirit poate avea o valență pozitivă sau negativă. Cum aţi descrie starea generală de spirit a echipei din care faceţi parte în acest scenariu?",
            options: ["Foarte bună tot timpul", "Mai degrabă bună ", "Mai degrabă negativă", "Negativă tot timpul"]
          }
        ]
      },
      {
        name: "SCENARIUL 4",
        description: "Imaginaţi-vă că faceţi parte dintr-un grup care trebuie să propună îmbunătățiri pentru regulamentul de ordine interioară. Vasile, care stârnește frecvent animozități personale atunci când lucrează în grup, vă spune că acest grup nu este suficient de competent și că el este incompatibil cu acest grad de incompetență. Ceilalți membri îl mustrează pentru limbajul dur folosit și pentru faptul că stârnește atâta discordie în grup. Vasile interpretează această situaţie considerând că este incompatibil cu Dumneavoastră şi cu ceilalţi membri ai grupului, nu doar sub aspectul competenţei, ci şi sub aspectul valorilor şi al personalităţii",
        questions: [
          {
            type: "multiple",
            description: "Personajul principal care creează divergenţă în grup este de sex:",
            options: ["Feminin", "Masculin"]
          },
          {
            type: "ranking",
            description: "Indicaţi măsura în care Vasile a generat dezacorduri în grup privind acţiunile care trebuie realizate pentru îndeplinirea sarcinii",
            options: ["Deloc", "", "", "", "În mare măsură"]
          },
          {
            type: "ranking",
            description: "Indicaţi măsura în care Vasile a generat tensiune și animozitate în grup pe baza unor remarci personale şi aspecte de interacţiune interpersonală",
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
                  description: "Consideră că această echipă va fi foarte productivă în sarcini viitoare.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Consider că membrii acestei echipe sunt satisfăcuţi să lucreze împreună.",
                  options: ["", "", "", "", "", "", ""]
                }
            ]
          },
          {
            type: "multiple_ranking",
            description: "Indicaţi măsura în care sunteţi de acord cu fiecare dintre următoarele enunţuri despre Vasile, încercuind răspunsul Dvs. pe o scală de la 1 (Dezacord puternic) la 7 (Acord puternic)",
            options:[
                {
                  type: "ranking",
                  description: "În viitor, voi evita acest membru al echipei.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Dacă fac o greşeală în munca cu acest membru al echipei, este posibil ca acesta să îmi reproşeze greşeala.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Acest membru nu ar acţiona în mod deliberat ca să îmi submineze eforturile de muncă.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Am senzaţia că acest membru îmi valorizează competenţele şi contribuţiile mele la munca noastră comună.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Am senzaţia că acest membru îmi valorizează competenţele şi contribuţiile mele la munca noastră comună.",
                  options: ["", "", "", "", "", "", ""]
                },
                {
                  type: "ranking",
                  description: "Aş recomanda acest membru al echipei pentru post de supervizor/ lider.",
                  options: ["", "", "", "", "", "", ""]
                }
            ]
          },
          {
            type: "ranking",
            description: "Cum consideraţi că se simt membrii în această echipă?",
            options: ["Groaznic", "Nefericiţi", "Mai degrabă nemulțumiţi", "Mixt", "Mai degrabă mulțumiţi", "Mulţumiţi", "Încântaţi"]
          },
          {
            type: "ranking",
            description: "Starea de spirit descrie experiența emoțională generală care poate fi declanșată de un anumit stimul sau eveniment, iar starea de spirit poate avea o valență pozitivă sau negativă. Cum aţi descrie starea Dvs. de spirit ca membru al echipei prezentată în acest scenariu?",
            options: ["Foarte bună tot timpul", "Mai degrabă bună ", "Mai degrabă negativă", "Negativă tot timpul"]
          },
          {
            type: "ranking",
            description: "Starea de spirit descrie experiența emoțională generală care poate fi declanșată de un anumit stimul sau eveniment, iar starea de spirit poate avea o valență pozitivă sau negativă. Cum aţi descrie starea generală de spirit a echipei din care faceţi parte în acest scenariu?",
            options: ["Foarte bună tot timpul", "Mai degrabă bună ", "Mai degrabă negativă", "Negativă tot timpul"]
          }
        ]
      },
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
