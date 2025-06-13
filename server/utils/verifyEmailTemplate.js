const verifyEmailTemplate = (name, url) => {
    return `
        <html>
            <head>
                <title>Email Verification</title>
            </head>
            <body>
                <h1>Hello, ${name}!</h1>
                <p>Welcome to KwiK. Please verify your email by clicking the button below:</p>
                <a href="${url}" style="
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #007bff;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 4px;
                    font-weight: bold;
                    margin-top: 10px;
                ">Verify Email</a>
            </body>
        </html>
    `;
};

export default verifyEmailTemplate;
