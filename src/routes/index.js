const express = require('express');
const router = express.Router();

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