async function loadApod() {
  const apiKey = "DEMO_KEY";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  return await fetch(url).then((response) => response.json());
}

window.addEventListener("load", async () => {
  try {
    let todayImage = document.getElementById("today-image");
    let todayTitle = document.getElementById("today-title");
    let todayDate = document.getElementById("today-date");
    let todayExplanation = document.getElementById("today-explanation");
    let textContainer = document.getElementById("text-container");
    let spinner = document.getElementById("spinner");

    let pageTitle = document.getElementsByClassName("page-title")[0];
    let pageSubtitle = document.getElementsByClassName("page-subtitle")[0];

    [pageTitle, pageSubtitle].forEach((element) => {
      element.animate(
        [
          // keyframes
          { color: "white" },
          { color: "teal" },
          { color: "cyan" },
          { color: "blue" },
          { color: "indigo" },
          { color: "white" },
        ],
        {
          // timing options
          delay: element === pageSubtitle ? 500 : 0,
          duration: 1000,
          iterations: 1,
          easing: "ease-in-out",
        }
      );
    });

    const apodData = await loadApod();

    todayImage.src = apodData.url;
    todayTitle.textContent = apodData.title;
    todayDate.textContent = apodData.date;
    todayExplanation.textContent = apodData.explanation;

    todayImage.classList.remove("hidden"); // Show image after data is loaded
    spinner.classList.add("hidden"); // Hide spinner after data is loaded

    todayImage.animate(
      [
        // keyframes
        { transform: "translateX(-300px)", opacity: 0 },
        { transform: "translateX(0px)", opacity: 1 },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
        easing: "ease-in-out",
      }
    );

    textContainer.animate(
      [
        // keyframes
        { transform: "translateY(-50px)", opacity: 0 },
        { transform: "translateY(0px)", opacity: 1 },
      ],
      {
        // timing options
        duration: 500,
        iterations: 1,
        easing: "ease-in-out",
      }
    );
  } catch (error) {
    console.error("Error loading APOD:", error);
  }
});
