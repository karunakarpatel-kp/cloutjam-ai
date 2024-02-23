import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/centralStore";
import { setOpenDialogBox } from "store/utilitySlice";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";
import { Paragraph } from "@Components/Elements/Paragraph/Paragraph";
import HeadingFour from "@Components/Elements/Headings/HeadingFour";

const DialogContainer = () => {
  const getOpenDialogBoxStatus = useSelector((state: RootState) => state.utilitySlice.getOpenDialogBoxStatus);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setOpenDialogBox(false));
  };
  return (
    <>
      <Dialog
        open={getOpenDialogBoxStatus}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Terms and Condition"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <HeadingThree title="YouTube's Policy on Downloading Videos" id="headingThree" />
            <Paragraph>
              YouTube, as a platform, is governed by a set of terms of service that users implicitly agree to upon
              creating an account. One prominent aspect of these terms is the prohibition of downloading videos without
              explicit permission. Violating this policy could result in serious consequences, making it imperative for
              users to understand the rules they operate under.
            </Paragraph>
            <HeadingThree title="Legal Implications" id="three" />
            <Paragraph>
              Downloading YouTube videos without proper authorization raises significant legal concerns, particularly in
              the realm of copyright. Videos uploaded to YouTube are protected by copyright laws, and unauthorized
              downloads infringe upon these rights. Users engaging in such activities may find themselves facing legal
              actions or penalties as stipulated by YouTubes terms and applicable laws.
            </Paragraph>
            <HeadingThree title="Alternative Options for Downloading Videos" id="three" />
            <Paragraph>
              While the desire to download videos is understandable, users must explore legal avenues. YouTube Premium,
              for instance, offers a legitimate way to download videos for offline viewing. On the contrary, third-party
              applications claiming to provide this service often come with risks, including potential malware and
              breaches of security.
            </Paragraph>
            <HeadingThree title="Understanding Fair Use" id="three" />
            <Paragraph>
              Fair use is a legal doctrine that allows for the use of copyrighted material under certain circumstances.
              However, applying fair use to downloading YouTube videos is a complex matter. Users must carefully assess
              whether their intended use falls within the bounds of fair use and if the content is being utilized for
              purposes such as criticism, commentary, news reporting, teaching, scholarship, or research.
            </Paragraph>
            <HeadingThree title="Educational and Non-commercial Use" id="three" />
            <Paragraph>
              Certain exceptions exist for downloading YouTube videos, primarily in educational or non-commercial
              contexts. However, it is crucial to differentiate between educational use and blatant copyright
              infringement. Users must obtain permission or adhere to explicit licensing terms when downloading videos
              for any purpose.
            </Paragraph>
            <HeadingThree title="Risk of Malware and Viruses" id="three" />
            <Paragraph>
              The internet is rife with malicious software, and unauthorized download tools present a significant risk
              to users devices. To safeguard against malware and viruses, it is advisable to refrain from using
              third-party applications and opt for legitimate services like YouTube Premium.
            </Paragraph>
            <HeadingFour title="Recent changes in Youtube's Policies" id="three" />
            <Paragraph>
              YouTube frequently updates its terms and conditions to adapt to the evolving digital landscape. Users
              should stay informed about these changes and understand how alterations in policies may impact their
              ability to download videos.
            </Paragraph>
            <HeadingFour title="Steps to Legally Download Videos" id="three" />
            <Paragraph>
              For those keen on downloading videos legally, YouTube Premium offers a straightforward solution.
              Subscribers can enjoy offline viewing without violating any terms. Additionally, users can seek explicit
              permission from content creators for specific use cases, ensuring compliance with YouTubes policies.
            </Paragraph>
            <HeadingFour title="Penalties for Violating Youtube's Policies" id="three" />
            <Paragraph>
              YouTube takes unauthorized downloads seriously and enforces penalties for those found in violation.
              Consequences may include content removal, channel suspension, or legal actions. Users should be aware of
              the potential repercussions before engaging in activities that breach YouTubes terms.
            </Paragraph>
            <HeadingFour title="User Agreement with Content Creators" id="three" />
            <Paragraph>
              Content creators often specify their terms for video usage. Respecting these agreements is essential for
              maintaining a positive relationship with creators and avoiding legal issues. Users should check for any
              additional permissions or restrictions set by the content owner.
            </Paragraph>
            <HeadingFour title="Educational Campaigns by Youtube" id="three" />
            <Paragraph>
              YouTube actively promotes educational campaigns to raise awareness about copyright issues and downloading
              policies. Users are encouraged to explore available resources and stay informed to ensure responsible and
              legal use of the platform.
            </Paragraph>
            <HeadingFour title="Alternatives to Downloading: Offline Viewing" id="three" />
            <Paragraph>
              To accommodate users desire for offline content, YouTube provides a legal alternative—offline viewing.
              This feature allows users to download videos within the YouTube app for later consumption, eliminating the
              need for third-party applications.
            </Paragraph>
            <HeadingFour title="Community Guidelines and Reporting Violations" id="three" />
            <Paragraph>
              Users play a role in maintaining a healthy online community. Familiarizing oneself with YouTubes community
              guidelines and reporting any violations, including unauthorized downloads, contributes to a safer and more
              respectful digital environment.
            </Paragraph>
            <HeadingFour title="Conclusion" id="three" />
            <Paragraph>
              In a world where digital content is abundant, understanding the terms and conditions of downloading
              YouTube videos is crucial. Users should prioritize legal and ethical practices, respecting the rights of
              content creators and the policies set by YouTube. By staying informed and utilizing legitimate options,
              users can enjoy their favorite videos without running afoul of the platforms rules.
            </Paragraph>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} variant="contained" sx={{ marginRight: 3, marginBottom: 1 }}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogContainer;
