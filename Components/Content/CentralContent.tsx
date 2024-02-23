import React from "react";

import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";
import { Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightText";
import Sharing from "@Components/SocialShare/Sharing";

const CentralContent = () => {
  return (
    <>
      <Grid container mt={1}>
        <Grid item xs={0} sm={0.5} md={1} lg={1.5} border={0}>
          {/* Extra Space On The Left Side */}
        </Grid>

        <Grid item xs={12} sm={11} md={10} lg={9} minHeight="100vh" border={0} sx={{ pl: { xs: 1 }, pr: { xs: 1 } }}>
          <HeadingTwo id="heading-two" title="Introduction:" key="heading-two" />
          <P>
            Our Text to Image AI Converter utilizes advanced artificial intelligence algorithms to convert plain{" "}
            <B>text</B> into visually appealing <B>images</B>. Whether you are creating social media graphics,
            presentations, or artistic designs, our platform simplifies the conversion process, offering a seamless user
            experience.
          </P>
          <HeadingTwo id="heading-two" title="Instructions:" key="heading-two" />
          <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Input Text</B>: Begin by entering your desired text into the designated input box. You can input
                  quotes, phrases, poems, or any text you want to visualize.
                </P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Select Style (Optional)*</B>: Explore different style options to customize the appearance of your
                  image. Our platform offers various styles, fonts, colors, and layouts to suit your preferences.
                </P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Adjust Settings (Optional)</B>: Fine-tune settings such as image size, background color, and text
                  alignment to achieve the desired look.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Preview Image</B>: Before finalizing, preview the generated image to ensure it meets your
                  expectations. Make any necessary adjustments to optimize the visual output.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Download Image</B>: Once satisfied with the preview, proceed to download the image in your
                  preferred format (e.g., JPG, PNG). Our platform ensures high-quality downloads for seamless
                  integration into your projects.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Share and Save</B>: Share your created images on social media platforms or save them for future
                  use. Our platform supports easy sharing and storage options for convenient access.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Explore Additional Features</B>: Discover additional features and tools available on our platform,
                  such as image editing capabilities, advanced customization options, and collaborative features for
                  team projects.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  <B>Feedback and Support</B>: We value your feedback! Feel free to share your thoughts, and
                  suggestions, or report any issues you encounter while using our Text to Image AI Converter. Our
                  support team provides assistance and improves the user experience.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  Experience the power of text visualization with our <B>Text to Image AI Converter</B>. Transform words
                  into captivating visuals and unleash your creativity today!
                </P>
              </ListItemText>
            </ListItem>
          </List>
          <HeadingTwo id="how" title="How to Use Text to Image AI Converter?" />
          <List sx={{ listStyle: "square", listStylePosition: "outside" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>Input your desired text into the provided text box.</P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>Explore various style options to customize the appearance of your image.</P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>Adjust settings such as image size, background color, and text alignment.</P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>Preview the generated image to ensure it meets your expectations.</P>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>Download the image in your preferred format (e.g., JPG, PNG).</P>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>Share your created images on social media platforms or save them for future use.</P>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>
                  Explore additional features such as image editing capabilities and advanced customization options.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <ListItemText>
                <P>Provide feedback or seek support from our dedicated team to enhance your experience.</P>
              </ListItemText>
            </ListItem>
          </List>
          <Box mt={1} mb={3}>
            <Sharing />
          </Box>
        </Grid>

        <Grid item xs={0} sm={0.5} md={1} lg={1.5} border={0}>
          {/* Extra Space On The Right Side */}
        </Grid>
      </Grid>
    </>
  );
};

export default CentralContent;
