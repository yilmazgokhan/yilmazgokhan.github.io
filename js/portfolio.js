document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLink = document.getElementById("modalLink");
  const closeBtn = modal.querySelector(".close");
  const grid = document.getElementById("portfolioGrid");

  /* ---------- DATA ---------- */
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
      description: "Explore amazing new countries and share your experiences",
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
      description: "Backup, restore and manage contacts",
      image: "images/portfolio/contacts.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "Series Tracker",
      description: "Track your favourite TV shows",
      image: "images/portfolio/series_tracker.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "Where is my vehicle",
      description: "Track vehicle location in real time",
      image: "images/portfolio/where_is_my_car.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    },
    {
      title: "Kelime Hafızam",
      description: "Vocabulary training app",
      image: "images/portfolio/kelime_hafizam.png",
      link: "https://appgallery.huawei.com/app/C104856517"
    }
  ];

  /* ---------- FUNCTIONS ---------- */
  function openModal(project) {
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalLink.href = project.link;

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // 🔥 scroll lock
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // 🔥 scroll unlock
  }

  /* ---------- GRID RENDER ---------- */
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

  /* ---------- EVENTS ---------- */
  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(); // overlay click
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal(); // ESC close
  });

});
