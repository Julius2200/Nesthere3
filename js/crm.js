function renderAdmin() {
  const tbody = document.getElementById('admin-table');
  if (!tbody) return;
  tbody.innerHTML = properties.slice(0,6).map(p => `
    <tr>
      <td><strong>${p.addr.split(',')[0]}</strong><br><span style="font-size:12px;color:var(--grey-600);">${p.addr}</span></td>
      <td><strong>${p.price}</strong></td>
      <td>${p.type}</td>
      <td><span class="status-pill ${p.badge==='sold'?'status-sold':p.badge==='rent'?'status-active':'status-active'}">${p.badge==='sold'?'Sold':p.badge==='rent'?'For Rent':'For Sale'}</span></td>
      <td>Greenwood Estates</td>
      <td class="table-actions"><button class="btn btn-ghost">View</button><button class="btn btn-outline" style="font-size:12px;">Edit</button><button class="btn btn-ghost" style="color:#dc3545;font-size:12px;">Delete</button></td>
    </tr>`).join('');
}

function renderDashGrid() {
  const grid = document.getElementById('dash-prop-grid');
  if (!grid) return;
  const saved = properties.filter(p => savedIds.has(p.id));
  if (saved.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;background:#fff;border-radius:var(--radius);padding:30px;text-align:center;border:1px solid var(--grey-200);"><div style="font-size:40px;margin-bottom:12px;">♡</div><h3 style="margin-bottom:8px;">No favourites yet</h3><p style="color:var(--grey-600);font-size:14px;margin-bottom:16px;">Tap the heart on any property to save it here.</p><button class="btn btn-primary" onclick="showCatalogue(\'buy\')">Browse Properties</button></div>';
  } else {
    grid.innerHTML = saved.map(p => propCard(p, 'detail')).join('');
  }
  const favTab = document.querySelector('.dash-tab');
  if (favTab) favTab.innerHTML = '♡ My Favourites (' + saved.length + ')';
}

function setDetailTab(btn, tabId) {
  document.querySelectorAll('.detail-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  ['tab-overview','tab-details','tab-features','tab-location'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id !== tabId);
  });
}

function setDashTab(btn, tabId) {
  document.querySelectorAll('.dash-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  ['dash-favorites','dash-alerts','dash-searches','dash-enquiries'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id !== tabId);
  });
}

//currently unknown code category
function updateYear(val) {
  document.getElementById('tm-year-label').textContent = val;
  document.getElementById('year-slider').value = val;
}
function syncYear(val) {
  document.getElementById('tm-year-label').textContent = val;
  const sel = document.getElementById('year-select');
  const opts = Array.from(sel.options).map(o => o.value);
  const closest = opts.reduce((a,b) => Math.abs(b-val) < Math.abs(a-val) ? b : a);
  sel.value = closest;
}
function bedBtnClick(btn) {
  document.querySelectorAll('.bed-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
document.querySelectorAll('.bed-btn').forEach(b => b.onclick = function(){ bedBtnClick(this); });

// ══ CONTENT PAGES ══
function runAction(cmd) {
  const i = cmd.indexOf(':');
  const k = i === -1 ? cmd : cmd.slice(0, i);
  const v = i === -1 ? '' : cmd.slice(i + 1);
  if (k === 'catalogue') { const parts = v.split(':'); showCatalogue(parts[0], parts[1] || ''); }
  else if (k === 'content') openContent(v);
  else if (k === 'page') showPage(v);
  else if (k === 'addlisting') openAddListing();
}