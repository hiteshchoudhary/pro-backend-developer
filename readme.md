# Welcome to Pro Backend Developer course code files

# Express File Upload with Cloudinary Integration

This project is a simple Node.js application using Express.js to handle file uploads and Cloudinary to store the uploaded files. The application also uses EJS for rendering forms.

## Features

- Upload single or multiple images to Cloudinary.
- Render forms using EJS templates.
- Handle GET and POST requests.
- Use temporary files for file uploads.

## Prerequisites

- Node.js installed on your machine.

- A Cloudinary account. You can sign up for free at [Cloudinary](https://cloudinary.com/).

## Install the dependencies:

- npm install

- Dependencies

- express

- express-fileupload

- cloudinary

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   ```

## Configuration

- Configure your Cloudinary credentials in the cloudinary.config section of the index.js file:

`cloudinary.config({
  cloud_name: "your_cloud_name",
  api_key: "your_api_key",
  api_secret: "your_api_secret",
});`

- Replace `your_cloud_name`, `your_api_key`, and `your_api_secret` with your actual Cloudinary credentials.

## Running the Application

- `npm start`

- The application will be running at `http://localhost:4000`

## API Endpoints

# - GET /myget

- Logs and returns the request body.

# POST /mypost

- Uploads files to Cloudinary and returns the details along with the form data.

# Request:

- `Content-Type`: `multipart/form-data`

- Body parameters:

  `firstname`: Your first name

  `lastname`: Your last name

  `samplefile`: One or more files to upload

# Response:

- `firstname`: The first name from the form.
- `lastname`: The last name from the form
- `result` : Details of the uploaded single file (if any)
- `imageArray` : Array of details for each uploaded file

# GET /mygetform

- Renders a form to test the GET endpoint.

# GET /mypostform

- Renders a form to test the POST endpoint.

## Usage

- Open your browser and navigate to http://localhost:4000/mygetform to see the form for testing GET requests.

- Navigate to `http://localhost:4000/mypostform` to see the form for testing POST requests.

- Fill out the forms and submit to see the server responses and how files are handled.


## If you like this course, please drop a thanks node at my social profiles.

[CoderCommunity](https://web.codercommunity.io)

[Website](https://hiteshchoudahry.com)

[Instagram](https://instagram.com/hiteshchoudharyofficial)

of course there are bugs in these code files. As you teach you focus more on concept and less on production level execution. If you find any bug, consider that as your challenge to fix them.
