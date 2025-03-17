const axios = require('axios');


exports.chatUser = async (req, res) => {
    const prompt = req.body?.prompt;
    if (!prompt) {
        return res.status(400).json({ message: "Prompt is required!" });
    }

    try {
        console.log("im here");
        const response = await axios.post('https://lit-g585tloe4-aditi-pandeys-projects-d69203c4.vercel.app/', { prompt });
        console.log(response);
        return res.status(200).json({ text: response.data });
    } catch (error) {
        console.error("Error during handling response from model", error);
        res.status(500).json({ message: 'Model ka code is acting up' });
    }
};