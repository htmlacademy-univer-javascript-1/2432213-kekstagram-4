import { generateRandomComment, getRandomNumber } from './util.js';

export const createPhotoArray = () => {
  return Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: `Описание фотографии ${i + 1}`,
    likes: getRandomNumber(15, 200),
    comments: Array.from({ length: getRandomNumber(0, 30) }, generateRandomComment),
  }));
}
