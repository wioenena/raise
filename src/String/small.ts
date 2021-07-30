"use strict";

import { tag } from "./tag.ts";

/**
 * The anchor() method creates a string beginning with an <a name="..."> start tag, then some text, and then an </a> end tag.
 * @param content - Main string.
 * @param name - A string representing a name value to put into the generated <a name="..."> start tag.
 * @returns {string}
 */
export const small = (content: string) => tag("small", content);
