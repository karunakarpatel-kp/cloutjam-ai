import youtubevideotomp3 from "@Public/youtube-to-mp3.png";

interface blogPostURLSProps {
  // YOUTUBE_VIDEO_TO_MP3_PAGE_ABSOLUTE: string;
  // YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE: string;

  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  // BLOG_PAGE_RELATIVE: string;
  // BLOG_PAGE_ABSOLUTE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;
}

interface blogPostsObjProps {
  id: number;
  url: string;
  title: string;
  subtitle?: string;
  description?: string;
  lastUpdateTime: string;
  publishedTime: string;
  tags: { tag: string; href: string }[];
  featuredImage: any;
  featuredImageAltText: string;
  ogImageURL: string;
}

interface SEO_OBJ_Props {
  [key: string]: {
    absoluteURL: string;
    relativeURL: string;
    title: string;
    subtitle?: string;
    description?: string;
    lastUpdateTime: string;
    publishedTime: string;
    tags?: { tag: string; href: string }[];
    featuredImage: any;
    featuredImageAltText: string;
    ogImageURL: string;
  };
}

export const DateMonthYearForBlogPost = (lastUpdateTime: string) => {
  const months = [
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
  const date = new Date(lastUpdateTime);
  const day = date.getDate();
  const month = months[date.getMonth()]; // Months are 0-based in JavaScript Dates
  const year = date.getFullYear();
  // console.log(`${day}/${month}/${year}`, "DATE");
  return `${day}, ${month}, ${year}`;
};

export const dynamicLastUpdatedTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
  return formattedDate;
};

export const BASE_URL: { HOME_PAGE_BASE_URL: string; BLOG_PAGE_BASE_URL: string } = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
  BLOG_PAGE_BASE_URL: process.env.BLOG_PAGE_BASE_URL!,
};

export const blogPostURLS: blogPostURLSProps = {
  HOME_PAGE_ABSOLUTE: BASE_URL.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",
};

export const SEO_OBJ: SEO_OBJ_Props = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Youtube to MP3 Converter",
    description:
      "Download your YouTube videos as MP3 (audio) files for free with the fastest and most powerful YouTube Converter. No app or software needed to use this youtube to mp3 converter.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-02-24T06:23:14+05:30",
    featuredImage: youtubevideotomp3,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
    tags: [
      { tag: "youtube-mp3", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "video-to-mp3-converter", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Home", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | Youtube to MP3 | CloutjamAI ",
    description:
      "Welcome to youtube to mp3 privacy policy. In here you can find all the details about privacy policy of Karunakar Patel",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-02-24T06:23:14+05:30",
    featuredImage: youtubevideotomp3,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | Youtube To MP3 | CloutjamAI",
    description:
      "Welcome to youtube to mp3 converter contact page. In here you can find all the details of about  who built youtube to mp3 converter contact information and a way to contact administrator of the CloutjamAI site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-02-24T06:23:14+05:30",
    featuredImage: youtubevideotomp3,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | KarunakarPatel",
    description:
      "Welcome to KarunakarPatel disclaimer page. In here you can find all the details of about KarunakarPatel's Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-02-24T06:23:14+05:30",
    featuredImage: youtubevideotomp3,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },
};

export const blogPostsObj: blogPostsObjProps[] = [
  // {
  //   id: 0,
  //   url: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE}`,
  //   title: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.title}`,
  //   description: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.description}`,
  //   lastUpdateTime: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.lastUpdateTime}`,
  //   publishedTime: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.publishedTime}`,
  //   tags: SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.tags!,
  //   featuredImage: SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.featuredImage,
  //   featuredImageAltText: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.featuredImageAltText}`,
  //   ogImageURL: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.ogImageURL}`,
  // },
];
