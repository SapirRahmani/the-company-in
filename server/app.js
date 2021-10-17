const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
require('dotenv').config()



const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.get(`/`, async (req, res, next) => {
    const domain = req.query.domain || 'example.com';
    const queryUrl = `${process.env.API_URL}${domain}`

    try {
        const apiRes = await axios.get(queryUrl, {
            headers: {
                'Authorization': process.env.AUTH
            }
        })
        res.send(apiRes.data)
    } catch (error) {
        res.send(error)
    }

})
app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
})

