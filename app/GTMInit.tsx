"use client";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

function GTMInit() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-PMNVKZTC",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);
  return null;
}

export default GTMInit;
