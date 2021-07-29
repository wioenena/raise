"use strict";

import { tag } from "./tag.ts";
import { append } from "./append.ts";

/**
 * The fontsize() method creates a <font> HTML element that causes a string to be displayed in the specified font size.
 * @param content - Main string.
 * @param size - Size
 * @returns {string}
 */
export const fontSize = (content: string, size: number) => append(tag("font", content), ` size="${size}"`, 5);
