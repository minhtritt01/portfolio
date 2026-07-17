export type Lang = 'en' | 'vi'

export const seo = {
  en: {
    title: 'Phan Minh Tri | Software Engineer',
    description:
      'Software Engineer specialising in Flutter (mobile, web, desktop), React, and Android Native. 3+ years shipping apps on App Store, Google Play, and Microsoft Store.',
  },
  vi: {
    title: 'Phan Minh Trí | Software Engineer',
    description:
      'Software Engineer chuyên sâu Flutter (mobile, web, desktop), React và Android Native. Hơn 3 năm phát hành ứng dụng trên App Store, Google Play và Microsoft Store.',
  },
}

export const translations = {
  en: {
    name: 'Phan Minh Tri',
    greeting: "Hi, I'm",
    greetingRoles: [
      "Software Engineer",
      "Mobile & Web Developer",
      "Flutter & React"
    ],
    pillLabels: [
      "Flutter",
      "React",
      "Android Native"
    ],
    email: 'minhtritt01@gmail.com',
    phone: '+84 834 790 997',
    location: "Ho Chi Minh City, VN",
    availability: "Open to work",
    hero: {
      welcome: "Welcome to my portfolio",
      bio: "3+ years building cross-platform mobile, web & desktop apps. Specialising in Flutter and React — shipped on App Store, Google Play & Microsoft Store. Actively using AI tools to ship faster.",
      viewWork: "View Work",
      hireMe: "Hire Me",
      resume: "View Resume",
    },
    story: {
      "context": "+3 years+ shipping apps across every platform.",
      "reflections": [
        "It ships.",
        "...to three stores?"
      ],
      "hookParagraphs": [
        [
          "One codebase. *Three stores.*"
        ],
        [
          "What drives me goes deeper.",
          "*Building* +software that ships+."
        ]
      ],
      "why": "At Quoc Viet I owned releases end-to-end — Jenkins and Fastlane pipelines publishing Flutter apps to the App Store, Google Play and the Microsoft Store, plus onsite training for the factory teams who actually used them.",
      "seeking": [
        "This feels like just the beginning.",
        "Bigger teams. Harder problems. End-to-end.",
        "Ready for the next chapter."
      ],
      "nav": [
        {
          "icon": "briefcase",
          "label": "My path",
          "href": "#experience"
        },
        {
          "icon": "folder",
          "label": "What I build",
          "href": "#projects"
        },
        {
          "icon": "mail",
          "label": "Let's talk",
          "href": "#contact"
        }
      ],
      "skipButton": "Skip"
    },
    fields: {
      "name": "Name",
      "location": "Location",
      "email": "Email",
      "phone": "Phone",
      "availability": "Availability"
    },
    stats: [
      {
        "value": "3+",
        "label": "Years Experience"
      },
      {
        "value": "10+",
        "label": "Projects Shipped"
      },
      {
        "value": "3",
        "label": "App Stores"
      }
    ],
    experience: {
      title: "Work Experience",
      subtitle: "My career timeline",
      current: "Current",
      jobs: [
      {
        "company": "Galaxy Technology Services",
        "role": "Software Engineer",
        "period": "Apr 2026 – Present",
        "current": true,
        "projects": [
          {
            "name": "SkyJoy",
            "period": "4/2026 – Present · Team 30",
            "description": "A loyalty & banking app — SkyPoint accumulation, redemption across 250+ brands, and an integrated wallet (SkyPay / Galaxy Pay). Partners: VPBank YOYO, HDBank, Vikki, HD Insurance, Furama Resort, bTaskee.",
            "tech": [
              "Flutter",
              "Dart",
              "Bloc",
              "flutter_bloc",
              "go_router",
              "Clean Architecture",
              "get_it",
              "injectable",
              "Adjust SDK",
              "Firebase FCM & Analytics",
              "Jenkins",
              "Fastlane"
            ],
            "bullets": [
              "Built cross-platform loyalty & banking features (iOS & Android).",
              "Integrated multi-partner APIs for point conversion & tier management (Sky+, Gold Plus)."
            ]
          }
        ]
      },
      {
        "company": "Quoc Viet Trading and Engineering Co., Ltd",
        "role": "Software Engineer",
        "period": "Oct 2024 – Apr 2026",
        "current": false,
        "projects": [
          {
            "name": "Syrup Mixing System",
            "period": "5/2025 – 4/2026 · Team 10",
            "description": "Web & cross-platform system for Suntory PepsiCo factories that automates the syrup mixing process — accurate ingredient control, batch tracking, and efficient production operations.",
            "tech": [
              "Flutter",
              "Dart",
              "Bloc",
              "go_router",
              "Clean Architecture",
              "get_it",
              "dio",
              "drift",
              "REST",
              "excel",
              "pdf",
              "printing",
              "zebra/QR Code",
              "rxdart",
              "Jenkins",
              "Fastlane",
              "MSIX"
            ],
            "bullets": []
          },
          {
            "name": "Smart Form Interface",
            "period": "10/2024 – 4/2025 · Team 10",
            "description": "Multi-platform solution streamlining report generation through digitized forms, automated workflows, and operational data visualization.",
            "tech": [
              "Flutter",
              "Dart",
              "Bloc",
              "go_router",
              "Clean Architecture",
              "get_it",
              "dio",
              "drift",
              "REST",
              "excel",
              "rxdart",
              "Jenkins",
              "Fastlane",
              "MSIX"
            ],
            "bullets": [
              "Release management: owned merging, versioning & publishing to App Store, Google Play, Microsoft Store; mentored 1 developer.",
              "CI/CD & DevOps: built and maintained Jenkins / Fastlane / PowerShell pipelines for automated testing & deployment.",
              "Quality & stakeholders: wrote unit tests for stability; ran onsite user training and gathered requirements directly with clients."
            ]
          }
        ]
      },
      {
        "company": "Onsky Health International",
        "role": "Software Engineer",
        "period": "Jan 2023 – Oct 2024",
        "current": false,
        "projects": [
          {
            "name": "Onsky SkyHealth",
            "period": "1/2023 – 10/2024 · Team 9",
            "description": "Healthcare monitoring mobile app for remote patient & child observation, integrating IoT device management and live camera streaming.",
            "tech": [
              "Android Native (Java/Kotlin)",
              "Flutter (Add-to-App)",
              "Retrofit",
              "MQTT",
              "REST",
              "VStarCam camera SDK",
              "Firebase",
              "WebView"
            ],
            "bullets": [
              "Native Android: maintained & optimized the codebase, resolving complex issues for app stability.",
              "Camera integration: integrated specialized third-party SDKs (VStarCam) for robust live streaming and remote control.",
              "Hybrid architecture: embedded Flutter modules into the native Android app."
            ]
          },
          {
            "name": "Onsky SkyCare",
            "period": "1/2023 – 10/2024 · Team 9",
            "description": "Web & mobile apps integrated with IoT medical devices for healthcare monitoring and device management.",
            "tech": [
              "Flutter",
              "Dart",
              "Provider",
              "go_router",
              "HTTP",
              "Chopper",
              "MQTT",
              "WebSocket",
              "Firebase",
              "Push",
              "fl_chart",
              "Fastlane",
              "CI/CD"
            ],
            "bullets": [
              "Feature development: delivered mobile features in Flutter; authored unit tests and built CI/CD pipelines.",
              "Release management: managed end-to-end publishing to Google Play and the App Store."
            ]
          }
        ]
      }
    ],
    },
    projects: {
      title: "Portfolio",
      subtitle: "A selection of my latest projects",
      demo: "Demo",
      code: "Code",
      android: "Android",
      ios: "iOS",
      categories: {
      "Mobile App": "Mobile App",
      "Web App": "Web App",
      "Mobile / Web / Desktop": "Mobile / Web / Desktop"
    },
      descriptions: {
      "SkyJoy": "SkyJoy — Loyalty & Rewards platform for Vietjet Air",
      "Smart Form Interface": "Digitized form & reporting system for PepsiCo factories — automated workflows and real-time data visualization across mobile, web & Windows.",
      "Syrup Mixing": "Cross-platform automation system for PepsiCo syrup production — batch tracking, ingredient control & Zebra scanner integration.",
      "TeamPower": "HR & team management web platform with role-based dashboards, project tracking and API integrations.",
      "Ail Global": "Corporate website with modern design, multi-section layout, and third-party API integrations.",
      "OnSky Health": "Health management mobile app with patient tracking, appointments, and medical records.",
      "QV Car": "Car management and booking mobile application with real-time tracking and service scheduling.",
      "SkyCare": "Healthcare platform connecting patients with caregivers for seamless remote care management.",
      "Spotify Flutter": "Full-featured Spotify clone with authentication, music playback, playlists, and cross-platform support.",
      "Dashboard": "Admin dashboard with product management, sales charts, calendar integration, and e-commerce analytics."
    },
    },
    tech: {
      title: "Skills",
      subtitle: "Technologies I work with",
      dailyWorkflow: "Daily workflow",
      categories: {
      "Mobile": "Mobile",
      "Frontend": "Frontend",
      "Tools & Backend": "Tools & Backend",
      "AI Tools": "AI Tools"
    },
      badges: {
      "Architecture & Logic": "Architecture & Logic",
      "Debugging & Ideas": "Debugging & Ideas",
      "Refactoring": "Refactoring",
      "Workflows": "Workflows"
    },
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk.",
      getInTouch: "Get in touch",
      intro: "I'm always open to discussing new opportunities, interesting projects, or just a friendly chat.",
    },
    popup: {
      "heading": "Still here? Let's connect.",
      "body": "Whether you're an HR recruiter, a future colleague, or just curious about my work — I'd love to hear from you. Here's the fastest way to reach me.",
      "emailCta": "Email Me",
      "linkedinCta": "Connect on LinkedIn",
      "cvCta": "Download CV",
      "whatsappCta": "WhatsApp",
      "zaloCta": "Zalo",
      "close": "Close"
    },
    toc: {
      "experience": "Experience",
      "projects": "Projects",
      "tech": "Skills & Stack",
      "contact": "Contact"
    },
    skipToContent: "Skip to content",
  },
  vi: {
    name: 'Phan Minh Trí',
    greeting: "Xin chào, tôi là",
    greetingRoles: [
      "Software Engineer",
      "Lập trình Mobile & Web",
      "Flutter & React"
    ],
    pillLabels: [
      "Flutter",
      "React",
      "Android Native"
    ],
    email: 'minhtritt01@gmail.com',
    phone: '+84 834 790 997',
    location: "TP. Hồ Chí Minh, Việt Nam",
    availability: "Sẵn sàng nhận việc",
    hero: {
      welcome: "Chào mừng đến với portfolio của tôi",
      bio: "Hơn 3 năm kinh nghiệm xây dựng ứng dụng mobile, web & desktop đa nền tảng. Chuyên sâu Flutter và React — đã phát hành trên App Store, Google Play & Microsoft Store. Chủ động dùng công cụ AI để làm việc nhanh hơn.",
      viewWork: "Xem dự án",
      hireMe: "Hợp tác cùng tôi",
      resume: "Xem CV",
    },
    story: {
      "context": "+Hơn 3 năm+ phát triển ứng dụng trên mọi nền tảng.",
      "reflections": [
        "Nó chạy được.",
        "...trên cả ba kho ứng dụng?"
      ],
      "hookParagraphs": [
        [
          "Một codebase. *Ba kho ứng dụng.*"
        ],
        [
          "Điều thôi thúc tôi còn sâu hơn thế.",
          "*Xây dựng* +phần mềm được phát hành+."
        ]
      ],
      "why": "Tại Quốc Việt, tôi phụ trách toàn bộ quy trình phát hành — pipeline Jenkins và Fastlane đưa ứng dụng Flutter lên App Store, Google Play và Microsoft Store, cùng với đào tạo trực tiếp cho các đội ngũ nhà máy sử dụng chúng.",
      "seeking": [
        "Tôi tin đây mới chỉ là khởi đầu.",
        "Đội ngũ lớn hơn. Bài toán khó hơn. End-to-end.",
        "Sẵn sàng cho chương tiếp theo."
      ],
      "nav": [
        {
          "icon": "briefcase",
          "label": "Hành trình",
          "href": "#experience"
        },
        {
          "icon": "folder",
          "label": "Tôi xây gì",
          "href": "#projects"
        },
        {
          "icon": "mail",
          "label": "Cùng trao đổi",
          "href": "#contact"
        }
      ],
      "skipButton": "Bỏ qua"
    },
    fields: {
      "name": "Họ tên",
      "location": "Địa điểm",
      "email": "Email",
      "phone": "Điện thoại",
      "availability": "Tình trạng"
    },
    stats: [
      {
        "value": "3+",
        "label": "Năm kinh nghiệm"
      },
      {
        "value": "10+",
        "label": "Dự án đã triển khai"
      },
      {
        "value": "3",
        "label": "Kho ứng dụng"
      }
    ],
    experience: {
      title: "Kinh nghiệm làm việc",
      subtitle: "Hành trình sự nghiệp của tôi",
      current: "Hiện tại",
      jobs: [
      {
        "company": "Galaxy Technology Services",
        "role": "Software Engineer",
        "period": "4/2026 – Hiện tại",
        "current": true,
        "projects": [
          {
            "name": "SkyJoy",
            "period": "4/2026 – Hiện tại · Team 30",
            "description": "Ứng dụng loyalty & ngân hàng — tích lũy SkyPoint, đổi điểm trên 250+ thương hiệu, và ví tích hợp (SkyPay / Galaxy Pay). Đối tác: VPBank YOYO, HDBank, Vikki, HD Insurance, Furama Resort, bTaskee.",
            "tech": [
              "Flutter",
              "Dart",
              "Bloc",
              "flutter_bloc",
              "go_router",
              "Clean Architecture",
              "get_it",
              "injectable",
              "Adjust SDK",
              "Firebase FCM & Analytics",
              "Jenkins",
              "Fastlane"
            ],
            "bullets": [
              "Xây dựng tính năng loyalty & ngân hàng đa nền tảng (iOS & Android).",
              "Tích hợp API đa đối tác cho chuyển đổi điểm & quản lý hạng thành viên (Sky+, Gold Plus)."
            ]
          }
        ]
      },
      {
        "company": "Quoc Viet Trading and Engineering Co., Ltd",
        "role": "Software Engineer",
        "period": "10/2024 – 4/2026",
        "current": false,
        "projects": [
          {
            "name": "Syrup Mixing System",
            "period": "5/2025 – 4/2026 · Team 10",
            "description": "Hệ thống web & đa nền tảng cho các nhà máy Suntory PepsiCo, tự động hóa quy trình pha syrup — kiểm soát nguyên liệu chính xác, theo dõi lô sản xuất và vận hành hiệu quả.",
            "tech": [
              "Flutter",
              "Dart",
              "Bloc",
              "go_router",
              "Clean Architecture",
              "get_it",
              "dio",
              "drift",
              "REST",
              "excel",
              "pdf",
              "printing",
              "zebra/QR Code",
              "rxdart",
              "Jenkins",
              "Fastlane",
              "MSIX"
            ],
            "bullets": []
          },
          {
            "name": "Smart Form Interface",
            "period": "10/2024 – 4/2025 · Team 10",
            "description": "Giải pháp đa nền tảng giúp tối ưu quy trình lập báo cáo thông qua biểu mẫu số hóa, quy trình tự động và trực quan hóa dữ liệu vận hành.",
            "tech": [
              "Flutter",
              "Dart",
              "Bloc",
              "go_router",
              "Clean Architecture",
              "get_it",
              "dio",
              "drift",
              "REST",
              "excel",
              "rxdart",
              "Jenkins",
              "Fastlane",
              "MSIX"
            ],
            "bullets": [
              "Quản lý phát hành: phụ trách merge, versioning & publish lên App Store, Google Play, Microsoft Store; hướng dẫn 1 developer.",
              "CI/CD & DevOps: xây dựng và duy trì pipeline Jenkins / Fastlane / PowerShell cho kiểm thử & triển khai tự động.",
              "Chất lượng & khách hàng: viết unit test đảm bảo ổn định; đào tạo người dùng tại chỗ và thu thập yêu cầu trực tiếp từ khách hàng."
            ]
          }
        ]
      },
      {
        "company": "Onsky Health International",
        "role": "Software Engineer",
        "period": "1/2023 – 10/2024",
        "current": false,
        "projects": [
          {
            "name": "Onsky SkyHealth",
            "period": "1/2023 – 10/2024 · Team 9",
            "description": "Ứng dụng mobile theo dõi sức khỏe từ xa cho bệnh nhân & trẻ em, tích hợp quản lý thiết bị IoT và livestream camera.",
            "tech": [
              "Android Native (Java/Kotlin)",
              "Flutter (Add-to-App)",
              "Retrofit",
              "MQTT",
              "REST",
              "VStarCam camera SDK",
              "Firebase",
              "WebView"
            ],
            "bullets": [
              "Android Native: bảo trì & tối ưu codebase, xử lý các vấn đề phức tạp để đảm bảo ổn định ứng dụng.",
              "Tích hợp camera: tích hợp SDK bên thứ ba chuyên biệt (VStarCam) cho livestream và điều khiển từ xa ổn định.",
              "Kiến trúc hybrid: nhúng module Flutter vào ứng dụng Android native."
            ]
          },
          {
            "name": "Onsky SkyCare",
            "period": "1/2023 – 10/2024 · Team 9",
            "description": "Ứng dụng web & mobile tích hợp với thiết bị y tế IoT để theo dõi sức khỏe và quản lý thiết bị.",
            "tech": [
              "Flutter",
              "Dart",
              "Provider",
              "go_router",
              "HTTP",
              "Chopper",
              "MQTT",
              "WebSocket",
              "Firebase",
              "Push",
              "fl_chart",
              "Fastlane",
              "CI/CD"
            ],
            "bullets": [
              "Phát triển tính năng: xây dựng tính năng mobile bằng Flutter; viết unit test và thiết lập pipeline CI/CD.",
              "Quản lý phát hành: phụ trách publish toàn trình lên Google Play và App Store."
            ]
          }
        ]
      }
    ],
    },
    projects: {
      title: "Dự án",
      subtitle: "Một số dự án gần đây của tôi",
      demo: "Demo",
      code: "Code",
      android: "Android",
      ios: "iOS",
      categories: {
      "Mobile App": "Ứng dụng Mobile",
      "Web App": "Ứng dụng Web",
      "Mobile / Web / Desktop": "Mobile / Web / Desktop"
    },
      descriptions: {
      "SkyJoy": "SkyJoy — Nền tảng Loyalty & Rewards cho Vietjet Air",
      "Smart Form Interface": "Hệ thống biểu mẫu & báo cáo số hóa cho các nhà máy PepsiCo — tự động hóa quy trình và trực quan hóa dữ liệu thời gian thực trên mobile, web & Windows.",
      "Syrup Mixing": "Hệ thống tự động hóa đa nền tảng cho sản xuất syrup PepsiCo — theo dõi lô sản xuất, kiểm soát nguyên liệu & tích hợp máy quét Zebra.",
      "TeamPower": "Nền tảng web quản lý nhân sự & đội nhóm với dashboard phân quyền, theo dõi dự án và tích hợp API.",
      "Ail Global": "Website doanh nghiệp với thiết kế hiện đại, bố cục nhiều section, và tích hợp API bên thứ ba.",
      "OnSky Health": "Ứng dụng mobile quản lý sức khỏe với theo dõi bệnh nhân, lịch hẹn và hồ sơ y tế.",
      "QV Car": "Ứng dụng mobile quản lý và đặt xe với theo dõi thời gian thực và lên lịch dịch vụ.",
      "SkyCare": "Nền tảng chăm sóc sức khỏe kết nối bệnh nhân với người chăm sóc, quản lý chăm sóc từ xa liền mạch.",
      "Spotify Flutter": "Bản clone Spotify đầy đủ tính năng với xác thực, phát nhạc, playlist và hỗ trợ đa nền tảng.",
      "Dashboard": "Dashboard quản trị với quản lý sản phẩm, biểu đồ doanh số, tích hợp lịch và phân tích thương mại điện tử."
    },
    },
    tech: {
      title: "Kỹ năng",
      subtitle: "Công nghệ tôi sử dụng",
      dailyWorkflow: "Dùng hàng ngày",
      categories: {
      "Mobile": "Mobile",
      "Frontend": "Frontend",
      "Tools & Backend": "Công cụ & Backend",
      "AI Tools": "Công cụ AI"
    },
      badges: {
      "Architecture & Logic": "Kiến trúc & Logic",
      "Debugging & Ideas": "Debug & Ý tưởng",
      "Refactoring": "Refactor",
      "Workflows": "Quy trình làm việc"
    },
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Có dự án đang ấp ủ? Cùng trao đổi nhé.",
      getInTouch: "Kết nối với tôi",
      intro: "Tôi luôn sẵn sàng trao đổi về cơ hội hợp tác mới, dự án thú vị, hoặc đơn giản là một cuộc trò chuyện thân thiện.",
    },
    popup: {
      "heading": "Vẫn còn ở đây? Kết nối với tôi nhé!",
      "body": "Nếu bạn là nhà tuyển dụng, đồng nghiệp tương lai, hay đơn giản là đang tò mò về công việc của tôi — rất vui được kết nối. Đây là cách nhanh nhất để liên hệ với tôi.",
      "emailCta": "Gửi Email",
      "linkedinCta": "Kết nối LinkedIn",
      "cvCta": "Tải CV",
      "whatsappCta": "WhatsApp",
      "zaloCta": "Zalo",
      "close": "Đóng"
    },
    toc: {
      "experience": "Kinh nghiệm",
      "projects": "Dự án",
      "tech": "Kỹ năng",
      "contact": "Liên hệ"
    },
    skipToContent: "Bỏ qua, tới nội dung",
  },
}
