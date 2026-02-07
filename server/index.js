import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// DomainDuck API credentials
const DOMAINDUCK_API_KEY =  'S8I48TZZMZKB';
const DOMAINDUCK_BASE_URL = 'https://v1.api.domainduck.io/api/get/';

app.post('/api/check', async (req, res) => {
  try {
    const { name, extensions } = req.body;
    if (!name) return res.status(400).json({ error: 'name is required' });

    const exts = Array.isArray(extensions) && extensions.length ? extensions : ['.com', '.net', '.org'];
    const results = [];

    // Check each domain extension in parallel
    const promises = exts.map(async (ext) => {
      const fullDomain = `${name}${ext}`;
      try {
        const response = await axios.get(DOMAINDUCK_BASE_URL, {
          params: {
            domain: fullDomain,
            apikey: DOMAINDUCK_API_KEY,
          },
          timeout: 5000,
        });

        const data = response.data;
        return {
          domain: fullDomain,
          available: data.availability === true || data.availability === 1 || data.availability === 'true',
          price: Number(data.price) || 0,
          currency: data.currency || 'IDR',
        };
      } catch (err) {
        console.error(`Error checking ${fullDomain}:`, err.message);
        return {
          domain: fullDomain,
          available: false,
          price: 0,
          currency: 'IDR',
          error: err.message,
        };
      }
    });

    const checkResults = await Promise.all(promises);
    results.push(...checkResults);

    res.json({ result: true, data: results });
  } catch (err) {
    console.error('API /api/check error', err);
    res.status(500).json({ error: err.message || String(err) });
  }
});

app.listen(port, () => {
  console.log(`Domain proxy server listening at http://localhost:${port}`);
});
