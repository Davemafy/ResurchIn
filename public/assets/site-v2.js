(() => {

  const pageRoot = document.querySelector('[data-page-root]') || document.body;
  requestAnimationFrame(() => pageRoot.classList.add('v16-ready'));
  const header = document.querySelector('.site-head');
  const menuButton = document.querySelector('.menu');
  if (header && menuButton) {
    const closeMenu = () => {
      header.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    };
    menuButton.addEventListener('click', () => {
      const open = !header.classList.contains('open');
      header.classList.toggle('open', open);
      menuButton.setAttribute('aria-expanded', String(open));
    });
    header.querySelectorAll('nav a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  }

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const responsiveWidths = {5940711:[480,640,768,828,960,1080,1200,1600,1800],5940715:[480,640,768,828,960,1080,1200,1600,1800],5940830:[480,640,768,828,960,1080,1200,1600,1800],5940839:[480,640,768,828,960,1080,1200,1600,1800],8197503:[480,640,768,828,960,1080,1200,1600,1800],9243385:[480,640,768,828,960,1080,1200,1400,1600,1800]};
  const setResponsiveImage = (image, src, alt) => {
    if (!image) return;
    image.src = src;
    const match = src.match(/pexels-(\d+)-w\d+\.avif$/);
    if (match && responsiveWidths[match[1]]) image.srcset = responsiveWidths[match[1]].map(width => `/assets/images/pexels-${match[1]}-w${width}.avif ${width}w`).join(', ');
    if (typeof alt === 'string') image.alt = alt;
  };
  const rafThrottle = callback => {
    let raf = 0, lastArgs;
    return (...args) => {
      lastArgs = args;
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; callback(...lastArgs); });
    };
  };
  const progress = document.createElement('div');
  progress.className = 'site-progress';
  progress.setAttribute('aria-hidden', 'true');
  progress.innerHTML = '<i></i>';
  document.body.prepend(progress);
  const line = progress.querySelector('i');
  let queued = false;
  const onScroll = () => {
    const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
    line.style.transform = `scaleX(${Math.min(scrollY / max, 1)})`;
    if (header) header.classList.toggle('compact', scrollY > 48);
    const hero = document.querySelector('.hero-image img');
    if (hero && !reducedMotion) hero.style.transform = `scale(1.025) translateY(${Math.min(scrollY * .035, 28)}px)`;
    queued = false;
  };
  addEventListener('scroll', () => {
    if (!queued) requestAnimationFrame(onScroll);
    queued = true;
  }, { passive: true });
  onScroll();

  const heroGallery = document.querySelector('[data-hero-gallery]');
  if (heroGallery) {
    const views = [
      ['/assets/images/pexels-5940711-w1800.avif', 'Students reviewing research material together', 'THE WORK / NOT A SIMULATION', 'QUESTION MEMO / VERSION 03'],
      ['/assets/images/pexels-9243385-w1800.avif', 'A researcher working with a microscope', 'METHOD → OBSERVATION → ANALYSIS', 'REAL DATA / DOCUMENTED DECISIONS'],
      ['/assets/images/pexels-5940715-w1800.avif', 'A mentor and students reviewing work together', 'DRAFT → REVIEW → REVISION', 'ONE-TO-ONE / WORK-SPECIFIC FEEDBACK']
    ];
    const frame = heroGallery.querySelector('.hero-frame');
    const image = frame.querySelector('img');
    const caption = frame.querySelector('[data-hero-caption]');
    const meta = frame.querySelector('[data-hero-meta]');
    const buttons = [...heroGallery.querySelectorAll('.hero-gallery-nav button')];
    let activeView = 0;
    let swapTimer;
    let cycleTimer;
    const schedule = () => {
      clearTimeout(cycleTimer);
      if (!reducedMotion && !document.hidden) cycleTimer = setTimeout(() => showView(activeView + 1), 6500);
    };
    const showView = next => {
      activeView = (next + views.length) % views.length;
      buttons.forEach((button, index) => {
        const selected = index === activeView;
        button.classList.toggle('active', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      heroGallery.classList.remove('cycling');
      void heroGallery.offsetWidth;
      heroGallery.classList.add('cycling');
      frame.classList.add('changing');
      clearTimeout(swapTimer);
      swapTimer = setTimeout(() => {
        const view = views[activeView];
        setResponsiveImage(image, view[0], view[1]);
        caption.textContent = view[2];
        meta.textContent = view[3];
        frame.classList.remove('changing');
      }, 220);
      schedule();
    };
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => showView(index));
      button.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          event.preventDefault(); showView(activeView - 1); buttons[activeView].focus();
        }
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          event.preventDefault(); showView(activeView + 1); buttons[activeView].focus();
        }
      });
    });
    heroGallery.addEventListener('pointerenter', () => clearTimeout(cycleTimer));
    heroGallery.addEventListener('pointerleave', schedule);
    heroGallery.addEventListener('focusin', () => clearTimeout(cycleTimer));
    heroGallery.addEventListener('focusout', schedule);
    heroGallery.classList.add('cycling');
    schedule();
  }

  if (!reducedMotion && 'IntersectionObserver' in window) {
    const elements = document.querySelectorAll('.manifesto > div, .field-title, .note, .story-copy, .method-head, .critique-intro, .field-reel>header, .field-reel-stage, .v14-terms>div, .rhythm > *, .origin > *, .specs article, .curriculum-list article, .principles article, .community-scenes article');
    elements.forEach(element => element.classList.add('quiet-reveal'));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('seen');
        observer.unobserve(entry.target);
      }
    }), { threshold: .08, rootMargin: '0px 0px -4% 0px' });
    elements.forEach(element => observer.observe(element));
  }

  const stages = [
    ['01 / FRAME', 'What are you trying to find out?', 'Turn a broad area of interest into a question with a clear boundary.', 'A focused question', 'Could evidence answer this?', 'Question memo / version 03', '5940711', 'Students reviewing research material'],
    ['02 / READ', 'What has already been established?', 'Compare findings, methods and disagreements instead of collecting disconnected summaries.', 'A literature map', 'Where do the sources disagree?', 'Evidence matrix / 18 sources', '8197503', 'Students working in a lecture room'],
    ['03 / DESIGN', 'What evidence do you need?', 'Choose a method that fits the question and document the trade-offs it creates.', 'A method and data plan', 'Why this method for this question?', 'Study protocol / reviewed', '9243385', 'A researcher working with a microscope'],
    ['04 / ANALYSE', 'What can the result support?', 'Look for patterns, alternative explanations and limits without forcing certainty.', 'An analysis log', 'Is that in the data?', 'Analysis notes / version 04', '5940839', 'Researchers comparing findings around a laptop'],
    ['05 / WRITE', 'Can someone follow the argument?', 'Connect the question, evidence, claim and limitation in a clear research draft.', 'A complete draft', 'Has this sentence earned its confidence?', 'Manuscript / version 06', '5940715', 'A mentor and students reviewing a draft'],
    ['06 / PRESENT', 'Can you explain the decisions?', 'Present the result, answer questions and state honestly where the work stops.', 'A research presentation', 'What would you change next time?', 'Defence / portfolio ready', '5940830', 'A group discussing research in a classroom']
  ];
  const method = document.querySelector('.method-lab');
  if (method) {
    const tabs = [...method.querySelectorAll('.method-tabs button')];
    const media = method.querySelector('.method-media');
    const image = media.querySelector('img');
    const label = media.querySelector('figcaption span');
    const caption = media.querySelector('figcaption b');
    const count = media.querySelector('.method-counter span');
    const title = method.querySelector('.method-copy h3');
    const body = method.querySelector('.method-body');
    const values = method.querySelectorAll('.method-copy dd');
    let active = 0;
    let timer;
    const show = next => {
      active = (next + stages.length) % stages.length;
      tabs.forEach((tab, index) => {
        const selected = index === active;
        tab.classList.toggle('active', selected);
        tab.setAttribute('aria-pressed', String(selected));
      });
      media.classList.add('changing');
      clearTimeout(timer);
      timer = setTimeout(() => {
        const stage = stages[active];
        label.textContent = stage[0];
        title.textContent = stage[1];
        body.textContent = stage[2];
        values[0].textContent = stage[3];
        values[1].textContent = stage[4];
        values[2].textContent = stage[5];
        caption.textContent = stage[2];
        setResponsiveImage(image, `/assets/images/pexels-${stage[6]}-w1800.avif`, stage[7]);
        count.textContent = String(active + 1).padStart(2, '0');
        media.style.setProperty('--method-progress', `${((active + 1) / stages.length) * 100}%`);
        media.classList.remove('changing');
      }, 160);
    };
    tabs.forEach((tab, index) => tab.addEventListener('click', () => show(index)));
    method.querySelector('.method-prev').addEventListener('click', () => show(active - 1));
    method.querySelector('.method-next').addEventListener('click', () => show(active + 1));
    method.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') show(active - 1);
      if (event.key === 'ArrowRight') show(active + 1);
    });
    show(0);
  }

  const review = document.querySelector('#review-range');
  if (review) {
    const paper = document.querySelector('.draft-paper');
    const value = document.querySelector('.review-value');
    const reviewState = document.querySelector('[data-review-state]');
    const update = () => {
      const amount = `${review.value}%`;
      paper.style.setProperty('--review', amount);
      value.textContent = amount;
      review.setAttribute('aria-valuetext', `${amount} of the mentor annotations visible`);
      if (reviewState) {
        reviewState.style.opacity = '.35';
        reviewState.textContent = review.value < 34
          ? 'The claim still sounds more certain than the evidence.'
          : review.value < 72
            ? 'The confidence begins to fracture.'
            : 'The limitation is now part of the argument.';
        requestAnimationFrame(() => { reviewState.style.opacity = '1'; });
      }
    };
    review.addEventListener('input', update);
    update();
  }

  const notes = [...document.querySelectorAll('.note')];
  if (notes.length) {
    const details = [
      ['Question memo / version 03', 'The problem, the boundary, who it matters to and what evidence could answer it.'],
      ['Evidence matrix / 18 sources', 'Claims, methods, limitations and four places where the literature disagrees.'],
      ['Findings / version 04', 'The result stayed. “Proved” became “was associated with.” The limitation moved before the conclusion.']
    ];
    const tray = document.createElement('div');
    tray.className = 'field-tray';
    tray.innerHTML = '<button aria-label="Close document">×</button><small></small><h3></h3><p></p>';
    document.querySelector('.field-notes').append(tray);
    notes.forEach((note, index) => {
      note.tabIndex = 0;
      note.setAttribute('role', 'button');
      const open = () => {
        tray.querySelector('small').textContent = `DOCUMENT ${String(index + 1).padStart(2, '0')}`;
        tray.querySelector('h3').textContent = details[index][0];
        tray.querySelector('p').textContent = details[index][1];
        tray.classList.add('open');
        tray.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
      };
      note.addEventListener('click', open);
      note.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
    });
    tray.querySelector('button').addEventListener('click', () => tray.classList.remove('open'));
  }

  const form = document.querySelector('[data-apply-form]');
  if (form) {
    form.querySelectorAll('textarea').forEach(area => {
      const count = document.createElement('small');
      count.className = 'character-count';
      area.after(count);
      const update = () => { count.textContent = `${area.value.length} characters`; };
      area.addEventListener('input', update);
      update();
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const button = form.querySelector('button[type=submit]');
      const status = form.querySelector('.form-status');
      button.disabled = true;
      status.textContent = 'Application ready. Taking you to confirmation…';
      setTimeout(() => { location.href = '/apply/success/'; }, 500);
    });
  }

  const dragTrack = document.querySelector('.note-grid');
  if (dragTrack) {
    let down = false, startX = 0, startScroll = 0;
    dragTrack.addEventListener('pointerdown', event => {
      if (innerWidth > 720) return;
      down = true; startX = event.clientX; startScroll = dragTrack.scrollLeft;
      dragTrack.setPointerCapture(event.pointerId);
    });
    dragTrack.addEventListener('pointermove', event => { if (down) dragTrack.scrollLeft = startScroll - (event.clientX - startX); });
    const stop = () => { down = false; };
    dragTrack.addEventListener('pointerup', stop);
    dragTrack.addEventListener('pointercancel', stop);
  }

  // The homepage is one living research document assembled across six scroll chapters.
  const researchStory = document.querySelector('[data-research-story]');
  if (researchStory) {
    const storyData = [
      { folio:'01 / QUESTION MEMO', label:'THE FIRST DECISION', question:'What, exactly, are you trying to find out?', body:'A broad interest becomes useful only when it has a boundary, a population and evidence that could answer it.', document:'Question memo / version 03', review:'Could evidence actually answer this?', note:'Make the boundary visible.', trace:'INTEREST → QUESTION', kicker:'PHASE 01 / FRAME', title:'Give the problem a boundary.', explain:'Before collecting anything, decide what your question includes—and what it refuses to include.' },
      { folio:'02 / EVIDENCE MATRIX', label:'THE FIELD', question:'What is known—and where does it break?', body:'Sources are compared by claim, method and limitation until patterns and disagreements become visible.', document:'Evidence matrix / 18 sources', review:'Where do these authors actually disagree?', note:'Do not summarise. Compare.', trace:'QUESTION → FIELD', kicker:'PHASE 02 / READ', title:'Arrange the field by disagreement.', explain:'A literature review becomes useful when it shows relationships, not a stack of disconnected summaries.' },
      { folio:'03 / METHOD PLAN', label:'THE TRADE-OFF', question:'What evidence would count as an answer?', body:'The question determines the method. Every choice creates a strength, a cost and a limit that must be named.', document:'Method + data plan / reviewed', review:'Why this method for this question?', note:'Name the trade-off.', trace:'FIELD → METHOD', kicker:'PHASE 03 / DESIGN', title:'Choose the evidence before collecting it.', explain:'A method is not impressive because it is complex. It is credible because it fits the question.' },
      { folio:'04 / ANALYSIS LOG', label:'THE RESULT', question:'What can the pattern actually support?', body:'Results are examined alongside alternative explanations, missing information and the boundary of the sample.', document:'Analysis log / version 04', review:'Is that claim inside the data?', note:'Separate result from interpretation.', trace:'DATA → PATTERN', kicker:'PHASE 04 / ANALYSE', title:'Let the result stay smaller than the ambition.', explain:'Good analysis does not force certainty. It shows the result, the competing explanation and the limit.' },
      { folio:'05 / RESEARCH DRAFT', label:'THE ARGUMENT', question:'Has every sentence earned its confidence?', body:'The question, evidence, claim and limitation are connected in a draft another researcher can follow and challenge.', document:'Research draft / version 06', review:'What changed after the evidence?', note:'Narrow the claim.', trace:'PATTERN → CLAIM', kicker:'PHASE 05 / WRITE', title:'Revision is where judgment becomes visible.', explain:'Earlier versions stay in the portfolio. The difference between them is evidence of learning.' },
      { folio:'06 / FINAL DEFENCE', label:'THE CONTRIBUTION', question:'Can you defend every important decision?', body:'The project is presented with its evidence, limitations and the next question the work leaves behind.', document:'Presentation + complete portfolio', review:'What would you change next time?', note:'State where the work stops.', trace:'CLAIM → CONTRIBUTION', kicker:'PHASE 06 / PRESENT', title:'Finish with an honest contribution.', explain:'The program ends with work you can explain—not certainty you cannot support.' }
    ];
    const storyButtons = [...researchStory.querySelectorAll('[data-story-step]')];
    const storyPaper = researchStory.querySelector('.living-paper');
    const storyProgress = researchStory.querySelector('.bench-progress');
    const selectors = ['folio','label','question','body','document','review','note','trace','kicker','title','explain','number','count'];
    const storyFields = Object.fromEntries(selectors.map(key => [key, researchStory.querySelector(`[data-story-${key}]`)]));
    let activeStory = -1, storyTimer, storyScrollLockUntil = 0;
    const renderStory = index => {
      index = Math.max(0, Math.min(storyData.length - 1, index));
      if (index === activeStory) return;
      activeStory = index;
      const data = storyData[index];
      storyPaper.classList.add('phase-change');
      clearTimeout(storyTimer);
      storyTimer = setTimeout(() => {
        Object.keys(data).forEach(key => { if (storyFields[key]) storyFields[key].textContent = data[key]; });
        storyFields.number.textContent = String(index + 1).padStart(2,'0');
        storyFields.count.textContent = `${String(index + 1).padStart(2,'0')}—06`;
        storyButtons.forEach((button, i) => { const on = i === index; button.classList.toggle('active',on); button.setAttribute('aria-pressed',String(on)); });
        storyProgress.style.setProperty('--story-progress', `${((index + 1) / storyData.length) * 100}%`);
        storyPaper.style.setProperty('--paper-rotate', `${[-1.2,.8,-.6,1,-.4,.4][index]}deg`);
        storyPaper.classList.remove('phase-change');
      }, reducedMotion ? 0 : 170);
    };
    const storyOnScroll = () => {
      if (innerWidth <= 720) return;
      if (performance.now() < storyScrollLockUntil) return;
      const rect = researchStory.getBoundingClientRect();
      const travel = Math.max(researchStory.offsetHeight - innerHeight,1);
      const ratio = Math.max(0,Math.min(.999,-rect.top / travel));
      renderStory(Math.floor(ratio * storyData.length));
    };
    storyButtons.forEach((button,index) => button.addEventListener('click', () => {
      renderStory(index);
      if (innerWidth > 720) {
        storyScrollLockUntil = performance.now() + (reducedMotion ? 0 : 900);
        const travel = researchStory.offsetHeight - innerHeight;
        scrollTo({top:researchStory.offsetTop + (travel * index / storyData.length) + 2,behavior:reducedMotion?'auto':'smooth'});
      }
    }));
    addEventListener('scroll',storyOnScroll,{passive:true});
    storyOnScroll(); renderStory(0);
  }

  // A quiet section rail gives long-form navigation without turning the page into an app.
  const experienceRail = document.querySelector('.experience-rail');
  if (experienceRail) {
    const railButtons = [...experienceRail.querySelectorAll('[data-experience-jump]')];
    const railCount = experienceRail.querySelector('[data-experience-count]');
    const railSections = [
      document.querySelector('.v14-hero'),
      document.querySelector('.living-research'),
      document.querySelector('.field-reel'),
      document.querySelector('.critique-lab'),
      document.querySelector('.v14-closing')
    ].filter(Boolean);
    const setRail = index => {
      railCount.textContent = String(index + 1).padStart(2,'0');
      railButtons.forEach((button, i) => button.classList.toggle('active', i === index));
    };
    railButtons.forEach((button, index) => button.addEventListener('click', () => {
      railSections[index]?.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'start'});
    }));
    if ('IntersectionObserver' in window) {
      const railObserver = new IntersectionObserver(entries => {
        entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio).slice(0,1).forEach(entry => setRail(railSections.indexOf(entry.target)));
      }, {threshold:[.12,.35,.6],rootMargin:'-18% 0px -35% 0px'});
      railSections.forEach(section => railObserver.observe(section));
    }
    setRail(0);
  }

  const documentOrbit = document.querySelector('[data-document-orbit]');
  if (documentOrbit && !reducedMotion) {
    documentOrbit.addEventListener('pointermove', rafThrottle(event => {
      const rect = documentOrbit.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - .5) * 3;
      const y = ((event.clientY - rect.top) / rect.height - .5) * -2.5;
      documentOrbit.style.setProperty('--ry',`${x}deg`); documentOrbit.style.setProperty('--rx',`${y}deg`);
    }), { passive:true });
    documentOrbit.addEventListener('pointerleave', () => { documentOrbit.style.setProperty('--ry','1.5deg'); documentOrbit.style.setProperty('--rx','-1deg'); });
  }

  // A real project is viewed through its revisions, not as a polished before/after.
  const fieldReel = document.querySelector('[data-field-reel]');
  if (fieldReel) {
    const fieldViews = [
      {
        image: '/assets/images/pexels-5940711-w1800.avif',
        alt: 'Students reviewing research material together',
        caption: 'QUESTION MEMO / VERSION 01', credit: 'FRAMING THE PROBLEM',
        title: 'The question was too broad to fail.',
        body: '“How does social media affect students?” became one population, one behavior and one outcome that could actually be observed.',
        mark: 'Who, where, and over what period?', document: 'Question memo / v01 → v03'
      },
      {
        image: '/assets/images/pexels-9243385-w1800.avif',
        alt: 'A researcher working carefully with laboratory equipment',
        caption: 'METHOD PLAN / REVIEW 02', credit: 'TESTING THE QUESTION',
        title: 'The method was impressive. It was also wrong.',
        body: 'The first plan collected more data than the question needed. Review cut the noise, named the trade-off and left a method the participant could explain.',
        mark: 'Why this method for this question?', document: 'Study plan / v02 → reviewed'
      },
      {
        image: '/assets/images/pexels-5940715-w1800.avif',
        alt: 'A small group examining and discussing a research draft',
        caption: 'RESEARCH DRAFT / VERSION 06', credit: 'DEFENDING THE CLAIM',
        title: 'The finding stayed. The certainty did not.',
        body: '“Proved” became “was associated with.” The sample moved into the claim. The limitation arrived before the conclusion—not after it.',
        mark: 'Is every word inside the evidence?', document: 'Research draft / v03 → v06'
      }
    ];
    const controls = [...fieldReel.querySelectorAll('[data-field-step]')];
    const stage = fieldReel.querySelector('.field-reel-stage');
    const fields = Object.fromEntries(['image','caption','credit','index','title','body','mark','document'].map(key => [key, fieldReel.querySelector(`[data-field-${key}]`)]));
    let fieldActive = 0, fieldTimer;
    const showFieldView = index => {
      index = Math.max(0, Math.min(fieldViews.length - 1, index));
      if (index === fieldActive && stage.dataset.ready) return;
      fieldActive = index;
      stage.classList.add('is-changing');
      clearTimeout(fieldTimer);
      fieldTimer = setTimeout(() => {
        const view = fieldViews[index];
        setResponsiveImage(fields.image, view.image, view.alt);
        ['caption','credit','title','body','mark','document'].forEach(key => { fields[key].textContent = view[key]; });
        fields.index.textContent = `${String(index + 1).padStart(2,'0')} / 03`;
        controls.forEach((control, i) => { const on = i === index; control.classList.toggle('active', on); control.setAttribute('aria-pressed', String(on)); });
        stage.dataset.ready = 'true';
        stage.classList.remove('is-changing');
      }, reducedMotion ? 0 : 220);
    };
    controls.forEach((control, index) => {
      control.addEventListener('click', () => showFieldView(index));
      control.addEventListener('keydown', event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); const next = (index + 1) % controls.length; controls[next].focus(); showFieldView(next); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); const next = (index - 1 + controls.length) % controls.length; controls[next].focus(); showFieldView(next); }
      });
    });
    showFieldView(0);
  }

  // ResurchIn's research lens follows attention instead of adding decorative motion.
  const lensFrame = document.querySelector('.hero-frame');
  if (lensFrame) {
    const moveLens = event => {
      const rect = lensFrame.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
      lensFrame.style.setProperty('--lens-x', `${x}%`);
      lensFrame.style.setProperty('--lens-y', `${y}%`);
    };
    lensFrame.addEventListener('pointermove', rafThrottle(moveLens), { passive:true });
    lensFrame.addEventListener('pointerenter', () => lensFrame.classList.add('lens-active'));
    lensFrame.addEventListener('pointerleave', () => lensFrame.classList.remove('lens-active'));
  }

  // The programme register works like an index: one research decision in focus at a time.
  const registerRows = [...document.querySelectorAll('.register-row:not(.register-head)')];
  if (registerRows.length) {
    const focusRow = row => registerRows.forEach(item => item.classList.toggle('is-focused', item === row));
    registerRows.forEach(row => {
      row.tabIndex = 0;
      row.addEventListener('mouseenter', () => focusRow(row));
      row.addEventListener('focus', () => focusRow(row));
      row.addEventListener('click', () => focusRow(row));
      row.addEventListener('keydown', event => {
        const index = registerRows.indexOf(row);
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
          event.preventDefault(); registerRows[(index + 1) % registerRows.length].focus();
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
          event.preventDefault(); registerRows[(index - 1 + registerRows.length) % registerRows.length].focus();
        }
      });
    });
    focusRow(registerRows[0]);
  }

  // A complete sample dossier opens as an explorable research object.
  const dossierViewer = document.querySelector('[data-dossier-viewer]');
  if (dossierViewer) {
    const dossierPages = [
      {
        folio: '01 / QUESTION MEMO', status: 'REVISED / V03', revision: 'REVISION 03',
        kicker: 'RESEARCH QUESTION',
        title: 'Does a weekly peer-review session change how first-year students revise analytical essays?',
        body: 'Early interviews suggested that students received comments but did not always know what to do next. The study asks about one practice, one cohort and one visible behaviour: revision.',
        side: 'First-year students in one twelve-week writing course. Revision quality is assessed through changes between submitted drafts.',
        note: '“Change ‘improves writing’ to the specific behaviour you can observe.”',
        cite: 'MENTOR NOTE / ROUND 02',
        caption: 'A useful question names the population, practice and outcome before the data arrives.'
      },
      {
        folio: '02 / EVIDENCE MATRIX', status: '18 SOURCES / 4 GAPS', revision: 'MATRIX 02',
        kicker: 'WHERE THE FIELD DISAGREES',
        title: 'Feedback helps most when students can translate it into a visible next action.',
        body: 'Eighteen sources were compared by participant group, feedback format, measured outcome and stated limitation. Four disagreements became more useful than a long list of summaries.',
        side: 'Seven studies measured final scores. Five examined revision behaviour. Six relied on self-reported confidence and could not show what changed in the work.',
        note: '“Do not write another summary. Show me the disagreement.”',
        cite: 'MENTOR NOTE / ROUND 03',
        caption: 'The matrix keeps method and limitation beside every finding, so authority is never separated from context.'
      },
      {
        folio: '03 / MENTOR REVIEW', status: 'CLAIM / NARROWED', revision: 'REVISION 06',
        kicker: 'CLAIM AFTER REVIEW',
        title: 'In this sample, peer review was associated with more specific changes between drafts.',
        body: 'The first draft said the sessions “improved student writing.” The revised claim names the sample, describes the observed behaviour and stops before claiming causation.',
        side: 'The course was small, participation was not randomly assigned and the study did not measure whether the changes persisted after twelve weeks.',
        note: '“The result did not get weaker. The sentence became more honest.”',
        cite: 'MENTOR NOTE / FINAL REVIEW',
        caption: 'The final sentence is smaller than the ambition—and stronger because every word can be defended.'
      }
    ];
    const tabs = [...dossierViewer.querySelectorAll('[data-dossier-tab]')];
    const sheet = dossierViewer.querySelector('[data-dossier-sheet]');
    const fields = {
      folio: dossierViewer.querySelector('[data-dossier-folio]'), status: dossierViewer.querySelector('[data-dossier-status]'),
      revision: dossierViewer.querySelector('[data-sheet-revision]'), kicker: dossierViewer.querySelector('[data-sheet-kicker]'),
      title: dossierViewer.querySelector('[data-sheet-title]'), body: dossierViewer.querySelector('[data-sheet-body]'),
      side: dossierViewer.querySelector('[data-sheet-side]'), note: dossierViewer.querySelector('[data-sheet-note]'),
      page: dossierViewer.querySelector('[data-sheet-page]'), count: dossierViewer.querySelector('[data-dossier-count]'),
      caption: dossierViewer.querySelector('[data-dossier-caption]')
    };
    let dossierActive = 0, dossierTimer, returnFocus;
    const showDossierPage = next => {
      dossierActive = (next + dossierPages.length) % dossierPages.length;
      sheet.classList.add('changing');
      clearTimeout(dossierTimer);
      dossierTimer = setTimeout(() => {
        const page = dossierPages[dossierActive];
        ['folio','status','revision','kicker','title','body','side','caption'].forEach(key => { fields[key].textContent = page[key]; });
        fields.note.firstChild.textContent = `${page.note} `;
        fields.note.querySelector('cite').textContent = page.cite;
        fields.page.textContent = String(dossierActive + 1).padStart(2,'0');
        fields.count.textContent = `${String(dossierActive + 1).padStart(2,'0')} / 03`;
        tabs.forEach((tab, index) => { const on = index === dossierActive; tab.classList.toggle('active', on); tab.setAttribute('aria-pressed', String(on)); });
        sheet.classList.remove('changing');
      }, reducedMotion ? 0 : 180);
    };
    const openDossier = event => {
      returnFocus = event.currentTarget;
      dossierViewer.classList.add('open'); dossierViewer.setAttribute('aria-hidden','false'); document.body.classList.add('dossier-open');
      showDossierPage(0);
      setTimeout(() => dossierViewer.querySelector('[data-dossier-close]').focus(), reducedMotion ? 0 : 420);
    };
    const closeDossier = () => {
      dossierViewer.classList.remove('open'); dossierViewer.setAttribute('aria-hidden','true'); document.body.classList.remove('dossier-open');
      if (returnFocus) returnFocus.focus();
    };
    document.querySelectorAll('[data-dossier-open]').forEach(button => button.addEventListener('click', openDossier));
    dossierViewer.querySelector('[data-dossier-close]').addEventListener('click', closeDossier);
    dossierViewer.querySelector('[data-dossier-prev]').addEventListener('click', () => showDossierPage(dossierActive - 1));
    dossierViewer.querySelector('[data-dossier-next]').addEventListener('click', () => showDossierPage(dossierActive + 1));
    tabs.forEach((tab,index) => tab.addEventListener('click', () => showDossierPage(index)));
    dossierViewer.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeDossier();
      if (event.key === 'ArrowLeft') showDossierPage(dossierActive - 1);
      if (event.key === 'ArrowRight') showDossierPage(dossierActive + 1);
    });
  }

  // The mentor desk separates claim, evidence and limitation instead of treating feedback as one layer.
  const reviewModes = [...document.querySelectorAll('[data-review-mode]')];
  if (reviewModes.length) {
    const desk = document.querySelector('.review-desk');
    const coordinate = document.querySelector('[data-review-coordinate]');
    const revision = document.querySelector('[data-review-revision]');
    const modeData = {
      claim: ['CLAIM AUDIT', 'In this twelve-week sample, participants receiving the intervention recorded a higher mean test score.'],
      evidence: ['EVIDENCE CHECK', 'Mean scores rose by 8.4 points in the intervention group and 3.1 points in the comparison group.'],
      limit: ['LIMIT REGISTER', 'Because group assignment was not random, the result cannot establish that the intervention caused the difference.']
    };
    reviewModes.forEach(button => button.addEventListener('click', () => {
      const mode = button.dataset.reviewMode;
      reviewModes.forEach(item => { const on = item === button; item.classList.toggle('active', on); item.setAttribute('aria-pressed', String(on)); });
      desk.classList.add('mode-changing');
      setTimeout(() => { coordinate.textContent = modeData[mode][0]; revision.textContent = modeData[mode][1]; desk.classList.remove('mode-changing'); }, reducedMotion ? 0 : 180);
    }));
  }

  // Micro-labels make the interface legible without turning every control into a large button.
  const curriculum = document.querySelector('[data-curriculum]');
  if (curriculum) {
    const curriculumData = [
      ['01 / FRAME','Give the question a boundary.','Turn a broad interest into something evidence could actually answer.','Question memo / V3','Could evidence answer this?'],
      ['02 / READ','Arrange the field by disagreement.','Compare claims, methods and limits instead of collecting disconnected summaries.','Evidence matrix / 18 sources','Where do these authors disagree?'],
      ['03 / DESIGN','Choose the evidence before collecting it.','Match the method to the question, then name the strength, cost and limit.','Method + data plan','Why this method for this question?'],
      ['04 / ANALYSE','Keep the result smaller than the ambition.','Separate the pattern in the data from the explanation you want to believe.','Analysis log / V4','Is that claim inside the data?'],
      ['05 / WRITE','Make every claim earn its confidence.','Connect question, evidence, limitation and conclusion in one traceable argument.','Research draft / V6','Has this sentence earned its certainty?'],
      ['06 / PRESENT','Defend the decision, not the performance.','Explain what the work found, where it stops and what you would change next.','Defence / portfolio','What would you do differently next?']
    ];
    const buttons = [...curriculum.querySelectorAll('[data-curriculum-step]')];
    const rows = [...document.querySelectorAll('.curriculum-list [data-phase]')];
    const fields = ['label','title','body','output','review'].map(key => curriculum.querySelector(`[data-curriculum-${key}]`));
    const sheet = curriculum.querySelector('.curriculum-sheet');
    const showPhase = index => {
      index = Math.max(0,Math.min(curriculumData.length - 1,index));
      fields.forEach((field,i) => field.textContent = curriculumData[index][i]);
      buttons.forEach((button,i) => { button.classList.toggle('active',i === index); button.setAttribute('aria-pressed',String(i === index)); });
      rows.forEach((row,i) => row.classList.toggle('is-active',i === index));
      sheet.style.setProperty('--curriculum-progress',`${((index + 1) / curriculumData.length) * 100}%`);
    };
    buttons.forEach((button,index) => button.addEventListener('click',() => showPhase(index)));
    rows.forEach((row,index) => {
      row.tabIndex = 0; row.setAttribute('role','button');
      const open = () => { showPhase(index); curriculum.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'start'}); };
      row.addEventListener('click',open);
      row.addEventListener('keydown',event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
    });
    showPhase(0);
  }

  document.querySelectorAll('.inner-page .page-hero .photo, .inner-page .resource-hero .photo').forEach(frame => {
    const image = frame.querySelector('img');
    if (!image || reducedMotion) return;
    frame.addEventListener('pointermove', rafThrottle(event => {
      const bounds = frame.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - .5) * 10;
      const y = ((event.clientY - bounds.top) / bounds.height - .5) * 8;
      image.style.transform = `scale(1.035) translate(${x}px,${y}px)`;
    }), { passive:true });
    frame.addEventListener('pointerleave',() => { image.style.transform = ''; });
  });

  if (matchMedia('(pointer:fine)').matches && !reducedMotion) {
    const caption = document.createElement('span');
    caption.className = 'cursor-caption'; caption.setAttribute('aria-hidden','true'); document.body.append(caption);
    const labels = new Map([
      ['[data-dossier-open]','OPEN SAMPLE'], ['[data-story-step]','CHANGE PHASE'], ['[data-field-step]','VIEW REVISION'],
      ['[data-review-mode]','INSPECT DECISION'], ['#review-range','DRAG TO REVIEW']
    ]);
    let target = null;
    document.addEventListener('pointermove', rafThrottle(event => { caption.style.left = `${event.clientX}px`; caption.style.top = `${event.clientY}px`; }), { passive:true });
    document.addEventListener('pointerover', event => {
      target = [...labels.keys()].map(selector => event.target.closest(selector)).find(Boolean);
      if (!target) return;
      const selector = [...labels.keys()].find(key => target.matches(key));
      caption.textContent = labels.get(selector); caption.classList.add('visible');
    });
    document.addEventListener('pointerout', event => {
      if (target && !target.contains(event.relatedTarget)) { caption.classList.remove('visible'); target = null; }
    });
  }

  // A restrained pointer orbit connects the editorial pages without obscuring native controls.
  if (matchMedia('(pointer:fine)').matches && !reducedMotion) {
    const orbit = document.createElement('i');
    orbit.className = 'cursor-orbit';
    orbit.setAttribute('aria-hidden', 'true');
    document.body.append(orbit);
    let pointerQueued = false, pointerX = 0, pointerY = 0;
    const paintPointer = () => {
      orbit.style.left = `${pointerX}px`; orbit.style.top = `${pointerY}px`; pointerQueued = false;
    };
    document.addEventListener('pointermove', event => {
      pointerX = event.clientX; pointerY = event.clientY;
      document.body.classList.add('pointer-ready');
      if (!pointerQueued) requestAnimationFrame(paintPointer);
      pointerQueued = true;
    }, { passive: true });
    document.querySelectorAll('a,button,input,select,textarea,[role="button"]').forEach(control => {
      control.addEventListener('pointerenter', () => orbit.classList.add('over-action'));
      control.addEventListener('pointerleave', () => orbit.classList.remove('over-action'));
    });
  }

  // Same-site navigation gets a short print-like fade; modified clicks remain untouched.
  document.querySelectorAll('a[href^="/"]').forEach(link => link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = new URL(link.href, location.href);
    if (target.pathname === location.pathname && target.hash === location.hash) return;
    event.preventDefault(); document.body.classList.add('is-leaving');
    setTimeout(() => { location.href = target.href; }, reducedMotion ? 0 : 220);
  }));
})();
