import { Article, Category, User, NewsTickerItem } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Politik', slug: 'politik', description: 'Berita politik terkini' },
  { id: '2', name: 'Ekonomi', slug: 'ekonomi', description: 'Berita ekonomi dan bisnis' },
  { id: '3', name: 'Olahraga', slug: 'olahraga', description: 'Berita olahraga' },
  { id: '4', name: 'Teknologi', slug: 'teknologi', description: 'Berita teknologi' },
  { id: '5', name: 'Kesehatan', slug: 'kesehatan', description: 'Berita kesehatan' },
  { id: '6', name: 'Internasional', slug: 'internasional', description: 'Berita internasional' },
  { id: '7', name: 'Nasional', slug: 'nasional', description: 'Berita nasional' },
  { id: '8', name: 'Hiburan', slug: 'hiburan', description: 'Berita hiburan' },
  { id: '9', name: 'Pendidikan', slug: 'pendidikan', description: 'Berita pendidikan' },
  { id: '10', name: 'Otomotif', slug: 'otomotif', description: 'Berita otomotif' },
  { id: '11', name: 'Langsa', slug: 'langsa', description: 'Berita lokal Langsa' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'Pemerintah Kota Langsa Luncurkan Program Smart City 2025',
    content: `Pemerintah Kota Langsa resmi meluncurkan program Smart City 2025 yang bertujuan untuk meningkatkan kualitas layanan publik melalui teknologi digital. Program ini mencakup berbagai aspek kehidupan perkotaan mulai dari transportasi, kesehatan, hingga pendidikan.

Walikota Langsa dalam sambutannya mengatakan bahwa program ini merupakan langkah strategis untuk menjadikan Langsa sebagai kota yang lebih modern dan efisien. "Kami berkomitmen untuk memberikan pelayanan terbaik kepada masyarakat melalui pemanfaatan teknologi," ujarnya.

Program Smart City ini akan dilaksanakan dalam tiga tahap. Tahap pertama fokus pada digitalisasi layanan publik, tahap kedua pada smart transportation, dan tahap ketiga pada smart governance. Diharapkan seluruh program dapat terealisasi dengan baik pada tahun 2025.`,
    excerpt: 'Pemerintah Kota Langsa resmi meluncurkan program Smart City 2025 untuk meningkatkan kualitas layanan publik melalui teknologi digital.',
    image: 'https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Langsa',
    author: 'Ahmad Rahman',
    publishDate: '2025-01-15T10:30:00Z',
    views: 1250,
    featured: true,
    popular: true
  },
  {
    id: '2',
    title: 'Teknologi AI Mulai Diterapkan di Sektor Kesehatan Indonesia',
    content: `Penerapan teknologi Artificial Intelligence (AI) di sektor kesehatan Indonesia mulai menunjukkan perkembangan yang signifikan. Berbagai rumah sakit di tanah air kini mengadopsi teknologi AI untuk meningkatkan akurasi diagnosis dan efisiensi pelayanan.

Kementerian Kesehatan mendukung penuh implementasi teknologi ini dengan menyediakan regulasi yang memadai. Direktur Jenderal Pelayanan Kesehatan menyatakan bahwa AI dapat membantu dokter dalam pengambilan keputusan klinis yang lebih akurat.

Beberapa aplikasi AI yang telah diterapkan antara lain sistem diagnosis otomatis untuk radiologi, analisis laboratorium berbasis AI, dan chatbot untuk konsultasi kesehatan awal. Diharapkan teknologi ini dapat meningkatkan kualitas pelayanan kesehatan di Indonesia.`,
    excerpt: 'Teknologi AI mulai diterapkan di berbagai rumah sakit Indonesia untuk meningkatkan akurasi diagnosis dan efisiensi pelayanan kesehatan.',
    image: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Teknologi',
    author: 'Dr. Sarah Putri',
    publishDate: '2025-01-15T08:00:00Z',
    views: 980,
    featured: true,
    popular: false
  },
  {
    id: '3',
    title: 'Tim Nasional Indonesia Lolos ke Final Piala Asia 2025',
    content: `Tim Nasional Indonesia berhasil melangkah ke final Piala Asia 2025 setelah mengalahkan Korea Selatan dengan skor 2-1 dalam pertandingan semifinal yang berlangsung sangat sengit. Gol kemenangan dicetak pada menit ke-89 melalui tendangan bebas yang memukau.

Pelatih tim nasional menyatakan bangga dengan pencapaian para pemain. "Ini adalah hasil kerja keras seluruh tim. Kami akan memberikan yang terbaik di final nanti," katanya dalam konferensi pers pasca pertandingan.

Pertandingan final akan digelar tiga hari lagi melawan Jepang yang berhasil mengalahkan Arab Saudi di semifinal lainnya. Dukungan suporter Indonesia diharapkan dapat memberikan semangat tambahan bagi tim Garuda.`,
    excerpt: 'Tim Nasional Indonesia lolos ke final Piala Asia 2025 setelah mengalahkan Korea Selatan 2-1 dalam pertandingan semifinal yang dramatis.',
    image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Olahraga',
    author: 'Budi Santoso',
    publishDate: '2025-01-14T20:00:00Z',
    views: 2100,
    featured: true,
    popular: true
  },
  {
    id: '4',
    title: 'Ekonomi Indonesia Tumbuh 5,8% di Kuartal Terakhir 2024',
    content: `Badan Pusat Statistik (BPS) merilis data pertumbuhan ekonomi Indonesia pada kuartal keempat 2024 yang mencapai 5,8%, melampaui ekspektasi sebelumnya sebesar 5,5%. Pertumbuhan ini didorong oleh sektor konsumsi rumah tangga dan investasi yang terus menguat.

Kepala BPS menjelaskan bahwa pertumbuhan ekonomi ini menunjukkan resiliensi perekonomian Indonesia di tengah tantangan global. "Angka ini membuktikan bahwa kebijakan pemerintah dalam mendorong pertumbuhan ekonomi telah berhasil," ujarnya.

Sektor yang paling berkontribusi adalah industri pengolahan, perdagangan, dan jasa keuangan. Pemerintah optimis pertumbuhan ekonomi tahun 2025 dapat mencapai target 5,5% hingga 6,0% dengan dukungan berbagai program pemulihan ekonomi.`,
    excerpt: 'Ekonomi Indonesia tumbuh 5,8% di kuartal keempat 2024, melampaui ekspektasi dan menunjukkan resiliensi di tengah tantangan global.',
    image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Ekonomi',
    author: 'Maya Sari',
    publishDate: '2025-01-14T14:30:00Z',
    views: 850,
    featured: false,
    popular: true
  },
  {
    id: '5',
    title: 'Festival Budaya Aceh 2025 Sukses Digelar di Langsa',
    content: `Festival Budaya Aceh 2025 yang digelar di Kota Langsa sukses menarik ribuan pengunjung dari berbagai daerah. Acara yang berlangsung selama tiga hari ini menampilkan berbagai kesenian tradisional Aceh yang memukau.

Berbagai pertunjukan ditampilkan mulai dari tari Saman, musik tradisional, hingga pameran kerajinan khas Aceh. Gubernur Aceh yang hadir dalam pembukaan festival menyatakan apresiasi terhadap penyelenggaraan acara ini.

"Festival ini menjadi wadah yang tepat untuk melestarikan dan memperkenalkan budaya Aceh kepada generasi muda," kata Gubernur. Acara ditutup dengan pertunjukan spektakuler tari kolosal yang melibatkan ratusan penari dari seluruh Aceh.`,
    excerpt: 'Festival Budaya Aceh 2025 di Langsa sukses menarik ribuan pengunjung dengan berbagai pertunjukan kesenian tradisional yang memukau.',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Langsa',
    author: 'Siti Aminah',
    publishDate: '2025-01-14T09:15:00Z',
    views: 720,
    featured: false,
    popular: false
  },
  {
    id: '6',
    title: 'Breakthrough Pengobatan Kanker dengan Terapi Gen Terbaru',
    content: `Para peneliti di Indonesia berhasil mengembangkan terapi gen terbaru untuk pengobatan kanker yang menunjukkan hasil menggembirakan dalam uji klinis tahap awal. Terapi ini menggunakan teknologi CRISPR yang telah dimodifikasi khusus untuk kondisi pasien Indonesia.

Tim peneliti dari Universitas Indonesia bekerja sama dengan beberapa rumah sakit rujukan untuk mengembangkan terapi ini. Hasil awal menunjukkan tingkat keberhasilan 85% dalam menghambat pertumbuhan sel kanker pada 20 pasien yang mengikuti uji klinis.

"Ini adalah terobosan penting dalam dunia kedokteran Indonesia. Kami berharap terapi ini dapat segera dikomersialkan untuk membantu lebih banyak pasien," kata ketua tim peneliti. Uji klinis tahap lanjutan akan segera dimulai dengan melibatkan lebih banyak pasien.`,
    excerpt: 'Peneliti Indonesia berhasil kembangkan terapi gen terbaru untuk kanker dengan tingkat keberhasilan 85% dalam uji klinis tahap awal.',
    image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kesehatan',
    author: 'Dr. Andi Wijaya',
    publishDate: '2025-01-13T16:45:00Z',
    views: 1100,
    featured: false,
    popular: true
  }
];

export const newsTickerItems: NewsTickerItem[] = [
  { id: '1', text: 'BREAKING: Tim Nasional Indonesia lolos ke final Piala Asia 2025' },
  { id: '2', text: 'Ekonomi Indonesia tumbuh 5,8% di kuartal terakhir 2024' },
  { id: '3', text: 'Program Smart City Langsa 2025 resmi diluncurkan' },
  { id: '4', text: 'Teknologi AI mulai diterapkan di rumah sakit Indonesia' },
  { id: '5', text: 'Festival Budaya Aceh 2025 sukses digelar di Langsa' }
];

export const users: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@langsapost.com',
    role: 'admin',
    password: 'admin123' // In real app, this would be hashed
  },
  {
    id: '2',
    username: 'editor',
    email: 'editor@langsapost.com',
    role: 'editor',
    password: 'editor123' // In real app, this would be hashed
  }
];