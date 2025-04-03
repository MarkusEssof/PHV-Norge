// Funksjon for å returnere eit passende ikon basert på spørsmålets kategori
function getIcon(index) {
  if (index < 10) return "💰";        // Økonomi og skatt
  else if (index < 20) return "👷";    // Arbeidsliv og velferd
  else if (index < 30) return "🎓";    // Utdanning og kunnskap
  else if (index < 40) return "🏥";    // Helse og omsorg
  else if (index < 50) return "🌳";    // Klima og miljø
  else if (index < 55) return "🚆";    // Samferdsel og infrastruktur
  else if (index < 60) return "🌍";    // Innvandring og integrering
  else if (index < 65) return "⚖️";    // Justis og beredskap
  else if (index < 70) return "🛡️";    // Utenrikspolitikk og forsvar
  else return "🎭";                   // Kultur, identitet og verdigrunnlag
}

// Liste med 80 spørsmål – inndelt etter kategori
const questions = [
  // 1. Økonomi og skatt (10 spørsmål)
  "Bør rike betale mindre skatt for å få fleire til å investere i norske arbeidsplassar?",
  "Bør staten bruke meir pengar når økonomien går dårleg for å hindre at folk mistar jobben?",
  "Bør dei som tener mykje, betale meir skatt for å finansiere gratis velferdstilbod?",
  "Bør staten fortsatt eige viktige selskap som Equinor og Telenor?",
  "Bør tannlege bli billigare eller gratis for alle?",
  "Bør staten bruke mindre pengar for å hindre at prisar og renter går opp?",
  "Bør folk flest betale mindre skatt, sjølv om det betyr mindre pengar til velferd?",
  "Bør eigedomsskatten (skatt på hus og bustad) fjernast heilt?",
  "Bør staten hjelpe til med å gjere mat billigare i butikkane?",
  "Bør små bedrifter i distrikta få skattelette for å overleve og skape jobbar?",
  // 2. Arbeidsliv og velferd (10 spørsmål)
  "Bør alle ha rett til full lønn når dei er sjuke, også dei med dårleg økonomi?",
  "Skal det vere lettare å få korttidsjobb, sjølv om det gir mindre tryggleik for arbeidstakarar?",
  "Bør arbeidsledige få rett til gratis kurs for å lære seg noko nytt?",
  "Bør du måtte møte opp på tiltak eller aktivitetar for å få sosialhjelp?",
  "Bør fagforeiningar (som LO) få vere med og bestemme korleis arbeidslivet skal vere?",
  "Skal alle ha rett til ei minstelønn, uansett kva jobb dei har?",
  "Bør eldre som jobbar etter pensjonsalder få skattelette som takk?",
  "Bør arbeidsgjevarar betale meir når ein tilsett er sjukmeldt?",
  "Skal det bli enklare for unge å få heiltidsjobb?",
  "Bør staten betale meir til yrke med låg lønn, som reinhaldarar og butikktilsette?",
  // 3. Utdanning og kunnskap (10 spørsmål)
  "Bør sommarferien bli kortare så ein ikkje gløymer det ein har lært?",
  "Skal alle elevar få gratis og sunn mat på skulen?",
  "Bør det vere fleire testar og prøver i skulen for å sjå korleis elevane ligg an?",
  "Skal det vere lov å starte fleire private skular, så lenge dei held god kvalitet?",
  "Bør det vere meir praktisk undervisning i skulen, som handverk eller matlaging?",
  "Bør nynorsk få sterkare vern i skulen, spesielt i nynorskkommunar?",
  "Skal skulen bli ein heil dag med både undervisning, leksehjelp og fritidsaktivitetar?",
  "Bør studentar få meir i stipend og lettare få studentbustad?",
  "Skal barnehage bli gratis for alle familiar?",
  "Bør fleire ungdommar få lærlingplass, og bedrifter få støtte for å ta inn lærlingar?",
  // 4. Helse og omsorg (10 spørsmål)
  "Skal private sjukehus få tilby behandling betalt av det offentlege?",
  "Bør det vere fleire lett tilgjengelige tilbod for ungdom som slit psykisk?",
  "Skal tannlege bli ein del av det offentlege helsevesenet, som fastlege?",
  "Bør demente få rett til aktivitetar på dagtid i kommunen?",
  "Skal alle få fastlege, og legane få betre vilkår?",
  "Bør ein kunne få hjelp for rusproblem utan å få straff?",
  "Skal du få velje privat sjukehus dersom det offentlege har lang ventetid?",
  "Bør sjukepleiarar og andre helsearbeidarar få betre løn og arbeidstid?",
  "Skal staten bygge fleire sjukeheimar nær folk, i staden for store sentrale?",
  "Bør staten bruke meir pengar på å førebyggje sjukdom og helseproblem?",
  // 5. Klima og miljø (10 spørsmål)
  "Bør vi slutte å leite etter ny olje og gass for å stoppe klimakrisa?",
  "Skal straumen vi lagar i Noreg brukast mest til folk og bedrifter her i landet (Noreg-pris)?",
  "Bør det lagast fleire naturreservat og nasjonalparkar for å beskytte naturen?",
  "Skal forureining koste meir, slik at utslepp går ned?",
  "Bør staten satse meir på vindmøller og solenergi?",
  "Skal det bli forbod mot å selje nye bensin- og dieselbilar etter 2030?",
  "Bør folk få støtte til å pusse opp hus for å spare energi og straum?",
  "Bør dei som forureinar mest betale meir i avgifter?",
  "Skal Noreg samarbeide meir med EU for å nå klimamåla?",
  "Bør det bli forbod mot å dumpe avfall frå gruver i fjordane?",
  // 6. Samferdsel og infrastruktur (5 spørsmål)
  "Bør det byggast meir tog mellom dei store byane i Noreg?",
  "Skal det vere gratis ferjer i små bygder og øyar?",
  "Bør bompengane bli lågare over heile landet?",
  "Skal staten gi meir pengar til buss, tog og sykkelvegar i byane?",
  "Skal private selskap få hjelpe til med å bygge vegar raskare (OPS-modellen)?",
  // 7. Innvandring og integrering (5 spørsmål)
  "Bør Noreg ta imot fleire flyktningar som treng hjelp gjennom FN?",
  "Skal ein måtte lære seg norsk for å få bu i Noreg over lang tid?",
  "Bør personar utan lovleg opphald sendast raskt ut av landet?",
  "Skal det vere forbod mot burka og niqab i skular og universitet?",
  "Skal det bli enklare for utanlandske arbeidarar å få jobb i Noreg?",
  // 8. Justis og beredskap (5 spørsmål)
  "Skal gjengmedlemmer og personar som brukar våpen få strengare straff?",
  "Bør fleire politifolk patruljere gatene der folk bur?",
  "Skal ungdom som bryt lova få hjelp og oppfølging i staden for fengsel?",
  "Bør tryggingstenesta (PST) få meir moglegheit til å overvake for å stoppe terror og kriminalitet?",
  "Skal politiet prioritere vald og overgrep i nære relasjonar høgare?",
  // 9. Utenrikspolitikk og forsvar (5 spørsmål)
  "Bør Noreg bli medlem i EU slik at vi får vere med og bestemme?",
  "Skal Noreg bruke meir pengar på Forsvaret for å oppfylle NATO-kravet?",
  "Bør Noreg sende meir våpen og hjelp til Ukraina?",
  "Skal Noreg delta meir i internasjonalt samarbeid gjennom FN?",
  "Bør Noreg skrive under FN-traktaten som forbyr atomvåpen?",
  // 10. Kultur, identitet og verdigrunnlag (10 spørsmål)
  "Bør staten passe på at norsk språk og kultur blir tatt vare på i film, media og museum?",
  "Skal kristne og livssynsbaserte skular få støtte frå staten?",
  "Bør det vere forbod mot å forsøke å endre nokon sin legning (konverteringsterapi)?",
  "Skal nynorsk og bokmål ha like mykje plass i det offentlege?",
  "Bør staten gjere meir for å hindre tvang og kontroll i enkelte miljø (negativ sosial kontroll)?",
  "Skal rettane til LHBT+-personar styrkast i lova?",
  "Bør alle barn få rett til barnehageplass frå dei fyller eitt år?",
  "Skal det vere lov å få hjelp til å døy i spesielle tilfelle (aktiv dødshjelp)?",
  "Skal staten støtte fleire fritidstilbod for ungdom, som ungdomsklubbar og kulturhus?",
  "Bør religion haldast heilt utanfor politiske avgjerder?"
];

const totalQuestions = questions.length;
let currentQuestionIndex = 0;
// Array for å lagre brukerens svar – standard null (ikkje besvart)
const answers = new Array(totalQuestions).fill(null);

// Liste over partia
const parties = ["Ap", "H", "Sp", "SV", "R", "MDG", "FrP", "KrF", "Venstre", "INP"];

// Funksjon for å mappe sliderverdi (1–5) til eit skalert tall: 1 -> -2, 2 -> -1, 3 -> 0, 4 -> 1, 5 -> 2
function mapSliderValue(val) {
  return val - 3;
}

// Last inn eit spørsmål og oppdater ikon
function loadQuestion(index) {
  document.getElementById("question-text").innerText = questions[index];
  document.getElementById("progress").innerText = "Spørsmål " + (index + 1) + "/" + totalQuestions;
  document.getElementById("question-icon").innerText = getIcon(index);
  const slider = document.getElementById("answer-slider");
  // Sett slider til tidlegare svar eller standardverdi (nøytral)
  if (answers[index] !== null) {
    slider.value = answers[index];
  } else {
    slider.value = 3;
  }
  document.getElementById("prev-btn").disabled = index === 0;
  document.getElementById("next-btn").innerText = (index === totalQuestions - 1) ? "Fullfør" : "Neste";
}

// Lagring av svar via slider
document.getElementById("answer-slider").addEventListener("input", function() {
  answers[currentQuestionIndex] = parseInt(this.value);
});

// Naviger vidare
document.getElementById("next-btn").addEventListener("click", function() {
  const sliderValue = parseInt(document.getElementById("answer-slider").value);
  answers[currentQuestionIndex] = sliderValue;
  if (currentQuestionIndex < totalQuestions - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    computeResults();
  }
});

// Gå til tidlegare spørsmål
document.getElementById("prev-btn").addEventListener("click", function() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion(currentQuestionIndex);
  }
});

// Berekningsfunksjon – her bruker vi ein dummy-tilnærming:
// For kvart spørsmål blir poeng for kvar parti berekna som:
// (sliderverdi (mappa) * vekt)
// Vekten for kvar kombinasjon av spørsmål og parti blir bestemt ut frå formelen:
//   weight = ((spørsmål-index + parti-index) % 3) - 1
// Dette gir eit verdiutvalg på -1, 0 eller 1.
function computeResults() {
  const scores = {};
  parties.forEach(p => scores[p] = 0);
  for (let i = 0; i < totalQuestions; i++) {
    const answer = answers[i] !== null ? answers[i] : 3; // Bruk nøytral om ikkje besvart
    const scoreValue = mapSliderValue(answer);
    parties.forEach((party, j) => {
      const weight = ((i + j) % 3) - 1;
      scores[party] += scoreValue * weight;
    });
  }
  const sortedParties = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const top3 = sortedParties.slice(0, 3);
  showResults(scores, top3);
}

// Vis resultat og diagram
function showResults(scores, top3) {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("results-container").style.display = "block";
  const topMatchesDiv = document.getElementById("top-matches");
  topMatchesDiv.innerHTML = "<h3>Topp 3 partimatch:</h3>";
  top3.forEach(party => {
    topMatchesDiv.innerHTML += "<p><strong>" + party + "</strong>: Du stemte for dette partiet basert på dine svar.</p>";
  });

  const ctx = document.getElementById("resultsChart").getContext("2d");
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: parties,
      datasets: [{
        label: 'Poeng',
        data: parties.map(p => scores[p]),
        backgroundColor: [
          'red',      // Ap
          'blue',     // H
          'green',    // Sp
          'darkred',  // SV
          'black',    // R
          'darkgreen',// MDG
          'darkblue', // FrP
          'yellow',   // KrF
          'turquoise',// Venstre
          'gray'      // INP
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Start quiz på nytt
document.getElementById("restart-btn").addEventListener("click", function() {
  currentQuestionIndex = 0;
  for (let i = 0; i < totalQuestions; i++) {
    answers[i] = null;
  }
  document.getElementById("results-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  loadQuestion(currentQuestionIndex);
});

// Last inn det første spørsmålet
loadQuestion(currentQuestionIndex);