const verifyEmailTemplate = (name, url) => {
    return `
        <html>
            <head>
                <title>Email Verification</title>
            </head>
            <body>
                <h1>Welcome to KwiK, ${name}!</h1>
                <p>Thank you for registering with us. We are excited to have you on board.</p>
                <p>Please verify your email address by clicking the link below:</p>
                <a href="https://your-verification-link.com/verify?email=${encodeURIComponent(email)}">Verify Email</a>
                <p>Best regards,</p>
                <p>The KwiK Team</p>
            </body>
        </html>
    `;
}

export default verifyEmailTemplate;