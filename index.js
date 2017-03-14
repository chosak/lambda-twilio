var twilio = require( 'twilio' );

exports.handler = function( event, context, callback ) {

  var client = new twilio.RestClient(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN   
  );

  console.log( "Making call to " + process.env.TO_PHONE_NUMBER );

  client.makeCall({
    from: process.env.FROM_PHONE_NUMBER,
    to: process.env.TO_PHONE_NUMBER,
    url: process.env.CALL_URL 
  }, function( err, responseData ) {
    callback( null, "Success!" );
  })

};
