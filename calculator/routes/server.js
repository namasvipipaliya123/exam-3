app.post('/calculator/add', (req, res) => {
    const numbers = req.body.numbers;
    const result = numbers.reduce((a, b) => a + b, 0);
    res.send({ result });
  });
  
  app.post('/calculator/subtract', (req, res) => {
    const numbers = req.body.numbers;
    const result = numbers.reduce((a, b) => a - b, 0);
    res.send({ result });
  });
  
  app.post('/calculator/multiply', (req, res) => {
    const numbers = req.body.numbers;
    const result = numbers.reduce((a, b) => a * b, 1);
    res.send({ result });
  });
  
  app.post('/calculator/divide', (req, res) => {
    const numbers = req.body.numbers;
    const result = numbers.reduce((a, b) => a / b, 1);
    res.send({ result });
  });
  
  
  app.get('/cowsay', (req, res) => {
    const message = req.query.message;
    const cow = cowsay.say({
      text: message,
      eyes: 'oO',
      tongue: '^',
      e: '^^',
      T: 'U '
    });
    res.send(cow);
  });
  
  app.get('/resolve', (req, res) => {
    const domain = req.query.domain;
    dns.resolve(domain, 'A', (err, addresses) => {
      if (err) {
        res.status(500).send({ message: 'Error resolving domain' });
      } else {
        res.send({ addresses });
      }
    });
  });
