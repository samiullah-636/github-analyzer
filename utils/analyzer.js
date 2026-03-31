const analyzeData = (user, repos) => {
  let languages = {};
  let mostStarred = { stars: 0, name: "" };

  repos.forEach(repo => {
    // Language count
    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1;
    }

    // Most starred repo
    if (repo.stargazers_count > mostStarred.stars) {
      mostStarred = {
        stars: repo.stargazers_count,
        name: repo.name
      };
    }
  });

  // Top languages
  const topLanguages = Object.keys(languages).sort(
    (a, b) => languages[b] - languages[a]
  );

  return {
    username: user.login,
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
    topLanguages,
    mostStarredRepo: mostStarred.name
  };
};

module.exports = { analyzeData };