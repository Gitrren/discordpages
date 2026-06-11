const bots = {
  pokexbot: {
    name: "PokeXBot",
    community: "PXG / PokeXGames",
    dashboard: "https://pokexbot.squareweb.app",
  },
  thomas: {
    name: "Thomas",
    community: "RPG / Drakantos",
    dashboard: "https://thomas.squareweb.app",
  },
  chopper: {
    name: "Chopper",
    community: "GLA",
    dashboard: "https://chopper.squareweb.app",
  },
};

const updatedAt = "June 11, 2026";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function privacy(bot) {
  const n = escapeHtml(bot.name);
  const community = escapeHtml(bot.community);
  const dashboard = escapeHtml(bot.dashboard);
  return `
    <p class="meta">Last updated: ${updatedAt}</p>
    <p class="notice">
      This Privacy Policy explains how ${n} handles data while providing Discord
      moderation, dashboard, FAQ, giveaway, and server management features for
      the ${community} community.
    </p>

    <h3>1. Data We Process</h3>
    <p>${n} may process the following Discord data when needed for its features:</p>
    ${list([
      "Discord user IDs, guild IDs, channel IDs, role IDs, and message IDs.",
      "Usernames, display names, avatars, and role information when shown in moderation reports or dashboard views.",
      "Message content, links, embeds, and attachments when server moderation features are enabled.",
      "Image attachments and locally extracted OCR text when image scam detection is enabled.",
      "Moderation report data, including report status, timestamps, reasons, evidence, and staff actions.",
      "Giveaway entries, FAQ/dashboard configuration, and bot settings for the server.",
      "Discord OAuth identity and guild information when an authorized staff member signs in to the dashboard.",
    ])}

    <h3>2. How We Use Data</h3>
    <p>Data is used only to operate ${n} and protect the Discord server.</p>
    ${list([
      "Detecting phishing, scam links, spam, compromised account behavior, and suspicious image attachments.",
      "Creating moderation reports and audit trails for server staff.",
      "Allowing authorized staff to manage FAQ content, giveaways, messages, and automod settings.",
      "Validating whether a dashboard user has permission to access administrative tools.",
      "Troubleshooting, security monitoring, and preventing abuse of the bot.",
    ])}

    <h3>3. Image OCR and Automation</h3>
    <p>
      ${n} may run local OCR on image attachments to detect known scam patterns,
      such as fake crypto, casino, promo code, bonus, or withdrawal screenshots.
      OCR is used for moderation decisions only. Message or image data is not
      used to train AI models.
    </p>

    <h3>4. Storage and Retention</h3>
    <p>
      ${n} stores limited operational data in a database and, when configured,
      may store moderation evidence for review by server staff. Configuration
      data is kept while the bot remains active for the server. Moderation data
      is kept only as long as needed for safety, audit, review, or until server
      staff clears it through available tools.
    </p>

    <h3>5. Sharing</h3>
    <p>
      We do not sell user data. Data may be visible to authorized server staff
      through Discord reports or the dashboard. Data may also be processed by
      infrastructure providers used to host the bot, database, dashboard, or by
      Discord itself as part of the Discord platform.
    </p>

    <h3>6. User Choices</h3>
    <p>
      Because moderation features protect the entire server, individual users
      cannot opt out of safety processing in servers where ${n} is installed.
      Server administrators can enable, disable, or configure bot modules for
      their server.
    </p>

    <h3>7. Contact</h3>
    <p>
      For privacy or data removal requests, contact the server staff responsible
      for the Discord server where ${n} is installed, or contact the bot operator
      through the dashboard at <a href="${dashboard}">${dashboard}</a>.
    </p>

    <h3>8. Changes</h3>
    <p>
      This policy may be updated when ${n} changes features or data practices.
      The latest version will be published on this page.
    </p>
  `;
}

function terms(bot) {
  const n = escapeHtml(bot.name);
  const community = escapeHtml(bot.community);
  const dashboard = escapeHtml(bot.dashboard);
  return `
    <p class="meta">Last updated: ${updatedAt}</p>
    <p class="notice">
      These Terms of Service explain the rules for using ${n}, a Discord bot for
      moderation, dashboard, FAQ, giveaway, and server management features for
      the ${community} community.
    </p>

    <h3>1. Acceptance</h3>
    <p>
      By using ${n} or adding it to a Discord server, you agree to these Terms
      and to Discord's Terms of Service and Developer Policies.
    </p>

    <h3>2. Bot Features</h3>
    <p>${n} may provide features such as:</p>
    ${list([
      "Automated moderation for links, image attachments, spam, phishing, and scam patterns.",
      "Moderation reports, timeout/ban actions, and staff review workflows.",
      "FAQ publishing and dashboard-based message management.",
      "Giveaway creation, tracking, and winner selection.",
      "Administrative tools for authorized server staff.",
    ])}

    <h3>3. Server Staff Responsibilities</h3>
    <p>
      Server owners and staff are responsible for configuring ${n} appropriately,
      reviewing moderation actions when needed, and making sure their server
      rules are clear to members.
    </p>

    <h3>4. Acceptable Use</h3>
    <p>You may not use ${n} to:</p>
    ${list([
      "Violate Discord's Terms of Service, Developer Policy, or Community Guidelines.",
      "Harass users, evade moderation, or abuse automated moderation systems.",
      "Collect data for unrelated purposes outside the bot's intended server management features.",
      "Attempt to disrupt, reverse engineer, overload, or compromise the bot, dashboard, or related infrastructure.",
    ])}

    <h3>5. Moderation Actions</h3>
    <p>
      ${n} may delete messages, create reports, apply timeouts, or ban users
      when configured moderation rules are triggered. Automated actions are based
      on server settings and detection rules. Server staff remain responsible for
      reviewing edge cases and handling appeals through their own server process.
    </p>

    <h3>6. Availability</h3>
    <p>
      ${n} is provided as-is. The bot may be unavailable, changed, limited, or
      discontinued at any time due to maintenance, Discord API changes, hosting
      issues, abuse prevention, or operational needs.
    </p>

    <h3>7. Limitation of Liability</h3>
    <p>
      To the maximum extent allowed by law, the bot operator is not responsible
      for indirect damages, server configuration mistakes, Discord outages, data
      loss, or moderation decisions made by server staff.
    </p>

    <h3>8. Contact</h3>
    <p>
      Questions about ${n} should be directed to the server staff responsible for
      the Discord server where the bot is installed, or to the bot operator
      through the dashboard at <a href="${dashboard}">${dashboard}</a>.
    </p>

    <h3>9. Changes</h3>
    <p>
      These Terms may be updated when ${n} changes features or operating rules.
      The latest version will be published on this page.
    </p>
  `;
}

function renderLegalPage() {
  const config = window.LEGAL_PAGE || {};
  const bot = bots[config.bot];
  const type = config.type;
  const root = document.querySelector("[data-legal-root]");
  if (!root || !bot || !["privacy", "terms"].includes(type)) return;

  const title = type === "privacy" ? "Privacy Policy" : "Terms of Service";
  document.title = `${bot.name} ${title}`;
  root.innerHTML = `
    <p class="eyebrow">${escapeHtml(bot.community)}</p>
    <h1>${escapeHtml(bot.name)} ${title}</h1>
    ${type === "privacy" ? privacy(bot) : terms(bot)}
    <nav class="footer-nav" aria-label="Footer navigation">
      <a class="back-link" href="../../">All legal pages</a>
      <a class="back-link" href="../${type === "privacy" ? "terms" : "privacy"}/">
        ${type === "privacy" ? "Terms of Service" : "Privacy Policy"}
      </a>
    </nav>
  `;
}

renderLegalPage();

