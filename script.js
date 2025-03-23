fetch('https://thingproxy.freeboard.io/fetch/https://apps.nabzclan.vip/repos/esign.php')
  .then(response => response.json())
  .then(data => {
    let appContainer = document.getElementById('app-list'); 
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
