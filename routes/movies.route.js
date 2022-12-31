import express from "express";
import { client } from "../index.js";

const router = express.Router();
//localhost:4000/movies
router.get("/", async function (request, response) {
    //db.movies.find({})
    if (request.query.rating) {
        request.query.rating = +request.query.rating;
    }
    const movies = await client.db("youtubedb").collection("movies").find(request.query).toArray();
    console.log(movies);
    console.log(request.query);
    response.send(movies);
});

//localhost:4000/movies/id
// app.get("/movies/:id", function (request, response) {
//     const { id } = request.params;
//     console.log(request.params, id);
//     const movie = movies.find((mv) => mv.id === id);
//     movie ? response.send(movie) : response.status(404).send({ message: "Movie not found" });
// });

router.get("/:id", async function (request, response) {
    const { id } = request.params;
    const movie = await client.db("youtubedb").collection("movies").findOne({ id: id });
    console.log(movie);
    movie ? response.send(movie) : response.status(404).send({ message: "Movie not found" });
});

router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);
    const result = await client.db("youtubedb").collection("movies").insertMany(data);
    response.send(movies);
});

//delete movie
router.delete("/:id", async function (request, response) {
    const { id } = request.params;
    //db.movies.deleteOne({id:id})
    const result = await client.db("youtubedb").collection("movies").deleteOne({ id: id });
    console.log(result);
    result.deletedCount > 0
        ? response.send({ message: "Movie Deleted Successfully!" })
        : response.status(404).send({ message: "Movie not found" });
});

//Update movie
router.put("/:id", async function (request, response) {
    const { id } = request.params;
    const data = request.body;
    //db.movies.updateOne({id:id},{$set:{rating:9}})
    const result = await client.db("youtubedb").collection("movies").updateOne({ id: id }, { $set: data });
    console.log(result);
    result
        ? response.send({ message: "Movie Updated Successfully!" })
        : response.status(404).send({ message: "Movie not found" });
});

// app.get("/movies", async function (request, response) {
//     //db.movies.find({})
//     if (request.query.rating) {
//         request.query.rating = +request.query.rating;
//     }
//     const movies = await client.db("youtubedb").collection("movies").find(request.query).toArray();
//     console.log(request.query);
//     response.send(movies);
// });

export default router;
