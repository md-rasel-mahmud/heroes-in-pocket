const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb localhost
const localUri = "mongodb://127.0.0.1:27017";

// mongodb cloud
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@users.d54nofc.mongodb.net/?retryWrites=true&w=majority`;

// mongodb client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    // await client.connect();
    // connect mongodb client

    // database
    const actionToys = client.db("actionToys").collection("allToys");

    //limit all data
    app.get("/all-toys", async (req, res) => {
      const query = req.query.limit;
      const intQuery = parseInt(query);

      const result = await actionToys.find({}).limit(intQuery).toArray();
      res.send(result);
    });

    //category name
    app.get("/toy-category-name", async (req, res) => {
      function mergeDuplicates(array) {
        // Create a Set to store unique values
        const uniqueSet = new Set(array);

        // Convert the Set back to an array
        const mergedArray = Array.from(uniqueSet);

        // Return the merged array
        return mergedArray;
      }

      // create option for get data
      const option = {
        projection: { sub_category: 1 },
      };
      // find data from database
      const toyData = actionToys.find({}, option);
      const cursor = await toyData.toArray();

      // get only name from data
      const toyNameArray = cursor.map((name) => name.sub_category);

      // marge duplicate category name
      const result = mergeDuplicates(toyNameArray);

      res.send(result);
    });

    //manege Category
    app.get("/toy-category/:categoryName", async (req, res) => {
      const categoryName = req.params.categoryName;

      if (categoryName == "all-toys") {
        const result = await actionToys.find({}).toArray();
        res.send(result);
        return;
      }

      const toys = await actionToys
        .find({ sub_category: categoryName })
        .toArray();
      res.send(toys);
    });

    // add toy 
    app.post('/add-toy', async(req, res) => {
      const toyInfo = req.body;
      const addToy = await actionToys.insertOne(toyInfo)
      res.send(addToy)
    })


    //my toys
    app.get('/my-toys', async(req, res) => {
      // email query 
      const reqEmail = req.query.email;
      const reqSort = req.query.sort;
      const intReqSort = parseInt(reqSort)
      const result = await actionToys.find({email: reqEmail}).sort({price: intReqSort}).toArray()
      res.send(result)
    })

    //update my toys
    app.put('/my-toys/:id', async (req, res) => {
      const id = req.params.id;
      const body = req.body;
      const query = {_id: new ObjectId(id)}
      const updateDoc = {
      $set: {
        price: body.price,
        quantity: body.quantity,
        description: body.description
      }
      }
      //update data
      const result = await actionToys.updateOne(query, updateDoc)
      res.send(result)
    })


    // delete my toys
    app.delete('/delete-my-toy/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const deleteToy = await actionToys.deleteOne(query)
      res.send(deleteToy)
    })

    // create index property
    const indexKeys = { name: 1, seller: 1, sub_category: 1 };
    //create index Name
    const indexName = { name: "toysByNameSellerCategory" };
    const toysSearchIndex = await actionToys.createIndex(indexKeys, indexName);

    //search all data
    app.get("/search-all-toys/:search", async (req, res) => {
      const searchId = req.params.search;
      const result = await actionToys
        .find({
          $or: [
            { name: { $regex: searchId, $options: "i" } },
            { seller: { $regex: searchId, $options: "i" } },
            { sub_category: { $regex: searchId, $options: "i" } },
          ],
        })
        .toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};
run().catch(console.dir);

//server live check
app.get("/", (req, res) => {
  res.send("Server is live");
});

// app listen
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
