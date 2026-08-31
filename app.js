/**
 * Eray (cekYc) - Developer Hub & Portfolio Engine
 * Multi-Department Project Showcase & Architecture Explorer (Continuous Stream Flow)
 */

// --- 1. Rich Projects Data Model ---
// IMPORTANT: All private projects have NO GitHub URLs to protect privacy and avoid 404 links.
const projectsData = [
  // --- 1. BACKEND & DISTRIBUTED SYSTEMS ---
  {
    id: "elocode",
    name: "EloCode",
    title: "Privacy-First Competitive Code Review & Arena",
    category: ["backend", "systems"],
    isPrivate: true,
    language: "Go / Rust",
    tags: ["Go 1.22", "Rust AST", "PostgreSQL", "Redis Streams", "Docker Sandbox", "pgx/v5"],
    description: "Kurumsal geliştiriciler için kod tabanını sızdırmadan gizlilik korumalı (Zero-Leak) rekabetçi kod inceleme, hata ayıklama ve mühendis eşleştirme platformu.",
    githubUrl: null,
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
    githubUrl: null,
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
    githubUrl: null,
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
    githubUrl: null,
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
    tags: ["Go", "Block Parser", "AST Generator", "High Performance"],
    description: "Özel doküman formatlarını blok bazında tarayıp yapılandırılmış JSON ve AST formatına dönüştüren yüksek hızlı Go ayrıştırıcı kütüphanesi.",
    githubUrl: "https://github.com/cekYc/ceky-parser",
    caseStudy: null
  },

  // --- 2. FULL-STACK DEVELOPER ---
  {
    id: "valorant-premier",
    name: "Premier Lab",
    title: "Espor Karar Verdiren Zayıflık Teşhis & Scouting Motoru",
    category: ["fullstack"],
    isPrivate: true,
    language: "TypeScript",
    tags: ["Next.js", "Weakness Diagnostic Engine", "Scouting", "VOD Tagging", "Data Analytics"],
    description: "Basit istatistikler yerine takıma 'bu hafta ne antrenmanı yapmalıyız?' kararını veren ~15 kurallı teşhis motoruna ve VOD etiketleme sistemine sahip analiz platformu.",
    githubUrl: null,
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
    name: "Ceky Engineering Portfolio",
    title: "Next.js & React Three Fiber Mühendislik Portfolyosu",
    category: ["fullstack"],
    isPrivate: true,
    language: "TypeScript",
    tags: ["Next.js", "React Three Fiber", "Three.js", "GSAP ScrollTrigger", "Vitest"],
    description: "DOM içeriği ile WebGL katmanını hibrit birleştiren, GSAP ve R3F destekli sinematik geliştirici portfolyosu.",
    githubUrl: null,
    caseStudy: {
      tagline: "WebGL / Three.js ve DOM Hibrit Görselleştirme Mimarisi",
      problem: "Standart 3D web siteleri aşırı GPU ve bellek tüketerek düşük donanımlı cihazlarda çökmeye yol açıyordu.",
      solution: "DOM içeriğini ana taşıyıcı tutan, tek bir kalıcı WebGL canvas katmanı ile procedural 3D arka plan sağlayan ve Vitest ile test edilen hafif Next.js mimarisi.",
      flow: `[DOM İçerik Katmanı (SEO & Erişilebilirlik)]
       │ (Senkron Scroll Eventleri)
       ▼
[GSAP ScrollTrigger] ──► [React Three Fiber (R3F) Canvas]
       │
[Tekil Persistent WebGL Shader Pipeline]`,
      techStack: ["Next.js 15", "React Three Fiber", "Three.js", "GSAP", "Vitest"],
      highlights: [
        "Düşük Donanım Uyumu: WebGL desteği olmayan tarayıcılarda sorunsuz statik çalışma.",
        "Sıfır Bellek Sızıntısı: Komponent unmount anında GPU dokularının otomatik temizliği."
      ]
    }
  },
  {
    id: "appointment-booking",
    name: "RandevuGO Platformu",
    title: "Harita Destekli Çevrimiçi Randevu & Rezervasyon SaaS",
    category: ["fullstack", "backend"],
    isPrivate: false,
    language: "TypeScript",
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
    tags: ["TypeScript", "GitHub API", "Data Visualization", "Profile Radar"],
    description: "Herhangi bir GitHub profilinin açık depolarını tarayarak geliştiricinin programlama dili DNA'sını ve aktivite eğrisini görselleştiren araç.",
    githubUrl: "https://github.com/cekYc/repo-monitor-2",
    caseStudy: null
  },

  // --- 3. SYSTEMS DEVELOPER ---
  {
    id: "deadly-sins-engine",
    name: "Project M // Voxel Engine",
    title: "Vulkan Tabanlı Özel Voxel & Simülasyon Oyun Motoru",
    category: ["systems"],
    isPrivate: true,
    language: "Rust",
    tags: ["Rust", "Vulkan API", "Rayon Async Meshing", "GPU Memory Management", "Voxel Engine"],
    description: "Rust ve Vulkan API kullanılarak sıfırdan geliştirilen; özel bellek yöneticileri, termodinamik/otomasyon simülasyonu ve asenkron chunk örme yeteneğine sahip voxel motoru.",
    githubUrl: null,
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
    githubUrl: null,
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

  // --- 4. BİLGİ İŞLEM / IT & ALTYAPI ---
  {
    id: "aiops-radar",
    name: "AIOps System Radar // v5.0",
    title: "Akıllı Sistem Radarı, Donanım Optimizasyonu & UAC Otopilot",
    category: ["it", "systems"],
    isPrivate: false,
    language: "Python",
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
    githubUrl: null,
    caseStudy: {
      tagline: "Yerel LLM Modelleri İçin Güvenli Sandbox Ajan Yürütme Mimarisi",
      problem: "LLM ajanlarının sisteme kontrolsüz komut vermesi veya çalışma alanı dışına çıkması güvenlik riski oluşturuyordu.",
      solution: "Pydantic ile tip denetimli standart `ToolResult` sözleşmesi, hash doğrulamalı dosya yazma kontrolü ve çalışma alanı sınır kısıtı getirildi.",
      flow: `[Kullanıcı Hedefi / TaskState]
       │
       ▼
[Ajan Döngüsü (Maksimum 16 Adım)]
       ├──► [Pydantic Şema Validasyonu (Hatalı Tipleri Reddetme)]
       ├──► [Sandbox Terminal Komut Yürütücü]
       └──► [Hash Doğrulamalı Completion Verifier]`,
      techStack: ["Python 3.12", "Pydantic", "Local LLM Tool Protocol", "TaskState Engine"],
      highlights: [
        "Sıkı Hata Sınıfları: INVALID_ARGUMENT, TIMEOUT, PROCESS_FAILED.",
        "Hash Doğrulama: Yazılan kodun gerçekten çalıştığını kanıtlayan verification katmanı."
      ]
    }
  }
];

// --- 2. Initialize Page & Render All Department Grids Simultaneously ---
document.addEventListener("DOMContentLoaded", () => {
  renderDepartmentProjects("backend", "backend-projects-grid");
  renderDepartmentProjects("fullstack", "fullstack-projects-grid");
  renderDepartmentProjects("systems", "systems-projects-grid");
  renderDepartmentProjects("it", "it-projects-grid");

  setupModalEvents();
  setupPrintCV();
});

// Render helper for each individual department
function renderDepartmentProjects(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const projects = projectsData.filter(p => p.category.includes(category));

  container.innerHTML = projects.map(p => `
    <div class="project-card">
      <div class="card-top-row">
        ${p.isPrivate ? 
          `<span class="project-badge-private">🔒 Özel Mimari (Case Study)</span>` : 
          `<span class="project-badge-public">🌐 Açık Kaynak</span>`
        }
        <span class="project-lang-tag">${p.language}</span>
      </div>

      <h4 class="project-title">${p.name}</h4>
      <p class="project-desc">${p.description}</p>

      <div class="project-tech-tags">
        ${p.tags.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join("")}
        ${p.tags.length > 4 ? `<span class="tech-tag">+${p.tags.length - 4}</span>` : ""}
      </div>

      <div class="project-actions">
        ${p.caseStudy ? `
          <button class="btn btn-cyan btn-sm" onclick="openCaseStudyModal('${p.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            <span>Mimari Şemayı & Vaka Analizini Aç</span>
          </button>
        ` : `
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub Kodunu İncele</span>
          </a>
        `}
      </div>
    </div>
  `).join("");
}

// --- 3. Case Study Modal Engine ---
function openCaseStudyModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project || !project.caseStudy) return;

  const modal = document.getElementById("project-modal");
  const body = document.getElementById("modal-content-body");
  if (!modal || !body) return;

  const cs = project.caseStudy;
  body.innerHTML = `
    <div class="modal-header-badge">
      <span class="project-badge-private">🔒 Özel Mimari / Ticari Kod Tabanı</span>
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

// --- 4. Print CV Engine ---
function setupPrintCV() {
  const btn = document.getElementById("print-cv-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      const origTitle = document.title;
      document.title = "Eray (cekYc) - Multi-Department Engineering CV";
      window.print();
      document.title = origTitle;
    });
  }
}
