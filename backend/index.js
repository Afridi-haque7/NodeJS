import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is ready.')
});

app.get('/api/quotes', (req, res) => {
    const quotes = [
      {
        id: 1,
        text: "Ask not what your country can do for you; ask what you can do for your country.",
        author: "John Kennedy",
      },
      {
        id: 2,
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
      },
      {
        id: 3,
        text: "I am not in danger, Skylar. I am the danger",
        author: "Walter White",
      },
      {
        id: 4,
        text: "Three can keep a secret, if two of them are dead.",
        author: "Benjamin Franklin",
      },
      {
        id: 5,
        text: "What doesn't kill us makes us stronger.",
        author: "Friedrich Nietzsche",
      },
    ];
    res.send(quotes);
})


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});