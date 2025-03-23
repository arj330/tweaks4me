const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://apps.nabzclan.vip/repos/esign.php';
fetch(proxyUrl + targetUrl)
  .then(response => response.json())
  .then(data => {
    const repoList = document.querySelector('.repo-list');

    // Assuming the JSON structure has a 'repo' and 'apps' array
    if (data && data.repo && data.repo.apps) {
      const repoItem = document.createElement('li');
      repoItem.className = 'repo-item';

      const repoTitle = document.createElement('div');
      repoTitle.className = 'repo-title';
      repoTitle.innerHTML = `Repository: <a href="${data.repo.url}" target="_blank">${data.repo.name}</a>`;

      const appList = document.createElement('ul');
      appList.className = 'app-list';

      data.repo.apps.forEach(app => {
        const appItem = document.createElement('li');
        appItem.className = 'app-item';
        appItem.innerHTML = `<a href="${app.installLink}" target="_blank">${app.name}</a>`;
        appList.appendChild(appItem);
      });

      repoItem.appendChild(repoTitle);
      repoItem.appendChild(appList);
      repoList.appendChild(repoItem);
    }
  })
  .catch(error => {
    console.error('Error loading apps:', error);
  });

      repoItem.appendChild(appList);
      repoList.appendChild(repoItem);
    }
  })
  .catch(error => {
    console.error('Error fetching repo data:', error);
  });

    console.error('Error loading apps:', error);
  });

