var mockServerc = require('mockserver-client'),
    mockServerClient = mockServerc.mockServerClient, // MockServer client 
    proxyClient = mockServerc.proxyClient; // proxy client 
	
proxyClient('localhost', 1090).dumpToLogs(/(.)*/i);