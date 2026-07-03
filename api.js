import express from "express";

const app = express();
const port = 4000;

app.listen(port, () => {
    console.log("API running on port 4000...");
});

var posts = [
    {
        id: 1,
        title: "Skeleton Party",
        text: "Why don't skeletons fight each other? They don't have the guts.",
        author: "Chuck Norris",
        time: new Date(),
    },
    {
        id: 2,
        title: "Debugging Life",
        text: "A programmer's wife tells him: 'Go to the store and buy a loaf of bread. If they have eggs, buy a dozen.' He comes back with 12 loaves of bread.",
        author: "Kevin Hart",
        time: new Date(),
    },
    {
        id: 3,
        title: "Procrastinator's Motto",
        text: "I'm not procrastinating, I'm doing side quests before the main mission.",
        author: "Bruce Wayne",
        time: new Date(),
    },
    {
        id: 4,
        title: "Cat Logic",
        text: "My cat just knocked my phone off the table. I think she's trying to tell me to touch grass.",
        author: "Michael B. Jordan",
        time: new Date(),
    },
    {
        id: 5,
        title: "Monday Feelings",
        text: "Monday is proof that the weekend and I have a long-distance relationship.",
        author: "Elon Musk",
        time: new Date(),
    },
];
