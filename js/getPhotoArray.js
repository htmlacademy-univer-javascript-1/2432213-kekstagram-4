import { getRandomInt, getRandomArrayElement } from './utils.js';
import { namesExamples, commentsExamples, MAX_LENGTH_ARRAY_PHOTOS } from './data.js';

const NAMES_EXAMPLES = namesExamples();
const COMMENTS_EXAMPLES = commentsExamples();
const PHOTOS_COUNT = MAX_LENGTH_ARRAY_PHOTOS;

export const generateComments = () => {
  const comments = [];
  const numComments = getRandomInt(0, 30);
  for (let i = 0; i < numComments; i++) {
    const comment = {
      id: i,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS_EXAMPLES),
      name: getRandomArrayElement(NAMES_EXAMPLES),
    };
    comments.push(comment);
  }
  return comments;
};

export const getPhotoArray = () => {
  const photos = [];
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Description of Photo ${i}`,
      likes: getRandomInt(15, 200),
      comments: generateComments(),
    };
    photos.push(photo);
  }
  return photos;
};
