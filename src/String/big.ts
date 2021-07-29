"use strict";

import { tag } from "./tag.ts";

/**
 * The big() method creates a <big> HTML element that causes a string to be displayed in a big font.
 * @param content - Main string.
 * @returns {string}
 */
export const big = (content: string) => tag("big", content);
