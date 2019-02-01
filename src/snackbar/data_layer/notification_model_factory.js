const pobrecitaID = (function() {
    var id = 0;
    return function() {
        return id++;
    };
})();

export const createNotification = ({
  message = '',
  type = '',
  id = pobrecitaID()
} = {}) => ({
  message,
  type,
  id
});
