"use strict";

import { tag } from "./tag.ts";

/**
 * The small() method creates a <small> HTML element that causes a string to be displayed in a small font.
 * @param content - Main string.
 * @returns {string}
 */
export const small = (content: string) => tag("small", content);
