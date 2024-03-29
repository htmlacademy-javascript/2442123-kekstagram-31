import {getRandomInteger} from './util.js';
import {getRandomArrayElement } from './util.js';
import {createRandomNumber} from './util.js';

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Игорь',
  'Антон',
  'Алексей',
  'Евгений',
  'Дмитрий',
  'Родион'
];

const DESCRIPTIONS = [
  'Великолепный вид на солнце, заходящее над тихим озером, окутывая пейзаж теплым золотистым светом.',
  'Небоскребы, возвышающиеся над шумным городским пейзажем, передают динамичную энергию городской жизни.',
  'Обширное пространство из пышной зелени, усеянное красочными дикими цветами, вызывает ощущение мира и умиротворения.',
  'Снежные горы, величественно вздымающиеся против ясного голубого неба, воплощают в себе величие и красоту природы.',
  'Извилистая тропа, прокладывающая путь сквозь густой лес, окутанная аурой загадочности и приключений.',
  'Водопады, изящно падающие по скалистым утесам, создают завораживающую и неповторимую картину.'
];


const generatePhotoId = createRandomNumber(1, 25);
const generateUrl = createRandomNumber(1, 25);
const generateCommentId = createRandomNumber(25, 20000);


const addingComment = () => {

  const createComment = () => ({
    id: generateCommentId(),
    avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  });
  let addingComments = Array.from({length: getRandomInteger(0, 30)}, createComment);
  return addingComments;
};

const createPhotoCard = () => ({
  id: generatePhotoId(),
  url: 'photos/' + generateUrl() + '.jpg',
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: addingComment(),
});


const addingPhotos = Array.from({length: 25}, createPhotoCard);
export {addingPhotos};


