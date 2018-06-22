import moment from 'moment';

const IMG = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/i;
const YOUTUBE_LINK = /((http(s)?:\/\/)?)(www\.)?(youtube\.com\/)[\S]+/i;
const DOUBLE_SPACE = /\s\s/g;
const SPACE = ' ';

const extractTo = source => match => {
  source.push(match);
  return '';
};

export const formatMessage = (action) => {
  let message = action.payload.message;
  let videoLinks = [];
  let imageLinks = [];

  while (message.match(IMG) || message.match(YOUTUBE_LINK)) {
    message = message.replace(IMG, extractTo(imageLinks));
    message = message.replace(YOUTUBE_LINK, extractTo(videoLinks));
    message = message.replace(DOUBLE_SPACE, SPACE);
  }

  let payload = {
    ...action.payload,
    message,
    timestamp: moment(),
    imageLinks: imageLinks.length ? imageLinks : null,
    videoLinks: videoLinks.length ? videoLinks : null,
  };

  return { ...action, payload };
};
