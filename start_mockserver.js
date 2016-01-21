var mockserver = require('mockserver-grunt');

mockserver.start_mockserver({
                serverPort: 1080,
                proxyPort: 1090,
                verbose: true
            });