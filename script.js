fetch('https://apps.nabzclan.vip/repos/esign.php')
  .then(response => response.json())
  .then(apps => {
    const container = document.getElementById('app-container');
    apps.forEach(app => {
      const appCard = document.createElement('div');
      appCard.className = 'app-card';
      appCard.innerHTML = `
        <img src="${app.icon}" alt="${app.name}" />
        <h3>${app.name}</h3>
        <p>Version: ${app.version}</p>
        <a href="${app.url}" target="_blank">Download IPA</a>
      `;
      container.appendChild(appCard);
    });
  })
  .catch(error => {
    console.error('Error fetching app data:', error);
  });
