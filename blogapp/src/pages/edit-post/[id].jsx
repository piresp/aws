import { useEffect, useState, useRef } from "react";
import { API, Storage } from "aws-amplify";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import dynamic from "next/dynamic";
const SimpleMde = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});