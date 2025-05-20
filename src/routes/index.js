const express = require('express');
const router = express.Router();

// I want the vapi assistant to receive a message from the server
// router.get('/server-message', (req, res) => {
//     res.json({response:"mega giant duck"})
// })

router.post('/server-message', (req, res) => {
    console.log("server message 1 route version 13:18")
    console.log("req.body:", req.body);
    const vapiPayload = req.body.message;
    const results = [{
        toolCallId: vapiPayload.toolCallList[0].id,
        result: "mega giant duck"
    }]
    console.log("results:", results)
    res.json({ results });
});

router.post('/server-message2', (req, res) => {
    console.log("server message 2 route version 13:18")
    console.log("req.body:", req.body);
    const vapiPayload = req.body.message;
    const results = [{
        name: "get_server_message2",
        toolCallId: vapiPayload.toolCallList[0].id,//or vapiPayload.call.id?
        message: [{
            role: "system",
            content: "Say peanuts pokemon"
        }]
    }]
    console.log("results:", results)
    res.json({ results });
});

router.post('/server-message3', (req, res) => {
    console.log("server message 3 route version 14:")
    // const vapiPayload = req.body.message;
    // const results = [{
    //     name: "get_server_message3",
    //     toolCallId: vapiPayload.toolCallList[0].id,//or vapiPayload.call.id?
    //     message: [{
    //         role: "system",
    //         content: "Say peanuts pokemon"
    //     }]
    // }]
    res.json({ result: "watermelon3000" });
});



//get email from vapi tool call
router.post('/print-email', (req, res) => {
    try {
        console.log(req.body.message.toolCallList);
        const { toolCallList } = req.body.message;
        const call = toolCallList.find(call => call.function.name === "get_email");
        const email_address = call.function.arguments.email_address;
        console.log("email address:", email_address);
        res.json({ message: 'Email address received' });
    } catch (error) {
        console.log(error);
    }
});

// Health check route
router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Root route
router.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

module.exports = router; 