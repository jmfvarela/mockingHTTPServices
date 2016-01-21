var mockServer = require('mockserver-client'),
    mockServerClient = mockServer.mockServerClient, // MockServer client
    proxyClient = mockServer.proxyClient; // proxy client
	

mockServerClient("localhost", 1080).mockAnyResponse(
{
  "httpRequest" : {
    "method" : "GET",
    "path" : "/data/2.5/weather",
    "queryStringParameters" : [ {
      "name" : "q",
      "values" : [ "Seville,Sp" ]
    } ]
  },
  "httpResponse" : {
    "statusCode" : 200,
    "headers" : [ {
      "name" : "Server",
      "values" : [ "openresty" ]
    }, {
      "name" : "X-Source",
      "values" : [ "back" ]
    }, {
      "name" : "Access-Control-Allow-Origin",
      "values" : [ "*" ]
    }, {
      "name" : "Access-Control-Allow-Credentials",
      "values" : [ "true" ]
    }, {
      "name" : "Access-Control-Allow-Methods",
      "values" : [ "GET, POST" ]
    }, {
      "name" : "Content-Length",
      "values" : [ "446" ]
    }, {
      "name" : "Date",
      "values" : [ "Wed, 20 Jan 2016 15:11:13 GMT" ]
    }, {
      "name" : "Content-Type",
      "values" : [ "application/json; charset=utf-8" ]
    }, {
      "name" : "Connection",
      "values" : [ "keep-alive" ]
    } ],
    "body" : "{\"coord\":{\"lon\":-6.02,\"lat\":37.38},\"weather\":[{\"id\":801,\"main\":\"Clouds\",\"description\":\"few clouds\",\"icon\":\"02d\"}],\"base\":\"stations\",\"main\":{\"temp\":291.7,\"pressure\":1018,\"humidity\":67,\"temp_min\":289.15,\"temp_max\":296.15},\"visibility\":10000,\"wind\":{\"speed\":0.5,\"deg\":270},\"clouds\":{\"all\":20},\"dt\":1453300200,\"sys\":{\"type\":1,\"id\":5511,\"message\":0.0342,\"country\":\"ES\",\"sunrise\":1453275318,\"sunset\":1453311317},\"id\":2510170,\"name\":\"Triana\",\"cod\":200}\n"
  },
  "times" : {
    "remainingTimes" : 1,
    "unlimited" : true
  },
  "timeToLive" : {
    "unlimited" : true
  }

}
);



mockServerClient("localhost", 1080).mockAnyResponse(
{
  "httpRequest" : {
    "method" : "GET",
    "path" : "/w/api.php",
    "queryStringParameters" : [ {
      "name" : "format",
      "values" : [ "json" ]
    }, {
      "name" : "action",
      "values" : [ "query" ]
    }, {
      "name" : "titles",
      "values" : [ "mock" ]
    }, {
      "name" : "prop",
      "values" : [ "revisions" ]
    }, {
      "name" : "rvprop",
      "values" : [ "content" ]
    } ]
  },    
  "httpResponse" : {
    "statusCode" : 200,
    "headers" : [ {
      "name" : "X-Cache",
      "values" : [ "cp1052 miss+chfp(0), cp3040 miss+chfp(0), cp3009 frontend miss+chfp(0)" ]
    }, {
      "name" : "Server",
      "values" : [ "nginx/1.9.4" ]
    }, {
      "name" : "X-Content-Type-Options",
      "values" : [ "nosniff" ]
    }, {
      "name" : "Connection",
      "values" : [ "keep-alive" ]
    }, {
      "name" : "X-Client-IP",
      "values" : [ "89.129.127.70" ]
    }, {
      "name" : "Date",
      "values" : [ "Wed, 20 Jan 2016 23:02:15 GMT" ]
    }, {
      "name" : "Via",
      "values" : [ "1.1 varnish, 1.1 varnish, 1.1 varnish" ]
    }, {
      "name" : "X-Frame-Options",
      "values" : [ "SAMEORIGIN" ]
    }, {
      "name" : "Accept-Ranges",
      "values" : [ "bytes" ]
    }, {
      "name" : "X-Varnish",
      "values" : [ "939789383, 2887979225, 3194454847" ]
    }, {
      "name" : "Strict-Transport-Security",
      "values" : [ "max-age=31536000; includeSubDomains; preload" ]
    }, {
      "name" : "Vary",
      "values" : [ "Accept-Encoding,X-Forwarded-Proto,Cookie" ]
    }, {
      "name" : "Content-Length",
      "values" : [ "1103" ]
    }, {
      "name" : "Age",
      "values" : [ "0" ]
    }, {
      "name" : "X-Analytics",
      "values" : [ "WMF-Last-Access=20-Jan-2016;https=1" ]
    }, {
      "name" : "Content-Type",
      "values" : [ "application/json; charset=utf-8" ]
    }, {
      "name" : "X-Powered-By",
      "values" : [ "HHVM/3.6.5" ]
    }, {
      "name" : "Cache-control",
      "values" : [ "private, must-revalidate, max-age=0" ]
    } ],
    "body" : "{\"batchcomplete\":\"\",\"query\":{\"normalized\":[{\"from\":\"mock\",\"to\":\"Mock\"}],\"pages\":{\"7793059\":{\"pageid\":7793059,\"ns\":0,\"title\":\"Mock\",\"revisions\":[{\"contentformat\":\"text/x-wiki\",\"contentmodel\":\"wikitext\",\"*\":\"{{Wiktionary|mock}}\\n'''Mock''' may refer to:\\n*[[Mock (surname)]]\\n*[[Mock, California]], an unincorporated community\\n*Mock or Duncan Stump, a member of the band [[Mock & Toof]]\\n*Mock, a character in ''[[Mock & Sweet]]''\\n*''Mock - 1'', a 1998 album by [[Mocking Shadows]]\\n*[[Mock object]], a programming object that mimics the behavior of real objects in controlled ways\\n\\n==See also==\\n{{Commonscat|mockery}}\\n<!--Synonyms-->\\n*[[Fake (disambiguation)]]\\n*[[Faux]]\\n*[[Imaginary (disambiguation)]]\\n*[[Insult]]\\n*[[Parody]]\\n*[[Pretending (disambiguation)]]\\n*[[Simulation]]\\n<!--Derived terms-->\\n*[[Mockup]]\\n*[[Mocker (disambiguation)]]\\n<!--Possible misspellings-->\\n*[[Mack (disambiguation)]]\\n*[[Meck (disambiguation)]]\\n*[[Mick (disambiguation)]]\\n*[[Moc (disambiguation)]]\\n*[[Muck (disambiguation)]]\\n<!--Everything else-->\\n*{{lookfrom}}\\n*{{intitle}}\\n\\n{{Disambiguation}}\"}]}}}}"
  },
  "times" : {
    "remainingTimes" : 1,
    "unlimited" : true
  },
  "timeToLive" : {
    "unlimited" : true
  }
});

