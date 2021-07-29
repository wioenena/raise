"use strict";

import { tag } from "./tag.ts";

/**
 * The italics() method creates an <i> HTML element that causes a string to be italic.
 * @param content - Main string.
 * @returns {string}
 */
export const italics = (content: string) => tag("i", content);
