const appPrefix = "bookany";
const slug = window.bookany.slug;
const side = window.bookany.side ?? "left";
const site_url = `http://localhost:3000`;
const bookingIframeUrl = `${site_url}/${slug}/booking?shared`;
const giftIframeUrl = `${site_url}/${slug}/gift?shared`;

function initScript() {
  if (!slug) {
    console.log("slug is not defined");
  }

  const sidebar = document.createElement("div");
  sidebar.id = `${appPrefix}-sidebar`;
  document.body.appendChild(sidebar);
  sidebar.style.width = "100vw";
  sidebar.style.height = "100dvh";
  sidebar.style.backgroundColor = `rgb(0, 0, 0, 0.5)`;
  sidebar.style.position = "fixed";
  sidebar.style.top = "0px";
  sidebar.style.left = "0px";
  sidebar.style.zIndex = "1000000";
  sidebar.style.display = "flex";
  sidebar.style.alignItems = "center";
  sidebar.style.transition = "opacity 0.3s ease-in-out";
  sidebar.style.pointerEvents = "none";
  sidebar.style.opacity = 0;

  if (side === "left") {
    sidebar.style.justifyContent = "flex-start";
  } else {
    sidebar.style.justifyContent = "flex-end";
  }

  const iframe = document.createElement("iframe");
  iframe.id = `${appPrefix}-iframe`;
  iframe.src = bookingIframeUrl;
  iframe.style.minWidth = "450px";
  iframe.style.border = "none";
  iframe.style.height = "100vh";
  iframe.style.height = "100vh";
  iframe.style.maxHeight = "-webkit-fill-available";
  iframe.style.transition = "transform 0.3s ease-in-out";
  iframe.style.transform = `translateX(${side === "left" ? "-100%" : "100%"})`;
  sidebar.appendChild(iframe);
}

function updateIframe(type = "booking") {
  const iframe = document.getElementById(`${appPrefix}-iframe`);
  iframe.src = type === "booking" ? bookingIframeUrl : giftIframeUrl;
}

function captureResizeScreen() {
  window.addEventListener("resize", function () {
    const iframe = document.getElementById(`${appPrefix}-iframe`);
    if (iframe) {
      const screenWidth = window.innerWidth;
      const isDesktop = screenWidth > 600;
      if (isDesktop) {
        iframe.style.width = "450px";
      } else {
        iframe.style.width = "100vw";
      }
    }
  });
}

function openContent(type = "booking") {
  const sidebar = document.getElementById(`${appPrefix}-sidebar`);
  updateIframe(type);

  const iframe = document.getElementById(`${appPrefix}-iframe`);
  if (sidebar.style.opacity === `0`) {
    sidebar.style.opacity = 1;
    sidebar.style.pointerEvents = "auto";
  } else {
    sidebar.style.opacity = 0;
    sidebar.style.pointerEvents = "none";
  }

  if (iframe.style.transform.includes("100%")) {
    iframe.style.transform = `translateX(0px)`;
  } else {
    iframe.style.transform = `translateX(${
      side === "left" ? "-100%" : "100%"
    })`;
  }
}

function clickBackground() {
  const sidebar = document.getElementById(`${appPrefix}-sidebar`);
  sidebar.addEventListener("click", function () {
    toggleBooking("booking");
  });
}

initScript();
captureResizeScreen();
clickBackground();

window.toggleBooking = () => openContent("booking");
window.toggleGift = () => openContent("gift");
