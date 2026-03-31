# GitHub Analyzer

A simple Node.js app that analyzes GitHub user data and repositories using the GitHub API.  
Built with **Express.js** and **Axios**, and **Dockerized** for easy deployment.

---

## Features

- Fetches GitHub user information
- Fetches user repositories
- Analyzes repository stats (e.g., stars, forks)
- Returns JSON response
- Runs easily with Docker

---

## Requirements

- Node.js >= 18
- Docker (optional, for containerized deployment)
- GitHub Personal Access Token (optional if API rate limits)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/samiullah-636/github-analyzer.git
cd github-analyzer
```

2. Install dependencies:
   
```bash
npm install
```

3. Create a .env file (if using environment variables):

```bash
GITHUB_TOKEN=your_personal_access_token
```

## Running the App
## Locally

```bash
node server.js
```
The server will run on:

```bash
http://localhost:3000.
```

## Using Docker

Build the Docker image:

```bash
docker build -t github-analyzer .
```

Run the Docker container:

```bash
docker run -p 3000:3000 github-analyzer
```

Open in browser:

```bash
http://localhost:3000/analyze/<github-username>
```

## Example API Request

```bash
GET /analyze/octocat
```

Response:

```bash
{
  "username": "octocat",
  "repos_count": 8,
  "total_stars": 150,
  "popular_repo": "Spoon-Knife"
}
```
