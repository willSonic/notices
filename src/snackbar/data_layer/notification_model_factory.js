const pobrecita_ID_Generator = (function() {
    var id = 0;
    return function() {
        return id++;
    };
})();

export const buildNotification = ({
  statusCode,
  message ,
  type,
  id = pobrecita_ID_Generator()
} = {}) => ({
  statusCode,
  message,
  type,
  id
});
