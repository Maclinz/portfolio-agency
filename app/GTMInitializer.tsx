"use client";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

function GTMInitializer() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-NJVF7VLZ",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return null;
}

export default GTMInitializer;
