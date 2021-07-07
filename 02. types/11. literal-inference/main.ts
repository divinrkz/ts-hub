const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

//Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"


function handleRequest(url: string, method: 'GET' | 'POST'): void {}


//FIX

// Change 1:
const req2 = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req2.url, req2.method as "GET");


const req3 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req3.url, req3.method);