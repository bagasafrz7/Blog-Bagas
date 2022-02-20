/* eslint-disable prettier/prettier */
// eslint-disable-next-line nuxt/no-cjs-in-config
const axios = require('axios');

const ampify = require('./plugins/ampify');

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bagas Afrizal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Halo, Aku Bagas!'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Barlow&display=swap'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/tsparticles/1.18.11/tsparticles.min.js'
      },
      {
        src: "https://smtpjs.com/v3/smtp.js"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css'],

  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/particles.js',
    '~/plugins/disqus',
    { src: "@/plugins/aos", mode: "client" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/color-mode'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['vue-scrollto/nuxt'],
    ['@nuxtjs/color-mode'],
    ['@nuxtjs/toast'],
    [
      'bootstrap-vue/nuxt'
    ],
    ['@nuxtjs/markdownit', {
      markdownit: {
        runtime: true // Support `$md()`
      }
    }],
    ['vue-social-sharing/nuxt'],
    ['vue-sweetalert2/nuxt'],
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'id'],
        defaultLocale: 'en',
        vueI18n: {
          // fallbackLocale: 'en',
          fallbackLocale: 'en',
          messages: {
            en: {
              link_about: 'About Me',
              link_blog: 'Blog',
              link_project: 'Portfolio',
              greeting: 'Hello world!',
              label_hi: 'Hi!👋',
              label_im: "I'm",
              label_title_home: 'Tech Enthusiasts, Frontend Engineers and Indonesian Youth',
              label_about1: 'An Indonesian youth who likes and is very interested in the world of technology. Currently working as a Frontend Engineer in a private company in Alam Sutera, Tangerang City. Not only in terms of the frontend, I am also studying another part, namely the backend, so that in the next few years I will be able to become a Full Stack Engineer.',
              label_about2: 'I like exploring and learning things about technology, not only in terms of coding, but everything related to Technology. Besides that, I also like adventure, whether climbing mountains and exploring cities with friends or even alone. And there is one more thing that I really like, that is WRITING. I really like a piece of writing, whether in the form of a book or a poem.',
              label_about3: `Many people who say "Can't" are based on what they see today. And if everyone made decisions based on what they saw today, there would be no such thing as INNOVATION. In fact, there's nothing that can't be done, it's just that you don't know how to do it and haven't tried it.`,
              label_about4: `In the past, when an online store application was first broadcast in Indonesia, a lot of people were skeptical, shopping at the mall, not on cellphones. Then when there used to be an online transportation application formed, many people doubted it, just ordering an ojek had to use the application. But now, almost every activity we do is not far from the application, to travel, we just open our cellphone and the transportation arrives. For shopping, you don't need reports to leave the house, just open the application then buy and the day after tomorrow the goods will arrive at home. So there is no such thing as can't, you can but it takes time and courage to try it. If it fails, try again. Failed again, try again. Fail again, try again by learning from previous failures. Remember, all of this takes time and a process. During the process, you can learn a lot until that goal is achieved.`,
              label_about5: 'If you want cooperation in any form, from software development projects, content writing, or anything else. Please contact me via the inquiry form below or you can contact me via linkedin.',
              label_about_main: `Loser says "It Can't Be Done", Winner says "It's Hard, But We Can Try"`,
              label_social_media: 'My Social Media',
              label_contactme: 'Contact Me',
              label_name: 'Name',
              label_email: 'Email',
              label_message: 'Your Message',
              btn_kirim: 'Say Hello',
              btn_readmore: 'Read More',
              label_viewmore: 'View More...',
              deskripsi_jualrumah: 'Jualrumahpluit.com is a website application to find property consultants, properties around Pluit Muara Karang and PIK. This application is built using HTML, CSS, and PHP, as well as the React JS library to display Blogs from the WordPress API.',
              deskripsi_cikini: 'RS Cikini Drive THRU is a website application for ordering services such as Antigen Swab, Antibody Swab, and PCR Swab online for PGI Cikini Hospital. This application is made using Vue Js as frontend and Laravel as Backend.',
              deskripsi_marvel: 'Marvel Food is a company profile website. It features a map to show multiple locations, integration with wall.io, a subscription form, and information about Marvel Food. This application is built using the Vue Framework, namely with Nuxt JS.',
              deskripsi_pos: 'SPACE Apps is a web-based point of sale application that is used to support food and beverage sales, and is equipped with admin / cashier dashboard features, to payment transactions. This application is built with Vue JS and Express JS.',
              deskripsi_badag: 'BADAG Apps is a website-based job portal application to find jobs for job seekers and find workers. It features real-time chat and a standard profile. This application was built with a team using Vue JS and Express JS.',
              deskripsi_nepays: 'Nepays Apps is a website-based payment gateway application that is used to transfer money and top up balances digitally. The top up feature is integrated with Midtrans. This application was built with the team using Vue JS and Express JS.',
              deskripsi_playchat: 'The Play Chat application is a web-based chat application that is used to interact online. Has a feature to find friends, current location and can send messages in real-time. This application is built using Vue JS and Express JS.',
              deskripsi_covid: 'Covid Track is an application that contains information about the number of sufferers of Covid-19 cases around the world. Always update data for all countries every day. This application is built using React JS.',
              title_suscces: 'Yeay, Data Sent Successfully',
              description_succes: 'The data you send will be replied to soon, Thank you!',
              label_close: 'Close',
              link_home: 'Home',
            },
            id: {
              link_about: 'Tentang Saya',
              link_blog: 'Tulisan Saya',
              link_project: 'Portofolio',
              greeting: 'Halo Dunia!',
              label_hi: 'Halo!👋',
              label_im: "Saya",
              label_title_home: 'Penggemar Teknologi, Frontend Engineer, dan Pemuda Indonesia',
              label_about1: 'Seorang Pemuda Indonesia yang gemar dan sangat tertarik dengan Dunia Teknologi. Saat ini bekerja sebagai Frontend Engineer di salah satu perusahaan swasta di Alam Sutera, Kota Tangerang. Tidak hanya dalam hal frontend saja, saya juga sedang mendalami satu bagian lainnya, yaitu backend, agar beberapa tahun mendatang mampu menjadi Full Stack Engineer.',
              label_about2: 'Saya suka menjelajahi dan mempelajari hal-hal seputar teknologi, bukan hanya dalam hal coding saja, tapi setiap hal yang berhubungan dengan Teknologi. Selain itu, saya juga senang berpetualang, entah naik gunung dan menjelajahi kota-kota dengan kawan atau bahkan sendiri. Dan ada satu hal lagi yang sangat saya sukai, yaitu TULISAN. Saya amat menyukai sebuah karya tulis, entah berbentuk buku atau puisi.',
              label_about3: 'Banyak orang yang bilang “Tidak Bisa” itu bermodalkan apa yang dia lihat pada hari ini. Dan jika semua orang mengambil keputusan berdasarkan apa yang di lihat hari ini, tidak akan ada yang namanya INOVASI. Padahal sebenarnya tidak ada yang tidak bisa, hanya saja belum tau caranya dan belum dicoba.',
              label_about4: 'Dulu ketika ada sebuah aplikasi toko online pertama kali mengudara di Indonesia, banyak sekali orang skeptis, belanja ya di Mall bukan di handphone. Lalu ketika dulu ada sebuah aplikasi transportasi online terbentuk, banyak orang yang meragukannya, mesen ojek aja harus pakai aplikasi. Tapi sekarang, hampir setiap aktivitas kita engga jauh dari yang namanya aplikasi tersebut, untuk berpergian tinggal buka handphone lalu transportasinya datang. Untuk belanja tidak perlu report-report keluar rumah, tinggal buka aplikasinya lalu beli dan lusa barangnya sudah sampai dirumah. Jadi tidak ada yang namanya tidak bisa, Bisa tapi membutuhkan waktu dan berani untuk mencobanya. Jika gagal, coba lagi. Gagal lagi, coba lagi. Gagal lagi, coba lagi dengan belajar dari kegagalan yang sebelumnya. Ingat, semua itu butuh waktu dan proses. Selama proses tersebutlah yang membuat kamu bisa banyak belajar hingga tujuan itu tercapai.',
              label_about5: 'Jika kamu ingin kerjasama dalam bentuk apapun, dari proyek pembuatan perangkat lunak, penulisan konten, atau hal yang lainnya. Silahkan hubungi saya melalui form inquiry dibawah ini atau bisa menguhubungi saya melalui linkedin.',
              label_about_main: 'Pecundang mengatakan "Ini Tidak Bisa Dilakukan", Pemenang mengatakan "Sulit, Tapi Kita Bisa Mencoba"',
              label_social_media: 'Temukan Saya di',
              label_contactme: 'Hubungi Saya',
              label_name: 'Nama',
              label_email: 'Email',
              label_message: 'Pesan Yang Ingin Kamu Sampaikan',
              btn_kirim: 'Kirim',
              btn_readmore: 'Selengkapnya',
              label_viewmore: 'Lihat Selengkapnya...',
              deskripsi_jualrumah: 'Jualrumahpluit.com adalah aplikasi website untuk mencari konsultan properti, properti di sekitar Pluit Muara Karang dan PIK. Aplikasi ini dibangun menggunakan HTML, CSS, dan PHP, serta library React JS untuk menampilkan Blog dari API WordPress.',
              deskripsi_cikini: 'RS Cikini Drive THRU adalah aplikasi website untuk layanan pemesanan seperti Antigen Swab, Antibody Swab, dan PCR Swab secara online untuk RS PGI Cikini. Aplikasi ini dibuat dengan menggunakan Vue Js sebagai frontend dan Laravel sebagai Backend.',
              deskripsi_marvel: 'Marvel Food adalah situs web profil perusahaan. Ini menampilkan peta untuk menunjukkan beberapa lokasi, integrasi dengan wall.io, formulir berlangganan, dan informasi tentang Marvel Food. Aplikasi ini dibangun menggunakan Vue Framework yaitu dengan Nuxt JS.',
              deskripsi_pos: 'SPACE Apps merupakan aplikasi point of sale berbasis web yang digunakan untuk mendukung penjualan makanan dan minuman, serta dilengkapi dengan fitur dashboard admin/kasir, hingga transaksi pembayaran. Aplikasi ini dibangun dengan Vue JS dan Express JS.',
              deskripsi_badag: 'BADAG Apps adalah aplikasi portal pekerjaan berbasis website untuk mencari pekerjaan bagi pencari kerja dan mencari pekerja. Ini fitur obrolan waktu nyata dan profil standar. Aplikasi ini dibangun dengan tim menggunakan Vue JS dan Express JS.',
              deskripsi_nepays: 'Nepays Apps merupakan aplikasi payment gateway berbasis website yang digunakan untuk transfer uang dan top up saldo secara digital. Fitur top up terintegrasi dengan Midtrans. Aplikasi ini dibangun dengan tim menggunakan Vue JS dan Express JS.',
              deskripsi_playchat: 'Aplikasi Play Chat merupakan aplikasi chatting berbasis web yang digunakan untuk berinteraksi secara online. Memiliki fitur untuk mencari teman, lokasi saat ini dan dapat mengirim pesan secara real-time. Aplikasi ini dibangun menggunakan Vue JS dan Express JS.',
              deskripsi_covid: 'Covid Track adalah aplikasi yang berisi informasi jumlah penderita kasus Covid-19 di seluruh dunia. Selalu perbarui data untuk semua negara setiap hari dengan integrasi dengan API Public. Aplikasi ini dibangun menggunakan React JS.',
              title_suscces: 'Yeay, Data Berhasil Dikirim',
              description_succes: ' Data yang kamu kirim akan segera dibalas, Terima Kasih!',
              label_close: 'Tutup',
              link_home: 'Beranda'
            }
          }
        }
      }
    ],
    // ['@nuxtjs/svg', '@nuxtjs/color-mode'],
    ['nuxt-fontawesome', {
      component: 'fa', // customize component name
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faLightbulb', 'faVirus', 'faNetworkWired', 'faMoneyCheckAlt', 'faStore', 'faBars', 'faBusinessTime']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub', 'faInstagram', 'faTwitter', 'faLinkedin', 'faVuejs', 'faReact', 'faHtml5', 'faCss3Alt', 'faWordpressSimple', 'faPhp', 'faBootstrap', 'faJs', 'faNodeJs', 'faFacebook', 'faLine', 'faTelegramPlane', 'faWhatsapp']
          },
          {set: '@fortawesome/free-regular-svg-icons',
          icons: ['faBuilding', 'faHospital', 'faComments', 'faSun', 'faMoon']
          },
      ]
   }],
    [
      '@nuxtjs/moment'
    ],
    ['@nuxtjs/axios'],
    // https://go.nuxtjs.dev/axios
    [
      'storyblok-nuxt',
      {
        accessToken:
          process.env.NODE_ENV === 'production'
            ? 'RHIAgV9lKDsiWKVx9EmyGQtt'
            : 'oUtoAXIMfGGV5Ijt6ZNGQAtt',
        cacheProvider: 'memory'
      }
    ]
  ],

  // fontawesome: {
  //   component: 'Fa',
  //   icons: {
  //     solid:true,
  //     brands: true
  //   }
  // },

  bootstrapVue: {
    icons: true
  },

  generate: {
    routes() {
      return axios
        .get(
          'https://api.storyblok.com/v1/cdn/stories?version=published&token=RHIAgV9lKDsiWKVx9EmyGQtt&starts_with=blog&cv=' +
          // eslint-disable-next-line prettier/prettier
          Math.floor(Date.now() / 1e3)
        )
        .then((res) => {
          const blogPost = res.data.stories.map((bp) => bp.full_slug)
          return ['/', 'blog', ...blogPost]
        })
    }
  },

  hooks: {
    'generate:page': (page) => {
      if (/^\/amp/gi.test(page.route)) {
        console.log('processing amp file: ', page.route);
        page.html = ampify(page.html);
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      compact: true,
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", {
        "loose": true
      }]
      ]
    },
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    }
  },

  extend(config, ctx) { }
}
