Proof of concept: mocking HTTP services.

Tested in Windows.

# Requirements
* JDK
* Node.js

# Installing
```
cd mockserver-utilities
npm install mockserver-grunt --save-dev
npm install mockserver-client 
```

# Starting server
Start the server for colecting data (port 1090) or mocking (por 1080):
```
node start_mockserver
```

# Collecting data with proxy server
Set proxy in your browser to localhost:1090.

Navigate with your browser over the resources to collect. Examples:
* http://api.openweathermap.org/data/2.5/weather?q=Seville,Sp&appid=2de143494c0b295cca9337e1e96b00e0
* https://en.wikipedia.org/w/api.php?format=json&action=query&titles=mock&prop=revisions&rvprop=content

If you are going to use HTTPS, you can install the server certificate 'CertificateAuthorityCertificate.pem' into the "Certification Authorities" in your browser.

Capture logs:
```
node dumpToLogs
```

# Configuring mocks
* Create new mock extracting data (httpRequest, httpResponse, times, timeToLive) from mockserver_request.log in the format:
```
mockServerClient("localhost", 1080).mockAnyResponse(
{
  "httpRequest" : {...}, // the http request that must be matched for this expectation to respond
  "httpResponse" : {...}, // object that can be used to specify the response
  "times" : {...}, // the number of times to respond when this http is matched
  "timeToLive" : {...} // timeToLive  the length of time from when the server receives the expectation that the expectation should be active
});
```
* Select only required properties in httpRequest and remove the others.
* Set times.unlimited to true.

View example in `mockserverclient.js`

# Using mocks with mock server
Import mocks in server:
```
node mockserverclient
```
Test the results. For example open in your browser:
* [http://localhost:1080/data/2.5/weather?q=Seville,Sp&appid=2de143494c0b295cca9337e1e96b00e01](http://localhost:1080/data/2.5/weather?q=Seville,Sp&appid=2de143494c0b295cca9337e1e96b00e01)
* [https://localhost:1080/w/api.php?format=json&action=query&titles=mock&prop=revisions&rvprop=content](https://localhost:1080/w/api.php?format=json&action=query&titles=mock&prop=revisions&rvprop=content)

You should see the same responses as before.

# To do
* Exception message with Certification Authorities during the server execution, but it seems not to affect operation.

