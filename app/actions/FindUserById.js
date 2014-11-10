var User = Nuts.models.user;

module.exports = function(id) {
  var deferred = Nuts.defer();

  User.findById(id).exec().then(function(user) {
    deferred.resolve(user);
  }, function(err) {
    deferred.reject(err);
  });

  return deferred.promise;
}
