const express = require("express");

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files from public folder
app.use(express.static("public"));

// Dynamic application information
const appName = "SoundWave Music Library";
const tagline = "Discover your favorite music, artists, and genres.";

// Song data
const songs = [
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "Pop"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop"
    },
    {
        title: "Believer",
        artist: "Imagine Dragons",
        genre: "Rock"
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        genre: "Romantic"
    },
    {
        title: "Faded",
        artist: "Alan Walker",
        genre: "Electronic"
    },
    {
        title: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        genre: "Pop"
    },
    {
        title: "Counting Stars",
        artist: "OneRepublic",
        genre: "Pop Rock"
    }
];

// Home route
app.get("/", (req, res) => {
    res.render("index", {
        appName: appName,
        tagline: tagline
    });
});

// Songs route
app.get("/songs", (req, res) => {
    res.render("songs", {
        appName: appName,
        tagline: tagline,
        songs: songs
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});