# Accredian Refer & Earn Backend task

This project provides RESTful APIs for handling referral form submissions, connecting to a MySQL database, and sending email notifications upon successful referrals. Built using Node.js, Express.js, and Prisma ORM, this setup ensures secure and efficient data handling.

## Features

- **RESTful API**: Endpoints to handle referral form data.
- **MySQL Database Integration**: Seamless connection via Prisma ORM.
- **Data Validation**: Ensures form fields are properly validated.
- **Error Handling**: Manages different error scenarios (e.g., missing fields, invalid data).
- **Email Notifications**: Sends referral emails to both the referrer and referee using Nodemailer.

## Tech Stack

- **Backend**: Node.js, Express.js
- **ORM**: Prisma
- **Database**: MySQL
- **Email Service**: Nodemailer (Google Mail Service API)

## Installation

1. Clone the repository:

```sh
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies:

```sh
npm install
```

3. Set up environment variables:

Create a `.env` file and add the following:

```
DATABASE_URL="mysql://user:password@localhost:3360/referral_db"
PORT = 3360
CORS_ORIGIN = *
RESEND_API_KEY = "your-resend-api-key"

```

4. Migrate the database:

```sh
npx prisma migrate dev --name init
```

## Usage

1. Start the server:

```sh
npm start
```

2. API Endpoints:

- **Submit Referral:** `POST /api/refer`
  - Body:
    ```json
    {
      "referrerName": "John Doe",
      "referrerEmail": "john@example.com",
      "refereeName": "Vinay luma",
      "refereeEmail": "vinay@example.com",
      "courseName": "any course name",
      "message": "relevant message to refer"
    }
    ```

3. On successful submission, referral emails are sent to both the referrer and referee.

## Error Handling

Handles errors like:

- Missing fields
- Invalid data types
- Database connection issues

## Contributing

Feel free to fork this repository and submit pull requests!
