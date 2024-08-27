"use client";
import React, { use, useEffect } from "react";
import TagManager from "react-gtm-module";

function GTMInitializer() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-T74WS5N3",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);
  return null;
}

export default GTMInitializer;
