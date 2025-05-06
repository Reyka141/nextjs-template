const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3333;

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

app.use(bodyParser.json());

const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'], // Разрешенные источники
    methods: 'POST', // Разрешенные HTTP-методы
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Функция для экранирования HTML-тегов
const sanitize = (text) => {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

// Отправка электронной почты
const sendEmail = async (name, email, company, territory) => {
    // Санитизация входных данных
    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedCompany = sanitize(company);
    const sanitizedTerritory = sanitize(territory);
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST, // SMTP сервер
        port: Number(process.env.MAIL_PORT), // порт
        secure: false, // используется SSL
        auth: {
            user: process.env.MAIL_USER, // адрес электронной почты
            pass: process.env.MAIL_PASS, // пароль
        },
    });

    const mailOptions = {
        from: 'Sales <no-reply@handyweb.org>', // sender address
        to: process.env.MAIL_TO, // recipient address
        subject: 'New Application on miniFh Website',
        html: `
          <h3>New Application on miniFh Website</h3>
          <ul>
            <li>Name: ${sanitizedName}</li>
            <li>Email: ${sanitizedEmail}</li> 
            <li>Company: ${sanitizedCompany}</li> 
            <li>Territory: ${sanitizedTerritory || 'Not specified'}</li>
          </ul>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return true;
    } catch (error) {
        console.error('Failed to send email:', error);
        return false;
    }
};

// Обработка отправки формы
app.post('/send', async (req, res) => {
    try {
        const { name, email, company, territory } = req.body;
        // console.log(res);
        console.log(req.body);

        // Валидация данных
        if (!email || !EMAIL_PATTERN.test(email)) {
            return res.status(400).json({ error: 'Please enter a valid email address' });
        }

        if (!company) {
            return res.status(400).json({ error: 'Please enter a company name' });
        }

        if (!name) {
            return res.status(400).json({ error: 'Please enter your name' });
        }

        if (email.length > MAX_EMAIL_LENGTH) {
            return res.status(400).json({
                error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
            });
        }

        const emailSent = await sendEmail(name, email, company, territory);

        if (emailSent) {
            return res.status(200).json({ message: 'Message sent successfully' });
        } else {
            return res.status(500).json({ error: 'Email sending failed' });
        }
    } catch (error) {
        console.error('Ошибка обработки запроса:', error);
        return res.status(500).json({ error: 'Request processing error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
