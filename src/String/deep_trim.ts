import { trim } from "./trim.ts";

"use strict";
export const deepTrim = (content: string) => trim(content).replace(/\s{1,}/g, " ");
