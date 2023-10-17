
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomComment = () => {
  const comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  const randomComment = comments[getRandomNumber(0, comments.length - 1)];
  const randomName = ['Артём', 'Ирина', 'Максим', 'Екатерина', 'Алексей', 'Ольга'][getRandomNumber(0, 5)];
  const commentId = getRandomNumber(1, 100);

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: randomComment,
    name: randomName,
  };
};
const photoArray = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: `Описание фотографии ${i + 1}`,
  likes: getRandomNumber(15, 200),
  comments: Array.from({ length: getRandomNumber(0, 30) }, generateRandomComment),
}));
photoArray();
