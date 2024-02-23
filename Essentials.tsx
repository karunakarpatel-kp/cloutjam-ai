import welcomePatelsImage from "@Public/welcome-page.png";
import youtubevideotomp3 from "@Public/youtube-to-mp3.png";
interface blogPostURLSProps {
  // YOUTUBE_VIDEO_TO_MP3_PAGE_ABSOLUTE: string;
  // YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE: string;

  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  BLOG_PAGE_RELATIVE: string;
  BLOG_PAGE_ABSOLUTE: string;

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

  BLOG_PAGE_ABSOLUTE: BASE_URL.BLOG_PAGE_BASE_URL,
  BLOG_PAGE_RELATIVE: "/Blog",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",

  // YOUTUBE_VIDEO_TO_MP3_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/youtube-to-mp3`,
  // YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE: "/youtube-to-mp3",
};

export const SEO_OBJ: SEO_OBJ_Props = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Karunakar Patel: Navigating the landscape of programming knowledge",
    description:
      "Explore programming with Karunakar Patel. Find simplified explanations, hands-on tutorials, practical tips, and personal experiences about programming",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
    tags: [
      { tag: "youtube-mp3", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "video-to-mp3", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
  },
  // BlogPage  /Blog/
  BLOG_PAGE: {
    absoluteURL: blogPostURLS.BLOG_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.BLOG_PAGE_RELATIVE,
    title: "Karunakar Patel Blog: A hub for programming enthusiasts.",
    description:
      "Welcome to Karunakar Patels Blog! This is the perfect place for people who love programming. You'll find easy-to-understand articles and tutorials for beginners and experienced coders alike. Join our community and let's learn and grow together in the world of coding!",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:19:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | KarunakarPatel Blog",
    description:
      "Welcome to KarunakarPatel privacy policy. In here you can find all the details about privacy policy of Karunakar Patel",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | KarunakarPatel",
    description:
      "Welcome to KarunakarPatel contact page. In here you can find all the details of about KarunakarPatel contact information and a way to contact administrator of the KarunakarPatel site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
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
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  // Youtube Video Convert MP3
  // YOUTUBE_VIDEO_TO_MP3_PAGE: {
  //   absoluteURL: blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_ABSOLUTE,
  //   relativeURL: blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE,
  //   title: "Youtube Videos to MP3: Convert and Download For Free",
  //   description:
  //     "Download YouTube videos as MP3 for free with our most powerful YouTube videos to MP3 converter. No app or software is needed.",
  //   publishedTime: "2024-01-05T23:01:17+05:30",
  //   lastUpdateTime: `${dynamicLastUpdatedTime()}`,
  //   tags: [
  //     { tag: "youtube-mp3", href: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE}` },
  //     { tag: "video-to-mp3", href: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE}` },
  //     { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
  //     { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
  //   ],
  //   featuredImage: youtubevideotomp3,
  //   featuredImageAltText: "youtube-video-to-mp3",
  //   ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/youtube-to-mp3.png`,
  // },
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
