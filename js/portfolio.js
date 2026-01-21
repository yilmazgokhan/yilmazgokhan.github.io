function openModal(project) {
  document.getElementById("modalImage").src = project.image;
  document.getElementById("modalTitle").innerText = project.title;
  document.getElementById("modalDescription").innerText = project.description;
  document.getElementById("modalLink").href = project.link;

  document.getElementById("projectModal").classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {

  const projects = [
    {
      title: "Image of Day",
      description: "One photo from space every day",
      image: "images/portfolio/image_of_day.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "SAP Web-GUI",
      description: "Private project a company",
      image: "images/portfolio/sap.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "Find It",
      description: "Türkiye'nin illerine ne kadar hakimsin?",
      image: "images/portfolio/find_it.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "Bike Station Network",
      description: "Explore amazing new countries and share your experiences with your friends",
      image: "images/portfolio/bike_stations_network.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "Track Corona",
      description: "The information shows in custom InfoWindow",
      image: "images/portfolio/track_corona.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "ISS Detector",
      description: "Track the ISS",
      image: "images/portfolio/iss_detector.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "Contacts",
      description: "Contacts App helps you to backup, restore and save all your precious contacts",
      image: "images/portfolio/contacts.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "Series Tracker",
      description: "Users can find all theirs favourite TV shows and add them to their own library",
      image: "images/portfolio/series_tracker.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "Where is my vehicle",
      description: "Track all your vehicles location in real time",
      image: "images/portfolio/where_is_my_car.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "Kelime Hafizam",
      description: ".",
      image: "images/portfolio/kelime_hafizam.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    }
  ];

  const grid = document.getElementById("portfolioGrid");

  projects.forEach(project => {
    const item = document.createElement("div");
    item.className = "portfolio-item";

    item.innerHTML = `
  <div class="portfolio-card">
    <div class="portfolio-image">
      <img src="${project.image}" alt="${project.title}">
    </div>
    <h4>${project.title}</h4>
  </div>
  `;

    item.addEventListener("click", () => openModal(project));
    grid.appendChild(item);
  });

  document.querySelector(".close").onclick = () => {
    document.getElementById("projectModal").classList.remove("active");
  };

});
