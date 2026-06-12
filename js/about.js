// ── ABOUT ──
function renderAbout() {
  const values = [
    {
      tag: "Value",
      title: "Transparency",
      desc: "Clear, honest information \u2014 like the Property Passport \u2014 so you can decide with confidence.",
    },
    {
      tag: "Value",
      title: "Calm by design",
      desc: "A considered, ad-free space to think, not a noisy marketplace fighting for attention.",
    },
    {
      tag: "Value",
      title: "Local expertise",
      desc: "We pair national reach with the local agents who know an area best.",
    },
    {
      tag: "Value",
      title: "People first",
      desc: "Moving is a big deal. We build for the human on the other side of the screen.",
    },
  ]
    .map(segCard)
    .join("");
  return `<div class="adv-wrap">
    ${coNav("About")}
    <div class="adv-hero">
      <div class="adv-eyebrow">About NestHere</div>
      <h1>We help people find a home and love where they live</h1>
      <p class="adv-sub">NestHere brings homes for sale and to rent together with the tools, data and local insight to move with confidence \u2014 in one calm, ad-free space.</p>
      <div class="adv-btns">
        <button class="btn btn-copper btn-lg" onclick="openContent('Careers')">Join the team</button>
        <button class="btn btn-outline btn-lg" style="color:#fff;border-color:rgba(255,255,255,0.5);" onclick="openContent('Press centre')">Press centre</button>
      </div>
    </div>
    <div class="adv-intro"><h2>NestHere in numbers</h2></div>
    <div class="ds-usage">${statRow([
      { num: "8.4m", lab: "monthly visitors" },
      { num: "20k+", lab: "agent partners" },
      { num: "2024", lab: "year founded" },
    ])}</div>
    <div class="adv-intro"><h2>What we believe</h2><p>Four ideas guide everything we build.</p></div>
    <div class="adv-seg-grid">${values}</div>
    <div class="adv-intro"><h2>Our story</h2></div>
    <div class="c-rich" style="max-width:760px;margin-bottom:40px;"><p>NestHere started with a simple frustration: searching for a home should feel calm and clear, not cluttered and stressful. We set out to build a place where every listing is rich and trustworthy, where data is shared openly, and where good local agents are easy to find.</p><p>Today we work with thousands of agent partners and help people across the UK and overseas take their next step \u2014 from a first rental to a forever home.</p></div>
    <div class="adv-data"><div><h3>Want to work with us?</h3><p>Whether you\u2019d like to join the team or partner with NestHere, we\u2019d love to hear from you.</p></div><button class="btn btn-primary" onclick="openContent('Contact us')">Get in touch</button></div>
  </div>`;
}


renderAbout();