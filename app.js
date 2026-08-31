/**
 * Eray (cekYc) - Developer Hub & Portfolio Engine
 * Multi-Department Project Showcase & Architecture Explorer
 */

// --- 1. Rich Projects Data Model ---
const projectsData = [
  // --- BACKEND & DISTRIBUTED SYSTEMS ---
  {
    id: "elocode",
    name: "EloCode",
    title: "Privacy-First Competitive Code Review & Arena",
    category: ["backend", "systems"],
    isPrivate: true,
    language: "Go / Rust",
    stars: 0,
    tags: ["Go 1.22", "Rust AST", "PostgreSQL", "Redis Streams", "Docker Sandbox", "pgx/v5"],
    description: "Kurumsal geliştiriciler için kod tabanını sızdırmadan gizlilik korumalı (Zero-Leak) rekabetçi kod inceleme, hata ayıklama ve mühendis eşleştirme platformu.",
    githubUrl: "https://github.com/cekYc/EloCode",
    caseStudy: {
      tagline: "Gizlilik Öncelikli Dağıtık Kod İnceleme & İşlem Güvenliği Mimarisi",
      problem: "Kurumsal şirketler fikri mülkiyet endişeleri nedeniyle açık platformlarda kod inceleme veya eşleştirme yapamıyor; mevcut araçlar ise bağlamdan yoksun kalıyor.",
      solution: "Rust tabanlı AST sanitization motoru ile hassas değişken/iş mantığını yerel olarak maskeleyen, Go/pgx/v5 ile ACID transaction güvenceli ve Redis Streams ile anlık yarışma kuyruklarını yöneten hibrit bir mikroservis platformu kuruldu.",
      flow: `[Müşteri Kodu / CLI] 
       │ (1. Yerel AST Maskeleme - Rust Anonymizer)
       ▼
[Go API Gateway (Fiber / pgx)] ──► [PostgreSQL 16 (ACID Vault)]
       │ (2. Event Queue)
       ▼
[Redis Streams Matchmaker] ──► [İzole Docker Sandbox Execution]
       │ (3. Anlık Puanlama & Eşleştirme)
       ▼
[React 18 Canlı Arena / WebSocket Hub]`,
      techStack: [
        "Go 1.22 (Gin/Fiber, pgx connection pooling)",
        "Rust 1.75 (Hızlı & Güvenli AST Anonymizer)",
        "PostgreSQL 16 (ACID Transaction-safe state)",
        "Redis Streams (Yüksek hacimli eşleştirme kuyruğu)",
        "Docker Engine (İzole sandbox derleme ortamı)"
      ],
      highlights: [
        "Zero-Leak Sandbox: Bellek ve ağ kısıtlı Docker ortamında güvenli kod çalıştırma.",
        "ACID Uyumluluğu: pgx/v5 ile çoklu kuyrukta sıfır çakışmalı veri tutarlılığı.",
        "Anlık Senkronizasyon: WebSockets ve Redis Streams ile milisaniye altı arena güncellemeleri."
      ]
    }
  },
  {
    id: "crm-lead",
    name: "Lead Guard CRM",
    title: "Transaction-Safe Lead Dağıtım & SLA SaaS",
    category: ["backend", "fullstack"],
    isPrivate: true,
    language: "TypeScript",
    tags: ["Next.js App Router", "Supabase Postgres", "RLS Security", "Cloudflare Workers", "n8n", "OpenNext"],
    description: "Emlak ve kurumsal ofisler için 4 kaynaktan (Webhook, Form, Manuel, CSV) gelen müşteri taleplerini eşit ve transaction-safe dağıtan, SLA uyarı motorlu SaaS.",
    githubUrl: "https://github.com/cekYc/crm",
    caseStudy: {
      tagline: "PostgreSQL Row-Level Security (RLS) & Edge-Ready CRM Platformu",
      problem: "Birden fazla danışmanın bulunduğu ofislerde lead dağıtımında haksızlık, SLA kaçakları (30-60 dk gecikmeler) ve veri izolasyonu eksikliği yaşanıyordu.",
      solution: "İş mantığını doğrudan PostgreSQL fonksiyonlarında transaction-safe round-robin ile çözen, Supabase RLS ile danışman bazlı veri izolasyonu sağlayan ve Cloudflare Workers üzerinde sıfır sunucu maliyetiyle çalışan bir mimari geliştirildi.",
      flow: `[Webhook / Form / CSV / API]
       │ (Ortak Validasyon)
       ▼
[POST /api/leads (Next.js / Cloudflare Edge)]
       │
[PostgreSQL Database Function (Transaction-Safe Round-Robin)]
       ├──► [RLS Danışman İzolasyonu (Herkes Sadece Kendi Lead'ini Görür)]
       ├──► [Interactions Tablosu (Otomatik Audit Trail)]
       └──► [n8n Automation Webhooks (30dk / 60dk SLA Deduping Kuyruğu)]`,
      techStack: [
        "Next.js App Router & TypeScript",
        "Supabase PostgreSQL (Custom PL/pgSQL fonksiyonları & RLS)",
        "Cloudflare Workers & OpenNext Dağıtımı",
        "n8n İş Akışı Otomasyonu & SLA Deduping",
        "Tailwind CSS & Radix UI"
      ],
      highlights: [
        "Kesin Veri Güvenliği: RLS politikaları ile danışmanların birbirinin müşterisini görmesi veritabanı seviyesinde engellendi.",
        "Sıfır Çift Dağıtım: Eşzamanlı gelen taleplerde transaction kilitlemesi ile adil round-robin.",
        "Haftalık Otomatik Raporlama: 6 temel metrik ile danışman performans analitiği."
      ]
    }
  },
  {
    id: "merchant-order",
    name: "Esnaf Dürüm Sipariş Sistemi",
    title: "Gerçek Zamanlı Restoran & Kurye Dağıtım Motoru",
    category: ["backend"],
    isPrivate: true,
    language: "Go",
    tags: ["Go 1.22", "WebSockets", "JWT Auth", "Docker Compose", "TypeScript", "Real-time"],
    description: "Restoran mutfak paneli, kurye mobil takibi ve müşteri siparişlerini anlık WebSockets üzerinden senkronize eden yüksek performanslı Go backend mimarisi.",
    githubUrl: "https://github.com/cekYc/merchant_online_order",
    caseStudy: {
      tagline: "Go & WebSockets Tabanlı Sıfır Gecikmeli Sipariş & Lojistik Dağıtımı",
      problem: "Geleneksel webhooks ve HTTP polling yöntemleri sipariş yoğunluğunda gecikmeye ve sunucu darboğazına yol açıyordu.",
      solution: "Backend tamamen Go diline taşınarak, mutfak tezgahı, kurye ve müşteri arasında çift yönlü WebSocket kanalları kuruldu. SMS doğrulama ve JWT ile çok katmanlı rol güvenliği sağlandı.",
      flow: `[Müşteri Siparişi (Web/Mobil)]
       │ (WebSocket Event)
       ▼
[Go Backend Hub (Goroutines & Channels)]
       ├──► [Mutfak Ekranı: Sesli & Masaüstü Anlık Uyarı]
       ├──► [Kurye Paneli: Harita Konumu & Tek Dokunuşla Arama]
       └──► [Müşteri Ekranı: Canlı Hazırlık/Kurye Durumu]`,
      techStack: [
        "Go 1.22 (Yüksek eşzamanlı WebSocket Hub)",
        "JWT + Bcrypt Kimlik Doğrulama",
        "TypeScript / Client SPA",
        "Docker & Docker Compose"
      ],
      highlights: [
        "Goroutine Eşzamanlılığı: Yüzlerce anlık siparişte minimum RAM ve CPU ayak izi.",
        "Güvenli Dosya ve Token Yönetimi: Mimetype doğrulaması ve süreli SMS otp havuzu."
      ]
    }
  },
  {
    id: "cekypets",
    name: "CekyPets SaaS",
    title: "Akıllı Evcil Hayvan Sağlık & Abonelik Platformu",
    category: ["backend", "fullstack"],
    isPrivate: true,
    language: "TypeScript",
    tags: ["Angular 17", "NestJS", "Prisma ORM", "PostgreSQL", "@nestjs/schedule", "Docker"],
    description: "Evcil hayvanların yaş, kilo ve alerjilerine göre dinamik periyodik mama/bakım aboneliği oluşturan, otomatik cron motorlu SaaS mimarisi.",
    githubUrl: "https://github.com/cekYc/cekypets",
    caseStudy: {
      tagline: "NestJS & Prisma Destekli Otonom Abonelik & KVKK/Audit Altyapısı",
      problem: "Periyodik siparişlerde kullanıcı müdahalesine gerek kalmadan teslimat tarihlerini yönetmek ve tam hukuki/KVKK uyumluluğunu sağlamak gerekiyordu.",
      solution: "NestJS cron job'ları (`@nestjs/schedule`) ile otomatik sipariş üretimi, Prisma ORM ile transaction güvenliği ve ayrıştırılmış sözleşme state makineleri entegre edildi.",
      flow: `[Kullanıcı Onboarding & Evcil Hayvan Profili]
       │ (Algoritmik Mama & Sağlık Planı)
       ▼
[NestJS API Core (JWT / OAuth / Audit Logs)]
       │
[PostgreSQL + Prisma ORM]
       ▲
       │ (Her Gece Çalışan Otonom Döngü)
[@nestjs/schedule Cron Job Motoru (Sipariş Üretimi & Tarih Öteleme)]`,
      techStack: [
        "NestJS (Modüler Backend Mimari)",
        "Angular 17+ (Standalone Components, Animations)",
        "Prisma ORM & PostgreSQL",
        "Docker & Docker Compose Orkestrasyonu"
      ],
      highlights: [
        "Sıfır İnsan Müdahalesi: Cron tabanlı otonom periyodik sipariş üretimi.",
        "Tam Hukuki Uyum: Mesafeli satış, KVKK ve cayma hakkı için ayrıştırılmış log onayları."
      ]
    }
  },
  {
    id: "cross-platform-media",
    name: "Cross-Platform Media Bridge",
    title: "Telegram -> Discord Yüksek Hızlı Medya Dağıtıcı",
    category: ["backend"],
    isPrivate: false,
    language: "Go",
    stars: 1,
    tags: ["Go", "Pluggable Transport", "Hash Deduplication", "Telegram API", "Discord Webhooks"],
    description: "Telegram kanallarından gelen yüksek çözünürlüklü medyaları hash-tabanlı deduplication algoritması ile filtreleyip Discord kanallarına aktaran Go botu.",
    githubUrl: "https://github.com/cekYc/cross-platform_media_sharing",
    caseStudy: null
  },
  {
    id: "ceky-parser",
    name: "Ceky Parser",
    title: "Hibrit Blok Tabanlı Doküman Ayrıştırıcı & Üreteç",
    category: ["backend", "systems"],
    isPrivate: false,
    language: "Go",
    stars: 0,
    tags: ["Go", "Block Parser", "AST Generator", "High Performance"],
    description: "Özel doküman formatlarını blok bazında tarayıp yapılandırılmış JSON ve AST formatına dönüştüren yüksek hızlı Go ayrıştırıcı kütüphanesi.",
    githubUrl: "https://github.com/cekYc/ceky-parser",
    caseStudy: null
  },

  // --- SYSTEMS & LOW-LEVEL PROGRAMMING ---
  {
    id: "deadly-sins-engine",
    name: "Project M // Voxel Engine",
    title: "Vulkan Tabanlı Özel Voxel & Simülasyon Oyun Motoru",
    category: ["systems"],
    isPrivate: true,
    language: "Rust",
    tags: ["Rust", "Vulkan API", "Rayon Async Meshing", "GPU Memory Management", "Voxel Engine"],
    description: "Rust ve Vulkan API kullanılarak sıfırdan geliştirilen; özel bellek yöneticileri, termodinamik/otomasyon simülasyonu ve asenkron chunk örme yeteneğine sahip voxel motoru.",
    githubUrl: "https://github.com/cekYc/deadly_sins_engine",
    caseStudy: {
      tagline: "Vulkan API & Rust İle Sıfırdan Yüksek Performanslı Sistem Mühendisliği",
      problem: "Standart oyun motorları (Unity/Unreal) devasa voxel dünyalarında ve karmaşık termodinamik otomasyon hesaplamalarında bellek darboğazı yaşatıyordu.",
      solution: "Vulkan API üzerinde özel bellek havuzları (Custom Memory Allocators) kuruldu. Rayon ile asenkron çok çekirdekli chunk üretimi ve sıfır GC duraklamalı simülasyon döngüsü yazıldı.",
      flow: `[Prosedürel Dünya / Biyom Üreteci]
       │ (Çok Çekirdekli Hesaplama)
       ▼
[Rayon Thread Havuzu (Asenkron Greedy Meshing & Termodinamik Simülasyon)]
       │
[Özel Vulkan Bellek Yöneticisi (GPU Staging Buffers & Vertex Streaming)]
       ▼
[Vulkan Render Pipeline (Frustum Culling & Dynamic Shaders)]`,
      techStack: [
        "Rust (Sıfır maliyetli soyutlamalar, Bellek Güvenliği)",
        "Vulkan SDK (Doğrudan GPU Komut Havuzları)",
        "Rayon (Çok iş parçacıklı asenkron chunk hesaplama)",
        "Özel Fizik & Termodinamik Simülatörü"
      ],
      highlights: [
        "Doğrudan Donanım Kontrolü: Sıfır üçüncü parti oyun motoru bağımlılığı.",
        "Asenkron Greedy Meshing: Görünmeyen voxel yüzeylerini birleştirerek GPU çizim çağrılarını %80 azaltma.",
        "Gelişmiş Otomasyon Motoru: Sıvı dinamikleri, elektrik iletimi ve mekanik makineler."
      ]
    }
  },
  {
    id: "ceky-lang",
    name: "Ceky Language Compiler",
    title: "Rust Tabanlı Stage-0 Sistem Dili Derleyicisi",
    category: ["systems"],
    isPrivate: true,
    language: "Rust",
    tags: ["Rust", "Compiler Design", "AST", "HIR / MIR", "C11 CodeGen", "Self-Hosting Plan"],
    description: "Kaynak koddan doğrudan optimize C11 çıktısı ve yerel ikili dosya üreten; Tokenizer, AST, Name Resolution, Typed HIR ve CFG MIR aşamalarını içeren derleyici.",
    githubUrl: "https://github.com/cekYc/ceky-lang",
    caseStudy: {
      tagline: "Modern Derleyici Mimarisi: Source -> AST -> HIR -> MIR -> C11",
      problem: "Tip güvenliğini korurken C performansı sunan ve kendi kendini derleyebilecek (self-hosting) hafif bir sistem dili geliştirme hedefi.",
      solution: "Rust ile çok aşamalı Stage-0 pipeline mimarisi inşa edildi. Katı tip denetimi ve kontrol akış grafiği (CFG MIR) ile güvenli C11 kodu üreten derleyici motoru tamamlandı.",
      flow: `[Kaynak Kod (*.lang)]
       │
       ├──► [1. Lexer / Tokenizer]
       ├──► [2. Parser -> Abstract Syntax Tree (AST)]
       ├──► [3. Name Resolution & Type Checking -> Typed HIR]
       ├──► [4. Control Flow Graph -> CFG MIR]
       └──► [5. C11 Code Generator -> langc build (Native Exe)]`,
      techStack: [
        "Rust (Pattern Matching, Enum AST Trees)",
        "C11 Portable Code Generator",
        "Katı Doğrulama ve Lint Gate Scriptleri"
      ],
      highlights: [
        "Checked Integer Arithmetic: Taşma korumalı tam sayı matematiği.",
        "Komut Satırı Araç Seti: `langc check`, `langc ast`, `langc hir`, `langc mir`, `langc build`.",
        "Self-Hosting Yol Haritası: Dilin v1.0 sürümünde kendi derleyicisini derleme hedefi."
      ]
    }
  },
  {
    id: "zet-lang-source",
    name: "Zet Lang",
    title: "Güvenlik Odaklı Yüksek Performanslı Sistem Dili",
    category: ["systems"],
    isPrivate: false,
    language: "Rust",
    stars: 0,
    tags: ["Rust", "Systems Language", "Package Manager", "Compiler", "v0.6.5"],
    description: "Güvenmediği kodu derlemeyi reddeden ('Refuses to compile code it doesn't trust'), dahili paket yöneticisi ve registry entegrasyonuna sahip sistem programlama dili.",
    githubUrl: "https://github.com/cekYc/zet-lang-source",
    caseStudy: null
  },
  {
    id: "renewed-gojo-lang",
    name: "renewed-gojo-lang",
    title: "Saf C İle Yeniden Yazılan Programlama Dili (v8.0)",
    category: ["systems"],
    isPrivate: false,
    language: "C",
    stars: 0,
    tags: ["C (C11)", "Low-Level Runtime", "Custom Bytecode", "v8.0.0"],
    description: "Sıfırdan saf C dilinde baştan tasarlanan; bellek yönetimi, fonksiyon çalışma zamanı ve parser'ı C ile yazılmış bağımsız dil mimarisi.",
    githubUrl: "https://github.com/cekYc/renewed-gojo-lang",
    caseStudy: null
  },
  {
    id: "ceky-stream",
    name: "Ceky Stream",
    title: "Hibrit Dağıtık P2P Canlı Yayın Motoru",
    category: ["systems", "backend"],
    isPrivate: false,
    language: "Rust",
    tags: ["Rust", "P2P Mesh", "Video Ingest", "Distributed Networking", "Mesh Repair"],
    description: "Yüksek eşzamanlı izleyicilerde CDN bant genişliği maliyetini düşüren, mesh onarımlı ve gerçek video ingest destekli dağıtık P2P canlı yayın motoru.",
    githubUrl: "https://github.com/cekYc/ceky-stream",
    caseStudy: null
  },

  // --- FULL-STACK DEVELOPER ---
  {
    id: "valorant-premier",
    name: "Premier Lab",
    title: "Espor Karar Verdiren Zayıflık Teşhis & Scouting Motoru",
    category: ["fullstack"],
    isPrivate: true,
    language: "TypeScript",
    tags: ["Next.js", "Weakness Diagnostic Engine", "Scouting", "VOD Tagging", "Data Analytics"],
    description: "Basit istatistikler yerine takıma 'bu hafta ne antrenmanı yapmalıyız?' kararını veren ~15 kurallı teşhis motoruna ve VOD etiketleme sistemine sahip analiz platformu.",
    githubUrl: "https://github.com/cekYc/valorant-premier",
    caseStudy: {
      tagline: "Kural Tabanlı Zayıflık Teşhis Motoru ve Scouting Platformu",
      problem: "Mevcut espor analiz araçları yalnızca sayıları listeler, oyunculara ve koçlara somut antrenman kararı üretemez.",
      solution: "Küçük örneklemlerde yanılmayan (`sample size >= 6` kuralı), oyuncuların Mekanik ↔ Oyun Bilgisi ayrımını çıkaran ve otomatik VOD anı etiketleyen bir teşhis algoritması kodlandı.",
      flow: `[Maç Verisi & VOD Etiketleri]
       │
       ▼
[Zayıflık Teşhis Motoru (lib/analysis/weaknesses.ts)]
       ├──► [Örneklem Güveni Kontrolü (Düşük / Orta / Yüksek)]
       ├──► [Mekanik vs. Oyun Bilgisi Darboğaz Ayrımı]
       └──► [Haftalık 'Öncelikli Aksiyon Raporu' + Veto Önerisi]`,
      techStack: [
        "Next.js & TypeScript",
        "Özel Analiz Motoru (Rule-Based Expert System)",
        "Tailwind CSS & Charting"
      ],
      highlights: [
        "Karar Verdiren Metrikler: Pistol dönüşümü, retake verimi ve takım okunabilirlik skoru.",
        "Yerel Veri Güvenliği: `baslat.bat` ile tek tıkla ağdaki takım arkadaşlarıyla yerel paylaşım."
      ]
    }
  },
  {
    id: "mydevpage",
    name: "Ceky Portfolio & Three.js Canvas",
    title: "Next.js & React Three Fiber Mühendislik Portfolyosu",
    category: ["fullstack"],
    isPrivate: true,
    language: "TypeScript",
    tags: ["Next.js", "React Three Fiber", "Three.js", "GSAP ScrollTrigger", "Vitest"],
    description: "DOM içeriği ile WebGL katmanını hibrit birleştiren, GSAP ve R3F destekli sinematik geliştirici portfolyosu.",
    githubUrl: "https://github.com/cekYc/mydevpage",
    caseStudy: null
  },
  {
    id: "appointment-booking",
    name: "RandevuGO Platformu",
    title: "Harita Destekli Çevrimiçi Randevu & Rezervasyon SaaS",
    category: ["fullstack", "backend"],
    isPrivate: false,
    language: "TypeScript",
    stars: 0,
    tags: ["TypeScript", "OpenStreetMap / Leaflet", "Docker", "Multi-booking", "REST API"],
    description: "Müşterilerin harita üzerinden işletmeleri keşfedip randevu alabildiği, çalışan/hizmet/fiyat yönetimi sağlayan tam dockerize rezervasyon platformu.",
    githubUrl: "https://github.com/cekYc/appointment_booking_website",
    caseStudy: null
  },
  {
    id: "repo-monitor-2",
    name: "Repo Monitor",
    title: "GitHub Geliştirici DNA & Dil Analiz Arayüzü",
    category: ["fullstack"],
    isPrivate: false,
    language: "TypeScript",
    stars: 0,
    tags: ["TypeScript", "GitHub API", "Data Visualization", "Profile Radar"],
    description: "Herhangi bir GitHub profilinin açık depolarını tarayarak geliştiricinin programlama dili DNA'sını ve aktivite eğrisini görselleştiren araç.",
    githubUrl: "https://github.com/cekYc/repo-monitor-2",
    caseStudy: null
  },

  // --- BİLGİ İŞLEM / IT & ALTYAPI ---
  {
    id: "aiops-radar",
    name: "AIOps System Radar // v5.0",
    title: "Akıllı Sistem Radarı, Donanım Optimizasyonu & UAC Otopilot",
    category: ["it", "systems"],
    isPrivate: false,
    language: "Python",
    stars: 0,
    tags: ["Python", "System Monitor", "VRAM Cleaner", "Ping Optimizer", "UAC Integration", "v5.0"],
    description: "Windows ortamında CPU, RAM ve VRAM darboğazlarını temizleyen, ağ ping paketlerini optimize eden ve UAC yetki entegrasyonuna sahip sistem radarı.",
    githubUrl: "https://github.com/cekYc/real_time_iot_dashboard",
    caseStudy: {
      tagline: "Donanım Optimizasyonu, Bellek Yönetimi ve Ağ Teşhisi",
      problem: "Yoğun çalışma veya sistem yükü altında VRAM şişmesi, arka plan gecikmeleri ve donanım darboğazlarının otomatik tespit edilememesi.",
      solution: "Windows API ve UAC yetkisiyle entegre çalışan, anlık bellek/disk/ping metriklerini izleyip otopilot müdahalelerde bulunan bir Python sistem motoru geliştirildi.",
      flow: `[Windows Donanım Metrikleri (CPU, RAM, VRAM, Ping)]
       │
       ▼
[AIOps Engine v5.0 (UAC Entegrasyonu)]
       ├──► [Boşta Kalan VRAM ve Çalışma Alanı Temizliği]
       ├──► [Ağ Soketleri & Ping Optimizasyon Rutini]
       └──► [Gerçek Zamanlı HUD Dashboard Ekranı]`,
      techStack: ["Python 3.12", "Windows Win32 API / UAC", "Network & Socket Diagnostics"],
      highlights: [
        "VRAM & Cache Temizleme: Arka planda sızan bellek alanlarını güvenli şekilde boşaltma.",
        "Ağ Paket Optimizasyonu: Kararsız Wi-Fi/Ethernet bağlantılarında paket önceliklendirme."
      ]
    }
  },
  {
    id: "wifi-map",
    name: "RF-Kroki Laboratuvarı",
    title: "Wi-Fi Sinyal Haritalama & RF Ortam Analizi",
    category: ["it", "systems"],
    isPrivate: false,
    language: "Python",
    stars: 0,
    tags: ["Python", "Wi-Fi Sensing", "RF Analysis", "Network Diagnostics"],
    description: "Windows bilgisayar ve modem Wi-Fi ölçümlerinden yararlanarak ortamdaki RF sinyal kalitesini, kanal çakışmalarını ve kapsama haritasını çıkaran ağ aracı.",
    githubUrl: "https://github.com/cekYc/wifi-map",
    caseStudy: null
  },
  {
    id: "whatsapp-transcript",
    name: "SesYazı Android",
    title: "%100 Çevrimdışı Güvenli Sesli Mesaj Transkripsiyonu",
    category: ["it", "systems"],
    isPrivate: false,
    language: "Kotlin",
    stars: 0,
    tags: ["Kotlin", "Android", "Offline STT", "Privacy-First", "Edge AI"],
    description: "WhatsApp sesli mesajlarını sunucuya göndermeden, tamamen cihaz üzerinde çevrimdışı Türkçe metne dönüştüren gizlilik odaklı Android uygulaması.",
    githubUrl: "https://github.com/cekYc/whatsapp-transcript",
    caseStudy: null
  },
  {
    id: "work-follower",
    name: "Vardiya Takip",
    title: "Fabrika & Saha Çalışanları İçin Çevrimdışı Operasyon Takibi",
    category: ["it"],
    isPrivate: false,
    language: "Kotlin",
    stars: 0,
    tags: ["Kotlin", "Android", "Offline-First", "Industrial UX", "SQLite"],
    description: "İnternet erişimi olmayan fabrika ve üretim sahalarında vardiya performansı ve ürün adetlerini hızlıca kaydeden çevrimdışı Android aracı.",
    githubUrl: "https://github.com/cekYc/work-follower",
    caseStudy: null
  },
  {
    id: "ceky-ai",
    name: "Ceky Eyes (Ceky-AI)",
    title: "Sandbox Terminal & Araç Çağıran Otonom Ajan Motoru",
    category: ["backend", "it"],
    isPrivate: true,
    language: "Python",
    tags: ["Python", "Pydantic", "Tool Calling", "Sandboxed CLI", "Completion Verifier"],
    description: "Yerel LLM sunucularıyla çalışan; dosya okuma/yazma, terminal komutu çalıştırma ve hash doğrulamalı `TaskState` döngüsüne sahip otonom ajan (v0.0.2).",
    githubUrl: "https://github.com/cekYc/Ceky-AI",
    caseStudy: null
  }
];

// --- 2. Department Pitches Data ---
const departmentPitches = {
  backend: {
    title: "⚙️ Backend Developer Yetkinlikleri",
    roleName: "Backend & Distributed Systems Engineer",
    tagline: "Yüksek hacimli eşzamanlılık (Go/Rust), transaction güvenliği (Postgres/ACID) ve kurumsal mikroservisler.",
    body: "Go (pgx/v5), NestJS ve Python ile yüksek trafikli, veri tutarlılığı yüksek (ACID) ve hataya dayanıklı mikroservisler geliştiriyorum. PostgreSQL Row-Level Security (RLS) politikaları, Redis Streams ile asenkron olay kuyrukları ve Docker tabanlı izole sandbox mimarilerinde derin uzmanlığa sahibim.",
    highlights: [
      { title: "Veri Tutarlılığı & ACID", desc: "PostgreSQL pgx havuzu ve transaction-safe lead/order dağıtımı." },
      { title: "Gerçek Zamanlı Kuyruklar", desc: "Redis Streams, WebSockets ve Goroutine tabanlı asenkron yapılar." },
      { title: "Güvenlik & İzolasyon", desc: "JWT, OAuth2, Bcrypt, RLS ve Docker izole yürütme ortamları." }
    ]
  },
  fullstack: {
    title: "🌐 Full-Stack Developer Yetkinlikleri",
    roleName: "Full-Stack Engineer (Next.js · Angular · Cloudflare)",
    tagline: "Modern uçtan uca mimariler, reaktif SPA/SSR arayüzleri ve sunucusuz (Serverless) bulut dağıtımı.",
    body: "Next.js (App Router), Angular 17+ (Standalone Components), React ve Tailwind CSS ile piksel hassasiyetinde, modern ve erişilebilir arayüzler üretiyorum. Arka planda Cloudflare Workers (OpenNext), Supabase ve NestJS ile sıfır gecikmeli API entegrasyonu ve Three.js/WebGL ile 3D katmanlar oluşturuyorum.",
    highlights: [
      { title: "Modern SSR & SPA", desc: "Next.js App Router, Angular 17 Standalone, React Vite ekosistemi." },
      { title: "Cloudflare & Edge", desc: "OpenNext ile Cloudflare Workers üzerinde sıfır sunucu maliyetli SaaS." },
      { title: "Gelişmiş Veri & 3D UI", desc: "Three.js, React Three Fiber ve karar destek analitiği panelleri." }
    ]
  },
  systems: {
    title: "🦀 Systems & Low-Level Yetkinlikleri",
    roleName: "Systems & Low-Level Engineer (Rust · Vulkan · C)",
    tagline: "Doğrudan donanım kontrolü, derleyici mimarisi, GPU grafik motorları ve P2P ağ protokolleri.",
    body: "Rust ve C (C11) dillerinde sıfır maliyetli soyutlamalar, özel bellek yöneticileri (custom allocators) ve çok çekirdekli asenkron mimariler (Rayon) ile çalışıyorum. Vulkan API ile sıfırdan Voxel motoru, AST -> HIR -> MIR -> C11 derleyici hatları ve dağıtık P2P canlı yayın mesh protokolleri inşa ettim.",
    highlights: [
      { title: "Grafik & Vulkan API", desc: "Özel GPU bellek havuzları, frustum culling ve voxel greedy meshing." },
      { title: "Derleyici (Compiler) Pipeline", desc: "Tokens, AST, Typed HIR, CFG MIR ve taşınabilir C11 code generator." },
      { title: "Dağıtık P2P & Mesh", desc: "Kendi kendini onaran video ingest ve düşük gecikmeli P2P aktarımı." }
    ]
  },
  it: {
    title: "🖥️ Bilgi İşlem / IT & Altyapı Yetkinlikleri",
    roleName: "IT Infrastructure, DevOps & Field Systems Engineer",
    tagline: "Sistem teşhisi, donanım optimizasyonu, RF/Wi-Fi algılama ve %100 çevrimdışı saha operasyonları.",
    body: "Bilgi işlem altyapısı, ağ optimizasyonu, donanım radarları ve fabrika/saha operasyonları için çözümler üretiyorum. Windows API ve UAC entegrasyonu ile CPU/VRAM/Ping otopilotu (AIOps Radar v5.0), modem RF sinyal haritalama ve uçta (edge) internet olmadan çalışan çevrimdışı Android/SQLite araçları geliştirdim.",
    highlights: [
      { title: "AIOps & Sistem Teşhisi", desc: "Win32 API/UAC ile VRAM temizleyici, ping düşürücü ve donanım radarı." },
      { title: "Saha & Ağ Analizi", desc: "RF/Wi-Fi kapsama alanı analitiği ve Docker servis orkestrasyonu." },
      { title: "Çevrimdışı (Edge) Araçlar", desc: "Sıfır internet bağımlılığıyla çalışan Kotlin STT ve fabrika takip sistemleri." }
    ]
  }
};

// --- 3. State Management ---
let currentRole = "backend";
let currentFilter = "all"; // 'all', 'private', 'public'
let currentSearch = "";

// --- 4. DOM Initialization & Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  renderDepartmentSummary(currentRole);
  renderProjects();
  setupRoleButtons();
  setupFilterPills();
  setupSearchInput();
  setupTerminal();
  setupModalEvents();
  setupPrintCV();
});

// Switch Role Action
function setRole(roleKey) {
  if (!departmentPitches[roleKey]) return;
  currentRole = roleKey;

  // Update UI selector tabs
  document.querySelectorAll(".role-card").forEach(card => {
    card.classList.toggle("active", card.getAttribute("data-role") === roleKey);
  });

  // Update dynamic hero title
  const dynamicRoleEl = document.getElementById("hero-dynamic-role");
  if (dynamicRoleEl) {
    dynamicRoleEl.textContent = departmentPitches[roleKey].roleName;
  }

  // Update Summary Card & Projects
  renderDepartmentSummary(roleKey);
  renderProjects();

  // Log in terminal
  logTerminalLine(`[SYSTEM] Aktif departman görünümü değiştirildi: ${roleKey.toUpperCase()}`, "text-cyan");
}

function setupRoleButtons() {
  document.querySelectorAll(".role-card").forEach(button => {
    button.addEventListener("click", () => {
      const role = button.getAttribute("data-role");
      setRole(role);
    });
  });
}

function setupFilterPills() {
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-filter");
      renderProjects();
    });
  });
}

function setupSearchInput() {
  const searchInput = document.getElementById("project-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }
}

// Render dynamic pitch summary
function renderDepartmentSummary(roleKey) {
  const container = document.getElementById("dept-summary-container");
  if (!container) return;

  const data = departmentPitches[roleKey];
  container.innerHTML = `
    <div class="dept-pitch-header">
      <div class="dept-pitch-title">
        <span>${data.title}</span>
      </div>
      <div class="role-badge">${data.tagline}</div>
    </div>
    <p class="dept-pitch-body">${data.body}</p>
    <div class="dept-highlights">
      ${data.highlights.map(h => `
        <div class="highlight-item">
          <div class="highlight-title">✦ ${h.title}</div>
          <div class="highlight-desc">${h.desc}</div>
        </div>
      `).join("")}
    </div>
  `;
}

// Render projects filtered by role, search and public/private
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  const countDesc = document.getElementById("projects-count-desc");
  if (!grid) return;

  let filtered = projectsData.filter(p => p.category.includes(currentRole));

  // Filter by private / public
  if (currentFilter === "private") {
    filtered = filtered.filter(p => p.isPrivate);
  } else if (currentFilter === "public") {
    filtered = filtered.filter(p => !p.isPrivate);
  }

  // Filter by search text
  if (currentSearch) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(currentSearch) ||
      p.title.toLowerCase().includes(currentSearch) ||
      p.description.toLowerCase().includes(currentSearch) ||
      p.tags.some(t => t.toLowerCase().includes(currentSearch)) ||
      p.language.toLowerCase().includes(currentSearch)
    );
  }

  if (countDesc) {
    countDesc.textContent = `${filtered.length} proje gösteriliyor (${currentRole.toUpperCase()} odaklı)`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">Arama kriterlerine uygun proje bulunamadı.</p>
        <button class="btn btn-outline btn-sm" onclick="resetFilters()">Filtreleri Sıfırla</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="project-card">
      <div class="card-top-row">
        ${p.isPrivate ? 
          `<span class="project-badge-private">🔒 Özel Mimari (Case Study)</span>` : 
          `<span class="project-badge-public">🌐 Açık Kaynak</span>`
        }
        <span class="project-lang-tag">${p.language}</span>
      </div>

      <h3 class="project-title">${p.name}</h3>
      <p class="project-desc">${p.description}</p>

      <div class="project-tech-tags">
        ${p.tags.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join("")}
        ${p.tags.length > 4 ? `<span class="tech-tag">+${p.tags.length - 4}</span>` : ""}
      </div>

      <div class="project-actions">
        ${p.caseStudy ? `
          <button class="btn btn-cyan btn-sm" onclick="openCaseStudyModal('${p.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Mimari İncele (Case Study)
          </button>
        ` : `
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub Deposu
          </a>
        `}
      </div>
    </div>
  `).join("");
}

function resetFilters() {
  currentFilter = "all";
  currentSearch = "";
  const searchInput = document.getElementById("project-search");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".filter-pill").forEach((p, idx) => p.classList.toggle("active", idx === 0));
  renderProjects();
}

// --- 5. Case Study Modal Engine ---
function openCaseStudyModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project || !project.caseStudy) return;

  const modal = document.getElementById("project-modal");
  const body = document.getElementById("modal-content-body");
  if (!modal || !body) return;

  const cs = project.caseStudy;
  body.innerHTML = `
    <div class="modal-header-badge">
      ${project.isPrivate ? 
        `<span class="project-badge-private">🔒 Özel (Private) Mimari Analizi</span>` : 
        `<span class="project-badge-public">🌐 Açık Kaynak</span>`
      }
      <span class="project-lang-tag">• ${project.language}</span>
    </div>

    <h2 class="modal-title">${project.name}</h2>
    <p class="modal-tagline">${cs.tagline}</p>

    <div class="modal-grid-2">
      <div class="modal-info-box">
        <h4>🎯 Problem & Zorluk</h4>
        <p>${cs.problem}</p>
      </div>

      <div class="modal-info-box">
        <h4>💡 Mühendislik Çözümü</h4>
        <p>${cs.solution}</p>
      </div>
    </div>

    <div class="modal-info-box" style="margin-bottom: 24px;">
      <h4>📐 Sistem Mimarisi & Veri Akışı (Architecture Blueprint)</h4>
      <div class="modal-blueprint-flow">${cs.flow}</div>
    </div>

    <div class="modal-grid-2">
      <div class="modal-info-box">
        <h4>🛠️ Teknoloji Yığını (Tech Stack)</h4>
        <ul>
          ${cs.techStack.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>

      <div class="modal-info-box">
        <h4>🏆 Öne Çıkan Mühendislik Kazanımları</h4>
        <ul>
          ${cs.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px;">
      <button class="btn btn-outline btn-sm" onclick="closeModal()">Pencereyi Kapat</button>
      <a href="mailto:cekyy@example.com?subject=Proje%20Hakkinda:%20${encodeURIComponent(project.name)}" class="btn btn-primary btn-sm">Bu Mimariyi Konuşalım</a>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

function setupModalEvents() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// --- 6. Interactive Developer Terminal (CLI) ---
function setupTerminal() {
  const input = document.getElementById("terminal-input");
  if (!input) return;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      input.value = "";
      if (cmd) executeTermCommand(cmd);
    }
  });
}

function executeTermCommand(cmdLine) {
  const output = document.getElementById("terminal-output");
  if (!output) return;

  logTerminalLine(`eray@devbox:~$ ${cmdLine}`, "text-white");
  const parts = cmdLine.toLowerCase().trim().split(/\s+/);
  const mainCmd = parts[0];
  const arg = parts[1];

  switch (mainCmd) {
    case "help":
      logTerminalLine("Kullanılabilir Komutlar:", "text-cyan");
      logTerminalLine("  backend      - Backend Developer görünümüne geç");
      logTerminalLine("  fullstack    - Full-Stack Developer görünümüne geç");
      logTerminalLine("  systems      - Systems / Low-Level görünümüne geç");
      logTerminalLine("  it           - Bilgi İşlem / Altyapı görünümüne geç");
      logTerminalLine("  cat <repo>   - Repo mimarisini terminalde göster (örn: cat elocode)");
      logTerminalLine("  ls / repos   - Tüm 48 depoyu listele");
      logTerminalLine("  stats        - Profil metriklerini göster");
      logTerminalLine("  skills       - Yetenek matrisini listele");
      logTerminalLine("  contact      - İletişim bilgilerini getir");
      logTerminalLine("  clear        - Konsolu temizle");
      break;

    case "backend":
      setRole("backend");
      logTerminalLine("✓ Backend Developer görünümüne geçildi.", "text-emerald");
      break;

    case "fullstack":
      setRole("fullstack");
      logTerminalLine("✓ Full-Stack Developer görünümüne geçildi.", "text-emerald");
      break;

    case "systems":
      setRole("systems");
      logTerminalLine("✓ Systems Developer görünümüne geçildi.", "text-emerald");
      break;

    case "it":
      setRole("it");
      logTerminalLine("✓ Bilgi İşlem & Altyapı görünümüne geçildi.", "text-emerald");
      break;

    case "cat":
      if (!arg) {
        logTerminalLine("Kullanım: cat <repo-adi> (örn: cat elocode, cat crm, cat deadly_sins, cat ceky-lang)", "text-rose");
      } else {
        const found = projectsData.find(p => p.id.includes(arg) || p.name.toLowerCase().includes(arg));
        if (found && found.caseStudy) {
          logTerminalLine(`=== [${found.name}] MIMARI VAKA ANALIZI ===`, "text-cyan");
          logTerminalLine(`Tagline: ${found.caseStudy.tagline}`);
          logTerminalLine(`Problem: ${found.caseStudy.problem}`);
          logTerminalLine(`Çözüm:   ${found.caseStudy.solution}`);
          logTerminalLine(`Teknolojiler: ${found.tags.join(", ")}`);
        } else if (found) {
          logTerminalLine(`[${found.name}] (${found.language}): ${found.description}`);
          logTerminalLine(`GitHub: ${found.githubUrl}`);
        } else {
          logTerminalLine(`Hata: '${arg}' isimli proje bulunamadı.`, "text-rose");
        }
      }
      break;

    case "ls":
    case "repos":
      logTerminalLine("=== TÜM DEPOLAR & MIMARILER (Özet) ===", "text-cyan");
      projectsData.forEach(p => {
        logTerminalLine(`- ${p.name.padEnd(24)} [${p.language.padEnd(12)}] ${p.isPrivate ? '🔒 Private' : '🌐 Public'} : ${p.title}`);
      });
      break;

    case "stats":
      logTerminalLine("=== PROFIL ISTATISTIKLERI ===", "text-cyan");
      logTerminalLine("Toplam Depo: 48 (39 Public, 9 Private)");
      logTerminalLine("Özgün Kod Oranı: %98");
      logTerminalLine("README Dokümantasyon Oranı: %96");
      logTerminalLine("Diller: TypeScript, Rust, Python, Go, Kotlin, C (C11), C++, Assembly");
      break;

    case "skills":
      logTerminalLine("=== TEMEL YETENEKLER ===", "text-cyan");
      logTerminalLine("Sistemler: Rust, Vulkan API, C (C11), AST Compilers, P2P Mesh");
      logTerminalLine("Backend:   Go (pgx), NestJS, Supabase Postgres (RLS), Redis Streams");
      logTerminalLine("Frontend:  Next.js App Router, Angular 17 Standalone, Three.js");
      logTerminalLine("IT/Saha:   AIOps Radar v5, Windows Win32 API, Offline Android, Docker");
      break;

    case "contact":
    case "hire":
      logTerminalLine("=== ILETISIM BILGILERI ===", "text-emerald");
      logTerminalLine("E-Posta: cekyy@example.com");
      logTerminalLine("GitHub:  https://github.com/cekYc");
      logTerminalLine("Durum:   Açık Pozisyonlar: Backend / Systems / Full-Stack / IT (EU & TR)");
      break;

    case "clear":
      output.innerHTML = "";
      return;

    default:
      logTerminalLine(`Komut bulunamadı: '${mainCmd}'. Komut listesi için 'help' yazın.`, "text-rose");
      break;
  }

  output.scrollTop = output.scrollHeight;
}

function logTerminalLine(text, colorClass = "") {
  const output = document.getElementById("terminal-output");
  if (!output) return;
  const line = document.createElement("div");
  line.className = `terminal-line ${colorClass}`;
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

// --- 7. Print CV Engine ---
function setupPrintCV() {
  const btn = document.getElementById("print-cv-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      const origTitle = document.title;
      document.title = `Eray (cekYc) - ${departmentPitches[currentRole].roleName} - CV`;
      window.print();
      document.title = origTitle;
    });
  }
}
