/**
 * ==========================================================================
 * TÓTH KRISTÓF - BENTO PORTFOLIO & CV
 * Vanilla JavaScript: i18n, Theme Switcher, Filter, vCard & Clipboard Toast
 * ==========================================================================
 */

(function () {
  'use strict';

  // --- 1. Bilingual Dictionary (HU / EN) ---
  const TRANSLATIONS = {
    hu: {
      skipLink: 'Ugrás a tartalomra',
      headerStatus: '<span class="status-pulse" aria-hidden="true"></span> Budapesti Corvinus Egyetem',
      themeBtnText: 'Téma váltása',
      printBtnText: 'Nyomtatás / PDF',
      vcardBtnText: 'vCard Mentése',
      heroPill: 'Corvinus Egyetem Hallgató • Elemző',
      heroTitle: 'Gazdaság- és pénzügymatematikai elemzés hallgató | Budapesti Corvinus Egyetem',
      heroBio: 'Gazdaság- és pénzügymatematikai elemzés szakos hallgató a Budapesti Corvinus Egyetemen, többéves nemzetközi sportanalitikai és adatelemzői tapasztalattal (Pro Football Focus). Fókuszterületek: statisztikai modellezés, kvantitatív elemzés, adatvizualizáció és stratégiai döntéstámogatás.',
      badgePff: 'Pro Football Focus',
      badgePffDesc: '2022 – 2025 | Elemző',
      badgeCorvinus: 'Corvinus Egyetem',
      badgeCorvinusDesc: 'Gazdaság- és pénzügymatematika',
      badgeFocus: 'Fókuszterületek',
      badgeFocusDesc: 'Adatelemzés & Modellezés',
      skillEyebrow: 'Eszköztár & Készségek',
      skillHeading: 'Készségek',
      filterAll: 'Mind',
      filterQuant: 'Kvantitatív',
      filterDesign: 'Kreatív',
      filterSoft: 'Soft Skills',
      tagAdvanced: 'Haladó',
      tagApplied: 'Alkalmazott',
      tagExpert: 'Expert',
      tagStrong: 'Magas szintű',
      skillDesignName: 'Kép- és Kiadványszerkesztés',
      skillCommName: 'Jó Kommunikáció',
      skillTeamName: 'Csapatjátékos',
      skillStratName: 'Stratégiai Szemlélet',
      expSectionPill: 'Szakmai Tapasztalat',
      pffTenure: '2022 – 2025',
      pffRole: 'Elemző (Analyst)',
      pffSummary: 'Adatok gyűjtésével és elemzésével foglalkozó amerikai vállalat. Nagy pontosságú sportstatisztikai adatok gyűjtése, valós idejű és utólagos teljesítményértékelés, strukturált adatbázisok építése és minőségbiztosítás.',
      pffDuty1Title: 'Nagy pontosságú sportstatisztikai adatgyűjtés:',
      pffDuty1Desc: 'Mérkőzésenként több száz precíziós adatpont mikroszintű rögzítése és kategorizálása az amerikai PFF sztenderdek szerint.',
      pffDuty2Title: 'Teljesítményértékelés és adatbázis-építés:',
      pffDuty2Desc: 'Játékos- és csapatszintű teljesítménymutatók kalkulációja, strukturált relációs adatbázisok konzisztenciájának fenntartása.',
      pffDuty3Title: 'Nemzetközi csapatteljesítmény:',
      pffDuty3Desc: 'Napi szintű szoros angol nyelvű együttműködés az amerikai központi elemző és statisztikai minőségbiztosító stábbal.',
      eduEyebrow: 'Akadémiai Háttér',
      eduHeading: 'Tanulmányok',
      eduStatusActive: 'Folyamatban',
      eduCorvinusDegree: 'Gazdaság- és pénzügymatematikai elemzés',
      eduCorvinusDesc: 'Elmélyült kvantitatív képzés: sztochasztika, ökonometria, statisztikai modellezés, pénzügyi matematika és adatelemzés.',
      eduStatusDone: 'Befejezve',
      eduDoboDegree: 'Érettségi',
      eduDoboDesc: 'Erős reál és logikai alapok, emelt szintű analitikus és problémamegoldó felkészültség.',
      langEyebrow: 'Nyelvi Készségek',
      langHeading: 'Nyelvtudás',
      langHuName: 'Magyar',
      langHuCefr: 'Anyanyelv',
      langHuBadge: 'Anyanyelvi szint',
      langEnName: 'Angol',
      langEnSub: 'Munkanyelv & Bizonyítvány',
      langEnBadgeC1: 'de facto C1 Munkanyelv',
      langEnNote: '3+ év napi szintű operatív angol nyelvű kommunikáció és adatelemzés az amerikai Pro Football Focus csapatával.',
      contactEyebrow: 'Közvetlen Elérhetőség',
      contactHeading: 'Kapcsolat & Névjegy',
      availText: 'Azonnal elérhető',
      emailLabel: 'E-mail Cím',
      phoneLabel: 'Telefonszám',
      vcardFullBtn: 'vCard Névjegy Mentése (.vcf)',
      printFullBtn: 'CV Letöltése / Nyomtatása',
      a4CvBtn: 'A4 CV',
      a4CvHubBtn: 'Hivatalos A4 Önéletrajz',
      projectsEyebrow: 'Kvantitatív Modellezés & Adatelemzés',
      projectsHeading: 'Kiemelt Kvantitatív Projektek',
      p1Title: 'Pénzügyi idősorelemzés és volatilitás-előrejelzés',
      p1Desc: 'S&P 500 és BUX részvényindexek napi hozamsorainak vizsgálata. ARIMA-GARCH és EGARCH volatilitásmodellezés, 95% és 99% Value-at-Risk (VaR) előrejelzés Kupiec-féle visszateszteléssel.',
      p2Title: 'PFF Valószínűségi Döntéstámogató Rendszer',
      p2Desc: 'Play-by-play mikroadatokra épülő valószínűségi döntési modell 4. kísérleti szituációkra. EPA és Win Probability (WP) szimulációk statisztikai modellezéssel.',
      p3Title: 'Kvantitatív Portfólió-optimalizálás & Monte Carlo',
      p3Desc: 'Markowitz-féle hatékony határgörbe kalkuláció Sharpe-ráta maximalizálással, tőkeallokációs egyenessel és 10 000 futásos Monte Carlo szimulációval a farokkockázat és drawdown vizsgálatára.',
      p4Title: 'Makrogazdasági és Pénzügyi Ökonometriai Elemzés',
      p4Desc: 'Vektor-autoregresszív (VAR) és Johansen-kointegrációs vizsgálat a jegybanki kamat, infláció és devizaárfolyamok dinamikus impulzus-válasz kapcsolataira.',
      footerRole: 'Gazdaság- és pénzügymatematikai elemzés hallgató | Budapesti Corvinus Egyetem',
      footerLocation: 'Budapesti Corvinus Egyetem • Pro Football Focus',
      toastEmailCopied: 'E-mail cím kimásolva a vágólapra!',
      toastPhoneCopied: 'Telefonszám kimásolva a vágólapra!',
      toastVCardSaved: 'vCard (.vcf) névjegy letöltve!',
      toastSkillsFiltered: 'Készségek szűrve: '
    },
    en: {
      skipLink: 'Skip to content',
      headerStatus: '<span class="status-pulse" aria-hidden="true"></span> Corvinus University of Budapest',
      themeBtnText: 'Toggle theme',
      printBtnText: 'Print / PDF',
      vcardBtnText: 'Save vCard',
      heroPill: 'Corvinus University Student • Analyst',
      heroTitle: 'Applied Mathematics in Economics and Finance Student | Corvinus University of Budapest',
      heroBio: 'Applied Mathematics in Economics and Finance student at Corvinus University of Budapest, with multi-year international sports analytics and data analysis experience (Pro Football Focus). Focus areas: statistical modeling, quantitative analysis, data visualization, and strategic decision support.',
      badgePff: 'Pro Football Focus',
      badgePffDesc: '2022 – 2025 | Analyst',
      badgeCorvinus: 'Corvinus University',
      badgeCorvinusDesc: 'Economics & Financial Math',
      badgeFocus: 'Focus Areas',
      badgeFocusDesc: 'Data Analytics & Modeling',
      skillEyebrow: 'Toolbox & Skills',
      skillHeading: 'Skills',
      filterAll: 'All',
      filterQuant: 'Quantitative',
      filterDesign: 'Creative',
      filterSoft: 'Soft Skills',
      tagAdvanced: 'Advanced',
      tagApplied: 'Applied',
      tagExpert: 'Expert',
      tagStrong: 'High',
      skillDesignName: 'Graphic & Publication Layout',
      skillCommName: 'Clear Communication',
      skillTeamName: 'Team Player',
      skillStratName: 'Strategic Mindset',
      expSectionPill: 'Professional Experience',
      pffTenure: '2022 – 2025',
      pffRole: 'Analyst',
      pffSummary: 'American sports data collection and analytics company. High-precision sports statistical data gathering, live and post-game performance grading, structured database engineering, and quality assurance.',
      pffDuty1Title: 'High-precision sports data collection:',
      pffDuty1Desc: 'Recording and categorizing hundreds of micro-level data points per match according to rigorous US PFF standards.',
      pffDuty2Title: 'Performance grading & database modeling:',
      pffDuty2Desc: 'Computing player and team performance indicators, maintaining structured relational database consistency.',
      pffDuty3Title: 'International team collaboration:',
      pffDuty3Desc: 'Daily English-language operations in close sync with the US central analytics and data QA headquarters.',
      eduEyebrow: 'Academic Background',
      eduHeading: 'Education',
      eduStatusActive: 'In Progress',
      eduCorvinusDegree: 'Applied Mathematics in Economics and Finance',
      eduCorvinusDesc: 'Rigorous quantitative curriculum: stochastic processes, econometrics, statistical modeling, financial mathematics, and data analytics.',
      eduStatusDone: 'Completed',
      eduDoboDegree: 'High School Graduation',
      eduDoboDesc: 'Strong STEM and logical foundation, advanced analytical and problem-solving readiness.',
      langEyebrow: 'Language Skills',
      langHeading: 'Languages',
      langHuName: 'Hungarian',
      langHuCefr: 'Native',
      langHuBadge: 'Native proficiency',
      langEnName: 'English',
      langEnSub: 'Working Language & Certificate',
      langEnBadgeC1: 'de facto C1 Working Proficiency',
      langEnNote: '3+ years of daily professional English communication and data analytics with US-based Pro Football Focus.',
      contactEyebrow: 'Direct Contact',
      contactHeading: 'Contact & vCard',
      availText: 'Immediately Available',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      vcardFullBtn: 'Save vCard Contact (.vcf)',
      printFullBtn: 'Download / Print CV',
      a4CvBtn: 'A4 CV',
      a4CvHubBtn: 'Official A4 Resume',
      projectsEyebrow: 'Quantitative Modeling & Analytics',
      projectsHeading: 'Featured Quantitative Projects',
      p1Title: 'Financial Time Series & Volatility Forecasting',
      p1Desc: 'Econometric analysis of daily returns for S&P 500 and BUX indices. ARIMA-GARCH and EGARCH volatility modeling, 95% and 99% Value-at-Risk (VaR) forecasting with Kupiec backtesting.',
      p2Title: 'NFL Micro-Data Analytics & Decision Engine',
      p2Desc: 'Probabilistic decision model for 4th-down game scenarios leveraging play-by-play micro-data. Expected Points Added (EPA) and Win Probability (WP) simulations.',
      p3Title: 'Quantitative Portfolio Optimization & Monte Carlo',
      p3Desc: 'Markowitz Efficient Frontier calculation maximizing Sharpe ratio, Capital Allocation Line plotting, and 10,000-iteration Monte Carlo simulation to quantify portfolio tail risk.',
      p4Title: 'Macroeconometric VAR & Cointegration Analysis',
      p4Desc: 'Vector Autoregressive (VAR) and Johansen cointegration modeling investigating the dynamics between central bank interest rates, inflation, and FX rates.',
      footerRole: 'Applied Mathematics in Economics and Finance Student | Corvinus University of Budapest',
      footerLocation: 'Corvinus University of Budapest • Pro Football Focus',
      toastEmailCopied: 'Email address copied to clipboard!',
      toastPhoneCopied: 'Phone number copied to clipboard!',
      toastVCardSaved: 'vCard (.vcf) contact downloaded!',
      toastSkillsFiltered: 'Skills filtered: '
    }
  };

  // State
  let currentLang = localStorage.getItem('cv_lang') || 'hu';
  let currentTheme = localStorage.getItem('cv_theme') || 'dark';

  // --- 2. Language Switcher ---
  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('cv_lang', lang);
    document.documentElement.lang = lang;

    const btnHu = document.getElementById('lang-hu');
    const btnEn = document.getElementById('lang-en');
    if (btnHu && btnEn) {
      btnHu.classList.toggle('active', lang === 'hu');
      btnHu.setAttribute('aria-pressed', lang === 'hu');
      btnEn.classList.toggle('active', lang === 'en');
      btnEn.setAttribute('aria-pressed', lang === 'en');
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang][key]) {
        el.innerHTML = TRANSLATIONS[lang][key];
      }
    });

    if (lang === 'en') {
      document.title = 'Tóth Kristóf | Applied Mathematics in Economics and Finance Student';
    } else {
      document.title = 'Tóth Kristóf | Gazdaság- és pénzügymatematikai elemzés hallgató';
    }
  }

  // --- 3. Theme Switcher ---
  const THEMES = ['dark', 'light', 'contrast'];

  function applyTheme(theme) {
    if (!THEMES.includes(theme)) theme = 'dark';
    currentTheme = theme;
    localStorage.setItem('cv_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
      const themeNames = { dark: 'Dark', light: 'Light', contrast: 'High Contrast' };
      const nextTheme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
      themeBtn.setAttribute('title', `Téma váltása: ${themeNames[nextTheme]}`);
      themeBtn.setAttribute('aria-label', `Téma váltása: ${themeNames[nextTheme]}`);
    }
  }

  function cycleTheme() {
    const nextIndex = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
    applyTheme(THEMES[nextIndex]);
  }

  // --- 4. Bento Spotlight Effect ---
  function initSpotlight() {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const cards = document.querySelectorAll('.bento-card');
    cards.forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });

      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--mouse-x', '-1000px');
        card.style.setProperty('--mouse-y', '-1000px');
      });
    });
  }

  // --- 5. Skill Filtering ---
  function initSkillFilters() {
    const filterButtons = document.querySelectorAll('.filter-pill');
    const skillItems = document.querySelectorAll('.skill-item');
    const announcer = document.getElementById('skill-announcer');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        let visibleCount = 0;
        skillItems.forEach((item) => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
            visibleCount++;
          } else {
            item.classList.add('hidden');
          }
        });

        if (announcer) {
          const filterLabel = btn.querySelector('[data-i18n]') ? btn.querySelector('[data-i18n]').textContent : filter;
          announcer.textContent = `${TRANSLATIONS[currentLang].toastSkillsFiltered} ${filterLabel} (${visibleCount})`;
        }
      });
    });
  }

  // --- 6. Accessible Toasts ---
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.setAttribute('role', 'status');

    toast.innerHTML = `
      <svg class="toast-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 250);
    }, 2800);
  }

  // --- 7. Clipboard Copy ---
  function copyToClipboard(text, type, triggerBtn) {
    const successAction = () => {
      if (triggerBtn) {
        triggerBtn.classList.add('copied');
        setTimeout(() => triggerBtn.classList.remove('copied'), 2000);
      }

      const msg = type === 'email'
        ? TRANSLATIONS[currentLang].toastEmailCopied
        : TRANSLATIONS[currentLang].toastPhoneCopied;
      showToast(msg);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(successAction).catch(() => {
        fallbackCopy(text, successAction);
      });
    } else {
      fallbackCopy(text, successAction);
    }
  }

  function fallbackCopy(text, callback) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      callback();
    } catch (err) {
      showToast(text);
    }
    document.body.removeChild(textArea);
  }

  function initCopyButtons() {
    const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const text = btn.getAttribute('data-copy');
        const type = btn.getAttribute('data-type') || 'text';
        if (text) {
          copyToClipboard(text, type, btn);
        }
      });
    });
  }

  // --- 8. Dynamic vCard (.vcf) Generator ---
  function downloadVCard() {
    const vCardLines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Tóth;Kristóf;;;',
      'FN:Tóth Kristóf',
      'TITLE:Gazdaság- és pénzügymatematikai elemzés hallgató | Budapesti Corvinus Egyetem',
      'ORG:Budapesti Corvinus Egyetem',
      'TEL;TYPE=CELL,VOICE:+36308751075',
      'EMAIL;TYPE=INTERNET,PREF:toth.kristof.eger@gmail.com',
      'ADR;TYPE=HOME:;;Budapest / Eger;Hungary;;;',
      'NOTE:Budapesti Corvinus Egyetem | Pro Football Focus Elemző (2022-2025).',
      'END:VCARD'
    ];

    const vCardContent = vCardLines.join('\r\n');
    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const blobUrl = URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.setAttribute('download', 'Toth_Kristof_CV.vcf');
    downloadLink.style.display = 'none';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 500);

    showToast(TRANSLATIONS[currentLang].toastVCardSaved);
  }

  function initVCardTriggers() {
    const topVCardBtn = document.getElementById('vcard-top-btn');
    const hubVCardBtn = document.getElementById('vcard-download-btn');

    if (topVCardBtn) topVCardBtn.addEventListener('click', downloadVCard);
    if (hubVCardBtn) hubVCardBtn.addEventListener('click', downloadVCard);
  }

  // --- 9. Print CV Triggers ---
  function initPrintTriggers() {
    const printTopBtn = document.getElementById('print-cv-btn');
    const printSecBtn = document.getElementById('print-secondary-btn');

    const triggerPrint = () => window.print();

    if (printTopBtn) printTopBtn.addEventListener('click', triggerPrint);
    if (printSecBtn) printSecBtn.addEventListener('click', triggerPrint);
  }

  // --- 10. Initialization ---
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    applyTheme(currentTheme);

    const btnHu = document.getElementById('lang-hu');
    const btnEn = document.getElementById('lang-en');
    if (btnHu) btnHu.addEventListener('click', () => applyLanguage('hu'));
    if (btnEn) btnEn.addEventListener('click', () => applyLanguage('en'));

    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.addEventListener('click', cycleTheme);

    initSpotlight();
    initSkillFilters();
    initCopyButtons();
    initVCardTriggers();
    initPrintTriggers();
  });
})();
