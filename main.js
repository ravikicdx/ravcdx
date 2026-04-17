  // ── HAMBURGER MENU ────────────────────────────────────────────────────────
  function toggleMenu() {
    const btn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('mobileMenu');
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      menu.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      menu.classList.add('open');
      btn.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    const btn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburgerBtn');
    if (menu && menu.classList.contains('open')) {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // Close menu on resize to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  // (scroll animations handled by pure CSS)

  // WhatsApp form send
  function sendWA() {
    const name = document.getElementById('form-name').value || 'Unknown';
    const phone = document.getElementById('form-phone').value || '-';
    const service = document.querySelectorAll('select')[0].value || 'Not specified';
    const location = document.querySelectorAll('select')[1].value || 'Not specified';
    const msg = document.querySelector('textarea').value || '-';
    const text = `Halo CyberDream X! 👋\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n*Location:* ${location}\n*Message:* ${msg}`;
    window.open(`https://wa.me/6289646841872?text=${encodeURIComponent(text)}`, '_blank');
  }


  // Counter animation
  function animateCounter(el, target) {
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + (el.dataset.suffix || '');
    }, 16);
  }

  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll('.stat-num');
        nums.forEach(num => {
          const text = num.textContent;
          const match = text.match(/(\d+)/);
          if (match) {
            const val = parseInt(match[1]);
            const suffix = text.replace(match[1], '');
            num.dataset.suffix = suffix;
            animateCounter(num, val);
          }
        });
        statsObs.disconnect();
      }
    });
  }, { threshold: 0.5 });

  statsObs.observe(document.querySelector('.stats-bar'));

  // ── TRANSLATIONS ──────────────────────────────────────────────────────────
  const translations = {
    id: {
      nav_services: 'Layanan', nav_why: 'Mengapa Kami', nav_contact: 'Kontak', nav_cta: 'Hubungi Kami',
      hero_eyebrow: 'Solusi IT Medan', hero_subtitle: 'The Power of Dreams',
      hero_desc: 'Layanan IT profesional untuk rumah, kantor & apartemen di Medan. Dari perbaikan perangkat hingga infrastruktur jaringan lengkap — kami membangun tulang punggung digital yang Anda butuhkan.',
      hero_btn1: 'Konsultasi Gratis', hero_btn2: 'Layanan Kami',
      stat1: 'Perangkat Diperbaiki', stat2: 'Jaringan Terpasang', stat3: 'Proyek CCTV', stat4: 'Dukungan Tersedia',
      sec_services_tag: 'Apa Yang Kami Lakukan', sec_services_title: 'Layanan <em>IT Kami</em>',
      sec_services_desc: 'Dari laptop rusak hingga jaringan enterprise lengkap — CyberDream X memberikan layanan IT yang cepat, andal, dan profesional di seluruh Medan.',
      svc1_title: 'Perbaikan Laptop & PC', svc1_desc: 'Diagnosis hardware, perbaikan motherboard, penggantian layar, pemulihan data, penghapusan virus, instalasi ulang OS, dan peningkatan performa.',
      svc2_title: 'Pemasangan Router & WiFi', svc2_desc: 'Konfigurasi router profesional, optimasi jangkauan WiFi, jaringan mesh, dan troubleshooting internet untuk rumah, kantor, dan apartemen.',
      svc3_title: 'Firewall & Switch', svc3_desc: 'Deployment firewall enterprise, konfigurasi VLAN, managed switch, dan penguatan keamanan jaringan untuk lingkungan bisnis.',
      svc4_title: 'Instalasi Server', svc4_desc: 'Setup server rack, deployment NAS, virtualisasi (VMware/Proxmox), Active Directory, sistem backup, dan integrasi cloud.',
      svc5_title: 'CCTV & Kamera IP', svc5_desc: 'Desain sistem CCTV lengkap, instalasi kamera IP, setup NVR/DVR, pemantauan jarak jauh, dan pemeliharaan untuk hunian dan komersial.',
      svc6_title: 'Pembuatan Website', svc6_desc: 'Desain dan pengembangan website kustom, profil perusahaan, e-commerce, landing page, integrasi CMS, setup hosting, dan pemeliharaan berkelanjutan.',
      sec_why_tag: 'Mengapa CyberDream X', sec_why_title: 'Ahli IT <em>Terpercaya</em><br>di Medan',
      sec_why_desc: 'Kami menggabungkan keahlian teknis dengan komitmen lokal untuk memberikan solusi IT yang benar-benar sesuai kebutuhan Anda.',
      why1_title: 'Respons Cepat', why1_desc: 'Layanan langsung tersedia di seluruh Medan. Sebagian besar masalah diselesaikan hari itu juga atau dalam 24 jam.',
      why2_title: 'Teknisi Bersertifikat', why2_desc: 'Tim kami memiliki sertifikasi di bidang jaringan, keamanan siber, dan sistem enterprise.',
      why3_title: 'Harga Transparan', why3_desc: 'Tidak ada biaya tersembunyi. Penilaian diagnostik gratis sebelum pekerjaan dimulai. Anda menyetujui sebelum kami melanjutkan.',
      why4_title: 'Layanan End-to-End', why4_desc: 'Kami menangani segalanya mulai dari perencanaan dan instalasi hingga pemeliharaan dan dukungan berkelanjutan.',
      coverage_title: 'Cakupan Layanan', coverage_desc: 'Kami melayani semua jenis lokasi di seluruh Medan',
      sec_contact_tag: 'Hubungi Kami', sec_contact_title: 'Kontak <em>CyberDream X</em>',
      sec_contact_desc: 'Siap meningkatkan infrastruktur IT Anda? Hubungi kami untuk konsultasi gratis hari ini.',
      contact_phone_label: 'Telepon / WhatsApp', contact_addr_label: 'Alamat',
      contact_hours_label: 'Jam Operasional', contact_hours_val: 'Senin – Sabtu: 08.00 – 21.00', contact_sunday: 'Minggu: Dengan Perjanjian',
      form_title: 'Kirim Pesan', form_name: 'Nama Anda', form_phone: 'Telepon / WA',
      form_service: 'Layanan Dibutuhkan', form_location: 'Jenis Lokasi', form_msg: 'Pesan', form_submit: 'Kirim via WhatsApp →',
      footer_desc: 'Mitra IT terpercaya Anda di Medan. Kami menyelesaikan masalah teknologi — cepat, profesional, dan dengan harga yang tepat. Tersedia untuk rumah, kantor, dan apartemen di seluruh Sumatera Utara.',
      ticker: ['Perbaikan Laptop & PC', 'Instalasi Jaringan', 'CCTV & Kamera IP', 'Setup Server', 'Pembuatan Website', 'Firewall & Router'],
      title: 'CyberDream X — Solusi IT Medan',
    },
    en: {
      nav_services: 'Services', nav_why: 'Why Us', nav_contact: 'Contact', nav_cta: 'WhatsApp Us',
      hero_eyebrow: 'IT Solutions Medan', hero_subtitle: 'The Power of Dreams',
      hero_desc: 'Professional IT services for homes, offices & apartments in Medan. From device repair to full network infrastructure — we build the digital backbone your space needs.',
      hero_btn1: 'Get Free Consultation', hero_btn2: 'Our Services',
      stat1: 'Devices Repaired', stat2: 'Networks Installed', stat3: 'CCTV Projects', stat4: 'Support Available',
      sec_services_tag: 'What We Do', sec_services_title: 'Our <em>IT Solutions</em>',
      sec_services_desc: 'From a broken laptop to a full enterprise network — CyberDream X delivers fast, reliable, and professional IT services across Medan.',
      svc1_title: 'Laptop & PC Repair', svc1_desc: 'Hardware diagnosis, motherboard repair, screen replacement, data recovery, virus removal, OS reinstallation, and performance upgrades.',
      svc2_title: 'Router & WiFi Setup', svc2_desc: 'Professional router configuration, WiFi coverage optimization, mesh networks, and internet troubleshooting for homes, offices, and apartments.',
      svc3_title: 'Firewall & Switches', svc3_desc: 'Enterprise-grade firewall deployment, VLAN configuration, managed switches, and network security hardening for business environments.',
      svc4_title: 'Server Installation', svc4_desc: 'Server rack setup, NAS deployment, virtualization (VMware/Proxmox), Active Directory, backup systems, and cloud integration.',
      svc5_title: 'CCTV & IP Camera', svc5_desc: 'Complete CCTV system design, IP camera installation, NVR/DVR setup, remote monitoring, and maintenance for residential and commercial spaces.',
      svc6_title: 'Website Development', svc6_desc: 'Custom website design and development, company profiles, e-commerce, landing pages, CMS integration, hosting setup, and ongoing maintenance.',
      sec_why_tag: 'Why CyberDream X', sec_why_title: 'Trusted IT <em>Experts</em><br>in Medan',
      sec_why_desc: 'We combine technical expertise with local commitment to deliver IT solutions that actually work for your needs.',
      why1_title: 'Fast Response Time', why1_desc: 'On-site service available across Medan. Most issues resolved same day or within 24 hours.',
      why2_title: 'Certified Technicians', why2_desc: 'Our team holds certifications in networking, cybersecurity, and enterprise systems.',
      why3_title: 'Transparent Pricing', why3_desc: 'No hidden costs. Free diagnostic assessment before any work begins. You approve before we proceed.',
      why4_title: 'End-to-End Service', why4_desc: 'We handle everything from planning and installation to ongoing maintenance and support.',
      coverage_title: 'Service Coverage', coverage_desc: 'We serve all types of locations across Medan',
      sec_contact_tag: 'Get In Touch', sec_contact_title: 'Contact <em>CyberDream X</em>',
      sec_contact_desc: 'Ready to upgrade your IT infrastructure? Reach out for a free consultation today.',
      contact_phone_label: 'Phone / WhatsApp', contact_addr_label: 'Address',
      contact_hours_label: 'Operating Hours', contact_hours_val: 'Monday – Saturday: 08.00 – 21.00', contact_sunday: 'Sunday: By Appointment',
      form_title: 'Send Us a Message', form_name: 'Your Name', form_phone: 'Phone / WA',
      form_service: 'Service Needed', form_location: 'Location Type', form_msg: 'Message', form_submit: 'Send via WhatsApp →',
      footer_desc: 'Your trusted IT partner in Medan. We solve tech problems — fast, professionally, and at the right price. Available for homes, offices, and apartments across Sumatera Utara.',
      ticker: ['Laptop & PC Repair', 'Network Installation', 'CCTV & IP Camera', 'Server Setup', 'Website Development', 'Firewall & Router'],
      title: 'CyberDream X — IT Solutions Medan',
    },
    zh: {
      nav_services: '服务', nav_why: '为何选择我们', nav_contact: '联系我们', nav_cta: 'WhatsApp联系',
      hero_eyebrow: '棉兰IT解决方案', hero_subtitle: 'The Power of Dreams',
      hero_desc: '为棉兰的家庭、办公室和公寓提供专业IT服务。从设备维修到完整的网络基础设施——我们为您构建所需的数字骨干。',
      hero_btn1: '免费咨询', hero_btn2: '我们的服务',
      stat1: '已维修设备', stat2: '已安装网络', stat3: 'CCTV项目', stat4: '全天候支持',
      sec_services_tag: '我们的业务', sec_services_title: '我们的<em>IT服务</em>',
      sec_services_desc: '从笔记本电脑损坏到完整的企业网络——CyberDream X为棉兰各地提供快速、可靠、专业的IT服务。',
      svc1_title: '笔记本及电脑维修', svc1_desc: '硬件诊断、主板维修、屏幕更换、数据恢复、病毒清除、系统重装及性能升级。',
      svc2_title: '路由器及WiFi安装', svc2_desc: '专业路由器配置、WiFi覆盖优化、Mesh网络及家庭、办公室和公寓的网络故障排除。',
      svc3_title: '防火墙与交换机', svc3_desc: '企业级防火墙部署、VLAN配置、托管交换机及商业环境网络安全加固。',
      svc4_title: '服务器安装', svc4_desc: '服务器机架搭建、NAS部署、虚拟化（VMware/Proxmox）、Active Directory、备份系统及云集成。',
      svc5_title: 'CCTV与IP摄像头', svc5_desc: '完整的CCTV系统设计、IP摄像头安装、NVR/DVR设置、远程监控及住宅和商业空间的维护。',
      svc6_title: '网站建设', svc6_desc: '定制网站设计与开发、公司简介、电子商务、落地页、CMS集成、主机设置及持续维护。',
      sec_why_tag: '为何选择CyberDream X', sec_why_title: '棉兰值得信赖的<em>IT专家</em>',
      sec_why_desc: '我们将技术专长与本地承诺相结合，提供真正满足您需求的IT解决方案。',
      why1_title: '快速响应', why1_desc: '棉兰各地均可上门服务。大多数问题当天或24小时内解决。',
      why2_title: '认证技术人员', why2_desc: '我们的团队持有网络、网络安全和企业系统认证。',
      why3_title: '透明定价', why3_desc: '无隐藏费用。工作开始前免费诊断评估。您确认后我们才开始。',
      why4_title: '端到端服务', why4_desc: '我们处理从规划和安装到持续维护和支持的一切事务。',
      coverage_title: '服务范围', coverage_desc: '我们服务棉兰各类场所',
      sec_contact_tag: '联系我们', sec_contact_title: '联系<em>CyberDream X</em>',
      sec_contact_desc: '准备好升级您的IT基础设施了吗？立即联系我们获取免费咨询。',
      contact_phone_label: '电话 / WhatsApp', contact_addr_label: '地址',
      contact_hours_label: '营业时间', contact_hours_val: '周一 – 周六：08.00 – 21.00', contact_sunday: '周日：预约制',
      form_title: '发送消息', form_name: '您的姓名', form_phone: '电话 / WA',
      form_service: '所需服务', form_location: '位置类型', form_msg: '留言', form_submit: '通过WhatsApp发送 →',
      footer_desc: '您在棉兰值得信赖的IT合作伙伴。我们快速、专业地解决技术问题，价格合理。服务于北苏门答腊各地的家庭、办公室和公寓。',
      ticker: ['笔记本及电脑维修', '网络安装', 'CCTV与摄像头', '服务器搭建', '网站建设', '防火墙与路由器'],
      title: 'CyberDream X — 棉兰IT解决方案',
    }
  };

  let currentLang = 'id';

  function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update active button (desktop + mobile)
    ['id','en','zh'].forEach(l => {
      const desktopBtn = document.getElementById('btn-' + l);
      const mobileBtn = document.getElementById('mbtn-' + l);
      if (desktopBtn) desktopBtn.classList.toggle('active', l === lang);
      if (mobileBtn) mobileBtn.classList.toggle('active', l === lang);
    });

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Update page title
    document.title = t.title;

    // Update ticker
    const tickerInner = document.querySelector('.ticker-inner');
    if (tickerInner && t.ticker) {
      const items = [...t.ticker, ...t.ticker].map(item =>
        `<span class="ticker-item">${item} <span class="ticker-sep">✦</span></span>`
      ).join('');
      tickerInner.innerHTML = items;
    }

    // Update select options — service
    const serviceOptions = {
      id: ['— Pilih layanan —','Perbaikan Laptop / PC','Pemasangan Router & WiFi','Instalasi Firewall & Switch','Instalasi Server','CCTV & Kamera IP','Pembuatan Website','Lainnya'],
      en: ['— Select a service —','Laptop / PC Repair','Router & WiFi Setup','Firewall & Switch Installation','Server Installation','CCTV & IP Camera','Website Development','Other'],
      zh: ['— 选择服务 —','笔记本 / 电脑维修','路由器与WiFi安装','防火墙与交换机安装','服务器安装','CCTV与IP摄像头','网站建设','其他']
    };
    const locationOptions = {
      id: ['— Pilih lokasi —','Rumah / Vila','Kantor','Apartemen','Toko / Ruko','Lainnya'],
      en: ['— Select location —','Home / Villa','Office','Apartment','Shop / Ruko','Other'],
      zh: ['— 选择地点 —','住宅 / 别墅','办公室','公寓','商铺','其他']
    };
    const placeholderOptions = {
      id: 'Jelaskan masalah atau kebutuhan Anda...',
      en: 'Describe your issue or requirements...',
      zh: '请描述您的问题或需求...'
    };
    const nameOptions = {
      id: 'Nama lengkap Anda',
      en: 'Your full name',
      zh: '您的姓名'
    };
    const phoneOptions = {
      id: 'Nomor telepon / WhatsApp',
      en: 'Phone number / WhatsApp',
      zh: '电话 / WhatsApp 号码'
    };

    const selects = document.querySelectorAll('select');
    if (selects[0] && serviceOptions[lang]) {
      const prev = selects[0].value;
      selects[0].innerHTML = serviceOptions[lang].map((opt, i) =>
        `<option value="${i === 0 ? '' : opt}">${opt}</option>`
      ).join('');
    }
    if (selects[1] && locationOptions[lang]) {
      selects[1].innerHTML = locationOptions[lang].map((opt, i) =>
        `<option value="${i === 0 ? '' : opt}">${opt}</option>`
      ).join('');
    }

    // Update textarea placeholder
    const textarea = document.querySelector('textarea');
    if (textarea && placeholderOptions[lang]) textarea.placeholder = placeholderOptions[lang];

    // Update name & phone input placeholders
    const nameInput = document.getElementById('form-name'); const phoneInput = document.getElementById('form-phone');
    if (inputs[0]) inputs[0].placeholder = nameOptions[lang] || inputs[0].placeholder;
    if (inputs[1]) inputs[1].placeholder = phoneOptions[lang] || inputs[1].placeholder;

    // Save language preference
    try { localStorage.setItem('cdx_lang', lang); } catch(e) {}
  }

  // Load saved language on startup
  (function() {
    let savedLang = 'id';
    try { savedLang = localStorage.getItem('cdx_lang') || 'id'; } catch(e) {}
    if (['id','en','zh'].includes(savedLang)) setLang(savedLang);
  })();

