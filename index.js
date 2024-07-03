const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Existing joke route
app.get('/api/jokes/random', async (req, res) => {
  try {
    const jokeResponse = await axios.get('https://official-joke-api.appspot.com/random_joke');
    res.json(jokeResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

// New route for random images
app.get('/api/images/random', async (req, res) => {
  try {
    const imageResponse = await axios.get('https://source.unsplash.com/random');
    res.redirect(imageResp// // import express from "express";
// // import fetch from "node-fetch";

// // const app = express();

// // async function fetchImgs() {
// //     return fetch("https://source.unsplash.com/random")
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         // The URL of the random image from Unsplash is in the response URL
// //         return { url: response.url };
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching images:", error);
// //         throw error; // Re-throw the error to be handled by the caller
// //       });
// // }

// // app.get("/api/fetch-random-images/random", async (req, res) => {
// //   try {
// //     let fetchImages = await fetchImgs();
// //     res.json(fetchImages);
// //   } catch {
// //     res.status(500).json({
// //       error: error.message,
// //     });
// //   }
// // });

// // app.listen(8080, () => {
// //   console.log("your node app is running on port 8080");
// // });


// import express from "express";
// import fetch from "node-fetch";

// const app = express();

// async function fetchImgs() {
//     return fetch("https://source.unsplash.com/random")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         // The URL of the random image from Unsplash is in the response URL
//         return { url: response.url };
//       })
//       .catch((error) => {
//         console.error("Error fetching images:", error);
//         throw error; // Re-throw the error to be handled by the caller
//       });
// }

// app.get("/api/fetch-random-images/random", async (req, res) => {
//   try {
//     let fetchImages = await fetchImgs();
//     res.send(`
//       <html>
//         <body>
//           <img src="${fetchImages.url}" alt="Random Image from Unsplash" heighr:"500px" width:"500px"/>
//         </body>
//       </html>
//     `); // Embed the image in an HTML response
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

// app.listen(8080, () => {
//   console.log("Your node app is running on port 8080");
// });


import express from "express";
import fetch from "node-fetch";

const app = express();

async function fetchImgs() {
  try {
    const response = await fetch("https://picsum.photos/500");
    console.log('Fetch Response Status:', response.status);
    console.log('Fetch Response Headers:', response.headers.raw());
    
    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    // The URL of the random image from Lorem Picsum is in the response URL
    return { url: response.url };
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

app.get("/api/fetch-random-images/random", async (req, res) => {
  try {
    let fetchImages = await fetchImgs();
    res.send(`
      <html>
        <body>
          <img src="${fetchImages.url}" alt="Random Image from Lorem Picsum" height="500px" width="500px"/>
        </body>
      </html>
    `); // Embed the image in an HTML response
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(8080, () => {
  console.log("Your node app is running on port 8080");
});onse.request.res.responseUrl);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

// Combined route for jokes and images
app.get('/api/jokes-and-images/random', async (req, res) => {
  try {
    const jokeResponse = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const imageResponse = await axios.get('https://source.unsplash.com/random');
    
    res.json({
      joke: jokeResponse.data,
      image: imageResponse.request.res.responseUrl
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke or image' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
