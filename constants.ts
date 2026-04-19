
import { Feature, Instructor } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'escuela',
    title: 'La Escuela',
    description: 'Donde enseñamos técnicas de combate y difundimos la cultura gaucha. Un espacio de formación integral en el arte del facón, preservando el legado marcial de nuestra tierra.',
    icon: 'school'
  },
  {
    id: 'recreacion',
    title: 'Recreación Histórica',
    description: 'Nos vestimos de gauchos y recreamos momentos históricos en exhibiciones y actos públicos. Revivimos el pasado con rigor, honor y respeto por nuestros ancestros.',
    icon: 'history_edu'
  },
  {
    id: 'investigacion',
    title: 'Investigación y Difusión',
    description: 'Investigamos la historia y publicamos en distintos medios. Rescatamos documentos, crónicas y tradiciones olvidadas para asegurar que la esgrima criolla perdure.',
    icon: 'menu_book'
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'jorge',
    name: 'Jorge Prina',
    role: 'Maestro',
    quote: '"La esgrima criolla es nuestra herencia viva, un arte de honor y coraje que mantenemos vigente."',
    image: 'https://i.imgur.com/pTL2uLq.png'
  },
  {
    id: 'ariel',
    name: 'Ariel "Doc" Antivero',
    role: 'Capataz de Investigación',
    quote: '"Disciplina y técnica en cada movimiento, respetando la tradición de nuestros antepasados."',
    image: 'https://i.imgur.com/EXe6Pbc.jpeg'
  },
  {
    id: 'pampa',
    name: 'Sergio "Pampa" Lopez',
    role: 'Capataz de Momento Cultural',
    quote: '"El facón no es solo un arma, es una extensión del brazo y del alma del gaucho en la defensa."',
    image: 'https://i.imgur.com/WDxyJeC.jpeg'
  },
  {
    id: 'eliseo',
    name: 'Eliseo Dulon',
    role: 'Capataz de Entrenamiento',
    quote: '"Aquí me pongo a cantar al compás de la vigüela, que el hombre que lo desvela una pena estraordinaria."',
    image: 'https://i.imgur.com/VDeBnC9.jpeg'
  },
  {
    id: 'luisi',
    name: 'Luisina Montero',
    role: 'Directora Grupo Recreación Historica',
    quote: '"Sombra terrible de Facundo, voy a evocarte, para que sacudiendo el ensangrentado polvo..."',
    image: 'https://i.imgur.com/pc1Wng8.jpeg',
    objectPosition: 'object-[center_30%]'
  },
  {
    id: 'cristian',
    name: 'Cristian Ciarlo',
    role: 'Ceremonial y Protocolo',
    quote: '"Hacete duro, muchacho, que la vida es pa\' los fuertes y el destino no espera."',
    image: 'https://i.imgur.com/i7EXtPU.jpeg'
  },
  {
    id: 'agusto',
    name: 'Augusto Miranda',
    role: 'Instructor',
    quote: '"La constancia en la práctica forja el carácter del esgrimista."',
    image: 'https://i.imgur.com/jkWjxZn.jpeg'
  }
];
