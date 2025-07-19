// افترض أن البيانات تأتي كمصفوفة تسمى posts
const posts = [
  // بيانات أساسية
  {
    country: "INDIA",
    date: "July 2025",
    description: "Researchers across the globe...",
    id: 1,
    image: "https://example.com/image1.png",
    short_description: "Researchers across the globe...",
    title: "Exploring Venom Diversity with ToxiQR",
  },
  {
    country: "USA",
    date: "August 2025",
    description: "Another research...",
    id: 2,
    image: "https://example.com/image2.png",
    short_description: "Another research...",
    title: "New Discoveries",
  },
  {
    country: "UK",
    date: "July 2025", // تاريخ مكرر
    description: "UK research...",
    id: 3,
    image: "https://example.com/image3.png",
    short_description: "UK research...",
    title: "UK Findings",
  },

  // حالات خاصة
  {
    country: "Australia",
    date: "December 2024", // سنة مختلفة
    id: 4,
    image: "https://example.com/image4.png",
    title: "Australian Research",
  },
  {
    country: "Japan",
    date: "January 2026", // شهر مختلف
    id: 5,
    title: "Japanese Study",
  },
  {
    country: "Brazil",
    date: "March 2025",
    id: 6,
    description: "Brazilian data...",
  },
  {
    country: "Canada",
    date: "August 2025", // مكرر مع id 2
    id: 7,
    title: "Canadian Analysis",
  },
  {
    country: "Germany",
    date: "Invalid Date", // تنسيق غير صحيح
    id: 8,
  },
  {
    country: "France",
    date: "2025 May", // تنسيق معكوس
    id: 9,
  },
  {
    country: "Italy",
    date: "", // قيمة فارغة
    id: 10,
  },
  {
    country: "Spain",
    // بدون حقل date تماماً
    id: 11,
    title: "Spanish Report",
  },
  {
    country: "South Africa",
    date: "September 2025",
    id: 12,
    image: "https://example.com/image12.png",
  },
  {
    country: "China",
    date: "July 2025", // مكرر للمرة الثالثة
    id: 13,
    description: "Chinese venom research",
  },
  {
    country: "Russia",
    date: "October 2025 October", // تنسيق غير عادي
    id: 14,
  },
  {
    country: "Mexico",
    date: "June 2025 June", // تنسيق غير عادي
    id: 15,
  },
  {
    country: "Egypt",
    date: "2025", // سنة فقط
    id: 16,
  },
  {
    country: "Kenya",
    date: "July", // شهر فقط
    id: 17,
  },
  {
    country: "Thailand",
    date: "2025-07", // تنسيق مختلف
    id: 18,
  },
  {
    country: "Sweden",
    date: "15 July 2025", // تنسيق به يوم
    id: 19,
  },
  {
    country: "Norway",
    date: "July 2025 ", // مسافة زائدة
    id: 20,
  },
];
// دالة لاستخراج التواريخ الفريدة
export function getUniqueDatesWithCount(data) {
  const dateMap = new Map();
  const validMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  data.forEach((post) => {
    if (!post?.date?.trim()) return;

    try {
      const cleanedDate = post.date.trim().replace(/\s+/g, " ");
      const parts = cleanedDate.split(" ");

      let month, year;

      if (parts.length === 2) {
        month = parts[0];
        year = parts[1];
      } else if (parts.length === 2 && !isNaN(parts[0])) {
        month = parts[1];
        year = parts[0];
      } else {
        return;
      }

      const yearNum = parseInt(year);
      if (validMonths.includes(month) && !isNaN(yearNum)) {
        const dateKey = `${month} ${yearNum}`;

        if (dateMap.has(dateKey)) {
          // إذا كان التاريخ موجوداً، نزيد العدد
          dateMap.get(dateKey).count++;
        } else {
          // إذا كان التاريخ غير موجود، نضيفه مع العدد 1
          dateMap.set(dateKey, {
            month,
            year: yearNum,
            count: 1,
          });
        }
      }
    } catch (error) {
      console.error(`Error processing date: ${post.date}`, error);
    }
  });

  return Array.from(dateMap.values());
}

// استخدام الدالة
export const uniqueDates = getUniqueDatesWithCount(posts);
