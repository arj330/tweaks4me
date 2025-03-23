fetch('https://apps.nabzclan.vip/repos/scarlet.php')
  .then(response => response.json()) // Parse the JSON data
  .then(data => {
    let appContainer = document.getElementById('app-list'); // The container where apps will be displayed
    data.forEach(app => {
      let appElement = document.createElement('div');
      appElement.classList.add('app-item');
      
      let appName = document.createElement('h3');
      appName.textContent = app.name;
      
      let appDesc = document.createElement('p');
      appDesc.textContent = app.localizedDescription;
      
      let appLink = document.createElement('a');
      appLink.href = app.downloadURL;
      appLink.textContent = 'Download';

      appElement.appendChild(appName);
      appElement.appendChild(appDesc);
      appElement.appendChild(appLink);

      appContainer.appendChild(appElement);
    });
  })
  .catch(error => {
    console.error('Error loading apps:', error);
  });

