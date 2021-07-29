"use strict";

import { tag } from "./tag.ts";

export const fixed = (content: string) => tag("tt", content);
