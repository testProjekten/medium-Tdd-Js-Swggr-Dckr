
module.exports = function(Banks) {

/**
 * Returns a list of banks
 * @param {string} name The name of the bank
 * @param {string} assets Minimal assets of the bank
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Bank} result Result object
 */
Banks.getBanks = function(name, assets, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Invalid ID supplied');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('No Banks found');
  err1.statusCode = 404;
  return cb(err1);
  */ 
}


/**
 * Returns a single bank
 * @param {number} bankId FED_RSSD identifier of bank to return
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Bank} result Result object
 */
Banks.getBankById = function(bankId, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('Bad request');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('Bank not found');
  err1.statusCode = 404;
  return cb(err1);
  */ 
}




Banks.remoteMethod('getBanks',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'name',
       type: 'string',
       description: 'The name of the bank',
       required: false,
       http: { source: 'query' } },
     { arg: 'assets',
       type: 'string',
       description: 'Minimal assets of the bank',
       required: false,
       http: { source: 'query' } } ],
  returns: 
   [ { description: 'successful operation',
       type: [ 'Bank' ],
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '' },
  description: 'Returns a list of banks' }
);

Banks.remoteMethod('getBankById',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'bankId',
       type: 'number',
       description: 'FED_RSSD identifier of bank to return',
       required: true,
       http: { source: 'path' } } ],
  returns: 
   [ { description: 'successful operation',
       type: 'Bank',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/:bankId' },
  description: 'Returns a single bank' }
);

}
