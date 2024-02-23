import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, Stack, ThemeProvider, Typography } from "@mui/material";

import HeaderSection from "@SEO/Head";
import Theme, { themeColors } from "@Theme/Theme";
import { NextPageWithLayout } from "pages/_app";
import { DateMonthYearForBlogPost, SEO_OBJ, blogPostsObj } from "Essentials";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import { Paragraph } from "@Components/Elements/Paragraph/Paragraph";
import DownloadPlugin from "@Components/YTDownloader/DownloadPlugin";
import Footer from "@Components/UI/Footer";
import Navigation from "@Components/UI/Navigation";
import Sharing from "@Components/SocialShare/Sharing";
import SingleVideoCard from "@Components/YTDownloader/SingleVideoCard";
import { useSelector } from "react-redux";
import { RootState } from "store/centralStore";
import DialogContainer from "@Components/UI/Dialogs/DialogContainer";
import ModalContainer from "@Components/UI/Modals/ModalContainer";
import Image from "next/image";
import WelcomeSVG from "@Public/welcome.svg";
import SingleVideoCardMP3 from "@Components/YTtoMP3/SingleVideoCardMP3";
import YoutubeToMP3Content from "@Components/Content/YoutubeToMp3Content";

const YoutubeVideoToMP3: NextPageWithLayout = () => {
  const getDataLoadingStatus = useSelector((state: RootState) => state.YTAPISlice.status);
  return (
    <>
      <ThemeProvider theme={Theme}>
        <HeaderSection
          title={SEO_OBJ.HOME_PAGE.title}
          description={SEO_OBJ.HOME_PAGE.description!}
          image={SEO_OBJ.HOME_PAGE.ogImageURL}
          url={SEO_OBJ.HOME_PAGE.absoluteURL}
          publishedTime={SEO_OBJ.HOME_PAGE.publishedTime}
          lastUpdatedTime={SEO_OBJ.HOME_PAGE.lastUpdateTime}
        />
        <Navigation />
        <Grid container direction="row" spacing={0} mt={8} border={0}>
          <Box
            sx={{
              border: "1",
              backgroundColor: "primary.main",
              p: 3,
              textAlign: "center",
              position: "relative",
              width: "100%",
            }}
          >
            <Typography
              variant="blogPostBrandTitle"
              sx={{ mb: { xs: 2, sm: 2, md: 3, lg: 3, color: "white" } }}
              id="title"
            >
              {SEO_OBJ.HOME_PAGE.title}
            </Typography>
            <Box
              margin="auto"
              border={0}
              borderColor="white"
              sx={{ width: { xs: 5 / 5, sm: 5 / 5, md: 3 / 5, lg: 3 / 5 } }}
            >
              <Typography variant="blogPostBrandSubheading" mb={6} mt={5}>
                {SEO_OBJ.HOME_PAGE.description}
              </Typography>
              <LastUpdateTags
                lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.HOME_PAGE.lastUpdateTime)}
                tags={SEO_OBJ.HOME_PAGE.tags!}
              />
              <DownloadPlugin />
            </Box>
          </Box>
          {/* <Box border={1} mt={-7}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="414.248"
              viewBox="0 0 2352.142 414.248"
              style={{ padding: 0 }}
            >
              <path
                id="Path_2"
                data-name="Path 2"
                d="M-410,725.4S-190.807,556.073,34.344,533,347.359,628.548,490.6,633.1,632.786,522.6,632.786,522.6,755.87,677.3,819.534,542.1s-53.053,51.675,118.839,78,346.438-24.05,568.732,27.3,211.683,191.1,320.442,178.1,114.6-230.1,114.6-230.1V412.1H-410Z"
                transform="translate(410 -412.099)"
                fill="#36106a"
              />
            </svg>
          </Box> */}
          <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
            {/* Extra Space On The Left Side */}
          </Grid>

          <Grid item xs={12} sm={11} md={10} lg={9} minHeight="100vh">
            {getDataLoadingStatus === null && (
              <Grid
                container
                direction="column"
                border={0}
                mt={2}
                component={Paper}
                elevation={0}
                // sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
                minHeight={400}
                p={5}
                textAlign="center"
              >
                <Box margin="auto" mb={2}>
                  <Image src={WelcomeSVG} width={300} height={300} alt="Hi" />
                </Box>
                <Paragraph>Please Enter Any URL Above to start using this feature</Paragraph>
              </Grid>
            )}

            {/* <SingleVideoCard /> */}
            <SingleVideoCardMP3 />
            {/* Center Content */}
            <YoutubeToMP3Content />

            {/* Sharing Icon Container In Below */}
            <Grid
              container
              direction="row"
              spacing={3}
              mb={3}
              mt={-6}
              sx={{
                pl: { xs: 2, sm: 2, md: 0, lg: 0 },
                pr: { xs: 2, sm: 2, md: 0, lg: 0 },
                display: { xs: "block", md: "none", lg: "none" },
              }}
            >
              <Grid item md={8} lg={8}>
                {/* Please remove the title and make it dynamic....! */}
                {/* <Sharing /> */}
              </Grid>
            </Grid>
            {/* End of Sharing Container */}
          </Grid>

          <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
            {/* Extra Space On The Right Side */}
          </Grid>
        </Grid>
        <Footer />
        <ModalContainer />
        <DialogContainer />
      </ThemeProvider>
    </>
  );
};

export default YoutubeVideoToMP3;
