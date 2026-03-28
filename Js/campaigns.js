// js/campaigns.js

const API_BASE = "http://localhost:3000";

async function loadApprovedCampaigns() {
  try {
    const res = await fetch(`${API_BASE}/campaigns?isApproved=true`);
    if (!res.ok) throw new Error("Failed to load campaigns");

    const campaigns = await res.json();
    const container = document.getElementById("campaigns-list");

    if (!container) return;

    container.innerHTML = "";

    if (campaigns.length === 0) {
      container.innerHTML = "<p>No approved campaigns yet</p>";
      return;
    }

    campaigns.forEach((c) => {
      const card = document.createElement("div");
      card.className = "campaign-card";

      const progress = Math.min(100, (c.raised / c.goal) * 100);

      card.innerHTML = `
        <img src="${c.image || "https://via.placeholder.com/400x220?text=" + encodeURIComponent(c.title)}" 
             alt="${c.title}">
        <div class="card-content">
          <h3>${c.title}</h3>
          <p>${c.description.substring(0, 90)}${c.description.length > 90 ? "..." : ""}</p>
          <div class="progress">
            <div class="progress-bar" style="width: ${progress}%"></div>
          </div>
          <div class="meta">
            <span>Goal: ${c.goal} EGP</span>
            <span>Raised: ${c.raised || 0} EGP</span>
          </div>
          <div class="meta">
            <span>Deadline: ${c.deadline}</span>
          </div>
          <a href="campaign-detail.html?id=${c.id}" class="btn primary small">View Campaign</a>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error(err);
    document.getElementById("campaigns-list").innerHTML =
      "<p style='color:red'>Error loading campaigns...Server may not be running</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadApprovedCampaigns);
