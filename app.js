const tradeForm = document.getElementById('tradeForm');
const tradeList = document.getElementById('tradeList');
const themeBtn = document.getElementById('btnTheme');
const root = document.documentElement;
const addViewBtn = document.getElementById('btnAddView');
const savedViewBtn = document.getElementById('btnSavedView');
const settingsModal = document.getElementById('settingsModal');
const helpModal = document.getElementById('helpModal');
const sortOption = document.getElementById('sortOption');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const collapseBtn = document.querySelector('.collapse-btn');

const entryImg1Input = document.getElementById('entryImg1');
const entryImg2Input = document.getElementById('entryImg2');
const exitImg1Input = document.getElementById('exitImg1');
const exitImg2Input = document.getElementById('exitImg2');

const entry1UploadWrapper = document.querySelector('.file-upload-wrapper[data-target="entryImg1"]');
const entry2UploadWrapper = document.querySelector('.file-upload-wrapper[data-target="entryImg2"]');
const exit1UploadWrapper = document.querySelector('.file-upload-wrapper[data-target="exitImg1"]');
const exit2UploadWrapper = document.querySelector('.file-upload-wrapper[data-target="exitImg2"]');

const imageModal = document.getElementById('imageModal');
const closeImageModal = document.getElementById('closeImageModal');
const imageModalImg = imageModal.querySelector('img');

const exportDataBtn = document.getElementById('exportDataBtn');
const importDataBtn = document.getElementById('importDataBtn');
const importFileInput = document.getElementById('importFileInput');

// Form fields (Add Trade)
const biasSelect = document.getElementById('bias');
const sessionSelect = document.getElementById('session');
const tradeTypeSelect = document.getElementById('tradeType');
const slPipsInput = document.getElementById('slPips');
const riskPercentageInput = document.getElementById('riskPercentage');
const modelInput = document.getElementById('modelInput'); // Changed from select
const emotionalStateInput = document.getElementById('emotionalStateInput'); // Changed to input
const lotSizeInput = document.getElementById('lotSize');
const directionSelect = document.getElementById('direction');
const durationInput = document.getElementById('duration');
const accountTypeSelect = document.getElementById('accountType');


// Filtering
const filterResultSelect = document.getElementById('filterResult');
const filterPairSelect = document.getElementById('filterPair');
const filterAccountSelect = document.getElementById('filterAccount');
const tradeListPairs = new Set();

// Statistics
const generalStatsDiv = document.getElementById('generalStatsDiv'); // Toggle target
const totalTradesSpan = document.getElementById('totalTrades');
const winRateSpan = document.getElementById('winRate');
const totalPnLSpan = document.getElementById('totalPnL');
const totalWinsSpan = document.getElementById('totalWins');
const totalLossesSpan = document.getElementById('totalLosses');
const maxDrawdownSpan = document.getElementById('maxDrawdown');

// Prop Firm Statistics & Toggle Button
const toggleSummaryViewBtn = document.getElementById('toggleSummaryViewBtn');
const propFirmStatsDiv = document.getElementById('propFirmStatsDiv'); // Toggle target
const propTotalTradesSpan = document.getElementById('propTotalTrades');
const propWinRateSpan = document.getElementById('propWinRate');
const propTotalPnLSpan = document.getElementById('propTotalPnL');
const propTotalWinsSpan = document.getElementById('propTotalWins');
const propTotalLossesSpan = document.getElementById('propTotalLosses');
const propCurrentBalanceSpan = document.getElementById('propCurrentBalance');
const propMaxDrawdownSpan = document.getElementById('propMaxDrawdown');


// Editing
const editTradeModal = document.getElementById('editTradeModal');
const closeEditModal = document.getElementById('closeEditModal');
const editTradeForm = document.getElementById('editTradeForm');
const editTradeIdInput = document.getElementById('editTradeId');
const editTradeDateInput = document.getElementById('editTradeDate');
const editAccountTypeSelect = document.getElementById('editAccountType');
const editPairSelect = document.getElementById('editPair');
const editBiasSelect = document.getElementById('editBias');
const editSessionSelect = document.getElementById('editSession');
const editDirectionSelect = document.getElementById('editDirection');
const editTradeTypeSelect = document.getElementById('editTradeType');
const editLotSizeInput = document.getElementById('editLotSize');
const editSlPipsInput = document.getElementById('editSlPips');
const editRiskPercentageInput = document.getElementById('editRiskPercentage');
const editRrrInput = document.getElementById('editRrr');
const editDurationInput = document.getElementById('editDuration');
const editPnlInput = document.getElementById('editPnl');
const editResultSelect = document.getElementById('editResult');
const editModelInput = document.getElementById('editModelInput'); // Changed from select
const editEmotionalStateInput = document.getElementById('editEmotionalStateInput'); // Changed
const editNoteInput = document.getElementById('editNote');

const editEntryImg1Status = document.getElementById('editEntryImg1Status');
const editEntryImg2Status = document.getElementById('editEntryImg2Status');
const editExitImg1Status = document.getElementById('editExitImg1Status');
const editExitImg2Status = document.getElementById('editExitImg2Status');


// Calculator
const calculatorViewBtn = document.getElementById('btnCalculatorView');
const calculatorSection = document.getElementById('calculatorSection');
const calcAccountSizeInput = document.getElementById('calcAccountSize');
const calcAccountCurrencySelect = document.getElementById('calcAccountCurrency');
const calcPairSelect = document.getElementById('calcPair');
const calcRiskPercentageInput = document.getElementById('calcRiskPercentage');
const calcStopLossDistanceInput = document.getElementById('calcStopLossDistance');
const calcSlUnitSelect = document.getElementById('calcSlUnit');
const calculateBtn = document.getElementById('calculateBtn');
const riskAmountResultSpan = document.getElementById('riskAmountResult');
const positionSizeResultSpan = document.getElementById('positionSizeResult');

const instrumentValues = {
  'EUR/USD': { 'USD': 10, 'EUR': 9.2, 'GBP': 8.1, 'JPY': 1450, 'CAD': 13.6, 'CHF': 13.4, 'AUD': 15.1, 'NZD': 16.5 },
  'GBP/USD': { 'USD': 10, 'EUR': 9.2, 'GBP': 8.1, 'JPY': 1450, 'CAD': 13.6, 'CHF': 13.4, 'AUD': 15.1, 'NZD': 16.5 },
  'USD/JPY': { 'USD': 9.2, 'EUR': 8.5, 'GBP': 7.5, 'JPY': 1340, 'CAD': 12.6, 'CHF': 12.4, 'AUD': 14.0, 'NZD': 15.3 },
  'AUD/USD': { 'USD': 10, 'EUR': 9.2, 'GBP': 8.1, 'JPY': 1450, 'CAD': 13.6, 'CHF': 13.4, 'AUD': 15.1, 'NZD': 16.5 },
  'USD/CAD': { 'USD': 7.3, 'EUR': 6.7, 'GBP': 5.9, 'JPY': 1050, 'CAD': 9.8, 'CHF': 9.7, 'AUD': 11.0, 'NZD': 12.0 },
  'USD/CHF': { 'USD': 9.2, 'EUR': 8.5, 'GBP': 7.5, 'JPY': 1340, 'CAD': 12.6, 'CHF': 12.4, 'AUD': 14.0, 'NZD': 15.3 },
  'NZD/USD': { 'USD': 10, 'EUR': 9.2, 'GBP': 8.1, 'JPY': 1450, 'CAD': 13.6, 'CHF': 13.4, 'AUD': 15.1, 'NZD': 16.5 },
  'EUR/GBP': { 'USD': 10, 'EUR': 9.2, 'GBP': 8.1, 'JPY': 1450, 'CAD': 13.6, 'CHF': 13.4, 'AUD': 15.1, 'NZD': 16.5 },
  'EUR/JPY': { 'USD': 6.9, 'EUR': 6.4, 'GBP': 5.6, 'JPY': 1000, 'CAD': 9.4, 'CHF': 9.3, 'AUD': 10.5, 'NZD': 11.5 },
  'NAS100': { 'USD': 1, 'EUR': 0.92, 'GBP': 0.81 },
  'SPX': { 'USD': 0.1, 'EUR': 0.092, 'GBP': 0.081 },
  'XAU/USD': { 'USD': 1, 'EUR': 0.92, 'GBP': 0.81 },
  'DXY': { 'USD': 0.1, 'EUR': 0.092, 'GBP': 0.081 },
};

const sections = {
  add: document.getElementById('addTradeSection'),
  view: document.getElementById('viewTradesSection'),
  calculator: calculatorSection,
};

function showSection(name) {
  Object.values(sections).forEach(sec => sec.classList.remove('active'));
  sections[name].classList.add('active');
  document.querySelectorAll('.sidebar .nav-item').forEach(item => {
    item.classList.remove('active');
    let buttonId = '';
    if (name === 'add') buttonId = 'btnAddView';
    else if (name === 'view') buttonId = 'btnSavedView';
    else if (name === 'calculator') buttonId = 'btnCalculatorView';
    if (item.id === buttonId) item.classList.add('active');
  });
  if (name === 'view') {
    populatePairFilters();
    loadTrades(); // This will call updateStatistics
  }
  if (name !== 'calculator') {
    riskAmountResultSpan.textContent = '--';
    positionSizeResultSpan.textContent = '--';
  } else {
    if (calcPairSelect.value === '') calcPairSelect.value = 'EUR/USD';
  }
}

addViewBtn.onclick = () => showSection('add');
savedViewBtn.onclick = () => showSection('view');
calculatorViewBtn.onclick = () => showSection('calculator');

document.getElementById('btnSettings').onclick = () => settingsModal.style.display = 'flex';
document.getElementById('btnHelp').onclick = () => helpModal.style.display = 'flex';
document.getElementById('closeSettings').onclick = () => settingsModal.style.display = 'none';
document.getElementById('closeHelp').onclick = () => helpModal.style.display = 'none';

themeBtn.onclick = () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
};

collapseBtn.onclick = () => {
  sidebar.classList.toggle('collapsed');
  content.classList.toggle('collapsed');
};

function setupFileUploadListener(wrapper, input) {
  if (wrapper && input) {
    wrapper.addEventListener('click', () => input.click());
    input.addEventListener('change', () => {
      const fileName = input.files[0] ? input.files[0].name : `Upload Image ${wrapper.dataset.target.slice(-1) || ' '}`;
      wrapper.querySelector('.text').textContent = fileName;
    });
  }
}
setupFileUploadListener(entry1UploadWrapper, entryImg1Input);
setupFileUploadListener(entry2UploadWrapper, entryImg2Input);
setupFileUploadListener(exit1UploadWrapper, exitImg1Input);
setupFileUploadListener(exit2UploadWrapper, exitImg2Input);


document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  showSection('add');
});

document.getElementById('rrr').addEventListener('input', (e) => {
  const value = e.target.value.replace(/:1$/, '');
  if (/^\d*\.?\d*$/.test(value) && value !== '') e.target.value = `${value}:1`;
  else if (value === '') e.target.value = '';
  else e.target.value = value;
});
document.getElementById('editRrr').addEventListener('input', (e) => {
  const value = e.target.value.replace(/:1$/, '');
  if (/^\d*\.?\d*$/.test(value) && value !== '') e.target.value = `${value}:1`;
  else if (value === '') e.target.value = '';
  else e.target.value = value;
});

function toBase64(file) {
  return new Promise((resolve) => {
    if (!file) { resolve(''); return; }
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

const STORAGE_KEY = '.tradeJournal';
function getTrades() { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
function saveTrades(trades) { localStorage.setItem(STORAGE_KEY, JSON.stringify(trades)); }

tradeForm.onsubmit = async (e) => {
  e.preventDefault();

  const tradeDate = document.getElementById('tradeDate').value;
  const currentBias = biasSelect.value;
  const currentSession = sessionSelect.value;
  const currentTradeType = tradeTypeSelect.value;
  const currentSlPips = slPipsInput.value;
  const currentRiskPercentage = riskPercentageInput.value;
  const currentModel = modelInput.value.trim(); // From text input
  const currentEmotionalState = emotionalStateInput.value.trim(); // From text input

  const accountType = accountTypeSelect.value;
  const pair = document.getElementById('pair').value;
  const direction = directionSelect.value;
  const lotSize = lotSizeInput.value;
  const rrr = document.getElementById('rrr').value;
  const duration = durationInput.value;
  const pnlInputEl = document.getElementById('pnl'); // Renamed to avoid conflict
  const resultSelectEl = document.getElementById('result'); // Renamed
  const note = document.getElementById('note').value;

  const entryFile1 = entryImg1Input.files[0];
  const entryFile2 = entryImg2Input.files[0];
  const exitFile1 = exitImg1Input.files[0];
  const exitFile2 = exitImg2Input.files[0];

  let pnlValue = parseFloat(pnlInputEl.value || 0);
  if (resultSelectEl.value === 'lose' && pnlValue > 0) pnlValue = -pnlValue;
  if (resultSelectEl.value === 'breakeven') pnlValue = 0;

  const entryImg1Base64 = await toBase64(entryFile1);
  const entryImg2Base64 = await toBase64(entryFile2);
  const exitImg1Base64 = await toBase64(exitFile1);
  const exitImg2Base64 = await toBase64(exitFile2);

  const trade = {
    date: tradeDate,
    account: accountType,
    pair: pair,
    bias: currentBias,
    session: currentSession,
    direction: direction,
    tradeType: currentTradeType,
    lotSize: lotSize,
    slPips: currentSlPips,
    riskPercentage: currentRiskPercentage,
    rrr: rrr,
    duration: duration,
    pnl: pnlValue,
    result: resultSelectEl.value,
    model: currentModel,
    emotionalState: currentEmotionalState,
    note: note,
    entryImg1: entryImg1Base64, entryImg2: entryImg2Base64,
    exitImg1: exitImg1Base64, exitImg2: exitImg2Base64,
    id: Date.now(),
  };

  const trades = getTrades();
  trades.push(trade);
  saveTrades(trades);

  tradeForm.reset();
  entry1UploadWrapper.querySelector('.text').textContent = 'Upload Image 1';
  entry2UploadWrapper.querySelector('.text').textContent = 'Upload Image 2';
  exit1UploadWrapper.querySelector('.text').textContent = 'Upload Image 1';
  exit2UploadWrapper.querySelector('.text').textContent = 'Upload Image 2';
  showSection('view');
};

function populatePairFilters() {
  const trades = getTrades();
  tradeListPairs.clear();
  trades.forEach(trade => {
    if (trade.pair && trade.pair !== '' && trade.pair !== '-- Select Pair --') {
      tradeListPairs.add(trade.pair);
    }
  });
  const staticPairOptions = Array.from(document.getElementById('pair').options)
    .filter(option => option.value !== '' && option.value !== '-- Select Pair --')
    .map(option => option.value);
  filterPairSelect.innerHTML = '<option value="all">All Pairs</option>';
  const sortedUniquePairs = Array.from(tradeListPairs).sort();
  sortedUniquePairs.forEach(pair => {
    const option = document.createElement('option');
    option.value = pair; option.textContent = pair;
    filterPairSelect.appendChild(option);
  });
  editPairSelect.innerHTML = '<option value="">-- Select Pair --</option>';
  staticPairOptions.forEach(pair => {
    const editOption = document.createElement('option');
    editOption.value = pair; editOption.textContent = pair;
    editPairSelect.appendChild(editOption);
  });
  sortedUniquePairs.forEach(pair => {
    if (!staticPairOptions.includes(pair)) {
      const editOption = document.createElement('option');
      editOption.value = pair; editOption.textContent = pair;
      editPairSelect.appendChild(editOption);
    }
  });
  const options = Array.from(editPairSelect.options);
  options.sort((a, b) => {
    if (a.value === '') return -1; if (b.value === '') return 1;
    return a.textContent.localeCompare(b.textContent);
  });
  editPairSelect.innerHTML = '';
  options.forEach(option => editPairSelect.appendChild(option));
  populateCalculatorPairDropdown();
}

function populateCalculatorPairDropdown() {
  const pairs = Object.keys(instrumentValues).sort();
  calcPairSelect.innerHTML = '<option value="">-- Select Pair --</option>';
  pairs.forEach(pair => {
    const option = document.createElement('option');
    option.value = pair;
    option.textContent = pair === 'XAU/USD' ? 'XAU/USD (Gold)' : pair;
    calcPairSelect.appendChild(option);
  });
  if (!pairs.includes('Other')) {
    const option = document.createElement('option');
    option.value = 'Other'; option.textContent = 'Other';
    calcPairSelect.appendChild(option);
  }
}

function filterTrades(trades) {
  const resultFilter = filterResultSelect.value;
  const pairFilter = filterPairSelect.value;
  const accountFilter = filterAccountSelect.value;
  return trades.filter(trade => {
    const matchesResult = resultFilter === 'all' || trade.result === resultFilter;
    const matchesPair = pairFilter === 'all' || trade.pair === pairFilter;
    const matchesAccount = accountFilter === 'all' || trade.account === accountFilter;
    return matchesResult && matchesPair && matchesAccount;
  });
}

toggleSummaryViewBtn.addEventListener('click', () => {
  const isPropView = propFirmStatsDiv.style.display === 'block';
  if (isPropView) {
    propFirmStatsDiv.style.display = 'none';
    generalStatsDiv.style.display = 'block';
    toggleSummaryViewBtn.textContent = 'View Prop Stats';
  } else {
    propFirmStatsDiv.style.display = 'block';
    generalStatsDiv.style.display = 'none';
    toggleSummaryViewBtn.textContent = 'View General Stats';
  }
});


function updateStatistics(trades) {
  // General Statistics
  const total = trades.length;
  const wins = trades.filter(trade => trade.result === 'win').length;
  const losses = trades.filter(trade => trade.result === 'lose').length;
  const winRate = total > 0 ? ((wins / total) * 100).toFixed(1) : 0;
  const totalPnL = trades.reduce((sum, trade) => sum + parseFloat(trade.pnl || 0), 0);

  totalTradesSpan.textContent = total;
  winRateSpan.textContent = `${winRate}%`;
  totalWinsSpan.textContent = wins;
  totalLossesSpan.textContent = losses;
  totalPnLSpan.textContent = totalPnL.toFixed(2);
  totalPnLSpan.className = totalPnL > 0 ? 'positive' : totalPnL < 0 ? 'negative' : 'zero';

  let cumulativePnl = 0;
  let peakPnl = 0;
  let maxDd = 0;
  trades.slice().sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(trade => {
    cumulativePnl += parseFloat(trade.pnl || 0);
    peakPnl = Math.max(peakPnl, cumulativePnl);
    const currentDd = peakPnl - cumulativePnl;
    if (currentDd > maxDd) maxDd = currentDd;
  });
  maxDrawdownSpan.textContent = maxDd.toFixed(2);

  // Prop Firm Statistics
  const propTrades = trades.filter(trade => trade.account === 'propfirm');
  if (propTrades.length > 0) {
    // Show button if there are prop trades, otherwise hide it
    toggleSummaryViewBtn.style.display = 'inline-flex';

    const propTotal = propTrades.length;
    const propWins = propTrades.filter(trade => trade.result === 'win').length;
    const propLosses = propTrades.filter(trade => trade.result === 'lose').length;
    const propWinRateVal = propTotal > 0 ? ((propWins / propTotal) * 100).toFixed(1) : 0;
    const propTotalPnLVal = propTrades.reduce((sum, trade) => sum + parseFloat(trade.pnl || 0), 0);
    const propBaseBalance = 2500;
    const propCurrentBalanceVal = propBaseBalance + propTotalPnLVal;

    propTotalTradesSpan.textContent = propTotal;
    propWinRateSpan.textContent = `${propWinRateVal}%`;
    propTotalWinsSpan.textContent = propWins;
    propTotalLossesSpan.textContent = propLosses;
    propTotalPnLSpan.textContent = propTotalPnLVal.toFixed(2);
    propTotalPnLSpan.className = propTotalPnLVal > 0 ? 'positive' : propTotalPnLVal < 0 ? 'negative' : 'zero';
    propCurrentBalanceSpan.textContent = propCurrentBalanceVal.toFixed(2);

    let propCumulativePnl = propBaseBalance;
    let propPeakBalance = propBaseBalance;
    let propMaxDd = 0;
    propTrades.slice().sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(trade => {
      propCumulativePnl += parseFloat(trade.pnl || 0);
      propPeakBalance = Math.max(propPeakBalance, propCumulativePnl);
      const currentDd = propPeakBalance - propCumulativePnl;
      if (currentDd > propMaxDd) propMaxDd = currentDd;
    });
    propMaxDrawdownSpan.textContent = propMaxDd.toFixed(2);
  } else {
    // No prop trades, hide the button and prop stats section, ensure general is shown
    toggleSummaryViewBtn.style.display = 'none';
    propFirmStatsDiv.style.display = 'none';
    generalStatsDiv.style.display = 'block';
    toggleSummaryViewBtn.textContent = 'View Prop Stats'; // Reset button text
  }
}


function loadTrades() {
  tradeList.innerHTML = '';
  let trades = getTrades();
  const filteredTrades = filterTrades(trades);
  updateStatistics(filteredTrades);

  if (!filteredTrades.length) {
    tradeList.innerHTML = '<p><span class="material-symbols-outlined icon">info</span> No trades found.</p>';
    return;
  }
  const sortedTrades = sortTrades(filteredTrades, sortOption.value);
  sortedTrades.forEach((t) => {
    const card = document.createElement('div');
    card.className = `trade-card ${t.result}`;
    card.dataset.tradeId = t.id;

    let entryImagesHTML = '';
    if (t.entryImg1 || t.entryImg2) {
      entryImagesHTML += `<p class="image-group-header"><span class="material-symbols-outlined icon">photo_camera</span> Entry Images:</p><div class="images-grid">`;
      if (t.entryImg1) entryImagesHTML += `<div class="image-container"><img src="${t.entryImg1}" alt="Entry 1 for ${t.pair}"></div>`;
      if (t.entryImg2) entryImagesHTML += `<div class="image-container"><img src="${t.entryImg2}" alt="Entry 2 for ${t.pair}"></div>`;
      entryImagesHTML += `</div>`;
    }

    let exitImagesHTML = '';
    if (t.exitImg1 || t.exitImg2) {
      exitImagesHTML += `<p class="image-group-header"><span class="material-symbols-outlined icon">switch_camera</span> Exit Images:</p><div class="images-grid">`;
      if (t.exitImg1) exitImagesHTML += `<div class="image-container"><img src="${t.exitImg1}" alt="Exit 1 for ${t.pair}"></div>`;
      if (t.exitImg2) exitImagesHTML += `<div class="image-container"><img src="${t.exitImg2}" alt="Exit 2 for ${t.pair}"></div>`;
      exitImagesHTML += `</div>`;
    }

    // For Bias icon display
    let biasIcon = '';
    if (t.bias === 'bullish') biasIcon = 'trending_up';
    else if (t.bias === 'bearish') biasIcon = 'trending_down';

    // For Session display (capitalize first letter)
    const sessionDisplay = t.session ? t.session.charAt(0).toUpperCase() + t.session.slice(1) : '';
    let sessionFlag = '';
    if (t.session === 'london') sessionFlag = '🇬🇧 ';
    else if (t.session === 'asia') sessionFlag = '🇯🇵 ';
    else if (t.session === 'ny') sessionFlag = '🇺🇸 ';


    card.innerHTML = `
      <h3>${t.pair} (${t.account || 'N/A'})</h3>
      <div class="action-buttons">
         <button class="edit-btn" data-trade-id="${t.id}"><span class="material-symbols-outlined">edit</span></button>
         <button class="delete-btn" data-trade-id="${t.id}"><span class="material-symbols-outlined">delete</span></button>
      </div>
      <p><span class="material-symbols-outlined icon">calendar_month</span> ${t.date}</p>
      ${t.bias && biasIcon ? `<p><span class="material-symbols-outlined icon">${biasIcon}</span> Bias: ${t.bias}</p>` : (t.bias ? `<p>Bias: ${t.bias}</p>` : '')}
      ${t.session ? `<p><span class="material-symbols-outlined icon">schedule</span> Session: ${sessionFlag}${sessionDisplay}</p>` : ''}
      ${t.direction ? `<p><span class="material-symbols-outlined icon">compare_arrows</span> Direction: ${t.direction}</p>` : ''}
      ${t.tradeType ? `<p><span class="material-symbols-outlined icon">category</span> Type: ${t.tradeType}</p>` : ''}
      ${t.lotSize ? `<p><span class="material-symbols-outlined icon">square_foot</span> Lot Size: ${t.lotSize}</p>` : ''}
      ${t.slPips ? `<p><span class="material-symbols-outlined icon">commit</span> SL: ${t.slPips} pips</p>` : ''}
      ${t.riskPercentage ? `<p><span class="material-symbols-outlined icon">shield</span> Risk: ${t.riskPercentage}%</p>` : ''}
      ${t.rrr ? `<p><span class="material-symbols-outlined icon">swap_horiz</span> RRR: ${t.rrr}</p>` : ''}
      ${t.duration ? `<p><span class="material-symbols-outlined icon">timer</span> Duration: ${t.duration}</p>` : ''}
      <p><span class="material-symbols-outlined icon">attach_money</span> PnL: $${parseFloat(t.pnl || 0).toFixed(2)}</p>
      <p><span class="material-symbols-outlined icon">flag</span> Result: ${t.result}</p>
      ${t.model ? `<p><span class="material-symbols-outlined icon">schema</span> Model: ${t.model}</p>` : ''}
      ${t.emotionalState ? `<p><span class="material-symbols-outlined icon">sentiment_satisfied</span> Emotion: ${t.emotionalState}</p>` : ''}
      <p><span class="material-symbols-outlined icon">description</span> ${t.note || 'No notes'}</p>
      ${entryImagesHTML}
      ${exitImagesHTML}
    `;
    tradeList.appendChild(card);
  });

  document.querySelectorAll('.delete-btn').forEach(button => button.onclick = deleteTrade);
  document.querySelectorAll('.edit-btn').forEach(button => button.onclick = openEditModal);
  document.querySelectorAll('.trade-card .image-container img').forEach(img => img.addEventListener('click', openImageModal));
}

function deleteTrade(event) {
  const tradeId = parseInt(event.target.closest('.action-buttons button').dataset.tradeId);
  const confirmation = confirm("Are you sure you want to delete this trade?");
  if (confirmation) {
    let trades = getTrades();
    trades = trades.filter(trade => trade.id !== tradeId);
    saveTrades(trades);
    loadTrades();
  }
}

function sortTrades(trades, sortBy) {
  const mutableTrades = [...trades];
  return mutableTrades.sort((a, b) => {
    switch (sortBy) {
      case 'date-asc': return new Date(a.date) - new Date(b.date);
      case 'date-desc': return new Date(b.date) - new Date(a.date);
      case 'pair-asc': return (a.pair || '').localeCompare(b.pair || '');
      case 'pair-desc': return (b.pair || '').localeCompare(a.pair || '');
      case 'pnl-asc': return parseFloat(a.pnl || 0) - parseFloat(b.pnl || 0);
      case 'pnl-desc': return parseFloat(b.pnl || 0) - parseFloat(a.pnl || 0);
      default: return new Date(b.date) - new Date(a.date);
    }
  });
}

filterResultSelect.addEventListener('change', loadTrades);
filterPairSelect.addEventListener('change', loadTrades);
filterAccountSelect.addEventListener('change', loadTrades);
sortOption.addEventListener('change', loadTrades);

function openImageModal(event) {
  const imgElement = event.target;
  if (imgElement && imgElement.tagName === 'IMG') {
    imageModal.style.display = 'flex'; imageModalImg.src = imgElement.src;
  }
}
closeImageModal.onclick = () => { imageModal.style.display = 'none'; imageModalImg.src = ''; };
imageModal.onclick = (event) => {
  if (event.target === imageModal) { imageModal.style.display = 'none'; imageModalImg.src = ''; }
};

exportDataBtn.addEventListener('click', () => {
  const trades = getTrades();
  if (trades.length === 0) { alert('No trade data to export.'); return; }
  const dataStr = JSON.stringify(trades, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'trade_journal_data.json';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
});

importDataBtn.addEventListener('click', () => importFileInput.click());
importFileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const importedTrades = JSON.parse(e.target.result);
      if (!Array.isArray(importedTrades)) { alert('Invalid file format.'); return; }
      const confirmImport = confirm('Importing data will replace all existing trades. Are you sure?');
      if (confirmImport) {
        saveTrades(importedTrades); alert('Data imported successfully!');
        settingsModal.style.display = 'none'; showSection('view');
      } else { alert('Import cancelled.'); }
    } catch (error) {
      alert('Error parsing file.'); console.error('Error importing data:', error);
    } finally { event.target.value = ''; }
  };
  reader.onerror = () => { alert('Error reading file.'); event.target.value = ''; };
  reader.readAsText(file);
});

function openEditModal(event) {
  const tradeId = parseInt(event.target.closest('.action-buttons button').dataset.tradeId);
  const trades = getTrades();
  const tradeToEdit = trades.find(trade => trade.id === tradeId);
  if (!tradeToEdit) { alert('Trade not found!'); return; }

  editTradeIdInput.value = tradeToEdit.id;
  editTradeDateInput.value = tradeToEdit.date;
  editAccountTypeSelect.value = tradeToEdit.account || 'demo';
  editPairSelect.value = tradeToEdit.pair || '';
  editBiasSelect.value = tradeToEdit.bias || '';
  editSessionSelect.value = tradeToEdit.session || '';
  editDirectionSelect.value = tradeToEdit.direction || '';
  editTradeTypeSelect.value = tradeToEdit.tradeType || '';
  editLotSizeInput.value = tradeToEdit.lotSize || '';
  editSlPipsInput.value = tradeToEdit.slPips || '';
  editRiskPercentageInput.value = tradeToEdit.riskPercentage || '';
  editRrrInput.value = tradeToEdit.rrr || '';
  editDurationInput.value = tradeToEdit.duration || '';
  editPnlInput.value = tradeToEdit.pnl;
  editResultSelect.value = tradeToEdit.result || '';
  editModelInput.value = tradeToEdit.model || ''; // For text input
  editEmotionalStateInput.value = tradeToEdit.emotionalState || ''; // For text input
  editNoteInput.value = tradeToEdit.note || '';

  editEntryImg1Status.textContent = tradeToEdit.entryImg1 ? 'Image 1 attached' : 'No image 1';
  editEntryImg2Status.textContent = tradeToEdit.entryImg2 ? 'Image 2 attached' : 'No image 2';
  editExitImg1Status.textContent = tradeToEdit.exitImg1 ? 'Image 1 attached' : 'No image 1';
  editExitImg2Status.textContent = tradeToEdit.exitImg2 ? 'Image 2 attached' : 'No image 2';
  editTradeModal.style.display = 'flex';
}

closeEditModal.onclick = () => { editTradeModal.style.display = 'none'; editTradeForm.reset(); };
editTradeModal.onclick = (event) => {
  if (event.target === editTradeModal) { editTradeModal.style.display = 'none'; editTradeForm.reset(); }
};

editTradeForm.onsubmit = (e) => {
  e.preventDefault();
  const tradeId = parseInt(editTradeIdInput.value);
  const trades = getTrades();
  const tradeIndex = trades.findIndex(trade => trade.id === tradeId);
  if (tradeIndex === -1) { alert('Error: Trade not found!'); return; }

  let updatedPnl = parseFloat(editPnlInput.value || 0);
  const updatedResult = editResultSelect.value;
  if (updatedResult === 'lose' && updatedPnl > 0) updatedPnl = -updatedPnl;
  else if (updatedResult === 'breakeven') updatedPnl = 0;

  const updatedTrade = {
    ...trades[tradeIndex],
    date: editTradeDateInput.value,
    account: editAccountTypeSelect.value,
    pair: editPairSelect.value,
    bias: editBiasSelect.value,
    session: editSessionSelect.value,
    direction: editDirectionSelect.value,
    tradeType: editTradeTypeSelect.value,
    lotSize: editLotSizeInput.value,
    slPips: editSlPipsInput.value,
    riskPercentage: editRiskPercentageInput.value,
    rrr: editRrrInput.value,
    duration: editDurationInput.value,
    pnl: updatedPnl,
    result: updatedResult,
    model: editModelInput.value.trim(),
    emotionalState: editEmotionalStateInput.value.trim(),
    note: editNoteInput.value,
  };
  trades[tradeIndex] = updatedTrade;
  saveTrades(trades);
  alert('Trade updated successfully!');
  editTradeModal.style.display = 'none';
  loadTrades();
};

calculateBtn.addEventListener('click', () => {
  const accountSize = parseFloat(calcAccountSizeInput.value);
  const riskPercentage = parseFloat(calcRiskPercentageInput.value);
  const stopLossDistance = parseFloat(calcStopLossDistanceInput.value);
  const selectedPair = calcPairSelect.value;
  const selectedCurrency = calcAccountCurrencySelect.value;
  const slUnit = calcSlUnitSelect.value;

  if (isNaN(accountSize) || accountSize <= 0) { alert('Valid Account Size.'); return; }
  if (isNaN(riskPercentage) || riskPercentage <= 0 || riskPercentage > 100) { alert('Valid Risk Percentage.'); return; }
  if (isNaN(stopLossDistance) || stopLossDistance <= 0) { alert('Valid Stop Loss Distance.'); return; }
  if (selectedPair === '') { alert('Select Trading Pair.'); return; }
  if (selectedCurrency === '') { alert('Select Account Currency.'); return; }

  const pairData = instrumentValues[selectedPair];
  let valuePerUnit = null;
  if (pairData && pairData[selectedCurrency] !== undefined) {
    valuePerUnit = pairData[selectedCurrency];
  } else {
    alert(`Value per ${slUnit} for ${selectedPair} in ${selectedCurrency} is not available.`);
    riskAmountResultSpan.textContent = '--'; positionSizeResultSpan.textContent = '--'; return;
  }
  if (valuePerUnit === null || stopLossDistance * valuePerUnit === 0) {
    alert(`Cannot calculate: Value per ${slUnit} is zero or invalid.`);
    riskAmountResultSpan.textContent = '--'; positionSizeResultSpan.textContent = '--'; return;
  }
  const riskAmount = accountSize * (riskPercentage / 100);
  const positionSize = riskAmount / (stopLossDistance * valuePerUnit);
  riskAmountResultSpan.textContent = `${selectedCurrency} ${riskAmount.toFixed(2)}`;
  positionSizeResultSpan.textContent = positionSize.toFixed(3);
});

const calculatorInputs = calculatorSection.querySelectorAll('input, select');
calculatorInputs.forEach(input => {
  input.addEventListener('input', () => {
    riskAmountResultSpan.textContent = '--';
    positionSizeResultSpan.textContent = '--';
  });
});