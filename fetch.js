import fs from 'fs';
import https from 'https';
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName: "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed: "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium: "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

// Ensure public directory exists
if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  const data = JSON.stringify({
    query: `{
      user(login:"${GITHUB_USERNAME}") { 
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }`
  });

  const githubOptions = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node",
      "Content-Type": "application/json",
      "Content-Length": data.length
    }
  };

  const githubReq = https.request(githubOptions, res => {
    let responseData = '';

    console.log(`GitHub statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on('data', chunk => {
      responseData += chunk;
    });

    res.on('end', () => {
      fs.writeFile('./public/profile.json', responseData, err => {
        if (err) {
          console.error('Error saving GitHub data:', err);
          return;
        }
        console.log('Successfully saved GitHub data to public/profile.json');
      });
    });
  });

  githubReq.on('error', error => {
    console.error('GitHub request error:', error);
  });

  githubReq.write(data);
  githubReq.end();
}

/* if (MEDIUM_USERNAME) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const mediumOptions = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@${MEDIUM_USERNAME}`)}`,
    port: 443,
    method: "GET"
  };
  const mediumReq = https.request(mediumOptions, res => {
    let mediumData = '';

    console.log(`Medium statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailedMedium);
    }

    res.on('data', chunk => {
      mediumData += chunk;
    });

    res.on('end', () => {
      fs.writeFile('./public/blogs.json', mediumData, err => {
        if (err) {
          console.error('Error saving Medium data:', err);
          return;
        }
        console.log('Successfully saved Medium data to public/blogs.json');
      });
    });
  });

  mediumReq.on('error', error => {
    console.error('Medium request error:', error);
  });

  mediumReq.end();
} */