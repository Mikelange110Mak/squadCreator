const images = require.context('./images', true, /\.png$/);
const flags = require.context('./flags', true, /\.png$/);

const players = {
   gk: [
      {
         id: 1,
         description: 'Soon',
         title: 'Kepa Arrizabalaga',
         src: images('./gk-kepa.png'),
         cost: 15000000,
         country: flags('./spain.png')
      },
      {
         id: 16,
         description: 'Soon',
         title: 'Edouard Mendy',
         src: images('./gk-mendy.png'),
         cost: 25000000,
         country: flags('./senegal.png')
      }
   ],
   def: [
      {
         id: 28,
         description: 'Soon',
         title: 'César Azpilicueta',
         src: images('./def-azpi.png'),
         cost: 8000000,
         country: flags('./spain.png')
      },
      {
         id: 4,
         description: 'Soon',
         title: 'Benoît Badiashile',
         src: images('./def-badiashille.png'),
         cost: 40000000,
         country: flags('./france.png')
      },
      {
         id: 14,
         description: 'Soon',
         title: 'Trevoh Chalobah',
         src: images('./def-chalobah.png'),
         cost: 22000000,
         country: flags('./eng.png')
      }, {
         id: 21,
         description: 'Soon',
         title: 'Ben Chilwell',
         src: images('./def-chilly.png'),
         cost: 38000000,
         country: flags('./eng.png')
      }, {
         id: 26,
         description: 'Soon',
         title: 'Kalidou Koulibaly',
         src: images('./def-coulibaly.png'),
         cost: 35000000,
         country: flags('./senegal.png')
      },
      {
         id: 32,
         description: 'Soon',
         title: 'Marc Cucurella',
         src: images('./def-cucurella.png'),
         cost: 55000000,
         country: flags('./spain.png')
      },
      {
         id: 33,
         description: 'Soon',
         title: 'Wesley Fofana',
         src: images('./def-fofana.png'),
         cost: 65000000,
         country: flags('./france.png')
      },
      {
         id: 24,
         description: 'Soon',
         title: 'Reece James',
         src: images('./def-rjames.png'),
         cost: 70000000,
         country: flags('./eng.png')
      },
      {
         id: 6,
         description: 'Soon',
         title: 'Thiago Silva',
         src: images('./def-silva.png'),
         cost: 3000000,
         country: flags('./brasil.png')
      }
   ],
   mid: [
      {
         id: 5,
         description: 'Soon',
         title: 'Enzo Fernandez',
         src: images('./cm-enzo.png'),
         cost: 55000000,
         country: flags('./arg.png')
      },
      {
         id: 23,
         description: 'Soon',
         title: 'Conor Gallagher',
         src: images('./cm-gallagher.png'),
         cost: 32000000,
         country: flags('./eng.png')
      },
      {
         id: 67,
         description: 'Soon',
         title: 'Lewis Hall',
         src: images('./cm-hall.png'),
         cost: 5000000,
         country: flags('./eng.png')
      },
      {
         id: 7,
         description: 'Soon',
         title: 'Ngolo Kante',
         src: images('./cm-kante.png'),
         cost: 30000000,
         country: flags('./france.png')
      },
      {
         id: 30,
         description: 'Soon',
         title: 'Carney Chukwuemeka',
         src: images('./cm-karni.png'),
         cost: 15000000,
         country: flags('./eng.png')
      },
      {
         id: 8,
         description: 'Soon',
         title: 'Mateo Kovacic',
         src: images('./cm-kovacic.png'),
         cost: 40000000,
         country: flags('./croatia.png')
      },
      {
         id: 19,
         description: 'Soon',
         title: 'Mason Mount',
         src: images('./cm-mount.png'),
         cost: 75000000,
         country: flags('./eng.png')
      },
      {
         id: 12,
         description: 'Soon',
         title: 'Ruben Loftus-Cheek',
         src: images('./cm-ruben.png'),
         cost: 25000000,
         country: flags('./eng.png')
      },
      {
         id: 20,
         description: 'Soon',
         title: 'Denis Zakaria',
         src: images('./cm-zakaria.png'),
         cost: 20000000,
         country: flags('./switzerland.png')
      }
   ],
   atc: [
      {
         id: 9,
         description: 'Soon',
         title: 'P.E Aubameyang',
         src: images('./atc-auba.png'),
         cost: 12000000,
         country: flags('./gabon.png')
      },
      {
         id: 18,
         description: 'Soon',
         title: 'Armando Broja',
         src: images('./atc-broja.png'),
         cost: 30000000,
         country: flags('./albania.png')
      }, {
         id: 27,
         description: 'Soon',
         title: 'David Datro Fofana ',
         src: images('./atc-dfofana.png'),
         cost: 7000000,
         country: flags('./coted.png')
      }, {
         id: 11,
         description: 'Soon',
         title: 'João Félix',
         src: images('./atc-felix.png'),
         cost: 50000000,
         country: flags('./portugal.png')
      },
      {
         id: 56,
         description: 'Soon',
         title: 'Omari Hutchinson',
         src: images('./atc-hatchi.png'),
         cost: 1000000,
         country: flags('./eng.png')
      },
      {
         id: 29,
         description: 'Soon',
         title: 'Kai Havertz',
         src: images('./atc-havertz.png'),
         cost: 70000000,
         country: flags('./de.png')
      },
      {
         id: 31,
         description: 'Soon',
         title: 'Noni Madueke',
         src: images('./atc-madueke.png'),
         cost: 15000000,
         country: flags('./eng.png')
      },
      {
         id: 19,
         description: 'Soon',
         title: 'Mason Mount',
         src: images('./cm-mount.png'),
         cost: 75000000,
         country: flags('./eng.png')
      },
      {
         id: 15,
         description: 'Soon',
         title: 'Mikhaylo Mudryk',
         src: images('./atc-mudryk.png'),
         cost: 40000000,
         country: flags('./ukraine.png')
      },
      {
         id: 10,
         description: 'Soon',
         title: 'Christian Pulisic',
         src: images('./atc-pulisic.png'),
         cost: 38000000,
         country: flags('./usa.png')
      },
      {
         id: 17,
         description: 'Soon',
         title: 'Raheem Sterling',
         src: images('./atc-sterling.png'),
         cost: 70000000,
         country: flags('./eng.png')
      },
      {
         id: 22,
         description: 'Soon',
         title: 'Hakim Ziyech',
         src: images('./atc-ziyech.png'),
         cost: 20000000,
         country: flags('./marokko.png')
      }
   ]
}
export default players;