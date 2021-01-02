const http2 = require("http2");
const server = http2.createSecureServer({ cert, key }, onRequest);
const PORT = 8081;

function push(stream, filePath) {
  const { file, headers } = getFile(filePath);
  const pushHeaders = { [HTTP2_HEADER_PATH]: filePath };

  stream.pushStream(pushHeaders, (pushStream) => {
    pushStream.respondWithFD(file, headers);
  });
}

function onRequest(req, res) {
  // Push files with index.html
  if (reqPath === "/index.html") {
    push(res.stream, "style.css");
    push(res.stream, "example.png");
  }

  // Serve file
  res.stream.respondWithFD(file.fileDescriptor, file.headers);
}

server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server listening on ${PORT}`);
});
