const services = [
  {
    title: "MUŠKO ŠIŠANJE",
    desc: "Klasično ili moderno šišanje uz prilagođavanje obliku glave i stilu klijenta.",
    cijena: "15.00KM",
    duration: "20 - 30min",
    alt: "Muško šišanje",
    img: "images/muska.png"
  },
  {
    title: "ŽENSKO ŠIŠANJE",
    desc: "Šišanje kose uz savjetovanje i oblikovanje frizure prema želji klijentice.",
    cijena: "20.00KM",
    duration: "30-45 min",
    alt: "Žensko šišanje",
    img: "images/zensko.jpg"
  },
  {
    title: "FENIRANJE KOSE",
    desc: "Sušenje i oblikovanje kose četkom i fenom za uredan i postojan izgled.",
    cijena: "10.00KM",
    duration: "15-35 min",
    alt: "Feniranje kose",
    img: "images/feniranje.jpg"
  },
  {
    title: "FARBANJE KOSE",
    desc: "Nanošenje boje za kosu radi promjene ili osvježavanja boje.",
    cijena: "30.00KM",
    duration: "60-90 min",
    alt: "Farbanje kose",
    img: "images/farbanje.jpg"
  },
  {
    title: "PRAMENOVI",
    desc: "Dodavanje svjetlijih ili tamnijih nijansi kosi za prirodan ili kontrastan izgled.",
    cijena: "25.00KM",
    duration: "45-90 min",
    alt: "Pramenovi",
    img: "images/pramenovi.jpg"
  },
  {
    title: "SVEČANE FRIZURE",
    desc: "Izrada elegantnih frizura za vjenčanja, mature i posebne prilike",
    cijena: "40.00KM",
    duration: "45-75 min",
    alt: "Svečane frizure",
    img: "images/svecane.jpg"
  },
  {
    title: "TRETMAN ZA NJEGU KOSE",
    desc: "Dubinska njega kose uz maske i preparate za hidrataciju i obnovu",
    cijena: "25.00KM",
    duration: "20-30 min",
    alt: "Tretman za njegu kose",
    img: "images/tretman.jpg"
  },
  {
    title: "MUŠKO BRIJANJE I UREĐIVANJE BRADE",
    desc: "Precizno oblikovanje i brijanje brade uz korištenje profesionalnih alata.",
    cijena: "10.00KM",
    duration: "15-20 min",
    alt: "Muško brijanje i uređivanje brade",
    img: "images/brada.jpg"
  },
  {
    title: "MINIVAL",
    desc: "Tretman kojim se kosa trajno uvija i dobija volumen i valovit izgled.",
    cijena: "40.00KM",
    duration: "90-120 min",
    alt: "Minival",
    img: "images/minival.jpg"
  }
];

const brPonuda = 4;
let brojStr = 1;

function prikaziUsluge() {
  const container = document.getElementById("lista-opcija");
  container.innerHTML = "";
  const pocetak = (brojStr - 1) * brPonuda;
  const numerisanePonude = services.slice(pocetak, pocetak + brPonuda);
  numerisanePonude.forEach(service => {
    container.innerHTML += `
      <div class="kartica">
        <img src="${service.img}" alt="${service.alt}">
        <div class="sadrzaj-kartice">
          <h3>${service.title}</h3>
          <p>${service.desc}</p>
          <div class="donjiDioKartice">
            <div>
              <div class="cijena">${service.cijena}</div>
              <small>${service.duration}</small>
            </div>
            <a href="kontakt.html"><button id="kontakt">Kontaktiraj nas</button></a>
          </div>
        </div>
      </div>
    `;
  });
}

function numeracija() {
  const brojStranice = document.getElementById("brojStranice");
  brojStranice.innerHTML = "";
  const brojacStranica = Math.ceil(services.length / brPonuda);
  for (let i = 1; i <= brojacStranica; i++) {
    const paginacijaBtn = document.createElement("span");
    paginacijaBtn.innerText = i;
    paginacijaBtn.classList.add("broj-stranice");
    if (i === brojStr) paginacijaBtn.classList.add("active");
    paginacijaBtn.addEventListener("click", () => {
      brojStr = i;
      prikaziUsluge();
      numeracija();
    });
    brojStranice.appendChild(paginacijaBtn);
  }
}


const nazadBtn = document.getElementById("nazadBtn");
const naprijedBtn = document.getElementById("naprijedBtn");

if (nazadBtn && naprijedBtn) {
  nazadBtn.addEventListener("click", () => {
    if (brojStr > 1) {
      brojStr--;
      prikaziUsluge();
      numeracija();
    }
  });

  naprijedBtn.addEventListener("click", () => {
    if (brojStr < Math.ceil(services.length / brPonuda)) {
      brojStr++;
      prikaziUsluge();
      numeracija();
    }
  });

  prikaziUsluge();
  numeracija();
}


document.addEventListener('DOMContentLoaded', () => {
    const forma = document.getElementById('kontaktForma');
    const resetDugme = document.getElementById('resetDugme');
    const uspjesnaPoruka = document.getElementById('uspjesnaPoruka');

    if (!forma) return; 

    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const telefonRegex = /^[0-9 -]+$/;

    forma.addEventListener('submit', function(event) {
        event.preventDefault();
        let validno = true;

        const ime = document.getElementById('ime').value.trim();
        const prezime = document.getElementById('prezime').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefon = document.getElementById('telefon').value.trim();
        const tema = document.getElementById('pitanje').value;
        const poruka = document.getElementById('poruka').value.trim();

        resetirajGreske();

        if (ime === '') {
            prikaziGresku('ime', 'Ime je obavezno polje.');
            validno = false;
        }

        if (prezime === '') {
            prikaziGresku('prezime', 'Prezime je obavezno polje.');
            validno = false;
        }

        if (email === '') {
            prikaziGresku('email', 'Email je obavezno polje.');
            validno = false;
        } else if (!emailRegex.test(email)) {
            prikaziGresku('email', 'Molimo unesite ispravan format email adrese.');
            validno = false;
        }

        if (telefon === '') {
            prikaziGresku('telefon', 'Telefon je obavezno polje.');
            validno = false;
        } else if (!telefonRegex.test(telefon)) {
            prikaziGresku('telefon', 'Telefon smije sadržavati samo cifre, razmake i crtice.');
            validno = false;
        }

        if (tema === '') {
            prikaziGresku('pitanje', 'Molimo odaberite temu upita.');
            validno = false;
        }

        if (poruka === '') {
            prikaziGresku('poruka', 'Poruka je obavezna i ne smije biti prazna.');
            validno = false;
        }

        if (validno) {
            uspjesnaPoruka.style.display = 'block';
            uspjesnaPoruka.textContent = `Hvala Vam na upitu, ${ime}! Poruka je uspješno poslana.`;
            forma.reset();
        }
    });

    resetDugme.addEventListener('click', () => {
        resetirajGreske();
        uspjesnaPoruka.style.display = 'none';
    });

    function prikaziGresku(poljeId, tekstPoruke) {
        const polje = document.getElementById(poljeId);
        const greskaSpan = document.getElementById(`${poljeId}Greska`);
        polje.classList.add('neispravno');
        greskaSpan.textContent = tekstPoruke;
    }

    function resetirajGreske() {
        document.querySelectorAll('input, select, textarea').forEach(polje => {
            polje.classList.remove('neispravno');
        });
        document.querySelectorAll('.greska-poruka').forEach(span => {
            span.textContent = '';
        });
        uspjesnaPoruka.style.display = 'none';
    }
});