const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html><body>');
        res.write('<h1>Hello, welcome to this page!</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username"><button type="submit">Submit</button></input>');
        res.write('</form>');
        res.write('</body></html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html><body>');
        res.write('<ul>');
        res.write('<li>Person 1</li>');
        res.write('<li>Person 2</li>');
        res.write('<li>Person 3</li>');
        res.write('</ul>');
        res.write('</body></html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
})

server.listen(process.env.PORT || 3000);
