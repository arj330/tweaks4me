fetch('https://thingproxy.freeboard.io/fetch/https://apps.nabzclan.vip/repos/esign.php')
  .then(response => response.json())
  .then(apps => {
    console.log(apps); // Log the data to check if it's fetched
    const container = document.getElementById('app-container');
    if (apps.length === 0) {
      container.innerHTML = "<p>No apps found.</p>";
      return;
    }

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
    document.getElementById('app-container').innerHTML =
      "<p>Failed to load apps. Please try again later.</p>";
    console.error('Error loading apps:', error);
  });

